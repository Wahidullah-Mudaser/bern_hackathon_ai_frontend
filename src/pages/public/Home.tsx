import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Phone, Mail, Menu, X } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";
import AccessibilityAssessment from "@/components/AccessibilityAssessment";
import AccessibilityLoadingTransition from "@/components/AccessibilityLoadingTransition";
import TestAssessmentButton from "@/components/TestAssessmentButton";
import heroImage from "@/assets/harderkulm-hero.jpg";
import wheelchairHeroYoung from "@/assets/wheelchair-hero-young.jpg";
import wheelchairHeroElderly from "@/assets/wheelchair-hero-elderly.jpg";
import lowVisionHero from "@/assets/low-vision-hero.jpg";
import cognitiveHero from "@/assets/cognitive-hero.jpg";
import anxietyHero from "@/assets/anxiety-hero.jpg";
import dyslexiaHero from "@/assets/dyslexia-hero.jpg";
import hearingHero from "@/assets/hearing-hero.jpg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { disabilityType, showAssessment, isLoading, resetAssessment, setDisabilityType } = usePersona();

  // Content variants based on disability type
  const getContent = () => {
    const base = {
      title: "Welcome to Accessible Switzerland",
      subtitle: "We are your one stop shop for accessible holidays and travel in Switzerland.",
      services: [
        {
          title: "Holidays with Care",
          description: "Additional services offered by Claire & George to ensure you have a relaxing and stress-free holiday – nothing is too much trouble.",
          link: "/care-services"
        },
        {
          title: "Hotels and Accommodation", 
          description: "Here you will find our selection of places to stay, including the best wheelchair accessible hotels, in Switzerland!",
          link: "/hotels"
        },
        {
          title: "Accessible Tours",
          description: "Welcome to the Accessible Tour of Switzerland! Discover breathtaking scenery and charming cities, all at a relaxed pace - by train, boat, and wheelchair taxi.",
          link: "/tours"
        }
      ]
    };

    if (!disabilityType) return base;

    // Customize content based on disability type
    switch (disabilityType) {
      case 'wheelchair':
        return {
          ...base,
          title: "Wheelchair-Accessible Switzerland",
          subtitle: "Barrier-free travel with complete wheelchair accessibility. We ensure ramps, elevators, accessible bathrooms, and adapted transportation for your comfort.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Hotels') 
              ? "🏨 Fully wheelchair accessible hotels with: wide doors (32+ inches), roll-in showers, accessible bathrooms, ramps, elevators, and designated parking."
              : s.title.includes('Tours')
              ? "🚌 Wheelchair-accessible tours with adapted vehicles, accessible viewing areas, and smooth pathways. All routes are pre-checked for mobility."
              : "♿ Professional mobility assistance: wheelchair rentals, transfer services, accessibility equipment, and 24/7 mobility support."
          }))
        };
      
      case 'anxiety':
        return {
          ...base,
          title: "Stress-Free Switzerland",
          subtitle: "Calm, predictable travel with full support. We provide detailed information, flexible cancellation, and 24/7 assistance to ease your travel worries.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Care')
              ? "🛡️ Complete support system: 24/7 helpline, pre-trip consultations, detailed itineraries, emergency contacts, and calming spaces at all locations."
              : s.title.includes('Hotels')
              ? "🏩 Carefully selected quiet hotels with: peaceful environments, flexible check-in/out, easy cancellation, and staff trained in anxiety support."
              : "🧘 Gentle, low-stress tours with: small groups, predictable schedules, frequent breaks, and easy exit options if needed."
          }))
        };
      
      case 'cognitive':
        return {
          ...base,
          title: "Simple Travel in Switzerland",
          subtitle: "Easy trips made simple. Clear steps. Extra help. No stress.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Hotels')
              ? "🏨 Easy hotels. Simple check-in. Clear rooms. Helpful staff."
              : s.title.includes('Tours')
              ? "🚌 Simple tours. Clear steps. Extra help. Small groups."
              : "🤝 Extra care. Simple booking. Clear info. Always ready to help."
          }))
        };
      
      case 'low-vision':
        return {
          ...base,
          title: "High-Contrast Switzerland",
          subtitle: "Enhanced visibility and audio support for low vision travelers. Large text, high contrast displays, and detailed audio descriptions throughout your journey.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Hotels')
              ? "🏨 Vision-friendly hotels with: large print information, high-contrast signage, audio room descriptions, tactile maps, and voice-guided navigation."
              : s.title.includes('Tours')
              ? "🎧 Audio-enhanced tours with: detailed verbal descriptions, tactile elements, high-contrast materials, and trained guides for vision support."
              : "👁️ Vision support services: magnification tools, audio guides, large print materials, and assistive technology throughout your stay."
          }))
        };
      
      case 'dyslexia':
        return {
          ...base,
          title: "clear reading switzerland", 
          subtitle: "Simple words. Easy reading. Clear text. We use short sentences and simple language.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Hotels')
              ? "🏨 Easy-to-read hotel info. Simple booking. Clear signs. Helpful pictures."
              : s.title.includes('Tours')  
              ? "📖 Simple tour guides. Easy maps. Clear steps. Pictures help explain."
              : "📝 Simple booking forms. Easy words. Clear help. Staff who understand."
          }))
        };
      
      case 'hearing':
        return {
          ...base,
          title: "Visual Switzerland",
          subtitle: "Full visual communication and sign language support. Written information, visual alerts, and deaf-friendly services throughout Switzerland.",
          services: base.services.map(s => ({
            ...s,
            description: s.title.includes('Hotels')
              ? "🏨 Hearing-accessible hotels with: visual alerts, written communication, sign language staff, text-based services, and vibrating alarms."
              : s.title.includes('Tours')
              ? "👀 Visual tours with: written guides, sign language interpreters, visual demonstrations, and captioned presentations when available."
              : "👋 Deaf-friendly services: sign language support, written communication, text alerts, and visual notification systems."
          }))
        };
      
      default:
        return base;
    }
  };

  // Get hero image based on disability type
  const getHeroImage = () => {
    switch (disabilityType) {
      case 'wheelchair':
        return Math.random() > 0.5 ? wheelchairHeroYoung : wheelchairHeroElderly;
      case 'low-vision':
        return lowVisionHero;
      case 'cognitive':
        return cognitiveHero;
      case 'anxiety':
        return anxietyHero;
      case 'dyslexia':
        return dyslexiaHero;
      case 'hearing':
        return hearingHero;
      default:
        return heroImage;
    }
  };

  const content = getContent();

  // Cognitive-specific step process
  const cognitiveSteps = [
    {
      step: 1,
      title: "Choose Your Destination",
      description: "Pick where you want to go in Switzerland. We have many beautiful places.",
      icon: "📍"
    },
    {
      step: 2,
      title: "Select Your Accommodation",
      description: "Choose a hotel that fits your needs. All our hotels are easy to use.",
      icon: "🏨"
    },
    {
      step: 3,
      title: "Book Your Tour",
      description: "Pick a tour that works for you. Our tours are simple and clear.",
      icon: "🚌"
    },
    {
      step: 4,
      title: "Get Extra Help",
      description: "Tell us if you need extra support. We are here to help you.",
      icon: "🤝"
    }
  ];

  return (
    <>
      {showAssessment && <AccessibilityAssessment />}
      {isLoading && (
        <AccessibilityLoadingTransition 
          disabilityType={disabilityType}
          onComplete={() => {}}
        />
      )}
      
      <div className={`min-h-screen ${disabilityType === 'cognitive' ? 'bg-green-50' : 'bg-background'}`}>
        {/* Header */}
        <header className={`relative z-40 ${disabilityType === 'cognitive' ? 'navigation-consistent' : 'bg-white shadow-sm'}`}>
          {/* Top Bar */}
          <div className={`${disabilityType === 'cognitive' ? 'bg-green-600' : 'bg-primary'} text-white py-2 px-4`}>
            <div className="container mx-auto flex justify-between items-center text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  +41 31 301 55 65
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  contact@claireundgeorge.ch
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span>EN</span>
                <Link to="/cms" className="hover:underline">CMS</Link>
                {disabilityType && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetAssessment}
                    className="text-white hover:bg-white/20"
                  >
                    Change Accessibility
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-lg p-2 mr-3">
                    <span className="font-bold text-lg">C&G</span>
                  </div>
                  <h1 className="font-bold text-xl text-foreground">Claire & George</h1>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/hotels" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🏨</span>}
                    Hotels
                  </Link>
                  <Link to="/tours" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🚌</span>}
                    Tours
                  </Link>
                  <Link to="/care-services" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🤝</span>}
                    Care Services
                  </Link>
                </div>

                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

              {isMenuOpen && (
                <div className="md:hidden pb-4 space-y-4">
                  <Link to="/hotels" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} block text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🏨</span>}
                    Hotels
                  </Link>
                  <Link to="/tours" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} block text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🚌</span>}
                    Tours
                  </Link>
                  <Link to="/care-services" className={`${disabilityType === 'cognitive' ? 'icon-with-label' : ''} block text-foreground hover:text-primary font-medium`}>
                    {disabilityType === 'cognitive' && <span>🤝</span>}
                    Care Services
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${getHeroImage()})` }}
          />
          <div className="absolute inset-0 bg-gradient-mountain" />
          
          <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-primary font-semibold tracking-wider">CLAIRE & GEORGE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {content.title}
            </h1>
            <div className="flex justify-center mb-8">
              <Button variant="ghost" className="text-white hover:bg-white/10 border border-white/30 px-8 py-3">
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Memory-Friendly Section for Cognitive Users */}
            {disabilityType === 'cognitive' && (
              <div className="mt-16 max-w-4xl mx-auto">
                <div className="memory-friendly">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">
                    📝 Important Information - Easy to Remember
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <h4 className="font-bold text-green-800 mb-2">📞 Contact Information</h4>
                      <p className="text-green-700">Phone: +41 31 301 55 65</p>
                      <p className="text-green-700">Email: contact@claireundgeorge.ch</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                      <h4 className="font-bold text-green-800 mb-2">⏰ When We're Available</h4>
                      <p className="text-green-700">Monday to Friday: 9 AM - 6 PM</p>
                      <p className="text-green-700">Weekends: 10 AM - 4 PM</p>
                    </div>
                  </div>
                  <div className="success-message mt-6">
                    <p className="text-center">
                      ✅ We are here to help you plan your perfect trip to Switzerland!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Cognitive Step Process */}
        {disabilityType === 'cognitive' && (
          <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
                How to Plan Your Trip - Simple Steps
              </h2>
              
              <div className="space-y-6">
                {cognitiveSteps.map((step, index) => (
                  <div key={index} className="step-process">
                    <div className="flex items-start">
                      <div className="step-number">{step.step}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-green-800">
                          {step.icon} {step.title}
                        </h3>
                        <p className="text-green-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="helpful-reminder mt-8">
                <h3 className="font-bold text-green-800 mb-2">💡 Helpful Reminder:</h3>
                <p className="text-green-700">
                  You can always call us at +41 31 301 55 65 if you need help with any step. 
                  We are here to make your trip planning easy and stress-free.
                </p>
              </div>

              <div className="progressive-disclosure mt-8">
                <div className="progressive-disclosure-header">
                  <h3 className="text-lg font-bold text-green-800">
                    📋 Need More Information?
                  </h3>
                </div>
                <div className="progressive-disclosure-content">
                  <p className="text-green-700 mb-3">
                    We can help you with:
                  </p>
                  <ul className="list-disc list-inside text-green-700 space-y-1">
                    <li>Finding the best hotels for your needs</li>
                    <li>Planning your daily activities</li>
                    <li>Booking transportation</li>
                    <li>Getting extra support during your trip</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        <section className={`py-20 ${disabilityType === 'cognitive' ? 'bg-green-100' : 'bg-background'}`}>
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Welcome to Accessible Switzerland
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {content.subtitle}
            </p>
            <div className="text-center">
              <p className="text-lg font-medium text-foreground mb-2">
                Contact: <a href="mailto:contact@claireundgeorge.ch" className="text-primary hover:underline">contact@claireundgeorge.ch</a>
              </p>
              <p className="text-lg font-medium text-foreground">
                Phone: <a href="tel:+41313015565" className="text-primary hover:underline">+41 31 301 55 65</a>
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={`py-20 ${disabilityType === 'cognitive' ? 'bg-green-100' : 'bg-muted/30'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-4xl font-bold text-center mb-16 ${disabilityType === 'cognitive' ? 'text-green-800' : 'text-foreground'}`}>
              {disabilityType === 'cognitive' ? 'What We Offer - Easy to Understand' : 'What we offer'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.services.map((service, index) => (
                <div key={index} className={`bg-background rounded-lg overflow-hidden shadow-alpine hover:shadow-magenta transition-all duration-300 service-card ${
                  disabilityType === 'wheelchair' ? 'accessibility-highlight' :
                  disabilityType === 'cognitive' ? 'simple-card' :
                  disabilityType === 'anxiety' ? 'calming-section' :
                  disabilityType === 'dyslexia' ? 'readable-text' :
                  disabilityType === 'low-vision' ? 'high-contrast' :
                  disabilityType === 'hearing' ? 'visual-emphasis' : ''
                }`}>
                  <div className="aspect-[2/1] bg-gradient-alpine flex items-center justify-center">
                    <span className="text-white font-semibold">{service.title}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link to={service.link}>
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </div>
                </div>
              ))}
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
              <h3 className="font-bold text-xl">Claire & George</h3>
            </div>
            <p className="text-gray-300 mb-4">Your trusted partner for accessible travel in Switzerland</p>
            <div className="flex justify-center gap-8 text-sm">
              <Link to="/hotels" className="hover:text-primary">Hotels</Link>
              <Link to="/tours" className="hover:text-primary">Tours</Link>
              <Link to="/care-services" className="hover:text-primary">Care Services</Link>
              <Link to="/cms" className="hover:text-primary">CMS</Link>
            </div>
          </div>
        </footer>
        
        {/* Test Button for Development */}
        <TestAssessmentButton />
      </div>
    </>
  );
};

export default HomePage;