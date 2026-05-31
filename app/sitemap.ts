import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://usartgallery.in',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // Add your other pages here if you have them, for example:
    // {
    //   url: 'https://usartgallery.in',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ]
}
