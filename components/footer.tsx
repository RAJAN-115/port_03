import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Typography variant="p" className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Rajan Prajapati | Built with MERN & Material UI
          </Typography>
          <Typography variant="smallText" className="text-center text-xs text-muted-foreground md:text-left">
            Made with <Heart className="inline h-3 w-3 text-red-500" /> and AI
          </Typography>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:rajarp115@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/rajanprajapati" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/rajan-prajapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

