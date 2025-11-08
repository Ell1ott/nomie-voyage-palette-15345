import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventListItem } from "@/components/EventListItem";
import { QuickActionButton } from "@/components/QuickActionButton";
import { AlertCard } from "@/components/AlertCard";
import { useState } from "react";
import { 
  Home, 
  Compass, 
  Calendar, 
  MessageCircle, 
  User,
  MapPin,
  Clock,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Map,
  ChevronRight,
  Search,
  Bell,
  Wallet,
  Ticket
} from "lucide-react";

const Index = () => {
  const [showWeatherAlert, setShowWeatherAlert] = useState(true);
  const [showBudgetAlert, setShowBudgetAlert] = useState(true);

  const upcomingTrips = [
    {
      destination: "Tokyo, Japan",
      date: "Dec 15-22, 2024",
      status: "Going",
      image: "🗾",
      daysUntil: 8,
      activities: 12
    },
    {
      destination: "Paris, France",
      date: "Jan 10-17, 2025",
      status: "Planning",
      image: "🗼",
      daysUntil: 34,
      activities: 8
    }
  ];

  const travelEvents = [
    {
      thumbnail: "✈️",
      status: "going" as const,
      category: "Flight",
      categoryIcon: <Plane className="h-3 w-3" />,
      title: "SAS Flight 123",
      date: "13 Nov",
      time: "15:00",
      location: "Copenhagen Airport",
      isNext24Hours: true
    },
    {
      thumbnail: "🏨",
      status: "booked" as const,
      category: "Hotel",
      categoryIcon: <Hotel className="h-3 w-3" />,
      title: "Grand Hotel Copenhagen",
      date: "13 Nov",
      time: "Check-in 14:00",
      location: "City Center, Copenhagen"
    },
    {
      thumbnail: "🗾",
      status: "going" as const,
      category: "Activity",
      categoryIcon: <Camera className="h-3 w-3" />,
      title: "Visit Senso-ji Temple",
      date: "15 Dec",
      time: "09:00",
      location: "Asakusa, Tokyo",
      isLive: true
    },
    {
      thumbnail: "🍜",
      status: "booked" as const,
      category: "Restaurant",
      categoryIcon: <Utensils className="h-3 w-3" />,
      title: "Lunch at Tsukiji Market",
      date: "15 Dec",
      time: "12:30",
      location: "Tsukiji, Tokyo"
    },
    {
      thumbnail: "🚄",
      status: "pending" as const,
      category: "Transport",
      categoryIcon: <Plane className="h-3 w-3" />,
      title: "Shinkansen to Kyoto",
      date: "17 Dec",
      time: "08:00",
      location: "Tokyo Station"
    }
  ];

  const recommendations = [
    {
      title: "Golden Pavilion",
      location: "Kyoto",
      category: "Temple",
      rating: 4.8,
      image: "⛩️"
    },
    {
      title: "Naman Retreat",
      location: "Da Nang",
      category: "Resort",
      rating: 5.0,
      image: "🏖️"
    },
    {
      title: "Halong Bay Cruise",
      location: "Vietnam",
      category: "Experience",
      rating: 4.9,
      image: "⛵"
    }
  ];

  const categories = [
    { name: "Attractions", icon: Camera, color: "text-primary" },
    { name: "Food", icon: Utensils, color: "text-warning" },
    { name: "Hotels", icon: Hotel, color: "text-secondary" },
    { name: "Flights", icon: Plane, color: "text-success" }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg">✈️</span>
            </div>
            <div>
              <h1 className="text-base font-semibold">Tokyo Trip</h1>
              <p className="text-xs text-muted-foreground">8 days to go</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Contextual Alerts */}
      {showWeatherAlert && (
        <section className="mb-4 mt-4">
          <AlertCard
            type="weather"
            icon="🌧️"
            headline="Rain Expected Tomorrow"
            description="Pack an umbrella - showers forecasted for Dec 2-3 in Tokyo"
            detail="Tokyo · Next 48 hours"
            primaryAction={{
              label: "View 7-Day Forecast",
              onClick: () => console.log("View forecast")
            }}
            onDismiss={() => setShowWeatherAlert(false)}
          />
        </section>
      )}

      {showBudgetAlert && (
        <section className="mb-4">
          <AlertCard
            type="budget"
            icon="🎉"
            headline="€150 Under Budget!"
            description="You are doing great! Consider exploring more activities or upgrading your experience."
            detail="Budget tracking · Updated today"
            primaryAction={{
              label: "Browse Activities",
              onClick: () => console.log("Browse activities")
            }}
            onDismiss={() => setShowBudgetAlert(false)}
          />
        </section>
      )}

      {/* Next Activity - Featured Card */}
      <section className="p-4">
        <div className="featured-card">
          <div className="relative h-40 bg-gradient-to-br from-primary/20 via-secondary/20 to-warning/20 flex items-center justify-center">
            <div className="text-6xl">🗾</div>
            <Badge variant="live" className="absolute top-3 right-3">
              <span className="mr-1">●</span> HAPPENING NOW
            </Badge>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">Visit Senso-ji Temple</h3>
                <div className="flex items-center text-sm text-muted-foreground gap-3">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    09:00 - 11:00
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    Asakusa
                  </span>
                </div>
              </div>
              <Button size="sm">
                Navigate
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-6">
        <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          <QuickActionButton
            icon={<Plane className="h-7 w-7" />}
            label="Flights"
            color="text-secondary"
            onClick={() => console.log('Flights')}
          />
          <QuickActionButton
            icon={<MessageCircle className="h-7 w-7" />}
            label="Phrases"
            color="text-primary"
            onClick={() => console.log('Phrases')}
          />
          <QuickActionButton
            icon={<Wallet className="h-7 w-7" />}
            label="Budget"
            color="text-success"
            onClick={() => console.log('Budget')}
          />
          <QuickActionButton
            icon={<Compass className="h-7 w-7" />}
            label="Tips"
            color="text-purple-500"
            onClick={() => console.log('Tips')}
          />
          <QuickActionButton
            icon={<Ticket className="h-7 w-7" />}
            label="Bookings"
            color="text-warning"
            onClick={() => console.log('Bookings')}
          />
        </div>
      </section>

      {/* Your Itinerary */}
      <section className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-semibold">Your Itinerary</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All 12 Events
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="bg-card">
          {travelEvents.slice(0, 5).map((event, index) => (
            <EventListItem
              key={index}
              {...event}
              onClick={() => console.log('Event clicked:', event.title)}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-6">
        <div className="px-4 mb-3">
          <h2 className="text-lg font-semibold">Explore</h2>
        </div>
        <div className="grid grid-cols-4 gap-3 px-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card border border-border hover:bg-muted/50 transition-colors"
            >
              <div className={`p-3 rounded-xl bg-muted ${category.color}`}>
                <category.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-semibold">Recommended for You</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
          {recommendations.map((rec, index) => (
            <div key={index} className="featured-card min-w-[240px]">
              <div className="relative h-32 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-5xl">{rec.image}</div>
              </div>
              <div className="p-3">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-semibold flex-1">{rec.title}</h4>
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <span className="text-warning">★</span>
                    <span>{rec.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {rec.location}
                </p>
                <Badge variant="outline" className="mt-2 text-[10px] px-2 py-0.5">
                  {rec.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-semibold">Upcoming Trips</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="bg-card">
          {upcomingTrips.map((trip, index) => (
            <div key={index} className="list-item">
              <div className="flex items-center gap-3">
                <div className="text-4xl">{trip.image}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold">{trip.destination}</h4>
                    <Badge variant={trip.status === 'Going' ? 'success' : 'default'} className="text-[10px] px-2 py-0.5">
                      {trip.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1.5">{trip.date}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {trip.daysUntil} days
                    </span>
                    <span className="flex items-center gap-1">
                      <Compass className="h-3 w-3" />
                      {trip.activities} activities
                    </span>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-4">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-[10px] font-medium mt-1 text-primary">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-4">
            <Compass className="h-5 w-5" />
            <span className="text-[10px] mt-1">Discover</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-4">
            <Calendar className="h-5 w-5" />
            <span className="text-[10px] mt-1">Trips</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-4">
            <MessageCircle className="h-5 w-5" />
            <span className="text-[10px] mt-1">Chat</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-4">
            <User className="h-5 w-5" />
            <span className="text-[10px] mt-1">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Index;
