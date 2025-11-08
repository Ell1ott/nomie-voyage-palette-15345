import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingChat } from "@/components/FloatingChat";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import AssistantChat from "./pages/AssistantChat";
import FlightDetail from "./pages/FlightDetail";
import Explore from "./pages/Explore";
import Phrases from "./pages/Phrases";
import Documents from "./pages/Documents";
import Transit from "./pages/Transit";
import Food from "./pages/Food";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showFloatingChat = location.pathname !== '/assistant';

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/assistant" element={<AssistantChat />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/phrases" element={<Phrases />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/transit" element={<Transit />} />
        <Route path="/food" element={<Food />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFloatingChat && <FloatingChat />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
