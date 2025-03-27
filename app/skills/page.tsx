import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { Lightbulb, ExternalLink } from "lucide-react"
import { SkillCategory } from "@/components/skill-category"
import { TechGrid } from "@/components/tech-grid"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function SkillsPage() {
  const aiTools = {
    title: "AI Tools & Technologies",
    items: [
      {
        name: "ChatGPT",
        image: "/icons/chatgpt.svg",
        description: "AI assistant used for research and content generation",
        url: "https://chat.openai.com/",
      },
      {
        name: "Google AI Studio",
        image: "/icons/google-ai-studio.svg",
        description: "Helps us chat with Gemini, share your screen, and talk to it in real-time for better collaboration.",
        url: "https://ai.google.dev/",
      },
      {
        name: "DeepSeek",
        image: "/icons/deepseek.svg",
        description: "Advanced AI model for deep learning and complex problem-solving",
        url: "https://www.deepseek.com/",
      },
      {
        name: "Cursor AI",
        image: "/icons/cursor.svg",
        description: "AI-powered code editor that helps with code completion and suggestions",
        url: "https://cursor.sh/",
      },
      {
        name: "Grok AI",
        image: "/icons/grok.svg",
        description: "AI assistant designed for real-time problem-solving and creative brainstorming.",
        url: "https://grok.ai/",
      },
      {
        name: "Qwen Chat",
        image: "/icons/qwen.svg",
        description: "A versatile AI chatbot for answering questions, generating content, and assisting with tasks.",
        url: "https://qwen.chat/",
      },
      {
        name: "Perplexity",
        image: "/icons/perplexity.svg",
        description: "An AI-powered research tool that provides answers with cited sources for better understanding.",
        url: "https://www.perplexity.ai/",
      },
      
      {
        name: "Claude AI",
        image: "/icons/claude.svg",
        description: "Advanced AI model for conversational assistance, content creation, and complex reasoning.",
        url: "https://www.anthropic.com/claude",
      },
      {
        name: "ChatSutra",
        image: "/icons/chatsutra.svg",
        description: "AI chatbot designed for personalized conversations and tailored user experiences.",
        url: "https://www.chatsutra.com/",
      },
      {
        name: "Manus AI",
        image: "/icons/manus.svg",
        description: "AI-driven platform for automating workflows and enhancing team collaboration.",
        url: "https://www.manus.ai/",
      }
    ],
  }

  return (
    <main className="py-12">
      <ResponsiveContainer>
        <div className="max-w-4xl mx-auto">
          <Typography variant="h2" className="mb-6 text-center">
            <span className="text-primary">Skills</span>
          </Typography>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="dsa">DSA & AI</TabsTrigger>
              <TabsTrigger value="other">Other Skills</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="space-y-8">
              <SkillCategory
                title="Programming Languages"
                skills={[
                  { name: "C/C++", level: "Advanced" },
                  { name: "Python", level: "Basic" },
                  { name: "JavaScript", level: "Intermediate" },
                ]}
              />

              <SkillCategory
                title="Web Technologies"
                skills={[
                  { name: "HTML", level: "Advanced" },
                  { name: "CSS", level: "Advanced" },
                  { name: "React", level: "Intermediate" },
                  { name: "Node.js", level: "Basic" },
                  { name: "Express", level: "Basic" },
                  { name: "NEXT.JS", level: "Basic" },
                  { name: "Material UI", level: "Intermediate" },
                  { name: "Tailwind CSS", level: "Basic" },
                ]}
              />

              <SkillCategory
                title="Tools"
                skills={[
                  { name: "Git", level: "Intermediate" },
                  { name: "GitHub", level: "Intermediate" },
                  { name: "VS Code", level: "Advanced" },
                  { name: "LaTeX", level: "Basic" },
                  { name: "Figma", level: "Basic" },
                ]}
              />

              <SkillCategory
                title="Database"
                skills={[
                  { name: "MySQL", level: "Basic" },
                  { name: "MongoDB", level: "Intermediate" },
                ]}
              />

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-6">
                    AI Tools & Technologies
                  </Typography>
                  <TechGrid categories={[aiTools]} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dsa" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">
                    Data Structures & Algorithms
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Proficient in solving problems on LeetCode, HackerRank, and Codeforces. Comfortable with various
                    data structures and algorithms including:
                  </Typography>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Arrays",
                      "Linked Lists",
                      "Stacks",
                      "Queues",
                      "Trees",
                      "Graphs",
                      "Hash Tables",
                      "Heaps",
                      "Dynamic Programming",
                      "Greedy Algorithms",
                      "Searching",
                      "Sorting",
                    ].map((skill) => (
                      <Chip key={skill} variant="outline">
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">
                    AI & Machine Learning
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Exploring AI with tools like TensorFlow and OpenAI APIs. Interested in:
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Natural Language Processing",
                      "Computer Vision",
                      "Neural Networks",
                      "Generative AI",
                      "Prompt Engineering",
                    ].map((skill) => (
                      <Chip key={skill} variant="outline">
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="other" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">
                    Side Skills
                  </Typography>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Gaming
                      </Typography>
                      <Typography variant="p">Strategic player in BGMI</Typography>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2">
                        Editing
                      </Typography>
                      <Typography variant="p">Video editing with Adobe Premiere Pro</Typography>
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-2">
                        UI Design
                      </Typography>
                      <Typography variant="p">Wireframing with Figma</Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-4">
                    Extracurricular Skills
                  </Typography>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <Typography variant="p">
                        Proficient in installing custom ROMs, rooting, and modules on mobile devices
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="p">
                        Led BGMI gaming competition as Team Leader, showcasing strategic planning and leadership
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid gap-6 sm:grid-cols-2">
                <Card>
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-4">
                      Spoken Languages
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Hindi", "Marathi"].map((language) => (
                        <Chip key={language} variant="secondary">
                          {language}
                        </Chip>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Typography variant="h3" className="mb-4">
                      Soft Skills
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Productivity",
                        "Logical Reasoning",
                        "Teamwork",
                        "Problem Solving",
                        "Communication",
                        "Time Management",
                      ].map((skill) => (
                        <Chip key={skill} variant="secondary">
                          {skill}
                        </Chip>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-2">
                    C++ Programming Certification
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Coursera
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    Comprehensive course covering C++ fundamentals, object-oriented programming, and advanced concepts.
                  </Typography>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-2">
                    MERN Stack Development Certification
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Udemy
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    In-depth training on MongoDB, Express.js, React, and Node.js for full-stack web development.
                  </Typography>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h3" className="mb-2">
                    AI Basics Certification
                  </Typography>
                  <Typography variant="p" className="mb-4">
                    Google AI
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    Introduction to artificial intelligence concepts, machine learning fundamentals, and practical
                    applications.
                  </Typography>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
              <Lightbulb className="h-4 w-4" />
              Get AI Skill Recommendations
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </main>
  )
}

