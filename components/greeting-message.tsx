"use client"

import { useEffect, useState } from "react"
import { Chip } from "@/components/ui/chip"

export function GreetingMessage() {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours()

      if (hour < 12) return "Good Morning"
      if (hour < 18) return "Good Afternoon"
      return "Good Evening"
    }

    setGreeting(getGreeting())

    // Update greeting every minute
    const interval = setInterval(() => {
      setGreeting(getGreeting())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return <Chip variant="secondary">{greeting}, Visitor!</Chip>
}

