// Enhanced by AI on 2025-08-11T10:28:30.826Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times and smooth interactions.",
      badge: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices and screen sizes.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Worldwide content delivery network ensures fast loading anywhere.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights and real-time metrics to track your success.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Custom Branding",
      description: "Complete customization to match your brand identity perfectly.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer Friendly",
      description: "Clean APIs, extensive documentation, and powerful developer tools.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock expert support whenever you need assistance.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data stays yours. We never sell or share your information.",
      badge: "Privacy"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Succeed Online
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features designed to help you build, grow, and scale your business 
            with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience all these features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}