import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Users, Star, Mountain } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";

const ToursPage = () => {
  const { disabilityType } = usePersona();
  const getToursForDisability = () => {
    if (disabilityType === 'wheelchair') {
      return [
        {
          id: 1,
          name: "Wheelchair Accessible Alpine Experience",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 4 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Wheelchair accessible trains", "Professional wheelchair guide", "Adapted viewing platforms", "Glacier experience"],
          description: "Experience the breathtaking beauty of the Swiss Alps with our fully wheelchair accessible tour to Jungfraujoch."
        },
        {
          id: 2,
          name: "Accessible Rhine Falls Adventure",
          location: "Schaffhausen",
          duration: "Half Day (4 hours)",
          groupSize: "Max 6 people", 
          price: "CHF 280",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=300&fit=crop",
          highlights: ["Wheelchair accessible boat rides", "Close-up waterfall viewing", "Accessible paths", "Wheelchair photography assistance"],
          description: "Visit Europe's most powerful waterfall with specially designed wheelchair accessible viewing platforms."
        }
      ];
    } else if (disabilityType === 'low-vision') {
      return [
        {
          id: 1,
          name: "Tactile Swiss Alps Experience",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 4 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Audio descriptions", "Tactile experiences", "Sound mapping", "Specialized guide"],
          description: "Discover the Swiss Alps through enhanced sensory experiences designed for low vision travelers."
        }
      ];
    } else {
      return [
        {
          id: 1,
          name: "Swiss Alpine Experience",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 8 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Professional guide", "Scenic viewing platforms", "Glacier experience", "Cultural insights"],
          description: "Experience the breathtaking beauty of the Swiss Alps with our comprehensive tour to Jungfraujoch."
        },
        {
          id: 2,
          name: "Rhine Falls Adventure",
          location: "Schaffhausen",
          duration: "Half Day (4 hours)",
          groupSize: "Max 10 people", 
          price: "CHF 280",
          rating: 4.7,
          image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400&h=300&fit=crop",
          highlights: ["Boat rides", "Close-up waterfall viewing", "Nature walks", "Photography opportunities"],
          description: "Visit Europe's most powerful waterfall with comprehensive viewing experiences."
        }
      ];
    }
  };

  const tours = getToursForDisability();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="bg-primary text-white rounded-lg p-2 mr-3">
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-foreground">Claire & George</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +41 31 301 55 65
              </span>
              <Link to="/cms" className="text-primary hover:underline">
                CMS
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Mountain className="h-8 w-8 mr-3" />
            <span className="text-lg font-semibold">ACCESSIBLE TOURS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Accessible Tour of Switzerland
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the stunning beauty of Switzerland with our specially designed accessible tours. 
            Every detail is planned to ensure comfort, safety, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <div className="md:flex">
                  {/* Tour Image */}
                  <div className="md:w-2/5">
                    <div className="aspect-[4/3] md:h-full relative overflow-hidden">
                      <img 
                        src={tour.image} 
                        alt={tour.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3E" + tour.name + "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(tour.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-1 text-xs font-semibold text-gray-700">{tour.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tour Details */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{tour.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{tour.groupSize}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{tour.description}</p>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-blue-600">{tour.price}</div>
                        <div className="text-xs text-gray-500">per person</div>
                      </div>
                    </div>

                    {/* Tour Highlights */}
                    <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sm mb-3 text-blue-700">Tour Highlights</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {tour.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accessibility Badge */}
                    {disabilityType && (
                      <div className="mb-4">
                        <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                          ✓ {disabilityType === 'wheelchair' ? 'Wheelchair Accessible' : 
                             disabilityType === 'low-vision' ? 'Low Vision Friendly' : 
                             'Accessibility Adapted'}
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                        Book Tour
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4">
                        View Itinerary
                      </Button>
                      <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4">
                        <Mail className="h-4 w-4 mr-2" />
                        Ask Questions
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Tours */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose Our Accessible Tours?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our experienced guides are trained in accessibility assistance and local expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Carefully Selected Routes</h3>
              <p className="text-muted-foreground">
                Every location is personally tested for accessibility and safety standards.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentic Swiss Experience</h3>
              <p className="text-muted-foreground">
                Experience the real Switzerland while ensuring comfort and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Ready for Your Swiss Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific needs and preferences. 
            We'll create a customized tour experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow">
              <Phone className="h-5 w-5 mr-2" />
              Call +41 31 301 55 65
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="h-5 w-5 mr-2" />
              Email for Custom Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary text-white rounded-lg p-2 mr-3">
              <span className="font-bold text-lg">C&G</span>
            </div>
            <div>
              <h3 className="font-bold text-xl">Claire & George</h3>
            </div>
          </div>
          <p className="text-gray-300 mb-4">
            Creating unforgettable accessible travel experiences in Switzerland
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/hotels" className="hover:text-primary">Hotels</Link>
            <Link to="/care-services" className="hover:text-primary">Care Services</Link>
            <Link to="/cms" className="hover:text-primary">CMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToursPage;