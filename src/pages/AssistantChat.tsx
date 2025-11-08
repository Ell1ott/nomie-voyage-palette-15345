import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Plus, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AssistantChat() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim() || isStreaming) return;

    const userMessage = message.trim();
    setMessage("");

    // Add user message to chat
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    setIsStreaming(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "https://nomi-backend.fly.dev";
      const response = await fetch(`${apiUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("No reader available");
      }

      // Add an empty assistant message that we'll build up
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);

      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;

        if (value) {
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = JSON.parse(line.slice(6));

              if (data.content) {
                // Append to the last message (assistant's message)
                setMessages(prev => {
                  const newMessages = [...prev];
                  const lastMessage = newMessages[newMessages.length - 1];
                  if (lastMessage.role === "assistant") {
                    lastMessage.content += data.content;
                  }
                  return newMessages;
                });
              }

              if (data.done) {
                done = true;
                break;
              }

              if (data.error) {
                toast({
                  title: "Error",
                  description: data.error,
                  variant: "destructive",
                });
                done = true;
                break;
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      // Remove the empty assistant message if there was an error
      setMessages(prev => prev.filter(m => m.content !== ""));
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-3xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-semibold">Nomie</h1>
            <p className="text-xs text-muted-foreground">Your travel assistant</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-32">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-full">
            <motion.div
              className="w-full max-w-2xl text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <motion.div
                  className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJrZ3NlejZ4ZXlvaDRnbTR1b2VmcG1waGM1Y3hvNGU4aGE0aHcweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BkNnO2qmCWTQuac/giphy.gif"
                    alt="Nomie character"
                    className="h-full w-full rounded-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Greeting */}
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Hi Elliot! 👋</h2>
                <p className="text-muted-foreground text-lg">
                  I just noticed you arrived in Japan.
                  <br />
                  What would you like to do first?
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto py-8 space-y-6">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 bg-card rounded-full border border-border px-4 py-2 shadow-lg">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full flex-shrink-0"
            >
              <Plus className="h-5 w-5" />
            </Button>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything"
              className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              disabled={isStreaming}
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="h-10 w-10 rounded-full flex-shrink-0"
              disabled={!message.trim() || isStreaming}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
