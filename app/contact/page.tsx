"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Chip } from "@/components/ui/chip"
import { Mail, Linkedin, Github, Send, MessageSquare, Phone } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [suggestion, setSuggestion] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // AI suggestion logic
    if (name === "message" && value.length > 10) {
      const suggestions = [
        "Consider mentioning your project timeline if this is a job inquiry.",
        "You might want to include your availability for a follow-up call.",
        "If you're interested in a specific project, mention which one caught your eye!",
        "Feel free to ask any specific questions about my skills or experience.",
        "If you found me through a recommendation, mentioning that would be great!",
      ]

      setSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)])
    } else {
      setSuggestion("")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Typography variant="h2" className="mb-6 text-center">
          <span className="text-primary">Contact</span>
        </Typography>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Typography variant="h3">Get In Touch</Typography>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={5}
                      required
                      className="min-h-[120px]"
                    />
                  </div>

                  {suggestion && (
                    <Alert className="bg-purple-600/10 border-purple-600/20">
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                      <AlertDescription className="text-sm">{suggestion}</AlertDescription>
                    </Alert>
                  )}

                  {submitted && (
                    <Alert className="bg-green-600/10 border-green-600/20">
                      <AlertDescription className="text-sm text-green-600">
                        Thanks for your message! I'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full gap-2 bg-purple-600 hover:bg-purple-700 h-12 text-base">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Typography variant="h3">Contact Info</Typography>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Typography variant="h4" className="mb-2">
                  Email
                </Typography>
                <Chip variant="outline" className="gap-2 h-10">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:rajarp115@gmail.com" className="hover:underline">
                    rajarp115@gmail.com
                  </a>
                </Chip>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Social Media
                </Typography>
                <div className="flex flex-col gap-3">
                  <Chip variant="outline" className="gap-2 h-10">
                    <Linkedin className="h-4 w-4" />
                    <a
                      href="https://www.linkedin.com/in/rajanrp115/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/rajanrp115/
                    </a>
                  </Chip>
                  <Chip variant="outline" className="gap-2 h-10">
                    <Github className="h-4 w-4" />
                    <a
                      href="https://github.com/RAJAN-115"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/RAJAN-115
                    </a>
                  </Chip>
                </div>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Location
                </Typography>
                <Typography variant="p">Vasai-Virar (401305), Mumbai Region, Maharashtra, India</Typography>
              </div>

              <div>
                <Typography variant="h4" className="mb-2">
                  Phone
                </Typography>
                <Chip variant="outline" className="gap-2 h-10">
                  <a href="tel:+919545993850" className="flex items-center gap-2 hover:underline">
                    <Phone className="h-4 w-4" />
                    +91 9545993850
                  </a>
                </Chip>
              </div>
            </CardContent>
            <CardFooter>
              <Typography variant="smallText" className="text-muted-foreground">
                I typically respond within 24 hours.
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

