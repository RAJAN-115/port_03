"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Download, FileText, Loader2 } from "lucide-react"

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)

      // Create a fake download by creating a temporary anchor element
      const link = document.createElement("a")
      link.href = "/placeholder.svg" // Replace with actual resume file
      link.download = "Rajan_Prajapati_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-purple-600 hover:bg-purple-700">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download Resume</DialogTitle>
          <DialogDescription>
            Get a copy of my latest resume with detailed information about my skills, experience, and education.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center justify-center py-4">
          <div className="flex flex-col items-center gap-2">
            <FileText className="h-16 w-16 text-purple-600" />
            <span className="text-sm text-muted-foreground">Rajan_Prajapati_Resume.pdf</span>
          </div>
        </div>

        <DialogFooter>
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="gap-2 bg-purple-600 hover:bg-purple-700 w-full"
          >
            {isDownloading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

