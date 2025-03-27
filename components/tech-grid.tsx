import { TechLogo } from "@/components/tech-logo"
import { Typography } from "@/components/ui/typography"

interface TechCategory {
  title: string
  items: {
    name: string
    image: string
    description: string
    url?: string
  }[]
}

interface TechGridProps {
  categories: TechCategory[]
}

export function TechGrid({ categories }: TechGridProps) {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.title} className="space-y-4">
          <Typography variant="h4" className="mb-4 font-medium text-muted-foreground">
            {category.title}
          </Typography>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            {category.items.map((item) => (
              <TechLogo
                key={item.name}
                name={item.name}
                image={item.image}
                description={item.description}
                url={item.url}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

