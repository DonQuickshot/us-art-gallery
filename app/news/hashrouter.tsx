'use client'

import { useEffect } from 'react'

export default function HashRouter() {
  useEffect(() => {
    const expandTargetArticle = () => {
      const hash = window.location.hash.substring(1)
      if (!hash) return false

      const element = document.getElementById(hash) as HTMLDetailsElement | null
      if (element && element.tagName === 'DETAILS') {
        // 1. Force open the targeted announcement accordion
        element.open = true
        
        // 2. Smoothly slide the view directly to the article header
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        
        return true // Success
      }
      return false // Not found yet
    }

    // 1. Try to expand immediately if the data rendered instantly
    if (expandTargetArticle()) return

    // 2. If the data is still fetching, watch the DOM and catch it the millisecond it renders
    const observer = new MutationObserver((_, obs) => {
      if (expandTargetArticle()) {
        obs.disconnect() // Stop watching once we successfully open the article
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // 3. Clean up the observer when the page closes to prevent performance leaks
    return () => observer.disconnect()
  }, [])

  return null
}
