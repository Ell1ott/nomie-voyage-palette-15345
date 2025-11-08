import { cn } from "@/lib/utils";

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  color?: string;
  onClick?: () => void;
}

export const QuickActionButton = ({ 
  icon, 
  label, 
  color = "text-primary",
  onClick 
}: QuickActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="w-14 h-14 rounded-full bg-card shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center">
        <span className={cn("text-2xl", color)}>
          {icon}
        </span>
      </div>
      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};
