import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventListItemProps {
  thumbnail: string;
  status: "going" | "booked" | "pending";
  category?: string;
  categoryIcon?: React.ReactNode;
  title: string;
  date: string;
  time: string;
  location: string;
  isLive?: boolean;
  isNext24Hours?: boolean;
  isPast?: boolean;
  onClick?: () => void;
}

export const EventListItem = ({
  thumbnail,
  status,
  category,
  categoryIcon,
  title,
  date,
  time,
  location,
  isLive = false,
  isNext24Hours = false,
  isPast = false,
  onClick
}: EventListItemProps) => {
  const statusColors = {
    going: "success",
    booked: "default",
    pending: "warning"
  } as const;

  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 p-4 min-h-[80px] border-b border-border transition-colors cursor-pointer hover:bg-muted/50",
        isNext24Hours && "bg-warning/5",
        isPast && "opacity-60"
      )}
    >
      {/* Left: Thumbnail with status badge */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center text-2xl overflow-hidden">
          {thumbnail}
        </div>
        <Badge
          variant={statusColors[status]}
          className="absolute -bottom-1 -right-1 text-[8px] px-1.5 py-0 h-4 capitalize"
        >
          {status}
        </Badge>
      </div>

      {/* Center: Event details */}
      <div className="flex-1 min-w-0">
        {category && (
          <div className="flex items-center gap-1 mb-1">
            {categoryIcon && <span className="text-muted-foreground">{categoryIcon}</span>}
            <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">
              {category}
            </span>
          </div>
        )}
        
        <h4 className="text-base font-semibold text-foreground mb-1 flex items-center gap-2">
          {title}
          {isLive && (
            <Badge variant="live" className="text-[8px] px-2 py-0 h-4">
              <span className="mr-1">●</span> LIVE
            </Badge>
          )}
        </h4>

        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-0.5">
          <Clock className="h-3.5 w-3.5" />
          <span>{date}, {time}</span>
        </div>

        <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{location}</span>
        </div>
      </div>

      {/* Right: Chevron */}
      <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
    </div>
  );
};
