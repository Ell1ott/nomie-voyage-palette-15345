import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { ConversationInput } from "@/components/ConversationInput";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Nomie, your travel assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const suggestions = [
    "Check flight status",
    "Weather update",
    "Best restaurants nearby"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const nomieResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand you'd like help with that. Let me assist you!",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, nomieResponse]);
    }, 1000);
  };

  const handleVoiceInput = () => {
    toast({
      title: "Voice input",
      description: "Voice recording started",
    });
  };

  return (
    <>
      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[calc(100vw-2rem)] max-w-[380px] h-[70vh] max-h-[500px] bg-card border border-border rounded-2xl shadow-2xl flex flex-col z-40 animate-fade-in md:bottom-20">
          {/* Header */}
          <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-lg">✈️</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">Nomie</h3>
                <p className="text-xs text-muted-foreground truncate">Your travel assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto pb-4"
          >
            <div className="py-2">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border">
            <ConversationInput
              onSendMessage={handleSendMessage}
              onVoiceInput={handleVoiceInput}
              suggestions={suggestions}
            />
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-20 right-4 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg z-40 md:bottom-4"
      >
        {isOpen ? (
          <X className="h-5 w-5 md:h-6 md:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        )}
      </Button>
    </>
  );
};
