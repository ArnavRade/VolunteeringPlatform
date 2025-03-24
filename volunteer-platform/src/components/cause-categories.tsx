import Link from "next/link"
import { Heart, Leaf, BookOpen, Users, Home, Utensils, PawPrint, Briefcase } from "lucide-react"

const categories = [
  { name: "Health & Wellness", icon: Heart, color: "bg-red-100 text-red-600" },
  { name: "Environment", icon: Leaf, color: "bg-green-100 text-green-600" },
  { name: "Education", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
  { name: "Community", icon: Users, color: "bg-purple-100 text-purple-600" },
  { name: "Housing", icon: Home, color: "bg-yellow-100 text-yellow-600" },
  { name: "Food Security", icon: Utensils, color: "bg-orange-100 text-orange-600" },
  { name: "Animal Welfare", icon: PawPrint, color: "bg-teal-100 text-teal-600" },
  { name: "Professional Skills", icon: Briefcase, color: "bg-indigo-100 text-indigo-600" },
]

export default function CauseCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/opportunities?category=${encodeURIComponent(category.name)}`}
          className="flex flex-col items-center p-6 rounded-lg border hover:border-primary transition-colors"
        >
          <div className={`p-4 rounded-full ${category.color} mb-4`}>
            <category.icon className="h-6 w-6" />
          </div>
          <span className="text-center font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

