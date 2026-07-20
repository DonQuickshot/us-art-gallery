'use client'

import { useEffect } from 'react'

export default function HashRouter() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (!hash) return

      const element = document.getElementById(hash) as HTMLDetailsElement | null
      if (element && element.tagName === 'DETAILS') {
        element.open = true
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return null
}
