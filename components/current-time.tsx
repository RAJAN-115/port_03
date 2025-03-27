"use client"

import { useEffect, useState } from "react"
import { Chip } from "@/components/ui/chip"
import { Clock } from "lucide-react"

export function CurrentTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes} IST`)
    }

    updateTime()

    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Chip variant="outline" className="flex items-center gap-1">
      <Clock className="h-3 w-3" />
      Current Time: {time}
    </Chip>
  )
}

