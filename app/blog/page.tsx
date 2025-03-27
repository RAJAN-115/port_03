"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Chip } from "@/components/ui/chip"
import { Lightbulb, Search, Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "My Journey with MERN Stack Development",
    excerpt:
      "Exploring the challenges and rewards of building full-stack applications with MongoDB, Express, React, and Node.js.",
    date: "March 15, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["MERN", "Web Development", "JavaScript"],
    slug: "journey-with-mern-stack",
  },
  {
    id: 2,
    title: "Mastering Data Structures and Algorithms in C++",
    excerpt:
      "A comprehensive guide to understanding and implementing essential data structures and algorithms using C++.",
    date: "April 22, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["C++", "DSA", "Programming"],
    slug: "mastering-dsa-cpp",
  },
  {
    id: 3,
    title: "Integrating AI Features in Modern Web Applications",
    excerpt:
      "How to enhance user experience by incorporating artificial intelligence capabilities into your web projects.",
    date: "May 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["AI", "Web Development", "UX"],
    slug: "ai-features-web-apps",
  },
  {
    id: 4,
    title: "The Future of React: What's Coming in 2023 and Beyond",
    excerpt: "Exploring upcoming features, patterns, and best practices in the React ecosystem.",
    date: "June 5, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "JavaScript", "Frontend"],
    slug: "future-of-react",
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null)

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const getAiSuggestion = () => {
    const suggestions = [
      "Consider writing about your experience with custom ROM installation on mobile devices.",
      "A tutorial on implementing voice navigation in web applications would be valuable.",
      "Share your insights on balancing gaming and programming as hobbies.",
      "Write about your approach to solving complex DSA problems on platforms like LeetCode.",
      "A beginner's guide to Material UI and Tailwind CSS would help many developers.",
    ]

    setAiSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)])
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Blog</span>
        </Typography>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Button className="gap-2 bg-purple-600 hover:bg-purple-700" onClick={getAiSuggestion}>
            <Lightbulb className="h-4 w-4" />
            AI Blog Idea
          </Button>
        </div>

        {aiSuggestion && (
          <Card className="mb-8 border-purple-600/50">
            <CardContent className="p-4 flex items-start gap-2">
              <Lightbulb className="h-5 w-5 text-purple-600 mt-0.5 shrink-0" />
              <div>
                <Typography variant="h4" className="mb-1">
                  Blog Post Idea
                </Typography>
                <Typography variant="p">{aiSuggestion}</Typography>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader className="p-6 pb-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <Chip key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Chip>
                  ))}
                </div>
                <Typography variant="h3" className="line-clamp-2">
                  {post.title}
                </Typography>
              </CardHeader>
              <CardContent className="p-6 pt-2 flex-1">
                <Typography variant="p" className="text-muted-foreground line-clamp-3 mb-4">
                  {post.excerpt}
                </Typography>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="ghost" className="gap-2 hover:text-purple-600" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Typography variant="h3" className="mb-2">
              No posts found
            </Typography>
            <Typography variant="p" className="text-muted-foreground">
              Try adjusting your search or check back later for new content.
            </Typography>
          </div>
        )}
      </div>
    </main>
  )
}

