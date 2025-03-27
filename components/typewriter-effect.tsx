"use client"

import { useEffect, useState } from "react"
import { Typography } from "@/components/ui/typography"

interface TypewriterEffectProps {
  texts: string[]
  className?: string
}

export default function TypewriterEffect({ texts, className }: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const text = texts[currentTextIndex]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(text.substring(0, currentText.length + 1))

          if (currentText.length === text.length) {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setCurrentText(text.substring(0, currentText.length - 1))

          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts])

  return (
    <Typography variant="h3" className={className}>
      I am a <span className="text-primary">{currentText}</span>
      <span className="animate-blink">|</span>
    </Typography>
  )
}

