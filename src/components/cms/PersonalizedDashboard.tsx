import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePersona } from "@/contexts/PersonaContext";
import { 
  FileText, 
  Image, 
  Settings, 
  Hotel, 
  MapPin, 
  Users, 
  Calendar,
  Plus,
  Edit,
  Eye,
  Mountain,
  Heart,
  Accessibility,
  Volume2,
  Type,
  Contrast,
  Brain,
  BookOpen,
  Ear
} from "lucide-react";
import CMSHeader from "@/components/cms/CMSHeader";
import ContentManager from "@/components/cms/ContentManager";
import MediaLibrary from "@/components/cms/MediaLibrary";
import SettingsPanel from "@/components/cms/SettingsPanel";

const PersonalizedDashboard = () => {
  const { persona } = usePersona();
  const [activeTab, setActiveTab] = useState("content");

  // Personalized stats based on disability type
  const getPersonalizedStats = () => {
    const baseStats = [
      { icon: FileText, label: "Content Pages", value: "24", change: "+3 this week" },
      { icon: Hotel, label: "Accessible Hotels", value: "87", change: "+5 this month" },
      { icon: MapPin, label: "Tour Locations", value: "156", change: "+12 this month" },
      { icon: Users, label: "Active Users", value: "2,341", change: "+18% this month" },
    ];

    if (!persona.disabilityType) return baseStats;

    switch (persona.disabilityType) {
      case 'wheelchair':
        return [
          { icon: Accessibility, label: "Wheelchair Accessible", value: "87", change: "+5 new verified" },
          { icon: Hotel, label: "Accessible Rooms", value: "156", change: "+12 this month" },
          { icon: MapPin, label: "Ramp Access Points", value: "234", change: "+8 this week" },
          { icon: Users, label: "Wheelchair Users", value: "892", change: "+24% this month" },
        ];
      case 'low-vision':
        return [
          { icon: Eye, label: "Audio Descriptions", value: "45", change: "+8 this week" },
          { icon: Volume2, label: "Audio Content", value: "123", change: "+15 this month" },
          { icon: Contrast, label: "High Contrast Pages", value: "67", change: "+5 this week" },
          { icon: Users, label: "Low Vision Users", value: "456", change: "+12% this month" },
        ];
      case 'cognitive':
        return [
          { icon: Brain, label: "Simplified Content", value: "34", change: "+6 this week" },
          { icon: FileText, label: "Step-by-Step Guides", value: "28", change: "+4 this month" },
          { icon: Heart, label: "Support Resources", value: "15", change: "+2 this week" },
          { icon: Users, label: "Cognitive Support Users", value: "234", change: "+18% this month" },
        ];
      case 'anxiety':
        return [
          { icon: Heart, label: "Calming Content", value: "45", change: "+7 this week" },
          { icon: Users, label: "Support Available", value: "24/7", change: "Always active" },
          { icon: FileText, label: "Stress-Free Guides", value: "32", change: "+5 this month" },
          { icon: Mountain, label: "Quiet Locations", value: "89", change: "+3 this week" },
        ];
      case 'dyslexia':
        return [
          { icon: BookOpen, label: "Dyslexia-Friendly", value: "56", change: "+9 this week" },
          { icon: Volume2, label: "Audio Versions", value: "78", change: "+12 this month" },
          { icon: Type, label: "Reading Aids", value: "34", change: "+6 this week" },
          { icon: Users, label: "Dyslexic Users", value: "567", change: "+15% this month" },
        ];
      case 'hearing':
        return [
          { icon: Ear, label: "Visual Alerts", value: "67", change: "+8 this week" },
          { icon: FileText, label: "Text Descriptions", value: "123", change: "+15 this month" },
          { icon: Eye, label: "Sign Language Videos", value: "45", change: "+5 this week" },
          { icon: Users, label: "Hearing Impaired Users", value: "389", change: "+20% this month" },
        ];
      default:
        return baseStats;
    }
  };

  const getPersonalizedWelcome = () => {
    if (!persona.disabilityType) return "Content Management";

    const messages = {
      wheelchair: "Wheelchair Accessibility Management",
      'low-vision': "Visual Accessibility Content Hub",
      cognitive: "Simplified Content Management",
      anxiety: "Supportive Content Dashboard",
      dyslexia: "Reading-Friendly Content Hub",
      hearing: "Visual Communication Center"
    };

    return messages[persona.disabilityType as keyof typeof messages] || "Content Management";
  };

  const getPersonalizedColor = () => {
    if (persona.preferences.highContrast) return "bg-black text-white";
    
    const colors = {
      wheelchair: "bg-blue-500",
      'low-vision': "bg-purple-500",
      cognitive: "bg-green-500",
      anxiety: "bg-pink-500",
      dyslexia: "bg-orange-500",
      hearing: "bg-indigo-500"
    };

    return colors[persona.disabilityType as keyof typeof colors] || "bg-primary";
  };

  const stats = getPersonalizedStats();

  const recentActivity = [
    { action: "Updated", item: `Accessible Content for ${persona.disabilityType || 'All Users'}`, time: "2 hours ago", type: "content" },
    { action: "Created", item: "Personalized Tour Guide", time: "4 hours ago", type: "tours" },
    { action: "Published", item: `${persona.disabilityType ? 'Specialized' : 'General'} Accessibility Guide`, time: "1 day ago", type: "guide" },
    { action: "Modified", item: "Support Services Page", time: "2 days ago", type: "services" },
  ];

  return (
    <div className={`min-h-screen ${persona.preferences.highContrast ? 'bg-black text-white' : 'bg-background'} ${persona.preferences.largeText ? 'text-lg' : ''}`}>
      <CMSHeader />
      
      <main className={`container mx-auto px-6 py-8 ${persona.preferences.simplifiedLayout ? 'max-w-4xl' : ''}`}>
        {/* Personalized Hero Section */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 ${getPersonalizedColor()}`} />
          <div className="relative px-8 py-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-white" />
              <span className="text-white font-semibold">CLAIRE & GEORGE</span>
            </div>
            <h1 className={`${persona.preferences.largeText ? 'text-6xl md:text-8xl' : 'text-4xl md:text-6xl'} font-bold text-white mb-4`}>
              {getPersonalizedWelcome()}
            </h1>
            <p className={`${persona.preferences.largeText ? 'text-2xl' : 'text-xl'} text-white/90 max-w-2xl mx-auto mb-8`}>
              {persona.disabilityType 
                ? `Specialized tools for ${persona.disabilityType} accessibility content`
                : "Manage your accessible Switzerland travel content with ease"
              }
            </p>
            {!persona.preferences.simplifiedLayout && (
              <Button variant="hero" size="lg" className="bg-white/20 hover:bg-white/30 text-white">
                <Plus className="h-5 w-5 mr-2" />
                Create Accessible Content
              </Button>
            )}
          </div>
        </div>

        {/* Personalized Stats Grid */}
        <div className={`grid grid-cols-1 ${persona.preferences.simplifiedLayout ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6 mb-8`}>
          {stats.map((stat, index) => (
            <Card key={index} className={`hover:shadow-alpine transition-all duration-300 ${persona.preferences.highContrast ? 'bg-gray-800 border-gray-600' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`text-sm ${persona.preferences.highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>
                      {stat.label}
                    </p>
                    <p className={`${persona.preferences.largeText ? 'text-4xl' : 'text-3xl'} font-bold ${persona.preferences.highContrast ? 'text-white' : 'text-foreground'}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-primary">{stat.change}</p>
                  </div>
                  <div className={`h-12 w-12 ${getPersonalizedColor()}/10 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${persona.preferences.highContrast ? 'text-white' : 'text-primary'}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Accessibility Features Badge */}
        {persona.disabilityType && (
          <div className="mb-8">
            <Card className={`${persona.preferences.highContrast ? 'bg-gray-800 border-gray-600' : 'bg-muted/50'}`}>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="font-semibold">Active Accessibility Features:</span>
                  {Object.entries(persona.preferences).map(([key, value]) => (
                    value && (
                      <Badge key={key} variant="secondary" className="text-xs">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </Badge>
                    )
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Main CMS Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className={`grid w-full ${persona.preferences.simplifiedLayout ? 'grid-cols-2 lg:w-fit' : 'grid-cols-4 lg:w-fit'}`}>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {persona.preferences.simplifiedLayout ? "Content" : "Content"}
            </TabsTrigger>
            {!persona.preferences.simplifiedLayout && (
              <TabsTrigger value="media" className="flex items-center gap-2">
                <Image className="h-4 w-4" />
                Media
              </TabsTrigger>
            )}
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              {persona.preferences.simplifiedLayout ? "Stats" : "Analytics"}
            </TabsTrigger>
            {!persona.preferences.simplifiedLayout && (
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <ContentManager />
          </TabsContent>

          {!persona.preferences.simplifiedLayout && (
            <TabsContent value="media" className="space-y-6">
              <MediaLibrary />
            </TabsContent>
          )}

          <TabsContent value="analytics" className="space-y-6">
            <div className={`grid grid-cols-1 ${persona.preferences.simplifiedLayout ? 'gap-6' : 'lg:grid-cols-2 gap-6'}`}>
              <Card className={persona.preferences.highContrast ? 'bg-gray-800 border-gray-600' : ''}>
                <CardHeader>
                  <CardTitle className={persona.preferences.highContrast ? 'text-white' : ''}>
                    Recent Activity
                  </CardTitle>
                  <CardDescription className={persona.preferences.highContrast ? 'text-gray-300' : ''}>
                    Latest changes to your {persona.disabilityType ? 'personalized' : ''} content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${persona.preferences.highContrast ? 'bg-gray-700' : 'bg-muted/50'}`}>
                        <div>
                          <p className={`font-medium ${persona.preferences.largeText ? 'text-lg' : ''}`}>
                            <span className="text-primary">{activity.action}</span> {activity.item}
                          </p>
                          <p className={`text-sm ${persona.preferences.highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>
                            {activity.time}
                          </p>
                        </div>
                        <Badge variant="outline">
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {!persona.preferences.simplifiedLayout && (
                <Card className={persona.preferences.highContrast ? 'bg-gray-800 border-gray-600' : ''}>
                  <CardHeader>
                    <CardTitle className={persona.preferences.highContrast ? 'text-white' : ''}>
                      Accessibility Metrics
                    </CardTitle>
                    <CardDescription className={persona.preferences.highContrast ? 'text-gray-300' : ''}>
                      Your content's accessibility impact
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">Accessibility Score</span>
                          <span className="text-sm text-primary">96/100</span>
                        </div>
                        <div className={`w-full ${persona.preferences.highContrast ? 'bg-gray-700' : 'bg-muted'} rounded-full h-2`}>
                          <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{persona.disabilityType ? 'Specialized' : 'General'} Content Views</span>
                          <span className={`text-sm ${persona.preferences.highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>+12%</span>
                        </div>
                        <div className={`w-full ${persona.preferences.highContrast ? 'bg-gray-700' : 'bg-muted'} rounded-full h-2`}>
                          <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {!persona.preferences.simplifiedLayout && (
            <TabsContent value="settings" className="space-y-6">
              <SettingsPanel />
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
};

export default PersonalizedDashboard;