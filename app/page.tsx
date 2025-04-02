"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  AlertTriangle,
  CheckCircle,
  Clock3,
  ArrowRight,
  MessageSquare,
  Send,
  CheckSquare,
  Star,
  Zap,
  Sliders,
} from "lucide-react"
import { useEffect } from "react"

export default function LandingPage() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    // Handle navigation clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleNavClick)

    return () => {
      document.documentElement.style.scrollBehavior = ""
      document.removeEventListener("click", handleNavClick)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Image
              src="/images/creator-contracts-logo.png"
              alt="Creator Contracts Logo"
              width={48}
              height={48}
              className="h-10 w-auto"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium hover:underline">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:underline">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[60%_40%] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900">
                    <span className="mr-1">✅</span> Powered by AI — Built with legal experts — Trusted by 100+ brands
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Hire creators with confidence.
                    <br />
                    Get a custom, legally-sound contract in minutes.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Just describe your deal — our AI assistant will guide you through every clause and generate a
                    bulletproof contract tailored to your needs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex w-full max-w-md items-center gap-2">
                    <Button className="w-full px-6 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-md">
                      Get Your Free Contract — Takes 2 Minutes
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full max-w-[450px] overflow-hidden rounded-lg border bg-background p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute top-2 right-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded">
                    Step 1 of 6
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="text-lg font-bold">AI Contract Assistant</div>
                        <div className="h-2 w-24 bg-blue-600 rounded"></div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="h-4 w-4 text-blue-600" />
                          </div>
                          <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none">
                            <p className="text-sm">What kind of content are you hiring a creator for?</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <div className="h-4 w-4 rounded-sm border"></div>
                            <span className="text-sm">Instagram Post</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <div className="h-4 w-4 rounded-sm border"></div>
                            <span className="text-sm">TikTok Video</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <div className="h-4 w-4 rounded-sm border"></div>
                            <span className="text-sm">UGC Ads</span>
                          </div>
                          <div className="flex items-center space-x-2 p-2 border rounded-md hover:bg-gray-50 cursor-pointer">
                            <div className="h-4 w-4 rounded-sm border"></div>
                            <span className="text-sm">Other (specify)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <div className="flex justify-between items-center">
                        <div className="text-sm font-medium">Type or select an option above</div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          <Send className="h-4 w-4 mr-2" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Section */}
        <section id="features" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Don't let a $2,000 ghosted deal happen to you.
                  <br />
                  Most UGC deals fail because the terms aren't clear.
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 overflow-x-auto">
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-sm relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">No clear terms</h3>
                <p className="text-gray-500">
                  "A TikTok creator ghosted us — and we had no contract to hold them accountable for the $2,000 we paid
                  upfront."
                </p>
                <div className="w-full pt-2 mt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">
                    70% of UGC collaborations in 2024 were done without a written contract.
                  </p>
                  <p className="text-xs font-medium text-gray-600 mt-1">Source: Creator Commerce Report</p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/images/person3.png"
                    width={40}
                    height={40}
                    alt="Creator silhouette"
                    className="object-cover"
                  />
                </div>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-sm relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">No ownership rights defined</h3>
                <p className="text-gray-500">"We couldn't use the content in our ads — a $5,000 mistake."</p>
                <div className="w-full pt-2 mt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">83% of brands don't properly secure usage rights.</p>
                  <p className="text-xs font-medium text-gray-600 mt-1">Source: Digital Rights Survey</p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/images/person1.png"
                    width={40}
                    height={40}
                    alt="Creator silhouette"
                    className="object-cover"
                  />
                </div>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-sm relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold">No deadline enforcement</h3>
                <p className="text-gray-500">
                  "Our holiday campaign was delayed 3 weeks — creators delivered late with no consequences."
                </p>
                <div className="w-full pt-2 mt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 italic">62% of creator campaigns miss deadlines by 10+ days.</p>
                  <p className="text-xs font-medium text-gray-600 mt-1">Source: Influencer Marketing Hub</p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/images/person2.png"
                    width={40}
                    height={40}
                    alt="Creator silhouette"
                    className="object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  How It Works — Powered by AI. Vetted by Legal Experts.
                </h2>
              </div>
            </div>
            <div className="mx-auto flex flex-col lg:flex-row max-w-5xl items-center justify-between gap-8 py-12">
              <div className="flex flex-col items-center space-y-4 p-6 text-center hover:shadow-sm transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">1</div>
                <h3 className="text-xl font-bold">Describe your deal in plain English</h3>
                <p className="text-gray-500">Tell us what you need in simple terms — no legal jargon required.</p>
                <div className="mt-4 h-[120px] w-full max-w-[200px] rounded border bg-white p-3 shadow-sm">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="h-16 w-full bg-gray-50 rounded p-2 text-xs text-gray-500">
                        I need 3 Instagram posts from a creator with full usage rights for 6 months...
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Send className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 text-center hover:shadow-sm transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">2</div>
                <h3 className="text-xl font-bold">Our AI guides you through essential clauses</h3>
                <p className="text-gray-500">
                  Smart suggestions help you cover all legal bases without the complexity.
                </p>
                <div className="mt-4 h-[120px] w-full max-w-[200px] rounded border bg-white p-3 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckSquare className="h-4 w-4 text-blue-600" />
                      <div className="h-3 w-32 bg-blue-50 rounded text-xs text-blue-800 flex items-center px-1">
                        Usage rights
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckSquare className="h-4 w-4 text-blue-600" />
                      <div className="h-3 w-28 bg-blue-50 rounded text-xs text-blue-800 flex items-center px-1">
                        Payment terms
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-sm border"></div>
                      <div className="h-3 w-36 bg-gray-100 rounded text-xs text-gray-500 flex items-center px-1">
                        Revisions allowed?
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-sm border"></div>
                      <div className="h-3 w-24 bg-gray-100 rounded text-xs text-gray-500 flex items-center px-1">
                        Deadlines
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 text-center hover:shadow-sm transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">3</div>
                <h3 className="text-xl font-bold">Instantly preview and download your contract</h3>
                <p className="text-gray-500">Review, edit if needed, and get your legally sound contract in seconds.</p>
                <div className="mt-4 h-[120px] w-full max-w-[200px] rounded border bg-white p-3 shadow-sm">
                  <div className="flex flex-col h-full justify-between">
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-full bg-gray-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex justify-center items-center py-2">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                    <div className="h-6 w-full bg-blue-600 rounded text-white text-xs flex items-center justify-center">
                      Download Contract
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 mt-8">
              <p className="text-lg font-medium">🎯 Ready to protect your next creator deal?</p>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                👉 Get your free contract — it takes 2 minutes
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Real brands. Real protection. Real results.
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-8">
              <Card className="flex flex-col space-y-4 p-6 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/person3.png"
                      width={64}
                      height={64}
                      alt="Sarah Johnson"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">
                      Marketing Director, <span className="font-medium">GlowUp Co.</span>
                    </p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "Creator Contracts saved us $3K in legal work. We now have clear ownership of all content."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </Card>

              <Card className="flex flex-col space-y-4 p-6 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/person1.png"
                      width={64}
                      height={64}
                      alt="Michael Chen"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">
                      Founder, <span className="font-medium">Digital Creators</span>
                    </p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "We've cut our contract creation time by 90%. Now every influencer deal is bulletproof."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </Card>

              <Card className="flex flex-col space-y-4 p-6 hover:shadow-md transition-all">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src="/images/person2.png"
                      width={64}
                      height={64}
                      alt="Jessica Taylor"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jessica Taylor</h3>
                    <p className="text-sm text-gray-500">
                      CMO, <span className="font-medium">BrandBoost</span>
                    </p>
                  </div>
                </div>
                <p className="text-gray-500">
                  "Finally, a solution that makes legal protection simple. No more creator disputes or missed
                  deadlines."
                </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built with AI. Backed by legal best practices.
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Guidance</h3>
                <p className="text-gray-500">
                  Our AI assistant asks the right questions and suggests appropriate clauses based on your specific
                  needs.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Image src="/images/creator-contracts-logo.png" alt="Creator Contracts Logo" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold">Plain-English Legal Help</h3>
                <p className="text-gray-500">
                  Complex legal concepts translated into simple language you and your creators can understand.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 p-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Sliders className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Complete Control</h3>
                <p className="text-gray-500">
                  You make the decisions. Our AI just makes sure you've covered all the important legal bases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full bg-[#F8F9FB] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Choose your plan — protect your deals in minutes.
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed">
                  Start free. Upgrade only when you're ready to download.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-stretch gap-6 py-12 md:grid-cols-3 md:gap-8">
              {/* Creator Plan */}
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Creator Plan</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Unlimited contract generations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>AI assistant with legal Q&A</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>PDF export</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>E-sign ready</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Contract editing</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Creator Plan</Button>
              </div>

              {/* Team Plan */}
              <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Team Plan</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Everything in Creator Plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Multi-user access (3 seats)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Save reusable templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Collaborate with creators</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Brand-safe export (no watermark)</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Team Plan</Button>
              </div>

              {/* Pro Plan - Highlighted */}
              <div className="flex flex-col rounded-lg border-2 border-blue-500 bg-white p-6 shadow-md transition-all hover:shadow-lg relative">
                <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro Plan</h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="ml-1 text-gray-500">/month</span>
                  </div>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Everything in Team Plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Clause-by-clause legal explanation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>NDA & clause library</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>Custom branding + white-label</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all">
                  Get Pro Plan
                </Button>
              </div>
            </div>

            {/* One-time option */}
            <div className="mx-auto max-w-md text-center mt-8 mb-12">
              <div className="text-lg font-medium mb-2">OR</div>
              <h3 className="text-xl font-bold">🧾 Just need one contract?</h3>
              <p className="text-2xl font-bold my-2">$9 one-time</p>
              <Button className="px-6 bg-blue-600 hover:bg-blue-700">Generate One Contract Now</Button>
              <p className="text-xs text-gray-500 mt-2">*Includes 1 edit. No subscription required.*</p>
            </div>

            {/* Guarantee note */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                🔐 <em>Built with legal experts. Cancel anytime. Your contracts stay saved.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full bg-blue-600 py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
                We're launching soon. Want early access?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90 md:text-xl/relaxed">
                Join the waitlist and get a free contract credit when we launch.
              </p>
              <p className="mx-auto max-w-[600px] text-white/80 text-sm">
                Guided by AI. Reviewed by you. Ready to sign in minutes.
              </p>

              <div className="mx-auto max-w-[600px] grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 mb-2 text-white" />
                  <h3 className="text-lg font-bold text-white">Legally sound</h3>
                  <p className="text-sm text-white/80">Vetted by legal experts</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                  <Zap className="h-6 w-6 mb-2 text-white" />
                  <h3 className="text-lg font-bold text-white">Creator-ready</h3>
                  <p className="text-sm text-white/80">Easy for creators to sign</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg">
                  <Clock3 className="h-6 w-6 mb-2 text-white" />
                  <h3 className="text-lg font-bold text-white">Takes 2 mins</h3>
                  <p className="text-sm text-white/80">From deal to signature</p>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-white/50 focus:bg-white focus:text-black"
                />
                <Button className="bg-white text-blue-600 hover:bg-white/90 hover:scale-105 transition-all px-6">
                  Yes, I want early access
                </Button>
              </form>
              <p className="text-xs text-white/70">
                No spam. Just launch updates & your early access code.{" "}
                <a href="#" className="underline underline-offset-2">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-2 py-10 md:h-24 md:flex-row md:items-center md:justify-between md:py-0">
          <div className="flex items-center">
            <Image
              src="/images/creator-contracts-logo.png"
              alt="Creator Contracts Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Creator Contracts. All rights reserved.</p>
          <nav className="flex gap-4 md:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

