import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  HelpCircle, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  ChevronRight,
  Plus,
  Check,
  Camera,
  Upload,
  Phone,
  MapPin,
  FileText,
  Shield,
  Wifi,
  Lock,
  Calendar,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type DocumentStatus = "complete" | "pending" | "missing";
type TravelStatus = "all-clear" | "action-needed" | "incomplete";

interface Document {
  id: string;
  name: string;
  emoji: string;
  iconColor: string;
  status: DocumentStatus;
  expiryDate?: string;
  statusText: string;
  details?: string;
  actionText: string;
}

const Documents = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [travelStatus] = useState<TravelStatus>("action-needed");

  const documents: Document[] = [
    {
      id: "passport",
      name: "Passport",
      emoji: "🛂",
      iconColor: "bg-blue-500",
      status: "complete",
      expiryDate: "Mar 2026",
      statusText: "Valid",
      details: "Denmark 🇩🇰 • ••••• 4521",
      actionText: "View document"
    },
    {
      id: "visa",
      name: "Visa",
      emoji: "✈️",
      iconColor: "bg-purple-500",
      status: "pending",
      statusText: "Required",
      details: "eVisa • Approved in 3-5 days",
      actionText: "Apply now"
    },
    {
      id: "insurance",
      name: "Travel Insurance",
      emoji: "💳",
      iconColor: "bg-green-500",
      status: "complete",
      expiryDate: "Dec 8, 2024",
      statusText: "Active",
      details: "SafeTravel Insurance • ST-12345",
      actionText: "View policy"
    },
    {
      id: "vaccination",
      name: "Vaccinations",
      emoji: "💉",
      iconColor: "bg-orange-500",
      status: "complete",
      statusText: "Up to date",
      details: "None required for Japan",
      actionText: "View records"
    },
    {
      id: "driver-license",
      name: "Driver's License",
      emoji: "🚗",
      iconColor: "bg-coral-500",
      status: "missing",
      statusText: "Optional",
      details: "International Driving Permit",
      actionText: "Tap to add details"
    }
  ];

  const statusConfig = {
    "all-clear": {
      gradient: "bg-gradient-to-br from-green-400 to-emerald-500",
      icon: <CheckCircle className="h-16 w-16 text-white" />,
      headline: "You're All Set for Tokyo!",
      subtext: "All required documents are ready for your trip"
    },
    "action-needed": {
      gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
      icon: <AlertTriangle className="h-16 w-16 text-white" />,
      headline: "Visa Required for Entry",
      subtext: "Complete your visa application to ensure smooth travel"
    },
    "incomplete": {
      gradient: "bg-gradient-to-br from-red-400 to-rose-500",
      icon: <XCircle className="h-16 w-16 text-white" />,
      headline: "Documents Incomplete",
      subtext: "Several documents need your attention"
    }
  };

  const currentStatus = statusConfig[travelStatus];

  const countryRequirements = [
    {
      id: "visa",
      icon: "🛂",
      title: "Visa Requirements",
      description: "eVisa required for Danish passport holders visiting Japan for tourism"
    },
    {
      id: "customs",
      icon: "📦",
      title: "Customs Regulations",
      description: "Declare items over ¥200,000. No restrictions on electronics"
    },
    {
      id: "quarantine",
      icon: "🏥",
      title: "Quarantine Rules",
      description: "No quarantine required. Health declaration form needed"
    },
    {
      id: "currency",
      icon: "💴",
      title: "Currency Restrictions",
      description: "Declare cash amounts over ¥1,000,000 or equivalent"
    }
  ];

  const quickActions = [
    { icon: FileText, label: "Apply for Visa", color: "text-primary" },
    { icon: Camera, label: "Scan Passport", color: "text-primary" },
    { icon: Shield, label: "Add Insurance", color: "text-primary" }
  ];

  const handleDocumentClick = (doc: Document) => {
    toast({
      title: doc.name,
      description: `Opening ${doc.name.toLowerCase()} details...`,
    });
  };

  const handleUpload = (type: string) => {
    toast({
      title: "Upload Document",
      description: `Opening ${type}...`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-bold">Travel Documents</h1>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Required Documents */}
      <section className="px-4 pt-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold">Required Documents</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            <span>Encrypted & Private</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {documents.map((doc) => (
            <Card 
              key={doc.id} 
              className="p-5 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleDocumentClick(doc)}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-full ${doc.iconColor} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {doc.emoji}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold mb-1">{doc.name}</h4>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge 
                      variant={
                        doc.status === "complete" ? "success" : 
                        doc.status === "pending" ? "default" : 
                        "secondary"
                      }
                      className="text-[10px]"
                    >
                      {doc.statusText}
                    </Badge>
                    {doc.expiryDate && (
                      <span className="text-xs text-muted-foreground">
                        Expires {doc.expiryDate}
                      </span>
                    )}
                  </div>
                  {doc.details && (
                    <p className="text-xs text-muted-foreground">{doc.details}</p>
                  )}
                  <p className="text-[13px] text-muted-foreground mt-1">
                    {doc.actionText}
                  </p>
                </div>

                {/* Status Icon */}
                <div className="flex items-center gap-2">
                  {doc.status === "complete" && (
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  )}
                  {doc.status === "pending" && (
                    <div className="w-6 h-6 rounded-full bg-warning flex items-center justify-center">
                      <AlertTriangle className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  {doc.status === "missing" && (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>

              {/* Visa Progress Bar */}
              {doc.id === "visa" && doc.status === "pending" && (
                <div className="mt-3 pt-3 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Application progress</span>
                    <span className="text-xs font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-1.5" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-6">
        <div className="px-4 mb-3">
          <h3 className="text-base font-semibold">Quick Actions</h3>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto scrollbar-hide">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex-col h-auto py-3 px-4 min-w-[100px] gap-2"
              onClick={() => handleUpload(action.label)}
            >
              <action.icon className={`h-6 w-6 ${action.color}`} />
              <span className="text-xs text-center">{action.label}</span>
            </Button>
          ))}
        </div>
      </section>

      {/* Country Requirements */}
      <section className="px-4 mb-6">
        <div className="mb-3 flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary" />
          <h3 className="text-base font-semibold">Japan Entry Requirements</h3>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {countryRequirements.map((req) => (
            <AccordionItem key={req.id} value={req.id} className="border-0">
              <Card>
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{req.icon}</span>
                    <span className="text-sm font-semibold text-left">{req.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <p className="text-sm text-muted-foreground mb-2">{req.description}</p>
                  <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                    Learn More →
                  </Button>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Document Upload */}
      <section className="px-4 mb-6">
        <Card className="p-4">
          <h4 className="text-sm font-semibold mb-3">Add Documents</h4>
          <div className="grid grid-cols-3 gap-2">
            <Button 
              variant="outline" 
              className="flex-col h-auto py-3 gap-2"
              onClick={() => handleUpload("camera")}
            >
              <Camera className="h-5 w-5" />
              <span className="text-xs">Scan</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex-col h-auto py-3 gap-2"
              onClick={() => handleUpload("photos")}
            >
              <Upload className="h-5 w-5" />
              <span className="text-xs">Upload</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex-col h-auto py-3 gap-2"
              onClick={() => handleUpload("manual")}
            >
              <FileText className="h-5 w-5" />
              <span className="text-xs">Manual</span>
            </Button>
          </div>
        </Card>
      </section>

      {/* Emergency Contacts */}
      <section className="px-4 mb-6">
        <Card className="p-4 bg-destructive/5 border-destructive/20">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold mb-1">Emergency Contacts</h4>
              <p className="text-sm font-medium mb-1">Danish Embassy Tokyo</p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <Phone className="h-3 w-3" />
                <span>+81-3-xxxx-xxxx</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>4-6-3 Shirokane, Minato-ku, Tokyo</span>
              </div>
            </div>
          </div>
          <Button variant="destructive" className="w-full" size="sm">
            <Phone className="h-4 w-4 mr-2" />
            Call Embassy
          </Button>
        </Card>
      </section>

      {/* Offline Access */}
      <section className="px-4 mb-6">
        <Card className="p-3 bg-success/5 border-success/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-success" />
              <span className="text-sm font-medium">Available Offline</span>
              <Check className="h-4 w-4 text-success" />
            </div>
            <span className="text-xs text-muted-foreground">Synced 2 min ago</span>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Documents;
