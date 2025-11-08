import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FloatingChat = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/assistant')}
      size="icon"
      className="fixed bottom-20 right-4 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg z-40 md:bottom-4 transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300" />
    </Button>
  );
};
