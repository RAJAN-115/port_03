"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface TechIconProps {
  name: string
  icon: React.ReactNode
  description: string
  url?: string
  className?: string
}

export function TechIcon({ name, icon, description, url, className }: TechIconProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Simple content without conditional rendering
  const iconContent = <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted p-2">{icon}</div>

  return (
    <TooltipProvider>
      <Tooltip>
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
                {iconContent}
              </a>
            ) : (
              iconContent
            )}
            <span className="text-xs font-medium">{name}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs text-sm">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

