"use client"

import { useState, useEffect } from "react"

export function useMobile(breakpoint = 768): boolean {
  // Default to false for SSR
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    // Set initial value
    const checkMobile = () => window.innerWidth < breakpoint
    setIsMobile(checkMobile())

    // Add event listener
    const handleResize = () => {
      setIsMobile(checkMobile())
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

