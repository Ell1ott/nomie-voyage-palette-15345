import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingChat } from "@/components/FloatingChat";
import { PageTransition } from "@/components/PageTransition";
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/chat" element={<PageTransition><Chat /></PageTransition>} />
          <Route path="/assistant" element={<PageTransition><AssistantChat /></PageTransition>} />
          <Route path="/explore" element={<PageTransition><Explore /></PageTransition>} />
          <Route path="/phrases" element={<PageTransition><Phrases /></PageTransition>} />
          <Route path="/documents" element={<PageTransition><Documents /></PageTransition>} />
          <Route path="/transit" element={<PageTransition><Transit /></PageTransition>} />
          <Route path="/food" element={<PageTransition><Food /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
          <Route path="/flight/:id" element={<PageTransition><FlightDetail /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
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
