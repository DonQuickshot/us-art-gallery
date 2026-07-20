import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import ShareButton from './ShareButton'
import { Metadata } from 'next'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID, 
  dataset: process.env.SANITY_DATASET,     
  apiVersion: '2026-06-25',
  useCdn: true, 
})

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

interface NewsPost {
  _id: string
  title: string
  publishedAt: string
  body: string
  mainImage?: any
  gallery?: any[]
}

// ==========================================================================
// 1. STATIC & DYNAMIC METADATA (Crucial for Google Search Rankings)
// ==========================================================================
export const metadata: Metadata = {
  title: 'News & Announcements | U.S. Art Gallery',
  description: 'Stay updated with the latest fine art events, national exhibitions, awards, and community news updates from the U.S. Art Gallery.',
  alternates: {
    canonical: 'https://usartgallery.com', // 👈 Replace with your real domain name
  },
  openGraph: {
    title: 'News & Announcements | U.S. Art Gallery',
    description: 'Stay updated with the latest fine art events, national exhibitions, and awards.',
    url: 'https://usartgallery.com', // 👈 Replace with your real domain name
    type: 'website',
    images: [
      {
        url: '/home-bg.png', // Fallback social sharing thumbnail image
        width: 1200,
        height: 630,
        alt: 'U.S. Art Gallery Announcements',
      },
    ],
  },
}

async function getNewsData(): Promise<NewsPost[]> {
  const query = `*[_type == "news"] | order(publishedAt desc)`
  return await client.fetch(query)
}

export default async function NewsPage() {
  const posts = await getNewsData()

  // ==========================================================================
  // 2. GOOGLE STRUCTURED SCHEMA DATA (JSON-LD)
  // Tells Google crawlers exactly what text represents news articles
  // ==========================================================================
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "NewsArticle",
        "headline": post.title,
        "datePublished": post.publishedAt,
        "description": post.body.substring(0, 160) + "...",
        "image": post.mainImage ? urlFor(post.mainImage).url() : undefined,
        "author": {
          "@type": "Organization",
          "name": "U.S. Art Gallery"
        }
      }
    }))
  }

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/home-bg.png')` }} 
    >
      {/* Injecting Structured Schema into the document head for SEO bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      <div className="min-h-screen bg-black/75 w-full">
        <main className="max-w-4xl mx-auto p-6 md:p-12 text-white">
          
          {/* SEO Rule: Exactly one H1 tag per page containing your primary keywords */}
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white">News & Announcements</h1>
          <p className="text-gray-300 mb-10 text-lg">Stay updated the latest Events and News Updates of U.S. Art Gallery.</p>
          
          <div className="space-y-8">
            {posts.length === 0 ? (
              <p className="text-gray-400 text-center py-10">No announcements posted yet.</p>
            ) : (
              posts.map((post) => (
                <details 
                  key={post._id} 
                  id={post._id} 
                  className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 open:bg-white/[0.08]"
                >
                  <summary className="list-none outline-none cursor-pointer p-6 md:p-8 select-none flex items-center justify-between gap-4">
                    <div>
                      <time 
                        dateTime={post.publishedAt} // SEO Bot readable format attribute
                        className="text-sm font-semibold tracking-wide text-blue-400 uppercase block mb-1"
                      >
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      
                      <h2 className="text-2xl font-bold text-white leading-tight">{post.title}</h2>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <ShareButton title={post.title} id={post._id} />
                      <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300 text-xl font-light px-2">
                        ▼
                      </span>
                    </div>
                  </summary>

                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5 data-content">
                    
                    {post.mainImage && (
                      <div className="w-full mb-6 rounded-xl overflow-hidden bg-white/5 shadow-md">
                        <img 
                          src={urlFor(post.mainImage).url()} 
                          alt={post.title} // Crucial alt attribute for Google Images search matching
                          className="w-full h-auto block" 
                        />
                      </div>
                    )}
                    
                    <p className="text-gray-200 leading-relaxed text-base whitespace-pre-wrap mb-6">
                      {post.body}
                    </p>
                    
                    {post.gallery && post.gallery.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 items-start">
                        {post.gallery.map((img: any, idx: number) => (
                          <div key={idx} className="w-full rounded-xl overflow-hidden bg-white/5 border border-white/5 shadow-md">
                            <img 
                              src={urlFor(img).url()} 
                              alt={img.alt || `${post.title} gallery exhibition image ${idx + 1}`} // Optimized Alt backup strings
                              className="w-full h-auto block hover:scale-102 transition-transform duration-200" 
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    
                  </div>
                </details>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
