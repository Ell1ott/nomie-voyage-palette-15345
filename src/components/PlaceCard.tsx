import { MapPin, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PlaceCardProps {
  name: string;
  location: string;
  category: "Attraction" | "Restaurant" | "Hotel";
  rating: number;
  reviewCount: string;
  image: string;
  discount?: string;
  available?: boolean;
  onClick?: () => void;
}

const categoryColors = {
  Attraction: "bg-secondary/90 text-white",
  Restaurant: "bg-warning/90 text-white",
  Hotel: "bg-success/90 text-white"
};

export const PlaceCard = ({
  name,
  location,
  category,
  rating,
  reviewCount,
  image,
  discount,
  available,
  onClick
}: PlaceCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="featured-card min-w-[280px] w-[280px] h-[320px] flex flex-col cursor-pointer snap-start"
      onClick={onClick}
    >
      {/* Image Section - 60% */}
      <div className="relative h-[60%] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
          <div className="text-7xl">{image}</div>
        </div>
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Category Badge - Top Left */}
        <div className="absolute top-3 left-3">
          <Badge className={cn("text-[10px] px-2 py-1", categoryColors[category])}>
            {category}
          </Badge>
        </div>

        {/* Favorite Heart - Top Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-colors",
              isFavorite ? "fill-destructive text-destructive" : "text-muted-foreground"
            )}
          />
        </button>
      </div>

      {/* Content Section - 40% */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-card">
        <div>
          {/* Title Area */}
          <h3 className="text-base font-semibold mb-1 line-clamp-1">{name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>

          {/* Rating Row */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="text-sm font-semibold">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">{reviewCount} Reviews</span>
            {discount && (
              <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                {discount}
              </Badge>
            )}
          </div>

          {/* Quick Info */}
          {available && (
            <div className="flex items-center gap-1 text-xs text-success">
              <div className="w-1.5 h-1.5 rounded-full bg-success" />
              <span>Room available</span>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <Button 
          size="sm" 
          className="w-full mt-2"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Book now:', name);
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};
