import { useEffect, useRef, useState, useCallback } from 'react'

export function useDropdown() {
  const [openDd, setOpenDd] = useState(null) // 'pro' | 'explore' | null
  const rootRef = useRef(null)

  const toggleDd = useCallback((name) => {
    setOpenDd((prev) => (prev === name ? null : name))
  }, [])

  const closeDd = useCallback(() => {
    setOpenDd(null)
  }, [])

  useEffect(() => {
    function onDocMouseDown(ev) {
      if (!rootRef.current) return
      if (!rootRef.current.contains(ev.target)) closeDd()
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [closeDd])

  useEffect(() => {
    function onKeyDown(ev) {
      if (ev.key === 'Escape') closeDd()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeDd])

  return { openDd, toggleDd, closeDd, rootRef }
}
