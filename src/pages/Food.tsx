import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  MapPin, 
  Filter,
  Search,
  Heart,
  Navigation,
  Phone,
  Star,
  Clock,
  ChevronRight,
  Flame,
  Zap,
  DollarSign,
  Utensils,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  priceLevel: string;
  rating: number;
  reviewCount: string;
  distance: string;
  walkTime: string;
  image: string;
  isOpen: boolean;
  openUntil?: string;
  tags: string[];
  badges: Array<"trending" | "fast" | "budget" | "michelin" | "vegetarian" | "english-menu">;
  isNomiePick?: boolean;
}

const Food = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeFilters, setActiveFilters] = useState<string[]>(["Near Me"]);
  const [activeCuisines, setActiveCuisines] = useState<string[]>([]);
  const [savedRestaurants, setSavedRestaurants] = useState<Set<string>>(new Set());
  const [priceRange, setPriceRange] = useState([1, 4]);
  const [showFilters, setShowFilters] = useState(false);

  const quickFilters = ["Near Me", "Open Now", "Trending", "Budget-Friendly", "Fine Dining", "Quick Bites"];
  
  const cuisineTypes = [
    { id: "ramen", icon: "🍜", label: "Ramen" },
    { id: "sushi", icon: "🍣", label: "Sushi" },
    { id: "izakaya", icon: "🥟", label: "Izakaya" },
    { id: "cafes", icon: "☕", label: "Cafes" },
    { id: "bars", icon: "🍺", label: "Bars" },
    { id: "international", icon: "🌮", label: "International" }
  ];

  const restaurants: Restaurant[] = [
    {
      id: "1",
      name: "Ichiran Ramen",
      cuisine: "Ramen",
      priceLevel: "¥¥",
      rating: 4.7,
      reviewCount: "1.2k",
      distance: "500m",
      walkTime: "6 min",
      image: "🍜",
      isOpen: true,
      openUntil: "23:00",
      tags: ["Great for solo dining"],
      badges: ["trending", "fast"],
      isNomiePick: true
    },
    {
      id: "2",
      name: "Sushi Dai",
      cuisine: "Sushi • Traditional",
      priceLevel: "¥¥¥",
      rating: 4.9,
      reviewCount: "28k",
      distance: "300m",
      walkTime: "4 min",
      image: "🍣",
      isOpen: true,
      openUntil: "22:00",
      tags: ["Local Favorite"],
      badges: ["michelin", "english-menu"]
    },
    {
      id: "3",
      name: "Tsukiji Market Street Food",
      cuisine: "Japanese • Street Food",
      priceLevel: "¥",
      rating: 4.6,
      reviewCount: "3.5k",
      distance: "800m",
      walkTime: "10 min",
      image: "🍱",
      isOpen: true,
      openUntil: "18:00",
      tags: ["Authentic", "Quick"],
      badges: ["budget", "fast"],
      isNomiePick: true
    },
    {
      id: "4",
      name: "Cafe Kitsuné",
      cuisine: "Cafe • French",
      priceLevel: "¥¥",
      rating: 4.5,
      reviewCount: "890",
      distance: "350m",
      walkTime: "5 min",
      image: "☕",
      isOpen: true,
      openUntil: "20:00",
      tags: ["Instagram-worthy", "Cozy"],
      badges: ["vegetarian", "english-menu"]
    },
    {
      id: "5",
      name: "Gonpachi Shibuya",
      cuisine: "Izakaya • Traditional",
      priceLevel: "¥¥¥",
      rating: 4.8,
      reviewCount: "5.2k",
      distance: "600m",
      walkTime: "8 min",
      image: "🥟",
      isOpen: false,
      openUntil: "Opens at 17:00",
      tags: ["Kill Bill restaurant", "Atmosphere"],
      badges: ["english-menu"]
    }
  ];

  const badgeIcons = {
    trending: { icon: Flame, label: "Trending", color: "text-destructive" },
    fast: { icon: Zap, label: "Fast service", color: "text-warning" },
    budget: { icon: DollarSign, label: "Budget-friendly", color: "text-success" },
    michelin: { icon: Star, label: "Michelin recommended", color: "text-warning" },
    vegetarian: { icon: Utensils, label: "Vegetarian options", color: "text-success" },
    "english-menu": { icon: Info, label: "English menu", color: "text-primary" }
  };

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const toggleCuisine = (cuisine: string) => {
    setActiveCuisines(prev =>
      prev.includes(cuisine) ? prev.filter(c => c !== cuisine) : [...prev, cuisine]
    );
  };

  const toggleSaved = (id: string) => {
    setSavedRestaurants(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        toast({ title: "Removed from saved" });
      } else {
        newSet.add(id);
        toast({ title: "Saved to your list" });
      }
      return newSet;
    });
  };

  const getTimeBasedContext = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 11) return { title: "Breakfast Spots Open Now", icon: "☀️" };
    if (hour >= 11 && hour < 14) return { title: "Best Lunch Deals Nearby", icon: "🍱" };
    if (hour >= 14 && hour < 17) return { title: "Cafes for a Break", icon: "☕" };
    if (hour >= 17 && hour < 22) return { title: "Dinner Recommendations", icon: "🍽️" };
    return { title: "Late Night Eats", icon: "🌙" };
  };

  const context = getTimeBasedContext();
  const openRestaurantsCount = restaurants.filter(r => r.isOpen).length;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="text-center">
            <h1 className="text-lg font-bold">Food & Dining</h1>
            <p className="text-xs text-muted-foreground">Near you in Tokyo</p>
          </div>
          <Sheet open={showFilters} onOpenChange={setShowFilters}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Filter className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="space-y-6 mt-6">
                {/* Price Range */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Price Range</h4>
                  <div className="flex justify-between mb-2 text-xs text-muted-foreground">
                    <span>{"¥".repeat(priceRange[0])}</span>
                    <span>{"¥".repeat(priceRange[1])}</span>
                  </div>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={1}
                    max={4}
                    step={1}
                    className="mb-4"
                  />
                </div>

                {/* Distance */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Distance</h4>
                  <div className="flex gap-2">
                    {["500m", "1km", "2km", "5km", "Any"].map((dist) => (
                      <Button key={dist} variant="outline" size="sm">
                        {dist}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Dietary Preferences */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Dietary Preferences</h4>
                  <div className="space-y-2">
                    {["Vegetarian", "Vegan", "Halal", "Gluten-free"].map((pref) => (
                      <div key={pref} className="flex items-center space-x-2">
                        <Checkbox id={pref} />
                        <label htmlFor={pref} className="text-sm">
                          {pref}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h4 className="text-sm font-semibold mb-3">Minimum Rating</h4>
                  <div className="flex gap-2">
                    {["3.0+", "4.0+", "4.5+"].map((rating) => (
                      <Button key={rating} variant="outline" size="sm">
                        ⭐ {rating}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full" onClick={() => setShowFilters(false)}>
                  Apply Filters
                </Button>
                <Button variant="link" className="w-full">
                  Reset
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search restaurants, cuisines..."
              className="pl-9"
            />
          </div>
        </div>

        {/* Location Indicator */}
        <div className="px-4 pb-3">
          <Button variant="outline" size="sm" className="border-primary text-primary">
            <MapPin className="h-3 w-3 mr-1" />
            Shibuya, Tokyo
          </Button>
        </div>
      </header>

      {/* Quick Filters */}
      <section className="px-4 py-3 border-b border-border">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {quickFilters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilters.includes(filter) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleFilter(filter)}
              className="flex-shrink-0"
            >
              {filter}
            </Button>
          ))}
        </div>
      </section>

      {/* Cuisine Types */}
      <section className="px-4 py-3 border-b border-border">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide">
          {cuisineTypes.map((cuisine) => (
            <Button
              key={cuisine.id}
              variant={activeCuisines.includes(cuisine.id) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleCuisine(cuisine.id)}
              className="flex-shrink-0 flex-col h-auto py-2 px-3 gap-1"
            >
              <span className="text-xl">{cuisine.icon}</span>
              <span className="text-xs">{cuisine.label}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* Context Card */}
      <section className="p-4">
        <Card className="bg-gradient-to-br from-orange-400 to-red-500 border-0 text-white">
          <div className="p-5">
            <div className="text-5xl mb-2">{context.icon}</div>
            <h2 className="text-xl font-bold mb-2">{context.title}</h2>
            <p className="text-sm opacity-90">
              {openRestaurantsCount} restaurants open now within 1km
            </p>
          </div>
        </Card>
      </section>

      {/* Featured Restaurant */}
      {restaurants[0] && (
        <section className="px-4 mb-6">
          <h3 className="text-base font-semibold mb-3">Featured</h3>
          <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-8xl">{restaurants[1].image}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSaved(restaurants[1].id);
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    savedRestaurants.has(restaurants[1].id)
                      ? "fill-destructive text-destructive"
                      : "text-white"
                  }`}
                />
              </Button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-1">{restaurants[1].name}</h3>
                <p className="text-sm opacity-90 mb-2">{restaurants[1].cuisine} • {restaurants[1].priceLevel}</p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span>{restaurants[1].rating}</span>
                    <span className="opacity-70">({restaurants[1].reviewCount} reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm mt-2">
                  <span>{restaurants[1].distance} away • {restaurants[1].walkTime} walk</span>
                  <Badge className="bg-primary">Open Now</Badge>
                </div>
              </div>
            </div>
            <div className="p-4">
              <Button className="w-full">
                <Navigation className="h-4 w-4 mr-2" />
                Navigate
              </Button>
            </div>
          </Card>
        </section>
      )}

      {/* Restaurant List */}
      <section className="px-4">
        <h3 className="text-base font-semibold mb-3">Recommended for You</h3>
        <div className="space-y-3">
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex gap-3">
                {/* Image */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-5xl">{restaurant.image}</div>
                  </div>
                  {restaurant.isNomiePick && (
                    <Badge className="absolute top-1 left-1 text-[9px] px-1.5 py-0 bg-primary">
                      Nomie Pick
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 bg-white/80 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(restaurant.id);
                    }}
                  >
                    <Heart
                      className={`h-3 w-3 ${
                        savedRestaurants.has(restaurant.id)
                          ? "fill-destructive text-destructive"
                          : "text-muted-foreground"
                      }`}
                    />
                  </Button>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold mb-0.5">{restaurant.name}</h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {restaurant.cuisine} • {restaurant.priceLevel}
                  </p>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-muted-foreground text-xs">
                        ({restaurant.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{restaurant.distance} • {restaurant.walkTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={restaurant.isOpen ? "success" : "secondary"}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {restaurant.isOpen ? (
                        <>
                          <Clock className="h-2.5 w-2.5 mr-1" />
                          Open until {restaurant.openUntil}
                        </>
                      ) : (
                        restaurant.openUntil
                      )}
                    </Badge>
                  </div>
                  {restaurant.tags[0] && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {restaurant.tags[0]}
                    </Badge>
                  )}
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {restaurant.badges.slice(0, 2).map((badge) => {
                      const BadgeIcon = badgeIcons[badge];
                      return (
                        <div
                          key={badge}
                          className="flex items-center gap-1 text-[10px] text-muted-foreground"
                        >
                          <BadgeIcon.icon className={`h-3 w-3 ${BadgeIcon.color}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20"
                  >
                    <Navigation className="h-4 w-4 text-primary" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-muted hover:bg-muted/80"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                  <ChevronRight className="h-4 w-4 text-muted-foreground mt-auto" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Food;
