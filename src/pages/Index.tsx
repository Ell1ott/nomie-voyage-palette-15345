import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Sparkles, MapPin, MessageCircle, Search, Bell, User } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Compass,
      title: "Smart Trip Planning",
      description: "AI-powered itineraries tailored to your interests and travel style",
    },
    {
      icon: Sparkles,
      title: "Local Insider Tips",
      description: "Discover hidden gems and authentic local experiences",
    },
    {
      icon: MapPin,
      title: "Real-Time Guidance",
      description: "Personalized recommendations wherever you go",
    },
    {
      icon: MessageCircle,
      title: "24/7 Travel Buddy",
      description: "Always here to help make your trip amazing",
    },
  ];

  const destinations = [
    { name: "Paris", tag: "Romantic", image: "🗼" },
    { name: "Tokyo", tag: "Culture", image: "🗾" },
    { name: "Bali", tag: "Beach", image: "🏖️" },
    { name: "Iceland", tag: "Adventure", image: "🏔️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="text-2xl">✈️</div>
            <h1 className="text-xl font-bold">Nomie</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Your AI Travel Companion
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Planning trips has never been easier. Let Nomie handle the details while you dream about the adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button size="lg">
                Start Planning
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="px-4 sm:px-6 py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Popular Destinations</h3>
            <Button variant="ghost" className="text-primary">View All</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((dest, index) => (
              <Card key={index} className="card-elevated p-6 hover:scale-[1.02] transition-transform cursor-pointer">
                <div className="text-center">
                  <div className="text-5xl mb-3">{dest.image}</div>
                  <h4 className="font-semibold text-foreground mb-1">{dest.name}</h4>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {dest.tag}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From planning to exploring, we've got you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="card-elevated p-8 hover:scale-[1.02] transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to start your adventure?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered stress-free trip planning with Nomie
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for curious travelers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
