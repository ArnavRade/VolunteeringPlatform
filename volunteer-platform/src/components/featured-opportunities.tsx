"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar } from "lucide-react"
import Link from "next/link"

// Mock data for featured opportunities
const opportunities = [
  {
    id: 1,
    title: "Community Garden Cleanup",
    organization: "Green City Initiative",
    location: "Downtown Community Garden",
    city: "Portland, OR",
    date: "May 15, 2023",
    time: "9:00 AM - 12:00 PM",
    category: "Environment",
    image: "/placeholder.svg?height=200&width=400",
    description: "Help us clean up and prepare the community garden for spring planting. No experience necessary!",
  },
  {
    id: 2,
    title: "Food Bank Assistant",
    organization: "City Food Bank",
    location: "Main Distribution Center",
    city: "Seattle, WA",
    date: "Weekly opportunities",
    time: "Various shifts available",
    category: "Food Security",
    image: "/placeholder.svg?height=200&width=400",
    description: "Sort and package food donations for distribution to families in need throughout the city.",
  },
  {
    id: 3,
    title: "After-School Tutor",
    organization: "Education for All",
    location: "Lincoln Elementary School",
    city: "Chicago, IL",
    date: "Mondays and Wednesdays",
    time: "3:30 PM - 5:30 PM",
    category: "Education",
    image: "/placeholder.svg?height=200&width=400",
    description: "Provide homework help and mentorship to elementary school students in underserved communities.",
  },
]

export default function FeaturedOpportunities() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {opportunities.map((opportunity) => (
        <Card key={opportunity.id} className="flex flex-col h-full">
          <div className="relative">
            <img
              src={opportunity.image || "/placeholder.svg"}
              alt={opportunity.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <Badge className="absolute top-3 right-3">{opportunity.category}</Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">{opportunity.title}</CardTitle>
            <CardDescription>{opportunity.organization}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm mb-4">{opportunity.description}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>
                  {opportunity.location}, {opportunity.city}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{opportunity.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{opportunity.time}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={`/opportunities/${opportunity.id}`} className="w-full">
              <Button className="w-full">View Details</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

