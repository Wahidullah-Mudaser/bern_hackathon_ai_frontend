import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Wifi, Car, Utensils, Accessibility, Star, MapPin } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";

const HotelsPage = () => {
  const { disabilityType } = usePersona();

  // All hotels data - general and wheelchair-specific
  const allHotels = [
    // General hotels for all disabilities
    {
      id: 1,
      name: "Swiss Alpine Resort",
      location: "Interlaken",
      rating: 4.8,
      price: "CHF 280-450",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      features: ["Modern facilities", "Beautiful views", "Excellent service", "Central location"],
      amenities: ["Free WiFi", "Restaurant", "Spa", "Pool"],
      description: "Luxury resort in the heart of the Swiss Alps with beautiful mountain views.",
      type: "general"
    },
    {
      id: 2,
      name: "Lakeside Boutique Hotel",
      location: "Lake Geneva",
      rating: 4.6,
      price: "CHF 220-380",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["Lake views", "Modern amenities", "Peaceful location", "Quality service"],
      amenities: ["Free WiFi", "Restaurant", "Parking", "Lake view"],
      description: "Beautiful lakeside location with stunning views and modern accommodations.",
      type: "general"
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      location: "Zermatt",
      rating: 4.7,
      price: "CHF 350-520",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      features: ["Mountain views", "Ski access", "Traditional design", "Premium location"],
      amenities: ["Free WiFi", "Restaurant", "Ski access", "Mountain views"],
      description: "Premier mountain lodge with stunning Matterhorn views and ski access.",
      type: "general"
    },
    // Wheelchair-specific hotels from Claire & George
    {
      id: 4,
      name: "Victoria-Jungfrau Grand Hotel & Spa",
      location: "Interlaken",
      rating: 5.0,
      price: "CHF 339-699",
      image: "https://wp.claireundgeorge.ch/res/img/144/Aussenansicht-mit-neuer-Terrasse.jpg",
      features: ["Barrier-free public areas", "Wheelchair accessible toilet", "Barrier-free rooms", "Roll-in shower"],
      amenities: ["Free WiFi", "Spa", "Restaurant", "Concierge"],
      description: "Five-star luxury hotel with complete wheelchair accessibility in Interlaken.",
      type: "wheelchair"
    },
    {
      id: 5,
      name: "Lenkerhof Gourmet Spa Resort",
      location: "Lenk im Simmental",
      rating: 5.0,
      price: "CHF 160-850",
      image: "https://wp.claireundgeorge.ch/res/img/80/Lenkerhof_Winter_Terrasse.jpg",
      features: ["Accessible public areas", "Accessible toilets", "Accessible rooms", "Roll-in shower"],
      amenities: ["Gourmet restaurant", "Spa", "Free WiFi", "Mountain views"],
      description: "Five-star gourmet spa resort with full accessibility in the Bernese Oberland.",
      type: "wheelchair"
    },
    {
      id: 6,
      name: "Hotel Savoy Bern",
      location: "Bern",
      rating: 4.0,
      price: "From CHF 230",
      image: "https://wp.claireundgeorge.ch/res/img/104/DSC1062.jpg",
      features: ["Barrier-free public areas", "Wheelchair accessible toilet", "Accessible rooms", "Roll-in shower"],
      amenities: ["Free WiFi", "Restaurant", "Bar", "City center location"],
      description: "Four-star hotel in Bern city center with complete wheelchair accessibility.",
      type: "wheelchair"
    },
    {
      id: 7,
      name: "Hotel Allegra",
      location: "Pontresina",
      rating: 3.0,
      price: "CHF 145-600",
      image: "https://wp.claireundgeorge.ch/res/img/118/2024_Hotel_Allegra_aussen_Sommer-rG.jpg",
      features: ["Barrier-free public areas", "Wheelchair accessible toilet", "Accessible rooms", "Roll-in shower"],
      amenities: ["Free WiFi", "Restaurant", "Mountain location", "Alpine views"],
      description: "Three-star mountain hotel in Graubünden with wheelchair accessibility.",
      type: "wheelchair"
    },
    {
      id: 8,
      name: "Hotel Heiden - Wellness am Bodensee",
      location: "Heiden",
      rating: 4.0,
      price: "CHF 195-450",
      image: "https://wp.claireundgeorge.ch/res/img/138/Lobby.png",
      features: ["Barrier-free public areas", "Wheelchair accessible toilet", "Accessible rooms", "Roll-in shower"],
      amenities: ["Wellness area", "Lake views", "Restaurant", "Free WiFi"],
      description: "Four-star wellness hotel with wheelchair accessibility and Lake Constance views.",
      type: "wheelchair"
    }
  ];

  // Filter hotels based on disability type
  const hotels = useMemo(() => {
    if (disabilityType === 'wheelchair') {
      return allHotels.filter(hotel => hotel.type === 'wheelchair');
    }
    // For other disabilities or no selection, show all hotels
    return allHotels;
  }, [disabilityType]);

  // Dynamic hero content based on disability type
  const getHeroContent = () => {
    if (disabilityType === 'wheelchair') {
      return {
        title: "Wheelchair Accessible Hotels in Switzerland",
        description: "Discover our carefully selected collection of wheelchair accessible hotels throughout Switzerland, all verified for excellent accessibility standards."
      };
    }
    return {
      title: "Accessible Hotels in Switzerland",
      description: "Discover our collection of accessible hotels and accommodations throughout Switzerland, designed to meet diverse accessibility needs."
    };
  };

  const heroContent = getHeroContent();

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {heroContent.title}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {heroContent.description}
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-200">
                <div className="md:flex">
                  {/* Hotel Image */}
                  <div className="md:w-2/5">
                    <div className="aspect-[4/3] md:h-full relative overflow-hidden">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3E" + hotel.name + "%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="ml-1 text-xs font-semibold text-gray-700">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hotel Details */}
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{hotel.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{hotel.description}</p>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-blue-600">{hotel.price}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>

                    {/* Accessibility Features */}
                    <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-blue-700">
                        <Accessibility className="h-4 w-4" />
                        Accessibility Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hotel.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm mb-3 text-gray-900">Hotel Amenities</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                        {hotel.amenities.map((amenity, index) => {
                          const getIcon = (amenity: string) => {
                            if (amenity.includes('WiFi')) return <Wifi className="h-3 w-3" />;
                            if (amenity.includes('Restaurant')) return <Utensils className="h-3 w-3" />;
                            if (amenity.includes('Parking')) return <Car className="h-3 w-3" />;
                            return <span className="h-3 w-3" />;
                          };
                          
                          return (
                            <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                              <div className="text-gray-500">
                                {getIcon(amenity)}
                              </div>
                              <span>{amenity}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                        Book Now
                      </Button>
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-4">
                        View Details
                      </Button>
                      <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Need Help Finding the Right Hotel?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our accessibility experts are here to help you find the perfect accommodation 
            for your specific needs. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow">
              <Phone className="h-5 w-5 mr-2" />
              Call +41 31 301 55 65
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
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
            Your trusted partner for accessible travel in Switzerland
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/tours" className="hover:text-primary">Tours</Link>
            <Link to="/care-services" className="hover:text-primary">Care Services</Link>
            <Link to="/cms" className="hover:text-primary">CMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HotelsPage;