import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Wifi, Car, Utensils, Accessibility, Star, MapPin, Volume2 } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";

const HotelsPage = () => {
  const { disabilityType } = usePersona();

  // Text-to-speech function for dyslexia support
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slower rate for better comprehension
      utterance.pitch = 1;
      speechSynthesis.speak(utterance);
    }
  };

  // Get styles based on disability type (simplified since global CSS handles dyslexia)
  const getStyles = () => {
    return {
      container: "min-h-screen bg-background",
      header: "bg-white shadow-sm border-b",
      hero: "bg-primary text-white",
      card: "overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg",
      title: "text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight",
      description: "text-gray-600 leading-relaxed text-base",
      features: "mb-6 p-5 bg-blue-50 rounded-xl border border-blue-100",
      featureTitle: "font-semibold text-base mb-4 flex items-center gap-2 text-blue-700",
      featureText: "text-gray-700 text-sm",
      amenities: "mb-8 flex-1",
      amenitiesTitle: "font-semibold text-base mb-4 text-gray-900",
      amenitiesText: "text-gray-600 text-sm",
      button: "bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-semibold",
      outlineButton: "border-primary text-primary hover:bg-primary/5 px-6 py-3 text-base",
      ghostButton: "text-gray-600 hover:text-gray-900 px-4 py-3",
      contactSection: "bg-muted/30 py-16",
      footer: "bg-foreground text-white py-12"
    };
  };

  const styles = getStyles();

  // All hotels data - organized by disability type
  const allHotels = [
    // General hotels for all disabilities (when no specific disability is selected)
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
    },

    // Low Vision specific hotels
    {
      id: 9,
      name: "Grand Hotel Kronenhof",
      location: "Pontresina",
      rating: 5.0,
      price: "CHF 400-800",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["High contrast signage", "Audio descriptions available", "Braille room numbers", "Enhanced lighting"],
      amenities: ["Free WiFi", "Restaurant", "Spa", "Audio guides"],
      description: "Luxury hotel with enhanced visual accessibility features and audio assistance.",
      type: "low-vision"
    },
    {
      id: 10,
      name: "Hotel Bellevue Palace",
      location: "Bern",
      rating: 5.0,
      price: "CHF 350-650",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      features: ["Large print materials", "High contrast design", "Audio room controls", "Visual assistance staff"],
      amenities: ["Free WiFi", "Restaurant", "Concierge", "City views"],
      description: "Historic palace hotel with comprehensive low vision support and assistance.",
      type: "low-vision"
    },

    // Cognitive impairment specific hotels
    {
      id: 11,
      name: "Hotel Schweizerhof",
      location: "Lucerne",
      rating: 4.5,
      price: "CHF 280-480",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      features: ["Simple room layouts", "Clear signage", "24/7 support staff", "Structured daily routines"],
      amenities: ["Free WiFi", "Restaurant", "Lake views", "Easy navigation"],
      description: "Hotel designed with cognitive accessibility in mind, featuring simple layouts and clear guidance.",
      type: "cognitive"
    },
    {
      id: 12,
      name: "Hotel Eden au Lac",
      location: "Zurich",
      rating: 4.3,
      price: "CHF 320-520",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["Predictable environment", "Visual schedules", "Quiet zones", "Supportive staff training"],
      amenities: ["Free WiFi", "Restaurant", "Lake access", "Peaceful atmosphere"],
      description: "Peaceful lakeside hotel with cognitive-friendly design and supportive environment.",
      type: "cognitive"
    },

    // Anxiety specific hotels
    {
      id: 13,
      name: "Wellness Hotel Alpenblick",
      location: "Arosa",
      rating: 4.7,
      price: "CHF 250-450",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      features: ["Quiet environment", "Flexible cancellation", "24/7 support", "Calming spaces"],
      amenities: ["Wellness area", "Restaurant", "Mountain views", "Peaceful atmosphere"],
      description: "Tranquil wellness hotel designed to reduce travel anxiety with flexible policies.",
      type: "anxiety"
    },
    {
      id: 14,
      name: "Hotel Schloss Wartegg",
      location: "Rorschacherberg",
      rating: 4.4,
      price: "CHF 200-380",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      features: ["Predictable routines", "Clear communication", "Safe environment", "Anxiety-trained staff"],
      amenities: ["Free WiFi", "Restaurant", "Garden", "Lake views"],
      description: "Historic castle hotel with anxiety-friendly policies and supportive environment.",
      type: "anxiety"
    },

    // Dyslexia specific hotels
    {
      id: 15,
      name: "Hotel Montana",
      location: "Lucerne",
      rating: 4.2,
      price: "CHF 180-320",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["Audio instructions", "Visual aids", "Simple text materials", "Multimodal communication"],
      amenities: ["Free WiFi", "Restaurant", "City views", "Easy check-in"],
      description: "Hotel with dyslexia-friendly communication and visual support systems.",
      type: "dyslexia"
    },
    {
      id: 16,
      name: "Hotel Central",
      location: "Basel",
      rating: 4.0,
      price: "CHF 160-280",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      features: ["Clear visual layouts", "Audio guides", "Pictorial instructions", "Reading support"],
      amenities: ["Free WiFi", "Restaurant", "Central location", "Accessible design"],
      description: "Central hotel with comprehensive dyslexia support and visual communication.",
      type: "dyslexia"
    },

    // Hearing specific hotels
    {
      id: 17,
      name: "Hotel Metropole",
      location: "Geneva",
      rating: 4.6,
      price: "CHF 300-500",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
      features: ["Visual alerts", "Sign language staff", "Written communication", "Hearing loop systems"],
      amenities: ["Free WiFi", "Restaurant", "City center", "Lake views"],
      description: "Modern hotel with comprehensive hearing accessibility and visual communication.",
      type: "hearing"
    },
    {
      id: 18,
      name: "Hotel Continental",
      location: "Lausanne",
      rating: 4.3,
      price: "CHF 220-380",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      features: ["Visual notifications", "Text-based services", "Hearing accessible rooms", "Staff training"],
      amenities: ["Free WiFi", "Restaurant", "Lake access", "Central location"],
      description: "Historic hotel with hearing accessibility features and visual support systems.",
      type: "hearing"
    }
  ];

  // Filter hotels based on disability type
  const hotels = useMemo(() => {
    if (!disabilityType) {
      // No disability selected - show all hotels
      return allHotels;
    }
    
    // Filter by specific disability type
    return allHotels.filter(hotel => hotel.type === disabilityType);
  }, [disabilityType]);

  // Dynamic hero content based on disability type
  const getHeroContent = () => {
    if (!disabilityType) {
      return {
        title: "Accessible Hotels in Switzerland",
        description: "Discover our collection of accessible hotels and accommodations throughout Switzerland, designed to meet diverse accessibility needs."
      };
    }

    const disabilityTitles = {
      'wheelchair': {
        title: "Wheelchair Accessible Hotels in Switzerland",
        description: "Discover our carefully selected collection of wheelchair accessible hotels throughout Switzerland, all verified for excellent accessibility standards."
      },
      'low-vision': {
        title: "Low Vision Friendly Hotels in Switzerland",
        description: "Hotels designed with enhanced visual accessibility, featuring high contrast design, audio assistance, and comprehensive visual support."
      },
      'cognitive': {
        title: "Cognitive-Friendly Hotels in Switzerland",
        description: "Hotels designed with cognitive accessibility in mind, featuring simple layouts, clear guidance, and supportive environments."
      },
      'anxiety': {
        title: "Anxiety-Friendly Hotels in Switzerland",
        description: "Tranquil hotels designed to reduce travel anxiety with flexible policies, calming environments, and supportive staff."
      },
      'dyslexia': {
        title: "Dyslexia-Friendly Hotels in Switzerland",
        description: "Hotels with dyslexia-friendly communication, visual support systems, and multimodal information delivery."
      },
      'hearing': {
        title: "Hearing Accessible Hotels in Switzerland",
        description: "Hotels with comprehensive hearing accessibility features, visual communication, and hearing loop systems."
      }
    };

    return disabilityTitles[disabilityType] || {
      title: "Accessible Hotels in Switzerland",
      description: "Discover our collection of accessible hotels and accommodations throughout Switzerland."
    };
  };

  const heroContent = getHeroContent();

  return (
    <div className={`${styles.container} ${disabilityType === 'dyslexia' ? 'font-sans' : ''}`}>
      {/* Header */}
      <header className={styles.header}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className={disabilityType === 'dyslexia' ? "text-gray-800 hover:bg-amber-200" : ""}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center">
                <div className={`${disabilityType === 'dyslexia' ? 'bg-amber-600' : 'bg-primary'} text-white rounded-lg p-2 mr-3`}>
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h1 className={`font-bold text-xl ${disabilityType === 'dyslexia' ? 'text-gray-800' : 'text-foreground'}`}>Claire & George</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className={`flex items-center gap-1 ${disabilityType === 'dyslexia' ? 'text-gray-800' : ''}`}>
                <Phone className="h-4 w-4" />
                +41 31 301 55 65
              </span>
              <Link to="/cms" className={`${disabilityType === 'dyslexia' ? 'text-amber-700 hover:text-amber-800' : 'text-primary hover:underline'}`}>
                CMS
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={`${disabilityType === 'dyslexia' ? 'text-5xl md:text-6xl font-bold mb-6 leading-relaxed tracking-wide' : 'text-4xl md:text-5xl font-bold mb-4'}`}>
            {heroContent.title}
          </h1>
          <p className={`${disabilityType === 'dyslexia' ? 'text-2xl mb-10 max-w-4xl mx-auto leading-relaxed tracking-wide' : 'text-xl mb-8 max-w-3xl mx-auto'}`}>
            {heroContent.description}
          </p>
          {disabilityType === 'dyslexia' && (
            <Button 
              onClick={() => speakText(`${heroContent.title}. ${heroContent.description}`)}
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 text-lg font-semibold tracking-wide mb-4"
            >
              <Volume2 className="h-5 w-5 mr-2" />
              Listen to Description
            </Button>
          )}
        </div>
      </section>

      {/* Hotels Grid */}
      <section className={`py-16 ${disabilityType === 'dyslexia' ? 'bg-amber-50' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className={`grid gap-8 lg:gap-12 ${disabilityType === 'dyslexia' ? 'gap-12' : ''}`}>
              {hotels.map((hotel) => (
                <Card key={hotel.id} className={styles.card}>
                  <div className="lg:flex lg:min-h-[400px]">
                    {/* Hotel Image */}
                    <div className="lg:w-2/5 lg:flex-shrink-0">
                      <div className="h-64 lg:h-full relative overflow-hidden">
                        <img 
                          src={hotel.image} 
                          alt={hotel.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3E" + hotel.name + "%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm font-semibold text-gray-700">{hotel.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hotel Details */}
                    <div className="lg:w-3/5 lg:flex-1 p-6 lg:p-8 flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className={styles.title}>{hotel.name}</h3>
                            {disabilityType === 'dyslexia' && (
                              <Button 
                                onClick={() => speakText(`${hotel.name}. ${hotel.description}`)}
                                variant="ghost" 
                                size="sm"
                                className="text-amber-700 hover:bg-amber-200 p-2"
                                title="Listen to hotel description"
                              >
                                <Volume2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <div className={`flex items-center gap-2 mb-4 ${disabilityType === 'dyslexia' ? 'text-gray-700' : 'text-gray-600'}`}>
                            <MapPin className="h-5 w-5 flex-shrink-0" />
                            <span className={`${disabilityType === 'dyslexia' ? 'text-lg' : 'text-base'}`}>{hotel.location}</span>
                          </div>
                          <p className={styles.description}>{hotel.description}</p>
                        </div>
                        <div className="text-right ml-6 flex-shrink-0">
                          <div className={`text-2xl lg:text-3xl font-bold ${disabilityType === 'dyslexia' ? 'text-amber-700' : 'text-primary'}`}>{hotel.price}</div>
                          <div className={`${disabilityType === 'dyslexia' ? 'text-base text-gray-600' : 'text-sm text-gray-500'}`}>per night</div>
                        </div>
                      </div>

                      {/* Accessibility Features */}
                      <div className={styles.features}>
                        <h4 className={styles.featureTitle}>
                          <Accessibility className="h-5 w-5" />
                          {disabilityType === 'wheelchair' ? 'Wheelchair Accessibility Features' : 
                           disabilityType === 'low-vision' ? 'Low Vision Accessibility Features' :
                           disabilityType === 'cognitive' ? 'Cognitive Accessibility Features' :
                           disabilityType === 'anxiety' ? 'Anxiety-Friendly Features' :
                           disabilityType === 'dyslexia' ? 'Dyslexia-Friendly Features' :
                           disabilityType === 'hearing' ? 'Hearing Accessibility Features' :
                           'Accessibility Features'}
                        </h4>
                        <div className={`grid grid-cols-1 md:grid-cols-2 ${disabilityType === 'dyslexia' ? 'gap-4' : 'gap-3'}`}>
                          {hotel.features.map((feature, index) => (
                            <div key={index} className={`flex items-center gap-3 ${disabilityType === 'dyslexia' ? 'text-base' : 'text-sm'}`}>
                              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${disabilityType === 'dyslexia' ? 'bg-amber-600' : 'bg-blue-600'}`}></div>
                              <span className={styles.featureText}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className={styles.amenities}>
                        <h4 className={styles.amenitiesTitle}>Hotel Amenities</h4>
                        <div className={`grid grid-cols-2 lg:grid-cols-4 ${disabilityType === 'dyslexia' ? 'gap-4' : 'gap-3'}`}>
                          {hotel.amenities.map((amenity, index) => {
                            const getIcon = (amenity: string) => {
                              if (amenity.includes('WiFi')) return <Wifi className={disabilityType === 'dyslexia' ? "h-5 w-5" : "h-4 w-4"} />;
                              if (amenity.includes('Restaurant')) return <Utensils className={disabilityType === 'dyslexia' ? "h-5 w-5" : "h-4 w-4"} />;
                              if (amenity.includes('Parking')) return <Car className={disabilityType === 'dyslexia' ? "h-5 w-5" : "h-4 w-4"} />;
                              return <span className={disabilityType === 'dyslexia' ? "h-5 w-5" : "h-4 w-4"} />;
                            };
                            
                            return (
                              <div key={index} className={`flex items-center gap-2 ${disabilityType === 'dyslexia' ? 'text-base' : 'text-sm'} ${disabilityType === 'dyslexia' ? 'text-gray-700' : 'text-gray-600'}`}>
                                <div className={`flex-shrink-0 ${disabilityType === 'dyslexia' ? 'text-gray-600' : 'text-gray-500'}`}>
                                  {getIcon(amenity)}
                                </div>
                                <span className={`${disabilityType === 'dyslexia' ? 'leading-relaxed' : 'truncate'}`}>{amenity}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 mt-auto">
                        <Button className={styles.button}>
                          Book Now
                        </Button>
                        <Button variant="outline" className={styles.outlineButton}>
                          View Details
                        </Button>
                        <Button variant="ghost" className={styles.ghostButton}>
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
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${disabilityType === 'dyslexia' ? 'text-4xl font-bold mb-6 text-gray-800 leading-relaxed tracking-wide' : 'text-3xl font-bold mb-4 text-foreground'}`}>
            Need Help Finding the Right Hotel?
          </h2>
          <p className={`${disabilityType === 'dyslexia' ? 'text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide' : 'text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'}`}>
            Our accessibility experts are here to help you find the perfect accommodation 
            for your specific needs. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className={disabilityType === 'dyslexia' ? "bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold tracking-wide" : "bg-primary hover:bg-primary-glow"}>
              <Phone className="h-5 w-5 mr-2" />
              Call +41 31 301 55 65
            </Button>
            <Button size="lg" variant="outline" className={disabilityType === 'dyslexia' ? "border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg tracking-wide" : ""}>
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className={`${disabilityType === 'dyslexia' ? 'bg-amber-600' : 'bg-primary'} text-white rounded-lg p-2 mr-3`}>
              <span className="font-bold text-lg">C&G</span>
            </div>
            <div>
              <h3 className={`font-bold text-xl ${disabilityType === 'dyslexia' ? 'text-amber-50' : ''}`}>Claire & George</h3>
            </div>
          </div>
          <p className={`${disabilityType === 'dyslexia' ? 'text-amber-200 mb-6 text-lg leading-relaxed' : 'text-gray-300 mb-4'}`}>
            Your trusted partner for accessible travel in Switzerland
          </p>
          <div className={`flex justify-center gap-8 ${disabilityType === 'dyslexia' ? 'text-base' : 'text-sm'}`}>
            <Link to="/" className={`${disabilityType === 'dyslexia' ? 'hover:text-amber-300 text-amber-200' : 'hover:text-primary'}`}>Home</Link>
            <Link to="/tours" className={`${disabilityType === 'dyslexia' ? 'hover:text-amber-300 text-amber-200' : 'hover:text-primary'}`}>Tours</Link>
            <Link to="/care-services" className={`${disabilityType === 'dyslexia' ? 'hover:text-amber-300 text-amber-200' : 'hover:text-primary'}`}>Care Services</Link>
            <Link to="/cms" className={`${disabilityType === 'dyslexia' ? 'hover:text-amber-300 text-amber-200' : 'hover:text-primary'}`}>CMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HotelsPage;