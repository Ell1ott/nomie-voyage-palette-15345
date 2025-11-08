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
    badge: "Rain",
    badgeVariant: "destructive" as const
  },
  tip: {
    badge: "Tip",
    badgeVariant: "outline" as const
  },
  budget: {
    badge: "Budget",
    badgeVariant: "success" as const
  },
  important: {
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
    <div className="mx-4">
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start gap-3 mb-2">
            <div className="text-2xl flex-shrink-0">{icon}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-semibold text-foreground">{headline}</h4>
                <Badge variant={config.badgeVariant} className="text-[10px] px-2 py-0.5">
                  {config.badge}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-1.5 line-clamp-2">
                {description}
              </p>
              {detail && (
                <p className="text-xs text-muted-foreground/80">
                  {detail}
                </p>
              )}
            </div>
            {/* Dismiss button */}
            {showDismissButton && onDismiss && (
              <button
                onClick={onDismiss}
                className="p-1 hover:bg-muted/50 rounded-full transition-colors flex-shrink-0"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            )}
          </div>

          {/* Action area */}
          {primaryAction && (
            <div className="mt-3">
              <Button
                onClick={primaryAction.onClick}
                className="w-full"
                size="sm"
              >
                {primaryAction.label}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
