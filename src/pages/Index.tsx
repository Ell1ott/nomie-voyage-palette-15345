import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Bell
} from "lucide-react";

const Index = () => {
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

  const todayItinerary = [
    {
      time: "09:00",
      title: "Visit Senso-ji Temple",
      location: "Asakusa, Tokyo",
      type: "attraction",
      icon: Camera,
      live: true
    },
    {
      time: "12:30",
      title: "Lunch at Tsukiji Market",
      location: "Tsukiji, Tokyo",
      type: "food",
      icon: Utensils
    },
    {
      time: "15:00",
      title: "Explore Shibuya Crossing",
      location: "Shibuya, Tokyo",
      type: "attraction",
      icon: Map
    },
    {
      time: "18:30",
      title: "Dinner Reservation",
      location: "Shinjuku, Tokyo",
      type: "food",
      icon: Utensils
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

      {/* Next Flight - Large Featured Card */}
      <section className="px-4 pt-4 pb-6">
        <h2 className="text-lg font-semibold mb-3">Next Up</h2>
        <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}>
          {/* Background with gradient overlay */}
          <div className="relative aspect-video bg-gradient-to-br from-primary via-secondary/80 to-warning">
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Decorative airplane emoji as background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-9xl">✈️</span>
            </div>

            {/* Content overlay */}
            <div className="relative h-full p-5 flex flex-col justify-between">
              {/* Top section */}
              <div className="flex items-start justify-between">
                {/* Airline logo */}
                <div className="w-6 h-6 rounded bg-white/90 flex items-center justify-center">
                  <Plane className="h-4 w-4 text-primary" />
                </div>
                
                {/* Status badge */}
                <Badge className="bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-xl">
                  Boarding in 2h
                </Badge>
              </div>

              {/* Bottom section - Flight details */}
              <div className="space-y-2">
                {/* On Time status */}
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-white/90 text-sm font-medium">On Time</span>
                </div>

                {/* Flight route */}
                <div className="space-y-1">
                  <h3 className="text-white font-bold text-[22px] leading-tight">
                    Copenhagen → Tokyo
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    CPH → HND
                  </p>
                </div>

                {/* Time and location info */}
                <div className="flex items-center gap-4 pt-1">
                  <div className="flex items-center gap-1.5 text-white">
                    <Clock className="h-4 w-4" />
                    <span className="text-base font-medium">Today, 14:30</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Terminal 3, Gate B12</span>
                </div>

                {/* Action button */}
                <div className="pt-2">
                  <Button 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary h-10 px-6 font-semibold"
                  >
                    View Boarding Pass
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Itinerary */}
      <section className="mb-6">
        <div className="flex items-center justify-between px-4 mb-3">
          <h2 className="text-lg font-semibold">Today's Itinerary</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="bg-card">
          {todayItinerary.map((item, index) => (
            <div key={index} className="list-item">
              <div className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="text-xs font-medium text-muted-foreground min-w-[40px]">
                    {item.time}
                  </div>
                  {index < todayItinerary.length - 1 && (
                    <div className="w-px h-12 bg-border mt-2" />
                  )}
                </div>
                <div className={`p-2 rounded-xl ${
                  item.type === 'food' ? 'bg-warning/10' : 'bg-secondary/10'
                } mt-0.5`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium mb-1 flex items-center gap-2">
                        {item.title}
                        {item.live && <Badge variant="live" className="text-[10px] px-2 py-0">LIVE</Badge>}
                      </h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
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
