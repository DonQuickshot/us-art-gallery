'use client'

import { useEffect } from 'react'

export default function HashRouter() {
  useEffect(() => {
    const processAnchorTarget = () => {
      // Extract target hash safely
      const hash = window.location.hash.substring(1)
      if (!hash) return false

      const element = document.getElementById(hash) as HTMLDetailsElement | null
      if (element && element.tagName === 'DETAILS') {
        // 1. Force the HTML details element to expand
        element.setAttribute('open', 'true')
        element.open = true
        
        // 2. Override the Next.js framework scroll-hijack by waiting 300ms
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 300)
        
        return true
      }
      return false
    }

    // Run immediately on page mount
    processAnchorTarget()

    // Create an observer to catch the element as soon as Sanity hydrates the DOM
    const targetObserver = new MutationObserver(() => {
      if (processAnchorTarget()) {
        targetObserver.disconnect()
      }
    })

    targetObserver.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Listen for hash changes if the user remains on the same page
    window.addEventListener('hashchange', processAnchorTarget)
    
    return () => {
      targetObserver.disconnect()
      window.removeEventListener('hashchange', processAnchorTarget)
    }
  }, [])

  return null
}
