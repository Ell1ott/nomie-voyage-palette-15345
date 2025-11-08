import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  type: "weather" | "tip" | "budget" | "important";
  icon: string;
  headline: string;
  description: string;
  detail?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
  showDismissButton?: boolean;
}

const typeConfig = {
  weather: {
    gradient: "bg-gradient-to-br from-secondary/20 to-background",
    badge: "Weather",
    badgeVariant: "secondary" as const
  },
  tip: {
    gradient: "bg-gradient-to-br from-purple-100/50 to-background",
    badge: "Tip",
    badgeVariant: "outline" as const
  },
  budget: {
    gradient: "bg-gradient-to-br from-success/20 to-background",
    badge: "Budget",
    badgeVariant: "success" as const
  },
  important: {
    gradient: "bg-gradient-to-br from-primary/20 to-background",
    badge: "Alert",
    badgeVariant: "default" as const
  }
};

export const AlertCard = ({
  type,
  icon,
  headline,
  description,
  detail,
  primaryAction,
  onDismiss,
  showDismissButton = true
}: AlertCardProps) => {
  const config = typeConfig[type];

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white shadow-lg p-5 mx-4",
        config.gradient
      )}
    >
      {/* Dismiss button */}
      {showDismissButton && onDismiss && (
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-1 hover:bg-muted/50 rounded-full transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      )}

      {/* Header row */}
      <div className="flex items-start gap-3 mb-3">
        <div className="text-3xl flex-shrink-0">{icon}</div>
        <div className="flex-1 min-w-0 pt-1">
          <Badge variant={config.badgeVariant} className="text-[11px] px-2 py-0.5">
            {config.badge}
          </Badge>
        </div>
      </div>

      {/* Main content */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-foreground mb-2">
          {headline}
        </h3>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-2 line-clamp-2">
          {description}
        </p>
        {detail && (
          <p className="text-sm text-muted-foreground/80">
            {detail}
          </p>
        )}
      </div>

      {/* Action area */}
      <div className="flex items-center gap-3">
        {primaryAction && (
          <Button
            onClick={primaryAction.onClick}
            className="flex-1"
            size="sm"
          >
            {primaryAction.label}
          </Button>
        )}
        {onDismiss && !showDismissButton && (
          <button
            onClick={onDismiss}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Got it
          </button>
        )}
      </div>
    </div>
  );
};
