import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Sparkles, MapPin, MessageCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Compass,
      emoji: "🧭",
      title: "Smart Trip Planning",
      description: "Let me plan your perfect itinerary based on your interests, budget, and travel style",
    },
    {
      icon: Sparkles,
      emoji: "✨",
      title: "Local Insider Tips",
      description: "Discover hidden gems and authentic experiences that only locals know about",
    },
    {
      icon: MapPin,
      emoji: "📍",
      title: "Real-Time Guidance",
      description: "Get personalized recommendations wherever you are, whenever you need them",
    },
    {
      icon: MessageCircle,
      emoji: "💬",
      title: "24/7 Travel Buddy",
      description: "Ask me anything, anytime. I'm always here to help make your trip amazing",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-bounce-gentle inline-block text-7xl mb-6">
            ✈️
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Meet Nomie
            <br />
            <span className="text-white/90">Your AI Travel Companion</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Planning a trip shouldn't feel like work. Let me handle the details while you dream about the adventure! 🌍
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
              Start Planning ✨
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/20 backdrop-blur-sm">
              Explore Features 🗺️
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Everything You Need for Amazing Trips 🎒
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From planning to exploring, I've got your back every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 ease-spring border-2 hover:shadow-2xl group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6 animate-bounce-gentle">
            🌟
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to explore the world differently?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered the joy of stress-free trip planning with Nomie!
          </p>
          
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary">
            Let's Go! 🚀
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Made with ❤️ for curious travelers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
