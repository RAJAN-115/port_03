"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Lightbulb, Github } from "lucide-react"

// Sample project data
const projects = {
  selected: [
    {
      id: 1,
      title: "Color Picker Extension",
      description:
        "Built a Chrome extension with HTML, CSS, and JavaScript, enhancing color selection efficiency for over 1,000+ users. Designed UI, added color history, and published to Chrome Web Store.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
  ],
  mini: [
    {
      id: 2,
      title: "To-Do List App",
      description: "A React app with task management and local storage.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["React", "Material UI"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Fetches real-time weather data using OpenWeather API.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["JavaScript", "API"],
      github: "#",
      demo: "#",
    },
  ],
  academic: [
    {
      id: 4,
      title: "Library Management System",
      description: "A system to manage library operations.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["C++", "MySQL"],
      github: "#",
      demo: null,
    },
  ],
  industry: [
    {
      id: 5,
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with authentication and cart.",
      image: "/placeholder.svg?height=200&width=400",
      techStack: ["MERN Stack", "Material UI"],
      github: "#",
      demo: "#",
    },
  ],
}

export default function ProjectsPage() {
  const [aiInsight, setAiInsight] = useState<string | null>(null)

  const getAiInsight = () => {
    // Simulate AI-generated insights
    const insights = [
      "Consider adding a palette export feature to your Color Picker Extension to enhance functionality.",
      "Your To-Do List App could benefit from cloud synchronization for cross-device access.",
      "Adding weather forecasting to your Weather App would make it more comprehensive.",
      "The Library Management System could be enhanced with a barcode scanning feature.",
      "Consider implementing a recommendation system in your E-Commerce Website.",
    ]

    setAiInsight(insights[Math.floor(Math.random() * insights.length)])
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Projects</span>
        </Typography>

        {aiInsight && (
          <Card className="mb-6 border-purple-600/50">
            <CardContent className="p-4 flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
              <Typography variant="p">{aiInsight}</Typography>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="selected" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="selected">Selected</TabsTrigger>
            <TabsTrigger value="mini">Mini Projects</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="industry">Industry-Level</TabsTrigger>
          </TabsList>

          <TabsContent value="selected" className="space-y-6">
            {projects.selected.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="mini" className="grid gap-6 md:grid-cols-2">
            {projects.mini.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            {projects.academic.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="industry" className="space-y-6">
            {projects.industry.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="gap-2 bg-purple-600 hover:bg-purple-700" onClick={getAiInsight}>
            <Lightbulb className="h-4 w-4" />
            Get AI Project Insights
          </Button>

          <Button variant="outline" className="gap-2">
            <Github className="h-4 w-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </main>
  )
}

