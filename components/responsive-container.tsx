import type React from "react"
import { cn } from "@/lib/utils"

interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  ...props
}: ResponsiveContainerProps) {
  return (
    <Component className={cn("w-full px-4 sm:px-6 md:px-8 mx-auto max-w-[1400px]", className)} {...props}>
      {children}
    </Component>
  )
}

