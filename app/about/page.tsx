import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Volume2 } from "lucide-react"
import { TechGrid } from "@/components/tech-grid"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function AboutPage() {
  const techCategories = [
    {
      title: "Frontend Development",
      items: [
        {
          name: "HTML",
          image: "/icons/html.svg",
          description: "The standard markup language for creating web pages and applications",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          name: "CSS",
          image: "/icons/css.svg",
          description: "Style sheet language used for describing the presentation of a document",
          url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        },
        {
          name: "JavaScript",
          image: "/icons/javascript.svg",
          description: "Used for frontend and backend development in my web projects",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
          name: "Bootstrap",
          image: "/icons/bootstrap.svg",
          description: "Utilized for responsive and mobile-first design in my web projects",
          url: "https://getbootstrap.com/docs/4.3/getting-started/introduction/",
        },
        {
          name: "React",
          image: "/icons/react.svg",
          description: "My preferred JavaScript library for building user interfaces",
          url: "https://reactjs.org/",
        },
        {
          name: "Next.js",
          image: "/icons/nextjs.svg",
          description: "The React framework for production applications",
          url: "https://nextjs.org/",
        },
        {
          name: "Material UI",
          image: "/icons/materialui.svg",
          description: "React component library for faster and easier web development",
          url: "https://mui.com/",
        },
        
      ],
    },
    {
      title: "Backend Development",
      items: [
        {
          name: "Node.js",
          image: "/icons/node.svg",
          description: "Runtime environment for server-side JavaScript applications",
          url: "https://nodejs.org/",
        },
        {
          name: "Express",
          image: "/icons/express.svg",
          description: "Web application framework for Node.js for building APIs",
          url: "https://expressjs.com/",
        },
        {
          name: "MongoDB",
          image: "/icons/mongodb.svg",
          description: "NoSQL database used in my MERN stack projects",
          url: "https://www.mongodb.com/",
        },
      ],
    },
    {
      title: "Programming Languages",
      items: [
        {
          name: "C",
          image: "/icons/c.svg",
          description: "General-purpose, procedural computer programming language",
          url: "https://devdocs.io/c/",
        },
        {
          name: "C++",
          image: "/icons/cpp.svg",
          description: "My primary programming language for DSA and competitive programming",
          url: "https://isocpp.org/",
        },
      ],
    },
    {
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
          description: "Helps you chat with Gemini, share your screen, and talk to it in real-time for better collaboration.",
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
      ],
    },
    {
      title: "Version Control",
      items: [
        {
          name: "GitHub",
          image: "/icons/github.svg",
          description: "Platform for version control and collaboration",
          url: "https://github.com/",
        },
      ],
    },
    {
      title: "Code Editors & Tools",
      items: [
        {
          name: "VS Code",
          image: "/icons/vscode.svg",
          description: "My go-to code editor for its versatility, extensions, and integrated terminal.",
          url: "https://code.visualstudio.com/",
        },
        {
          name: "Codeblock",
          image: "/icons/code-blocks.svg",
          description: "Lightweight code snippet manager for organizing and reusing code efficiently.",
          url: "https://codeblock.app/",
        },
        {
          name: "Cursor",
          image: "/icons/cursor.svg",
          description: "AI-driven code editor designed for intelligent code completion and refactoring.",
          url: "https://cursor.sh/",
        },
        
        
        {
          name: "Replit",
          image: "/icons/replit.svg",
          description: "Online code editor and IDE for collaborative coding and rapid prototyping.",
          url: "https://replit.com/",
        },
      ],
    },

  ]

  return (
    <main className="py-12">
      <ResponsiveContainer>
        <div className="max-w-4xl mx-auto">
          <Typography variant="h2" className="mb-8 text-center">
            About <span className="text-primary">Me</span>
          </Typography>

          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <Typography variant="p" className="mb-6 text-base md:text-lg">
                I&apos;m Rajan Prajapati, a C++ programmer who loves solving problems and building projects. I am
                currently learning the MERN stack as a beginner to create web applications. I also enjoy exploring AI
                tools and experimenting with new technologies to grow my skills.
              </Typography>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <Typography variant="h4" className="mb-4">
                    Personal Info
                  </Typography>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-semibold text-muted-foreground">Name:</dt>
                      <dd>Rajan Ramsajivan Prajapati</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-muted-foreground">DOB:</dt>
                      <dd>11/05/2002</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-muted-foreground">Email:</dt>
                      <dd>
                        <a href="mailto:rajarp115@gmail.com" className="hover:text-primary">
                          rajarp115@gmail.com
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-muted-foreground">Address:</dt>
                      <dd>Vasai-Virar (401305), Mumbai(Region), Maharashtra, India</dd>
                    </div>
                  </dl>
                </div>

                <div>
                  <Typography variant="h4" className="mb-4">
                    Interests & Hobbies
                  </Typography>
                  <Typography variant="p">
                    I&apos;m a tech enthusiast who loves exploring AI tools and learning how they work. I enjoy
                    discovering new technologies and staying updated with the latest trends. I like playing video games
                    and understanding how they are made. I am also proficient in installing custom ROMs, rooting mobile
                    devices, and working with modules to expand their software capabilities.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <Typography variant="h3" className="mb-8 text-center">
                Technologies I Work With
              </Typography>

              <TechGrid categories={techCategories} />
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="gap-2 bg-purple-600 hover:bg-purple-700">Discover More About Me</Button>

            <Button variant="outline" className="gap-2">
              <Volume2 className="h-4 w-4" />
              Listen to Bio
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </main>
  )
}

