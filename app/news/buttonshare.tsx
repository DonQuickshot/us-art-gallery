'use client' // This forces this single button to run safely on the browser

import { useState } from 'react'

interface ShareProps {
  title: string
  id: string
}

export default function ShareButton({ title, id }: ShareProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation() // Crucial: Stops the accordion <details> from collapsing/opening when clicking share

    // Create a shareable URL targeting the anchor link ID for that specific post
    const shareUrl = `${window.location.origin}${window.location.pathname}#${id}`

    if (navigator.share) {
      // Best path for phones / tablets / Safari
      try {
        await navigator.share({
          title: title,
          url: shareUrl,
        })
      } catch (err) {
        console.log('Native share canceled or failed', err)
      }
    } else {
      // Fallback path for desktop browsers: copy link to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset status text after 2 seconds
      } catch (err) {
        console.error('Failed to copy link', err)
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2 mr-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all select-none"
      title="Share this news announcement"
    >
      {copied ? '✓ Copied' : '🔗 Share'}
    </button>
  )
}
