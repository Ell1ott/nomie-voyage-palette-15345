import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventListItem } from "@/components/EventListItem";
import { QuickActionButton } from "@/components/QuickActionButton";
import { AlertCard } from "@/components/AlertCard";
import { PlaceCard } from "@/components/PlaceCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, Compass, Calendar, MessageCircle, User, MapPin, Clock, Plane, Hotel, Utensils, Camera, Map, ChevronRight, Search, Bell, Wallet, Ticket, Languages } from "lucide-react";
import sensojiImage from "@/assets/sensoji-temple.jpg";
import elliotAvatar from "@/assets/elliot-avatar.png";
import sensojiPlaceImage from "@/assets/sensoji-place.jpg";
import tokyoTripImage from "@/assets/tokyo-trip.jpg";
import parisTripImage from "@/assets/paris-trip.jpg";
import tokyoSkytreeImage from "@/assets/tokyo-skytree.png";
const Index = () => {
  const navigate = useNavigate();
  const [showWeatherAlert, setShowWeatherAlert] = useState(true);
  const [showBudgetAlert, setShowBudgetAlert] = useState(true);
  const upcomingTrips = [{
    destination: "Tokyo, Japan",
    date: "Dec 15-22, 2024",
    status: "Going",
    image: tokyoTripImage,
    daysUntil: 8,
    activities: 12
  }, {
    destination: "Paris, France",
    date: "Jan 10-17, 2025",
    status: "Planning",
    image: parisTripImage,
    daysUntil: 34,
    activities: 8
  }];
  const travelEvents = [{
    thumbnail: "✈️",
    status: "going" as const,
    category: "Flight",
    categoryIcon: <Plane className="h-3 w-3" />,
    title: "SAS Flight 123",
    date: "13 Nov",
    time: "15:00",
    location: "Copenhagen Airport",
    isNext24Hours: true
  }, {
    thumbnail: "🏨",
    status: "booked" as const,
    category: "Hotel",
    categoryIcon: <Hotel className="h-3 w-3" />,
    title: "Grand Hotel Copenhagen",
    date: "13 Nov",
    time: "Check-in 14:00",
    location: "City Center, Copenhagen"
  }, {
    thumbnail: "🗾",
    status: "going" as const,
    category: "Activity",
    categoryIcon: <Camera className="h-3 w-3" />,
    title: "Visit Senso-ji Temple",
    date: "15 Dec",
    time: "09:00",
    location: "Asakusa, Tokyo",
    isLive: true
  }, {
    thumbnail: "🍜",
    status: "booked" as const,
    category: "Restaurant",
    categoryIcon: <Utensils className="h-3 w-3" />,
    title: "Lunch at Tsukiji Market",
    date: "15 Dec",
    time: "12:30",
    location: "Tsukiji, Tokyo"
  }, {
    thumbnail: "🚄",
    status: "pending" as const,
    category: "Transport",
    categoryIcon: <Plane className="h-3 w-3" />,
    title: "Shinkansen to Kyoto",
    date: "17 Dec",
    time: "08:00",
    location: "Tokyo Station"
  }];
  const places = [{
    name: "Senso-ji Temple",
    location: "Asakusa · Tokyo",
    category: "Attraction" as const,
    rating: 4.9,
    reviewCount: "28k",
    image: sensojiPlaceImage
  }, {
    name: "Tokyo Skytree",
    location: "Sumida · Tokyo",
    category: "Attraction" as const,
    rating: 4.8,
    reviewCount: "45k",
    image: tokyoSkytreeImage
  }, {
    name: "Shibuya Crossing",
    location: "Shibuya · Tokyo",
    category: "Attraction" as const,
    rating: 4.7,
    reviewCount: "32k",
    image: "🚶"
  }, {
    name: "Ichiran Ramen",
    location: "Shibuya · Tokyo",
    category: "Restaurant" as const,
    rating: 4.9,
    reviewCount: "18k",
    image: "🍜"
  }];
  const categories = [{
    name: "Attractions",
    icon: Camera,
    color: "text-primary"
  }, {
    name: "Food",
    icon: Utensils,
    color: "text-warning"
  }, {
    name: "Phrases",
    icon: MessageCircle,
    color: "text-primary"
  }, {
    name: "Hotels",
    icon: Hotel,
    color: "text-secondary"
  }, {
    name: "Flights",
    icon: Plane,
    color: "text-success"
  }, {
    name: "Docs",
    icon: Wallet,
    color: "text-success"
  }];
  return <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <img src={elliotAvatar} alt="Elliot" className="h-full w-full object-cover" />
            </div>
            <div>
              <h1 className="text-base font-semibold">hi elliot</h1>
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
      {showWeatherAlert && <section className="mb-4 mt-4">
          <AlertCard type="weather" icon="🌧️" headline="Rain Expected Tomorrow" description="Pack an umbrella - showers forecasted for Dec 2-3 in Tokyo" detail="Tokyo · Next 48 hours" primaryAction={{
        label: "View 7-Day Forecast",
        onClick: () => console.log("View forecast")
      }} onDismiss={() => setShowWeatherAlert(false)} />
        </section>}

      {showBudgetAlert && <section className="mb-4">
          <AlertCard type="budget" icon="🎉" headline="€150 Under Budget!" description="You are doing great! Consider exploring more activities or upgrading your experience." detail="Budget tracking · Updated today" primaryAction={{
        label: "Browse Activities",
        onClick: () => console.log("Browse activities")
      }} onDismiss={() => setShowBudgetAlert(false)} />
        </section>}

      {/* Next Activity - Featured Card */}
      <section className="p-4">
        <div className="featured-card">
          <div className="relative h-40 overflow-hidden">
            <img 
              src={sensojiImage} 
              alt="Senso-ji Temple" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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
          
          <QuickActionButton icon={<MessageCircle className="h-7 w-7" />} label="Phrases" color="text-primary" onClick={() => navigate('/phrases')} />
          <QuickActionButton icon={<Wallet className="h-7 w-7" />} label="Docs" color="text-success" onClick={() => navigate('/documents')} />
          <QuickActionButton icon={<Compass className="h-7 w-7" />} label="Tips" color="text-purple-500" onClick={() => console.log('Tips')} />
          <QuickActionButton icon={<Ticket className="h-7 w-7" />} label="Bookings" color="text-warning" onClick={() => console.log('Bookings')} />
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
          {travelEvents.slice(0, 5).map((event, index) => <EventListItem key={index} {...event} onClick={() => {
          if (event.category === 'Flight') {
            navigate('/flight/123');
          } else {
            console.log('Event clicked:', event.title);
          }
        }} />)}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-6">
        <div className="px-4 mb-3">
          <h2 className="text-lg font-semibold">Explore</h2>
        </div>
        <div className="grid grid-cols-3 gap-3 px-4">
          {categories.map((category, index) => <button key={index} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-card border border-border hover:bg-muted/50 transition-colors">
              <div className={`p-3 rounded-xl bg-muted ${category.color}`}>
                <category.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium">{category.name}</span>
            </button>)}
        </div>
      </section>

      {/* Discover Places */}
      <section className="mb-6">
        <div className="px-4 mb-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Discover Tokyo</h2>
              <p className="text-sm text-muted-foreground">Popular Places</p>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {places.map((place, index) => <PlaceCard key={index} {...place} onClick={() => console.log('Place clicked:', place.name)} />)}
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
          {upcomingTrips.map((trip, index) => <div key={index} className="list-item">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  {typeof trip.image === 'string' && (trip.image.startsWith('http') || trip.image.includes('assets')) ? (
                    <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-4xl flex items-center justify-center w-full h-full">{trip.image}</div>
                  )}
                </div>
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
            </div>)}
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-3 gap-1">
            <Home className="h-5 w-5 text-primary" />
            <span className="text-[10px] font-medium text-primary">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-3 gap-1">
            <Plane className="h-5 w-5" />
            <span className="text-[10px]">Trips</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-3 gap-1" onClick={() => navigate('/explore')}>
            <Compass className="h-5 w-5" />
            <span className="text-[10px]">Explore</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-3 gap-1" onClick={() => navigate('/phrases')}>
            <Languages className="h-5 w-5" />
            <span className="text-[10px]">Language</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex-col h-auto py-2 px-3 gap-1">
            <User className="h-5 w-5" />
            <span className="text-[10px]">Profile</span>
          </Button>
        </div>
      </nav>
    </div>;
};
export default Index;