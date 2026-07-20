import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID, // 🔒 Secure (Removed NEXT_PUBLIC_)
  dataset: process.env.SANITY_DATASET,     // 🔒 Secure (Removed NEXT_PUBLIC_)
  apiVersion: '2026-06-25',
  useCdn: true, // Set to true for production speed!
})

// 2. Set up the image URL helper
const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

// 3. Define the data structure types
interface NewsPost {
  _id: string
  title: string
  publishedAt: string
  body: string
  mainImage?: any
  gallery?: any[]
}

// 4. Fetch data using your GROQ query
async function getNewsData(): Promise<NewsPost[]> {
  const query = `*[_type == "news"] | order(publishedAt desc)`
  return await client.fetch(query)
}

export default async function NewsPage() {
  const posts = await getNewsData()

  return (
    /* 1. Background image configuration targeting your local public folder asset */
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/home-bg.png')` }} // Update filename if different
    >
      {/* 2. Glassmorphism backdrop layer */}
      <div className="min-h-screen bg-black/75 w-full">
        
        {/* 3. Main layout wrapper */}
        <main className="max-w-4xl mx-auto p-6 md:p-12 text-white">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-white">News & Announcements</h1>
          <p className="text-gray-300 mb-10 text-lg">Stay updated the latest Events and News Updates of U.S. Art Gallery.</p>
          
          <div className="space-y-8">
            {posts.length === 0 ? (
              <p className="text-gray-400 text-center py-10">No announcements posted yet.</p>
            ) : (
              posts.map((post) => (
                <details 
                  key={post._id} 
                  id={post._id} // Added id attribute so the share URL targets this exact item on the page
                  className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 open:bg-white/[0.08]"
                >
                  {/* 1. This header stays visible. Clicking it expands the rest */}
                  <summary className="list-none outline-none cursor-pointer p-6 md:p-8 select-none flex items-center justify-between gap-4">
                    <div>
                      {/* Date */}
                      <time className="text-sm font-semibold tracking-wide text-blue-400 uppercase block mb-1">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                      
                      {/* Headline Title */}
                      <h2 className="text-2xl font-bold text-white leading-tight">{post.title}</h2>
                    </div>

                    {/* Container wrapping the new Share Button next to your existing triangle */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      
                      {/* Integrated Share Button */}
                      <InlineShareButton title={post.title} id={post._id} />

                      {/* Dropdown Indicator Arrow */}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300 text-xl font-light px-2">
                        ▼
                      </span>
                    </div>
                  </summary>

                  {/* 2. Hidden Content (Body, Banner, Gallery) - Only shows when open */}
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/5 data-content">
                    
                    {/* FIXED: Main Banner Image (No longer cuts off or limits height) */}
                    {post.mainImage && (
                      <div className="w-full mb-6 rounded-xl overflow-hidden bg-white/5 shadow-md">
                        <img 
                          src={urlFor(post.mainImage).url()} 
                          alt={post.title} 
                          className="w-full h-auto block" 
                        />
                      </div>
                    )}
                    
                    {/* Article Body Content */}
                    <p className="text-gray-200 leading-relaxed text-base whitespace-pre-wrap mb-6">
                      {post.body}
                    </p>
                    
                    {/* FIXED: Multi-Image Gallery Grid from Sanity */}
                    {post.gallery && post.gallery.length > 0 && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 items-start">
                        {post.gallery.map((img: any, idx: number) => (
                          <div key={idx} className="w-full rounded-xl overflow-hidden bg-white/5 border border-white/5 shadow-md">
                            <img 
                              src={urlFor(img).url()} 
                              alt={img.alt || `Gallery image ${idx + 1}`} 
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

/* ==========================================================================
   5. Interactive Share Component (Client-Side Only)
   ========================================================================== */
'use client' // Isolates browser context functions safe from server execution rules
import { useState } from 'react'

function InlineShareButton({ title, id }: { title: string; id: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation() // Prevents the <details> accordion panel from expanding/collapsing on click

    const shareUrl = `${window.location.origin}${window.location.pathname}#${id}`

    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl })
      } catch (err) {
        console.log('Sharing dismissed by user')
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Clipboard action failed', err)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all select-none flex items-center gap-1.5"
    >
      <span>{copied ? '✓' : '🔗'}</span>
      <span>{copied ? 'Copied!' : 'Share'}</span>
    </button>
  )
}
