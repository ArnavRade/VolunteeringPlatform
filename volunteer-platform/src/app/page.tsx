import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Award } from "lucide-react"
import FeaturedOpportunities from "@/components/featured-opportunities"
import CauseCategories from "@/components/cause-categories"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            VolunteerConnect
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/opportunities" className="hover:underline">
              Find Opportunities
            </Link>
            <Link href="/nonprofits" className="hover:underline">
              For Nonprofits
            </Link>
            <Link href="/events" className="hover:underline">
              Events
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </nav>
          <div className="flex space-x-2">
            <Link href="/login">
              <Button
                variant="outline"
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary to-primary/80 text-primary-foreground py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a difference in your community</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Connect with local nonprofits and find volunteer opportunities that match your skills and interests.
            </p>
            <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search for opportunities"
                  className="pl-10 bg-background text-foreground h-12 w-full"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Location" className="pl-10 bg-background text-foreground h-12 w-full" />
              </div>
              <Button className="h-12 px-6">Search</Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse by Cause</h2>
            <CauseCategories />
          </div>
        </section>

        <section className="py-12 px-6 bg-muted/50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Opportunities</h2>
              <Link href="/opportunities">
                <Button variant="outline">View all</Button>
              </Link>
            </div>
            <FeaturedOpportunities />
          </div>
        </section>

        <section className="py-12 px-6 bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-6 rounded-lg border">
                <Search className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Find Opportunities</h3>
                <p className="text-muted-foreground">
                  Browse volunteer opportunities by location, cause, and time commitment.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg border">
                <Calendar className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Track Events</h3>
                <p className="text-muted-foreground">
                  Keep track of upcoming volunteer events and manage your schedule.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-lg border">
                <Award className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Earn Recognition</h3>
                <p className="text-muted-foreground">
                  Build your volunteer profile and earn badges for your contributions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">VolunteerConnect</h3>
              <p className="text-sm text-muted-foreground">
                Connecting volunteers with meaningful opportunities since 2023.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    For nonprofits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2023 VolunteerConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

