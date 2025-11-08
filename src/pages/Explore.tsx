import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceCard } from "@/components/PlaceCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Utensils, Camera, Filter, Search } from "lucide-react";
import sensojiPlaceImage from "@/assets/sensoji-place.jpg";
import tokyoSkytreeImage from "@/assets/tokyo-skytree.png";
import shibuyaCrossingImage from "@/assets/shibuya-crossing-new.png";
import ichiranRamenImage from "@/assets/ichiran-ramen-new.png";
import tsukijiMarketImage from "@/assets/tsukiji-market.png";
import meijiShrineImage from "@/assets/meiji-shrine.png";

const Explore = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<"all" | "food" | "attractions">("all");

  const places = [
    {
      name: "Senso-ji Temple",
      location: "Asakusa · Tokyo",
      category: "Attraction" as const,
      rating: 4.9,
      reviewCount: "28k",
      image: sensojiPlaceImage
    },
    {
      name: "Tokyo Skytree",
      location: "Sumida · Tokyo",
      category: "Attraction" as const,
      rating: 4.8,
      reviewCount: "45k",
      image: tokyoSkytreeImage
    },
    {
      name: "Shibuya Crossing",
      location: "Shibuya · Tokyo",
      category: "Attraction" as const,
      rating: 4.7,
      reviewCount: "32k",
      image: shibuyaCrossingImage
    },
    {
      name: "Ichiran Ramen",
      location: "Shibuya · Tokyo",
      category: "Restaurant" as const,
      rating: 4.9,
      reviewCount: "18k",
      image: ichiranRamenImage
    },
    {
      name: "Tsukiji Outer Market",
      location: "Tsukiji · Tokyo",
      category: "Restaurant" as const,
      rating: 4.8,
      reviewCount: "22k",
      image: tsukijiMarketImage
    },
    {
      name: "Meiji Shrine",
      location: "Shibuya · Tokyo",
      category: "Attraction" as const,
      rating: 4.9,
      reviewCount: "38k",
      image: meijiShrineImage
    }
  ];

  const filteredPlaces = places.filter(place => {
    if (activeCategory === "all") return true;
    if (activeCategory === "food") return place.category === "Restaurant";
    if (activeCategory === "attractions") return place.category === "Attraction";
    return true;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-base font-semibold">Explore Tokyo</h1>
              <p className="text-xs text-muted-foreground">Location-aware suggestions</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Filter className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Category Filters */}
      <section className="p-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className="flex-shrink-0"
          >
            <MapPin className="h-4 w-4 mr-2" />
            All Places
          </Button>
          <Button
            variant={activeCategory === "food" ? "default" : "outline"}
            size="sm"
            onClick={() => navigate('/food')}
            className="flex-shrink-0"
          >
            <Utensils className="h-4 w-4 mr-2" />
            Food & Dining
          </Button>
          <Button
            variant={activeCategory === "attractions" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("attractions")}
            className="flex-shrink-0"
          >
            <Camera className="h-4 w-4 mr-2" />
            Attractions
          </Button>
        </div>
      </section>

      {/* Places Grid */}
      <section className="px-4">
        <div className="mb-3">
          <p className="text-sm text-muted-foreground">
            {filteredPlaces.length} places near you
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {filteredPlaces.map((place, index) => (
            <PlaceCard
              key={index}
              {...place}
              onClick={() => console.log('Place clicked:', place.name)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Explore;
