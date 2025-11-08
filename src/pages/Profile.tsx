import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Settings,
  FileText,
  Plane,
  Shield,
  Heart,
  ChevronRight,
  Edit,
  AlertCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import elliotAvatar from "@/assets/elliot-avatar.png";

const Profile = () => {
  const navigate = useNavigate();

  const documentationSections = [
    {
      id: "passport",
      title: "Passport Requirements",
      icon: FileText,
      iconColor: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        {
          requirement: "Valid Passport",
          description: "Must be valid for at least 6 months beyond your intended stay",
          status: "required"
        },
        {
          requirement: "Blank Pages",
          description: "At least 2 blank pages for entry/exit stamps",
          status: "required"
        },
        {
          requirement: "Passport Validity",
          description: "Check expiration date well in advance of travel",
          status: "required"
        }
      ]
    },
    {
      id: "visa",
      title: "Visa Information",
      icon: Plane,
      iconColor: "text-secondary",
      bgColor: "bg-secondary/10",
      items: [
        {
          requirement: "Japan Tourist Visa",
          description: "US, UK, EU, Canada, Australia: 90 days visa-free. Others may need visa.",
          status: "check"
        },
        {
          requirement: "Business Visa",
          description: "Required for work-related activities beyond tourism",
          status: "optional"
        },
        {
          requirement: "Working Holiday Visa",
          description: "Available for certain countries (age 18-30)",
          status: "optional"
        }
      ]
    },
    {
      id: "health",
      title: "Health & Vaccinations",
      icon: Heart,
      iconColor: "text-success",
      bgColor: "bg-success/10",
      items: [
        {
          requirement: "Routine Vaccinations",
          description: "Ensure MMR, DPT, Polio vaccines are up to date",
          status: "recommended"
        },
        {
          requirement: "Hepatitis A & B",
          description: "Recommended for travelers to Japan",
          status: "recommended"
        },
        {
          requirement: "Travel Insurance",
          description: "Highly recommended for medical emergencies",
          status: "recommended"
        }
      ]
    },
    {
      id: "customs",
      title: "Customs & Declarations",
      icon: Shield,
      iconColor: "text-warning",
      bgColor: "bg-warning/10",
      items: [
        {
          requirement: "Customs Form",
          description: "Complete on flight or at arrival - declare items over ¥200,000",
          status: "required"
        },
        {
          requirement: "Prohibited Items",
          description: "No narcotics, firearms, counterfeit goods, or certain foods",
          status: "required"
        },
        {
          requirement: "Duty-Free Limits",
          description: "400 cigarettes, 3 bottles of alcohol (750ml each), perfume 2oz",
          status: "info"
        }
      ]
    }
  ];

  const statusConfig = {
    required: { color: "bg-destructive text-white", label: "Required" },
    recommended: { color: "bg-warning text-white", label: "Recommended" },
    optional: { color: "bg-muted text-muted-foreground", label: "Optional" },
    check: { color: "bg-secondary text-white", label: "Check Requirements" },
    info: { color: "bg-primary/10 text-primary", label: "Info" }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
        <div className="flex h-14 items-center justify-between px-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-base font-semibold">Profile</h1>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Profile Info Section */}
      <section className="p-4">
        <Card className="p-5">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
              <img src={elliotAvatar} alt="Elliot" className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-xl font-bold">Elliot Hansen</h2>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Traveler · Explorer</p>
              <Badge variant="secondary" className="text-xs">
                Verified Account
              </Badge>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>elliot.hansen@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>+45 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>Copenhagen, Denmark</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span>Member since Jan 2024</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Stats */}
      <section className="px-4 mb-6">
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <p className="text-2xl font-bold text-primary mb-1">3</p>
            <p className="text-xs text-muted-foreground">Trips</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-2xl font-bold text-secondary mb-1">12</p>
            <p className="text-xs text-muted-foreground">Places</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-2xl font-bold text-success mb-1">8</p>
            <p className="text-xs text-muted-foreground">Countries</p>
          </Card>
        </div>
      </section>

      {/* Travel Documentation Section */}
      <section className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Travel Documentation Guide</h2>
          <Button variant="ghost" size="sm" onClick={() => navigate('/documents')}>
            View All
          </Button>
        </div>
        <Card className="p-4 mb-3 bg-muted/30">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-semibold mb-1">Before You Fly</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Make sure you have all required documents ready. Check requirements at least 3 months before departure.
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-3">
          {documentationSections.map((section) => (
            <Card key={section.id} className="overflow-hidden">
              <button
                onClick={() => navigate('/documents')}
                className="w-full p-4 text-left active:bg-muted/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${section.bgColor} flex-shrink-0`}>
                    <section.icon className={`h-5 w-5 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold mb-1">{section.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {section.items.length} requirement{section.items.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>

                <div className="space-y-2">
                  {section.items.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="text-xs font-medium">{item.requirement}</p>
                          <Badge className={`text-[10px] px-1.5 py-0 ${statusConfig[item.status as keyof typeof statusConfig].color}`}>
                            {statusConfig[item.status as keyof typeof statusConfig].label}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </button>
            </Card>
          ))}
        </div>
      </section>

      {/* Account Actions */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-bold mb-3">Account</h2>
        <Card className="divide-y divide-border">
          <button className="w-full p-4 flex items-center justify-between text-left active:bg-muted/50 transition-colors">
            <span className="text-sm font-medium">Saved Places</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between text-left active:bg-muted/50 transition-colors">
            <span className="text-sm font-medium">Travel Preferences</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between text-left active:bg-muted/50 transition-colors">
            <span className="text-sm font-medium">Notifications</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="w-full p-4 flex items-center justify-between text-left active:bg-muted/50 transition-colors">
            <span className="text-sm font-medium">Privacy & Security</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </Card>
      </section>
    </div>
  );
};

export default Profile;
