import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Trash2,
  Eye,
  Mountain,
  Heart
} from "lucide-react";
import CMSHeader from "@/components/cms/CMSHeader";
import ContentManager from "@/components/cms/ContentManager";
import MediaLibrary from "@/components/cms/MediaLibrary";
import SettingsPanel from "@/components/cms/SettingsPanel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("content");

  const stats = [
    { icon: FileText, label: "Content Pages", value: "24", change: "+3 this week" },
    { icon: Hotel, label: "Hotels Listed", value: "87", change: "+5 this month" },
    { icon: MapPin, label: "Tour Locations", value: "156", change: "+12 this month" },
    { icon: Users, label: "Active Users", value: "2,341", change: "+18% this month" },
  ];

  const recentActivity = [
    { action: "Updated", item: "Accessible Hotels in Zurich", time: "2 hours ago", type: "hotels" },
    { action: "Created", item: "Alpine Wheelchair Tour", time: "4 hours ago", type: "tours" },
    { action: "Published", item: "Summer Accessibility Guide", time: "1 day ago", type: "content" },
    { action: "Modified", item: "Care Services Page", time: "2 days ago", type: "services" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CMSHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section with Alpine Background */}
        <div className="relative mb-12 rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/src/assets/harderkulm-hero.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-mountain" />
          <div className="relative px-8 py-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">CLAIRE & GEORGE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Content Management
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Manage your accessible Switzerland travel content with ease
            </p>
            <Button variant="hero" size="lg" className="bg-primary hover:bg-primary-glow text-white">
              <Plus className="h-5 w-5 mr-2" />
              Create New Content
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-alpine transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-primary">{stat.change}</p>
                  </div>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CMS Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Media
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            <ContentManager />
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <MediaLibrary />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest changes to your content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div>
                          <p className="font-medium">
                            <span className="text-primary">{activity.action}</span> {activity.item}
                          </p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                        <Badge variant="outline">
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Your content's impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Page Views</span>
                        <span className="text-sm text-muted-foreground">+12%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Accessibility Score</span>
                        <span className="text-sm text-primary">96/100</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '96%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">User Engagement</span>
                        <span className="text-sm text-muted-foreground">+8%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '74%' }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SettingsPanel />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;