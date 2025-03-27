"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TechLogoProps {
  name: string
  image: string
  description: string
  url?: string
  className?: string
}

export function TechLogo({ name, image, description, url, className }: TechLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "flex flex-col items-center justify-center gap-2 transition-transform",
              isHovered && "scale-110",
              className,
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-muted p-2 shadow-sm transition-all duration-200 hover:shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </a>
            ) : (
              <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-muted p-2 shadow-sm transition-all duration-200 hover:shadow-md">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
            )}
            <span className="text-xs font-medium text-center">{name}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="max-w-xs text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

