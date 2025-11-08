import { MapPin, Utensils, Camera, Music, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RecommendationCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location?: string;
}

const categoryConfig = {
  dining: {
    label: "Dining",
    icon: Utensils,
    color: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
  attraction: {
    label: "Attraction",
    icon: Camera,
    color: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  entertainment: {
    label: "Entertainment",
    icon: Music,
    color: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
  },
  other: {
    label: "Other",
    icon: MapPin,
    color: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
  },
};

export function RecommendationCard({
  title,
  description,
  category,
  imageUrl,
  location,
}: RecommendationCardProps) {
  const config = categoryConfig[category as keyof typeof categoryConfig] || {
    label: category,
    icon: MapPin,
    color: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
  };

  const Icon = config.icon;

  const handleOpenInMaps = () => {
    if (location) {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
      window.open(mapsUrl, "_blank");
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          <Badge className={`${config.color} border-0 font-medium`}>
            <Icon className="w-3 h-3 mr-1.5" />
            {config.label}
          </Badge>
        </div>
        {location && (
          <button
            onClick={handleOpenInMaps}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 flex items-center justify-center group"
            aria-label="Open in Maps"
          >
            <Navigation className="w-4 h-4 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
}
