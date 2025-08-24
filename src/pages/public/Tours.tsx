import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Users, Star, Mountain, Calendar, Heart } from "lucide-react";
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
          description: "Experience the breathtaking beauty of the Swiss Alps with our fully wheelchair accessible tour to Jungfraujoch. Specially designed for wheelchair users with adapted transportation and viewing areas.",
          accessibility: "Wheelchair Accessible"
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
          description: "Visit Europe's most powerful waterfall with specially designed wheelchair accessible viewing platforms and boat rides.",
          accessibility: "Wheelchair Accessible"
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
          description: "Discover the Swiss Alps through enhanced sensory experiences designed for low vision travelers with detailed audio descriptions.",
          accessibility: "Low Vision Friendly"
        }
      ];
    } else if (disabilityType === 'cognitive') {
      return [
        {
          id: 1,
          name: "Simple Alpine Discovery",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 6 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Clear step-by-step guidance", "Simple explanations", "Small group size", "Extra support available"],
          description: "A simple and clear tour designed for cognitive accessibility with straightforward explanations and supportive guidance.",
          accessibility: "Cognitive Friendly"
        }
      ];
    } else if (disabilityType === 'anxiety') {
      return [
        {
          id: 1,
          name: "Calm Alpine Journey",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 4 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Quiet environment", "Flexible schedule", "24/7 support", "Calming spaces"],
          description: "A peaceful tour designed to reduce anxiety with quiet environments, flexible scheduling, and constant support.",
          accessibility: "Anxiety Friendly"
        }
      ];
    } else if (disabilityType === 'dyslexia') {
      return [
        {
          id: 1,
          name: "Clear Reading Alpine Tour",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 6 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Audio guides", "Visual aids", "Simple text materials", "Multimodal communication"],
          description: "A tour with dyslexia-friendly communication using audio guides, visual aids, and simple text materials.",
          accessibility: "Dyslexia Friendly"
        }
      ];
    } else if (disabilityType === 'hearing') {
      return [
        {
          id: 1,
          name: "Visual Swiss Alps Tour",
          location: "Jungfraujoch - Top of Europe",
          duration: "Full Day (8 hours)",
          groupSize: "Max 6 people",
          price: "CHF 450",
          rating: 4.9,
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
          highlights: ["Visual guides", "Written materials", "Sign language support", "Visual demonstrations"],
          description: "A tour designed for hearing accessibility with visual guides, written materials, and sign language support.",
          accessibility: "Hearing Accessible"
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
          description: "Experience the breathtaking beauty of the Swiss Alps with our comprehensive tour to Jungfraujoch, featuring professional guides and stunning views.",
          accessibility: "Accessibility Adapted"
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
          description: "Visit Europe's most powerful waterfall with comprehensive viewing experiences and guided tours.",
          accessibility: "Accessibility Adapted"
        }
      ];
    }
  };

  const tours = getToursForDisability();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="bg-primary text-white rounded-lg p-2 mr-3">
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-900">Claire & George</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-gray-600">
                <Phone className="h-4 w-4" />
                +41 31 301 55 65
              </span>
              <Link to="/cms" className="text-primary hover:underline font-medium">
                CMS
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Mountain className="h-10 w-10 mr-3" />
            <span className="text-xl font-semibold tracking-wide">ACCESSIBLE TOURS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Accessible Tour of Switzerland
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            Experience the stunning beauty of Switzerland with our specially designed accessible tours. 
            Every detail is planned to ensure comfort, safety, and unforgettable memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              Flexible Scheduling
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              <Users className="h-4 w-4 mr-2" />
              Small Groups
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm">
              <Heart className="h-4 w-4 mr-2" />
              Personalized Care
            </Badge>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Tours
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose from our carefully curated selection of accessible tours designed to meet your specific needs.
              </p>
            </div>
            
            <div className="grid gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg rounded-2xl">
                  <div className="lg:flex">
                    {/* Tour Image */}
                    <div className="lg:w-2/5">
                      <div className="aspect-[4/3] lg:h-full relative overflow-hidden">
                        <img 
                          src={tour.image} 
                          alt={tour.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3E" + tour.name + "%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm font-semibold text-gray-700">{tour.rating}</span>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 text-white border-0 px-3 py-1 text-sm font-medium">
                            {tour.accessibility}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tour Details */}
                    <div className="lg:w-3/5 p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{tour.name}</h3>
                          
                          {/* Tour Info */}
                          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">{tour.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">{tour.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">{tour.groupSize}</span>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">{tour.description}</p>
                        </div>
                        
                        {/* Price */}
                        <div className="text-right ml-8">
                          <div className="text-4xl font-bold text-blue-600 mb-1">{tour.price}</div>
                          <div className="text-sm text-gray-500 font-medium">per person</div>
                        </div>
                      </div>

                      {/* Tour Highlights */}
                      <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-lg mb-4 text-blue-900 flex items-center gap-2">
                          <Star className="h-5 w-5 text-blue-600" />
                          Tour Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {tour.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                          Book Tour
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg font-semibold rounded-lg">
                          View Itinerary
                        </Button>
                        <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-4 py-3 text-lg">
                          <Mail className="h-5 w-5 mr-2" />
                          Ask Questions
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

      {/* Why Choose Our Tours */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Accessible Tours?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We go above and beyond to ensure every traveler has an exceptional experience, 
              regardless of their accessibility needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-2xl p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced guides are specially trained in accessibility assistance and local expertise to provide the best possible experience.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 rounded-2xl p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <MapPin className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Carefully Selected Routes</h3>
              <p className="text-gray-600 leading-relaxed">
                Every location and route is personally tested for accessibility and safety standards before being offered to our guests.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-blue-100 rounded-2xl p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Mountain className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">Authentic Swiss Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the real Switzerland while ensuring comfort and accessibility for all travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Swiss Adventure?
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Contact us to discuss your specific needs and preferences. 
            We'll create a customized tour experience just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              <Phone className="h-6 w-6 mr-3" />
              Call +41 31 301 55 65
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg">
              <Mail className="h-6 w-6 mr-3" />
              Email for Custom Tour
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary text-white rounded-lg p-3 mr-4">
              <span className="font-bold text-xl">C&G</span>
            </div>
            <div>
              <h3 className="font-bold text-2xl">Claire & George</h3>
            </div>
          </div>
          <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Creating unforgettable accessible travel experiences in Switzerland
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
            <Link to="/hotels" className="hover:text-blue-400 transition-colors duration-300">Hotels</Link>
            <Link to="/care-services" className="hover:text-blue-400 transition-colors duration-300">Care Services</Link>
            <Link to="/cms" className="hover:text-blue-400 transition-colors duration-300">CMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToursPage;