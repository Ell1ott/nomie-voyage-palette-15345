import { useState, useEffect } from "react";
import { Mic, Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ConversationInputProps {
  onSendMessage: (message: string) => void;
  onVoiceInput?: () => void;
  suggestions?: string[];
}

export const ConversationInput = ({
  onSendMessage,
  onVoiceInput,
  suggestions = []
}: ConversationInputProps) => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleVoiceInput = () => {
    setIsRecording(!isRecording);
    onVoiceInput?.();
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSendMessage(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="fixed bottom-16 left-0 right-0 z-40 bg-card border-t border-border">
      {/* Suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-xs font-medium whitespace-nowrap transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {/* Input Bar */}
      <div className={cn(
        "px-3 transition-all duration-200",
        isRecording ? "py-4" : "py-3"
      )}>
        <div className="flex items-center gap-2">
          {/* Attach Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full bg-muted flex-shrink-0"
          >
            <Plus className="h-5 w-5 text-muted-foreground" />
          </Button>

          {/* Input Field */}
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isRecording ? "Listening..." : "Ask Nomie anything..."}
              className="w-full h-11 px-4 bg-muted rounded-3xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              disabled={isRecording}
            />
            
            {/* Waveform Animation when Recording */}
            {isRecording && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 20 + 8}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: '0.8s'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Voice/Send Button */}
          {message.trim() ? (
            <Button
              onClick={handleSend}
              size="icon"
              className="h-11 w-11 rounded-full bg-primary hover:bg-primary/90 flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          ) : (
            <Button
              onClick={handleVoiceInput}
              variant="ghost"
              size="icon"
              className={cn(
                "h-11 w-11 rounded-full flex-shrink-0 transition-all",
                isRecording ? "bg-primary text-white animate-pulse" : "bg-muted"
              )}
            >
              <Mic className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
