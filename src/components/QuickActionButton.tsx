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
  return <button onClick={onClick} className="flex flex-col items-center gap-2 group">
      
      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
        {label}
      </span>
    </button>;
};