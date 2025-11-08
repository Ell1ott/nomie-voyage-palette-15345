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
      <div className="relative h-48 bg-gradient-to-br from-secondary/30 via-primary/20 to-warning/20 rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-7xl">✈️</div>
        </div>
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-success text-white">
            Confirmed
          </Badge>
        </div>
      </div>

      {/* Primary Info Card */}
      <div className="px-4 -mt-8">
        <div className="bg-card rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6">
          {/* Airline Info */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
              <Plane className="h-4 w-4 text-secondary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Scandinavian Airlines</p>
              <p className="font-semibold">SAS 123</p>
            </div>
          </div>

          {/* Departure and Arrival */}
          <div className="grid grid-cols-[1fr,auto,1fr] gap-4 mb-6">
            {/* Departure */}
            <div>
              <p className="text-3xl font-bold mb-1">14:30</p>
              <p className="text-sm mb-1">Nov 13, 2024</p>
              <p className="text-sm font-medium">Copenhagen Airport</p>
              <p className="text-xs text-muted-foreground">Terminal 3</p>
            </div>

            {/* Flight Path */}
            <div className="flex flex-col items-center justify-center px-2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                <div className="w-12 border-t-2 border-dashed border-muted-foreground"></div>
                <Plane className="h-4 w-4 text-muted-foreground rotate-90" />
                <div className="w-12 border-t-2 border-dashed border-muted-foreground"></div>
                <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">2h 30m</p>
            </div>

            {/* Arrival */}
            <div className="text-right">
              <p className="text-3xl font-bold mb-1">18:00</p>
              <p className="text-sm mb-1">Nov 13, 2024</p>
              <p className="text-sm font-medium">Haneda Airport</p>
              <p className="text-xs text-muted-foreground">International</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-6"></div>

          {/* Passenger Info */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
              Passenger
            </p>
            <p className="text-base font-semibold mb-1">Emma Hansen</p>
            <p className="text-sm font-mono mb-1">ABC123</p>
            <p className="text-sm text-muted-foreground">12A · Economy</p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-4 mt-6">
        <Button className="w-full h-12 rounded-xl mb-3">
          View Boarding Pass
        </Button>
        <div className="flex items-center justify-between gap-4">
          <Button variant="outline" className="flex-1 rounded-xl">
            <Calendar className="h-4 w-4 mr-2" />
            Add to Calendar
          </Button>
          <Button variant="outline" className="flex-1 rounded-xl">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Gate Information */}
      <div className="px-4 mt-6">
        <div className="bg-card rounded-2xl border border-border p-5">
          <h3 className="text-sm font-semibold mb-3">Gate & Boarding</h3>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Gate</p>
              <p className="text-3xl font-bold">B12</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Boarding Time</p>
              <p className="text-lg font-semibold">13:45</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <p className="text-sm text-success font-medium">On Time</p>
          </div>
        </div>
      </div>

      {/* Baggage */}
      <div className="px-4 mt-4">
        <div className="bg-card rounded-2xl border border-border p-5">
          <h3 className="text-sm font-semibold mb-3">Baggage</h3>
          <div className="flex items-center gap-3">
            <Luggage className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm">1 carry-on, 1 checked bag included</p>
          </div>
        </div>
      </div>

      {/* Important Info Accordion */}
      <div className="px-4 mt-4 space-y-2">
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
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
            >
              <span className="text-sm font-semibold">{section.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  expandedSection === section.id && "rotate-180"
                )}
              />
            </button>
            {expandedSection === section.id && (
              <div className="px-4 pb-4 text-sm text-muted-foreground animate-fade-in">
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
