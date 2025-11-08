import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Share2, 
  Plane, 
  Calendar,
  Luggage,
  ChevronDown
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedGlobePlane from "@/components/AnimatedGlobePlane";

const FlightDetail = () => {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-base font-semibold">Flight Details</h1>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-40 rounded-b-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatedGlobePlane />
        </div>
        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-success text-white text-xs px-3 py-1">
            Confirmed
          </Badge>
        </div>
      </div>

      {/* Primary Info Card */}
      <div className="px-4 mt-4">
        <div className="bg-card rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-5">
          {/* Airline Info */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-9 w-9 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Plane className="h-4 w-4 text-secondary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Scandinavian Airlines</p>
              <p className="font-semibold text-sm">SAS 123</p>
            </div>
          </div>

          {/* Departure and Arrival */}
          <div className="mb-5">
            <div className="flex items-start justify-between mb-4">
              {/* Departure */}
              <div className="flex-1">
                <p className="text-2xl font-bold mb-0.5">14:30</p>
                <p className="text-xs mb-1 text-muted-foreground">Nov 13, 2024</p>
                <p className="text-sm font-medium">Copenhagen</p>
                <p className="text-xs text-muted-foreground">CPH · Terminal 3</p>
              </div>

              {/* Arrival */}
              <div className="flex-1 text-right">
                <p className="text-2xl font-bold mb-0.5">18:00</p>
                <p className="text-xs mb-1 text-muted-foreground">Nov 13, 2024</p>
                <p className="text-sm font-medium">Tokyo</p>
                <p className="text-xs text-muted-foreground">HND · International</p>
              </div>
            </div>

            {/* Flight Path */}
            <div className="flex items-center justify-center gap-1 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
              <div className="flex-1 border-t border-dashed border-muted-foreground"></div>
              <div className="px-2">
                <Plane className="h-3.5 w-3.5 text-muted-foreground rotate-90" />
                <p className="text-[10px] text-muted-foreground mt-0.5 whitespace-nowrap">2h 30m</p>
              </div>
              <div className="flex-1 border-t border-dashed border-muted-foreground"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-4"></div>

          {/* Passenger Info */}
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">
              Passenger
            </p>
            <p className="text-sm font-semibold mb-1">Emma Hansen</p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-mono">ABC123</span>
              <span>·</span>
              <span>Seat 12A</span>
              <span>·</span>
              <span>Economy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-4 mt-5">
        <Button className="w-full h-12 rounded-xl mb-2.5 text-sm font-semibold">
          View Boarding Pass
        </Button>
        <div className="flex items-center gap-2.5">
          <Button variant="outline" className="flex-1 rounded-xl h-11 text-xs">
            <Calendar className="h-4 w-4 mr-1.5" />
            Calendar
          </Button>
          <Button variant="outline" className="flex-1 rounded-xl h-11 text-xs">
            <Share2 className="h-4 w-4 mr-1.5" />
            Share
          </Button>
        </div>
      </div>

      {/* Gate Information */}
      <div className="px-4 mt-5">
        <div className="bg-card rounded-xl border border-border p-4">
          <h3 className="text-xs font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
            Gate & Boarding
          </h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-[10px] text-muted-foreground mb-1">Gate</p>
              <p className="text-3xl font-bold leading-none">B12</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-muted-foreground mb-1">Boarding</p>
              <p className="text-xl font-semibold leading-none">13:45</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
            <p className="text-xs text-success font-medium">On Time</p>
          </div>
        </div>
      </div>

      {/* Baggage */}
      <div className="px-4 mt-3">
        <div className="bg-card rounded-xl border border-border p-4">
          <h3 className="text-xs font-semibold mb-2.5 uppercase tracking-wide text-muted-foreground">
            Baggage
          </h3>
          <div className="flex items-center gap-2.5">
            <Luggage className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <p className="text-xs leading-relaxed">1 carry-on, 1 checked bag included</p>
          </div>
        </div>
      </div>

      {/* Important Info Accordion */}
      <div className="px-4 mt-3 space-y-2 pb-6">
        {[
          {
            id: 'checkin',
            title: 'Check-in Requirements',
            content: 'Online check-in opens 24 hours before departure. You can check in via the SAS app or website.'
          },
          {
            id: 'baggage',
            title: 'Baggage Policy',
            content: 'Economy passengers are allowed 1 carry-on bag (8kg) and 1 checked bag (23kg).'
          },
          {
            id: 'documents',
            title: 'Travel Documents',
            content: 'Please ensure you have a valid passport and any required visas for your destination.'
          }
        ].map((section) => (
          <div
            key={section.id}
            className="bg-card rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-3.5 active:bg-muted/50 transition-colors touch-manipulation"
            >
              <span className="text-xs font-semibold">{section.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-muted-foreground transition-transform flex-shrink-0",
                  expandedSection === section.id && "rotate-180"
                )}
              />
            </button>
            {expandedSection === section.id && (
              <div className="px-3.5 pb-3.5 text-xs text-muted-foreground leading-relaxed animate-fade-in">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDetail;
