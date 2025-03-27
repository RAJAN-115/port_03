"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Avatar } from "@/components/ui/avatar"
import { Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import TypewriterEffect from "@/components/typewriter-effect"
import { GreetingMessage } from "@/components/greeting-message"
import { CurrentTime } from "@/components/current-time"
import { ChatbotButton } from "@/components/chatbot-button"
import { ResumeDownload } from "@/components/resume-download"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-b from-background to-background/80 p-4">
      <ResponsiveContainer className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="animate-fade-in">
          <Avatar className="h-28 w-28 sm:h-32 sm:w-32 border-2 border-primary transition-all hover:border-4 hover:shadow-lg hover:shadow-primary/20">
            <div className="flex h-full w-full items-center justify-center bg-muted text-4xl font-bold">RP</div>
          </Avatar>
        </div>

        <div className="space-y-2 animate-fade-in-up">
          <Typography variant="h1" className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, My name is{" "}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Rajan</span>
          </Typography>

          <TypewriterEffect
            texts={[
              "MERN Stack Developer",
              "C++ Programmer",
              "DSA Problem Solver",
              "AI Enthusiast",
              "Next.js Explorer",
              "Tech Explorer",
              "Creative Thinker",
              "Software Developer",
              "Front End Developer",
              "Full Stack Developer",
              "React Developer",
              "Former PHP Developer",
              "MUI Customizer",
            ]}
            className="text-lg sm:text-xl md:text-2xl"
          />
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-2 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <CurrentTime />
          <GreetingMessage />
        </div>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <ResumeDownload />
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://github.com/RAJAN-115" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Visit GitHub
            </a>
          </Button>
        </div>

        <div
          className="mt-8 grid gap-6 md:grid-cols-3 w-full max-w-4xl animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          <Card className="group overflow-hidden">
            <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center gap-3 sm:gap-4">
              <div className="rounded-full bg-purple-600/10 p-3 transition-colors group-hover:bg-purple-600/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                  <path d="M10 9H8"></path>
                </svg>
              </div>
              <Typography variant="h3">Projects</Typography>
              <Typography variant="p" className="text-muted-foreground text-sm sm:text-base">
                Explore my portfolio of web applications, tools, and experiments.
              </Typography>
              <Button variant="ghost" className="mt-2 gap-2 group-hover:text-purple-600" asChild>
                <Link href="/projects">
                  View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center gap-3 sm:gap-4">
              <div className="rounded-full bg-purple-600/10 p-3 transition-colors group-hover:bg-purple-600/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <Typography variant="h3">Skills</Typography>
              <Typography variant="p" className="text-muted-foreground text-sm sm:text-base">
                Discover my technical expertise and professional capabilities.
              </Typography>
              <Button variant="ghost" className="mt-2 gap-2 group-hover:text-purple-600" asChild>
                <Link href="/skills">
                  View Skills <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <CardContent className="p-5 sm:p-6 flex flex-col items-center text-center gap-3 sm:gap-4">
              <div className="rounded-full bg-purple-600/10 p-3 transition-colors group-hover:bg-purple-600/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <Typography variant="h3">Contact</Typography>
              <Typography variant="p" className="text-muted-foreground text-sm sm:text-base">
                Get in touch for collaborations, opportunities, or just to say hi.
              </Typography>
              <Button variant="ghost" className="mt-2 gap-2 group-hover:text-purple-600" asChild>
                <Link href="/contact">
                  Contact Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </ResponsiveContainer>

      <ChatbotButton />
    </main>
  )
}

