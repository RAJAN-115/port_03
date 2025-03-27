import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  github: string | null
  demo: string | null
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <Typography variant="h3" className="mb-2">
          {project.title}
        </Typography>
        <Typography variant="p" className="mb-4 text-muted-foreground">
          {project.description}
        </Typography>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Chip key={tech} variant="outline">
              {tech}
            </Chip>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-2">
        {project.github && (
          <Button variant="outline" className="gap-2" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {project.demo && (
          <Button className="gap-2 bg-purple-600 hover:bg-purple-700" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

