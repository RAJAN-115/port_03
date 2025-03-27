import { Card, CardContent } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Chip } from "@/components/ui/chip"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  level: "Basic" | "Intermediate" | "Advanced"
}

interface SkillCategoryProps {
  title: string
  skills: Skill[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  const getLevelPercentage = (level: string) => {
    switch (level) {
      case "Basic":
        return 33
      case "Intermediate":
        return 66
      case "Advanced":
        return 100
      default:
        return 0
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Typography variant="h3" className="mb-4">
          {title}
        </Typography>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <Typography variant="p">{skill.name}</Typography>
                <Chip
                  variant={
                    skill.level === "Advanced" ? "default" : skill.level === "Intermediate" ? "secondary" : "outline"
                  }
                >
                  {skill.level}
                </Chip>
              </div>
              <Progress value={getLevelPercentage(skill.level)} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

