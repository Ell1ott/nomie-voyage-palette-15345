import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div className={cn(
      "flex gap-3 px-4 py-3 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      {/* Nomie Avatar - Left side for assistant messages */}
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <span className="text-base">✈️</span>
        </div>
      )}

      {/* Message Bubble */}
      <div className={cn(
        "max-w-[75%] rounded-2xl px-4 py-2.5",
        isUser 
          ? "bg-primary text-white rounded-tr-sm" 
          : "bg-muted text-foreground rounded-tl-sm"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <p className={cn(
            "text-xs mt-1",
            isUser ? "text-white/70" : "text-muted-foreground"
          )}>
            {timestamp}
          </p>
        )}
      </div>

      {/* User Avatar - Right side for user messages */}
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-secondary">U</span>
        </div>
      )}
    </div>
  );
};
