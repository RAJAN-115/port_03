import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { Lightbulb } from "lucide-react"
import { Timeline, TimelineItem } from "@/components/timeline"

export default function ExperiencePage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Experience</span>
        </Typography>

        <Timeline>
          <TimelineItem title="Freelance Web Developer" period="2023-Present" organization="Self-employed">
            <Typography variant="p" className="mb-4">
              Developed responsive websites for local clients using MERN stack and Material UI.
            </Typography>
            <div className="flex flex-wrap gap-2">
              <Chip variant="outline">Client communication</Chip>
              <Chip variant="outline">Web development</Chip>
              <Chip variant="outline">UI/UX design</Chip>
            </div>
          </TimelineItem>

          <TimelineItem title="Open-Source Contributor" period="2022-2023" organization="GitHub">
            <Typography variant="p" className="mb-4">
              Contributed to GitHub projects with bug fixes and features.
            </Typography>
            <div className="flex flex-wrap gap-2">
              <Chip variant="outline">Git</Chip>
              <Chip variant="outline">JavaScript</Chip>
              <Chip variant="outline">Collaboration</Chip>
            </div>
          </TimelineItem>

          <TimelineItem title="Virtual Internship - Web Development" period="Summer 2023" organization="Mock Company">
            <Typography variant="p" className="mb-4">
              Built a task manager app with React and Firebase for a mock company.
            </Typography>
            <div className="flex flex-wrap gap-2">
              <Chip variant="outline">React</Chip>
              <Chip variant="outline">Firebase</Chip>
              <Chip variant="outline">Teamwork</Chip>
            </div>
          </TimelineItem>
        </Timeline>

        <div className="mt-8 flex justify-center">
          <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
            <Lightbulb className="h-4 w-4" />
            Get AI Career Path Suggestions
          </Button>
        </div>
      </div>
    </main>
  )
}

