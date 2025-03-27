import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"

interface TimelineItemProps {
  title: string
  period: string
  organization: string
  children: ReactNode
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {children}
    </div>
  )
}

export function TimelineItem({ title, period, organization, children }: TimelineItemProps) {
  return (
    <div className="relative flex items-start md:justify-center">
      <div className="absolute left-0 top-0 mt-1.5 h-10 w-10 rounded-full border border-border bg-card flex items-center justify-center md:left-1/2 md:-translate-x-1/2">
        <span className="h-3 w-3 rounded-full bg-primary"></span>
      </div>

      <Card className="ml-12 md:ml-0 md:max-w-md md:mr-auto md:pr-8 lg:pr-16 md:text-right">
        <CardContent className="p-6">
          <div className="mb-2">
            <Typography variant="h3">{title}</Typography>
            <div className="flex items-center justify-between flex-wrap gap-x-2">
              <Typography variant="smallText" className="text-muted-foreground">
                {organization}
              </Typography>
              <Typography variant="smallText" className="font-semibold text-primary">
                {period}
              </Typography>
            </div>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

