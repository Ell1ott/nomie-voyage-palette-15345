import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Navigation,
  Share2,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Wifi,
  Phone,
  Download,
  Settings,
  Check,
  AlertCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface RouteStep {
  id: number;
  type: "walk" | "transit" | "transfer" | "arrival";
  icon: string;
  action: string;
  duration: string;
  details?: string;
  lineName?: string;
  lineColor?: string;
  direction?: string;
  platform?: string;
  departure?: string;
  frequency?: string;
  stops?: number;
  getOffAt?: string;
  note?: string;
  distance?: string;
}

const Transit = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showAlternatives, setShowAlternatives] = useState(false);

  const routeSteps: RouteStep[] = [
    {
      id: 1,
      type: "walk",
      icon: "🚶‍♂️",
      action: "Walk to Monorail Station",
      duration: "5 min",
      distance: "300m",
      details: "Follow signs for 'Tokyo Monorail'",
      note: "🎫 Buy IC card here (¥2,000 recommended)"
    },
    {
      id: 2,
      type: "transit",
      icon: "🚝",
      action: "Tokyo Monorail",
      lineName: "Tokyo Monorail",
      lineColor: "bg-blue-500",
      direction: "Bound for Hamamatsucho",
      platform: "Platform 2",
      departure: "9:15 AM",
      frequency: "Every 10 minutes",
      duration: "18 min",
      stops: 5,
      getOffAt: "Hamamatsucho"
    },
    {
      id: 3,
      type: "transfer",
      icon: "🔄",
      action: "Transfer to Yamanote Line",
      duration: "5 min walk",
      details: "Follow green signs",
      note: "Go to Platform 3 & 4"
    },
    {
      id: 4,
      type: "transit",
      icon: "🚇",
      action: "Yamanote Line",
      lineName: "Yamanote Line",
      lineColor: "bg-green-500",
      direction: "Bound for Tokyo/Ueno",
      platform: "Platform 4",
      departure: "9:40 AM",
      duration: "5 min",
      stops: 2,
      getOffAt: "Shimbashi"
    },
    {
      id: 5,
      type: "transfer",
      icon: "🔄",
      action: "Transfer to Ginza Line",
      duration: "3 min walk",
      details: "Follow orange signs",
      note: "Follow 'G' symbols"
    },
    {
      id: 6,
      type: "transit",
      icon: "🚇",
      action: "Ginza Line",
      lineName: "Ginza Line",
      lineColor: "bg-orange-500",
      direction: "Bound for Asakusa",
      platform: "Platform 1",
      departure: "9:50 AM",
      duration: "14 min",
      stops: 9,
      getOffAt: "Asakusa"
    },
    {
      id: 7,
      type: "arrival",
      icon: "📍",
      action: "Walk to Senso-ji Temple",
      duration: "5 min walk",
      distance: "400m",
      details: "Exit 1, walk north",
      note: "You'll see the temple gate ahead!"
    }
  ];

  const alternativeRoutes = [
    {
      id: 1,
      name: "Airport Limousine Bus",
      time: "60 min",
      cost: "¥1,300",
      pros: "Direct, no transfers, luggage space",
      cons: "Slower, depends on traffic"
    },
    {
      id: 2,
      name: "Keikyu Line + Ginza Line",
      time: "50 min",
      cost: "¥620",
      pros: "Most economical",
      cons: "2 transfers, can be crowded"
    },
    {
      id: 3,
      name: "Taxi",
      time: "35 min",
      cost: "¥8,000-10,000",
      pros: "Comfortable, direct",
      cons: "Expensive, traffic dependent",
      note: "Best for groups or lots of luggage"
    }
  ];

  const lineStatus = [
    { name: "Tokyo Monorail", status: "normal", color: "text-success" },
    { name: "Yamanote Line", status: "normal", color: "text-success" },
    { name: "Ginza Line", status: "minor-delay", color: "text-warning", delay: "3 min" }
  ];

  const transitTips = [
    "Stand on the left on escalators",
    "Queue in marked areas on platforms",
    "Keep noise down on trains",
    "No eating or drinking on metro",
    "Use Suica/Pasmo IC card for convenience",
    "Download Tokyo Metro app for offline maps"
  ];

  const handleStartNavigation = () => {
    toast({
      title: "Starting Navigation",
      description: "Live turn-by-turn guidance activated",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold">Getting Around</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Haneda Airport, Tokyo</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            🇬🇧 EN
          </Badge>
        </div>
      </header>

      {/* Hero Context Card */}
      <section className="p-4">
        <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-0 text-white">
          <div className="p-6">
            <div className="text-5xl mb-3">🚇</div>
            <h2 className="text-xl font-bold mb-2">Welcome to Tokyo, Elliot!</h2>
            <p className="text-[15px] mb-3 opacity-90">
              You're at Haneda Airport. Here's how to get to your first stop.
            </p>
            <Badge className="bg-primary text-white border-0 mb-2">
              → Senso-ji Temple, Asakusa
            </Badge>
            <div className="flex items-center gap-2 text-sm opacity-90">
              <Clock className="h-4 w-4" />
              <span>About 45 minutes</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Primary Route Card */}
      <section className="px-4 mb-6">
        <Card className="border-2 border-primary relative">
          <Badge className="absolute -top-2 right-4 bg-success">
            RECOMMENDED
          </Badge>
          
          <div className="p-5">
            {/* Route Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">Tokyo Monorail + Ginza Line</h3>
                <Badge variant="outline" className="text-xs">
                  Direct route, English signs
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">45 min</div>
                <div className="text-lg text-muted-foreground">¥670</div>
                <div className="flex items-center gap-1 text-xs text-success mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  Easy
                </div>
              </div>
            </div>

            {/* Step-by-step Journey */}
            <div className="relative space-y-6">
              {routeSteps.map((step, index) => (
                <div key={step.id} className="flex gap-4 relative">
                  {/* Timeline */}
                  {index < routeSteps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-primary" />
                  )}

                  {/* Icon Node */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-base">{step.action}</h4>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-2">
                        {step.duration}
                      </span>
                    </div>

                    {step.lineName && (
                      <div className={`inline-block h-1 w-16 ${step.lineColor} rounded mb-2`} />
                    )}

                    {step.details && (
                      <p className="text-sm text-muted-foreground mb-1">{step.details}</p>
                    )}

                    {step.distance && (
                      <p className="text-xs text-muted-foreground mb-1">{step.distance}</p>
                    )}

                    {step.type === "transit" && (
                      <div className="grid grid-cols-2 gap-2 text-xs mt-2">
                        {step.direction && (
                          <div>
                            <span className="text-muted-foreground">Direction: </span>
                            <span className="font-medium">{step.direction}</span>
                          </div>
                        )}
                        {step.platform && (
                          <div>
                            <span className="text-muted-foreground">Platform: </span>
                            <span className="font-medium">{step.platform}</span>
                          </div>
                        )}
                        {step.departure && (
                          <div>
                            <span className="text-muted-foreground">Departs: </span>
                            <span className="font-medium">{step.departure}</span>
                          </div>
                        )}
                        {step.frequency && (
                          <div>
                            <span className="text-muted-foreground">Frequency: </span>
                            <span className="font-medium">{step.frequency}</span>
                          </div>
                        )}
                        {step.stops && (
                          <div>
                            <span className="text-muted-foreground">Stations: </span>
                            <span className="font-medium">{step.stops} stops</span>
                          </div>
                        )}
                        {step.getOffAt && (
                          <div className="col-span-2">
                            <span className="text-muted-foreground">Get off at: </span>
                            <span className="font-bold text-primary">{step.getOffAt}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {step.note && (
                      <div className="mt-2 p-2 bg-muted rounded text-xs">
                        {step.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2">
              <Button 
                className="w-full h-12" 
                size="lg"
                onClick={handleStartNavigation}
              >
                <Navigation className="h-5 w-5 mr-2" />
                Start Navigation
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save Route
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Alternative Routes */}
      <section className="px-4 mb-6">
        <Button
          variant="ghost"
          className="w-full justify-between mb-3"
          onClick={() => setShowAlternatives(!showAlternatives)}
        >
          <span className="font-semibold">Other Options</span>
          {showAlternatives ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>

        {showAlternatives && (
          <div className="space-y-2">
            {alternativeRoutes.map((route) => (
              <Card key={route.id} className="p-4 cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{route.name}</h4>
                  <div className="text-right">
                    <div className="font-bold">{route.time}</div>
                    <div className="text-sm text-muted-foreground">{route.cost}</div>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{route.pros}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{route.cons}</span>
                  </div>
                  {route.note && (
                    <div className="text-xs text-muted-foreground mt-2 italic">
                      {route.note}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Line Status */}
      <section className="px-4 mb-6">
        <h3 className="text-base font-semibold mb-3">Line Status</h3>
        <Card className="divide-y">
          {lineStatus.map((line, index) => (
            <div key={index} className="p-3 flex items-center justify-between">
              <span className="text-sm font-medium">{line.name}</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${line.status === 'normal' ? 'bg-success' : 'bg-warning'}`} />
                <span className={`text-xs ${line.color}`}>
                  {line.status === 'normal' ? 'Normal service' : `Minor delays (${line.delay})`}
                </span>
              </div>
            </div>
          ))}
        </Card>
      </section>

      {/* Transit Tips */}
      <section className="px-4 mb-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="tips" className="border-0">
            <Card>
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  <span className="text-sm font-semibold">First Time in Tokyo?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3">
                <div className="space-y-2">
                  {transitTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </Card>
          </AccordionItem>
        </Accordion>
      </section>

      {/* IC Card Info */}
      <section className="px-4 mb-6">
        <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="text-3xl">💳</div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Get a Travel Card</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Suica or Pasmo - Tap to enter/exit, works everywhere
              </p>
              <div className="text-sm space-y-1 mb-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Where to buy:</span>
                  <span className="font-medium">Ticket machines at airport</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost:</span>
                  <span className="font-medium">¥2,000 (¥500 deposit + ¥1,500 credit)</span>
                </div>
              </div>
              <Button size="sm" variant="default" className="w-full">
                How to Buy
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Actions */}
      <section className="px-4 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-auto py-3 flex-col gap-2" onClick={() => navigate('/phrases')}>
            <span className="text-2xl">💬</span>
            <span className="text-xs">Transit Phrases</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex-col gap-2">
            <Download className="h-5 w-5" />
            <span className="text-xs">Offline Maps</span>
          </Button>
          <Button variant="outline" className="h-auto py-3 flex-col gap-2">
            <Wifi className="h-5 w-5" />
            <span className="text-xs">Station WiFi</span>
          </Button>
          <Button variant="destructive" className="h-auto py-3 flex-col gap-2">
            <Phone className="h-5 w-5" />
            <span className="text-xs">Call Taxi</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Transit;
