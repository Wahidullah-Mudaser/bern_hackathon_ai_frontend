import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Phone, Mail, Menu, X } from "lucide-react";
import { usePersona } from "@/contexts/PersonaContext";
import AccessibilityAssessment from "@/components/AccessibilityAssessment";
import heroImage from "@/assets/harderkulm-hero.jpg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { persona, getPersonalizedContent } = usePersona();

  // Show assessment if not completed
  if (!persona.assessmentCompleted) {
    return (
      <div>
        <AccessibilityAssessment />
        {/* Base website content behind the modal */}
        <div className="min-h-screen bg-background blur-sm">
          <BaseHomeContent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} persona={persona} />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${persona.preferences.highContrast ? 'bg-black text-white' : 'bg-background'} ${persona.preferences.largeText ? 'text-lg' : ''}`}>
      <BaseHomeContent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} persona={persona} />
    </div>
  );
};

const BaseHomeContent = ({ isMenuOpen, setIsMenuOpen, persona }: any) => {
  const personalizedServices = [
    {
      title: "Holidays with Care",
      description: persona.disabilityType === 'anxiety' 
        ? "Stress-free holiday planning with 24/7 support and calming environments designed to reduce anxiety."
        : persona.disabilityType === 'wheelchair'
        ? "Comprehensive wheelchair accessibility support including equipment rental and mobility assistance."
        : "Additional services offered by Claire & George to ensure you have a relaxing and stress-free holiday – nothing is too much trouble.",
      link: "/care-services"
    },
    {
      title: "Hotels and Accommodation", 
      description: persona.disabilityType === 'wheelchair'
        ? "Fully wheelchair accessible hotels with verified ramps, elevators, accessible bathrooms and parking."
        : persona.disabilityType === 'low-vision'
        ? "Hotels with enhanced accessibility features including audio descriptions, tactile guides, and high-contrast room designs."
        : "Here you will find our selection of places to stay, including the best wheelchair accessible hotels, in Switzerland!",
      link: "/hotels"
    },
    {
      title: "Accessible Tour of Switzerland",
      description: persona.disabilityType === 'cognitive'
        ? "Simplified tours with clear step-by-step guidance, reduced sensory overload, and extra support staff."
        : persona.disabilityType === 'dyslexia'
        ? "Tours with audio guides, visual aids, and dyslexia-friendly written materials to enhance your experience."
        : "Experience the beauty of Switzerland with our specially designed accessible tours and expert guidance.",
      link: "/tours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`relative z-50 ${persona?.preferences?.highContrast ? 'bg-black border-white' : ''}`}>
        {/* Top Bar */}
        <div className={`${persona?.preferences?.highContrast ? 'bg-white text-black' : 'bg-primary text-white'} py-2 px-4`}>
          <div className={`container mx-auto flex justify-between items-center ${persona?.preferences?.largeText ? 'text-base' : 'text-sm'}`}>
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
              <Link to="/cms" className="hover:underline">
                CMS Login
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`${persona?.preferences?.highContrast ? 'bg-black text-white border-white' : 'bg-white'} shadow-sm`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="bg-primary text-white rounded-lg p-2 mr-3">
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h1 className="font-bold text-xl text-foreground">Claire & George</h1>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className={`hidden md:flex items-center ${persona?.preferences?.simplifiedLayout ? 'space-x-4' : 'space-x-8'}`}>
                <Link to="/hotels" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                  Hotels
                </Link>
                <Link to="/tours" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                  Tours
                </Link>
                <Link to="/care-services" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                  Care Services
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden pb-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/hotels" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                    Hotels
                  </Link>
                  <Link to="/tours" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                    Tours
                  </Link>
                  <Link to="/care-services" className={`${persona?.preferences?.highContrast ? 'text-white hover:text-gray-300' : 'text-foreground hover:text-primary'} font-medium ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                    Care Services
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-mountain" />
        
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <div className={`mb-6 ${persona?.disabilityType ? 'animate-fade-in' : ''}`}>
            <span className={`${persona?.preferences?.highContrast ? 'text-white' : 'text-primary'} font-semibold tracking-wider ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
              CLAIRE & GEORGE
            </span>
          </div>
          <h1 className={`${persona?.preferences?.largeText ? 'text-6xl md:text-8xl lg:text-9xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-bold mb-6 leading-tight`}>
            Welcome to Accessible
            <br />
            Switzerland
          </h1>
          <div className="flex justify-center mb-8">
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-white/10 border border-white/30 px-8 py-3 ${persona?.preferences?.largeText ? 'text-lg px-12 py-4' : ''}`}
            >
              {persona?.preferences?.simplifiedLayout ? 'Learn More' : 'Read more'}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 ${persona?.preferences?.highContrast ? 'bg-black' : 'bg-background'}`}>
        <div className={`container mx-auto px-4 ${persona?.preferences?.simplifiedLayout ? 'max-w-3xl' : 'max-w-4xl'} text-center`}>
          <h2 className={`${persona?.preferences?.largeText ? 'text-5xl md:text-6xl' : 'text-4xl md:text-5xl'} font-bold mb-8 ${persona?.preferences?.highContrast ? 'text-white' : 'text-foreground'}`}>
            Welcome to Accessible Switzerland
          </h2>
          <p className={`${persona?.preferences?.largeText ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} ${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-muted-foreground'} leading-relaxed mb-8`}>
            {persona?.disabilityType === 'cognitive' 
              ? "We help you plan simple, stress-free holidays in Switzerland. Our team knows how to make travel easy for people with different needs. We have been helping people for over 10 years."
              : persona?.disabilityType === 'anxiety'
              ? "We are your calm, supportive partner for peaceful holidays in Switzerland. Our caring team specializes in creating stress-free travel experiences with 24/7 support and understanding."
              : "We are your one stop shop for accessible holidays and travel in Switzerland. Our award-winning team has over 10 years of experience in simplifying holidays for people affected by physical or sensory disability. Contact us for advice and booking your private tour, your accessible hotel or for complementary support services and equipment. We are happy to help. Claire & George is a non-profit organisation."
            }
          </p>
          <div className={`text-center ${persona?.preferences?.largeText ? 'space-y-4' : ''}`}>
            <p className={`${persona?.preferences?.largeText ? 'text-xl' : 'text-lg'} font-medium ${persona?.preferences?.highContrast ? 'text-white' : 'text-foreground'} mb-2`}>
              Advice and Booking: 
              <a href="mailto:contact@claireundgeorge.ch" className="text-primary hover:underline ml-2">
                contact@claireundgeorge.ch
              </a>
            </p>
            <p className={`${persona?.preferences?.largeText ? 'text-xl' : 'text-lg'} font-medium ${persona?.preferences?.highContrast ? 'text-white' : 'text-foreground'}`}>
              Phone:
              <a href="tel:+41313015565" className="text-primary hover:underline ml-2">
                +41 31 301 55 65
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-20 ${persona?.preferences?.highContrast ? 'bg-gray-900' : 'bg-muted/30'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`${persona?.preferences?.largeText ? 'text-5xl' : 'text-4xl'} font-bold text-center mb-16 ${persona?.preferences?.highContrast ? 'text-white' : 'text-foreground'}`}>
            What we offer
          </h2>
          
          <div className={`grid ${persona?.preferences?.simplifiedLayout ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 ${persona?.preferences?.simplifiedLayout ? 'max-w-4xl' : 'max-w-6xl'} mx-auto`}>
            {personalizedServices.map((service, index) => (
              <div key={index} className={`${persona?.preferences?.highContrast ? 'bg-black border border-white' : 'bg-background'} rounded-lg overflow-hidden shadow-alpine hover:shadow-magenta transition-all duration-300`}>
                <div className="aspect-[2/1] bg-muted">
                  <div className={`w-full h-full ${persona?.disabilityType === 'anxiety' ? 'bg-gradient-to-br from-green-400 to-blue-500' : 'bg-gradient-alpine'} flex items-center justify-center`}>
                    <span className={`text-white font-semibold ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                      {service.title}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${persona?.preferences?.largeText ? 'text-2xl' : 'text-xl'} font-bold mb-3 ${persona?.preferences?.highContrast ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-muted-foreground'} mb-4 ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="outline" className={`w-full ${persona?.preferences?.largeText ? 'text-lg py-3' : ''}`}>
                      {persona?.preferences?.simplifiedLayout ? 'View' : 'More'}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${persona?.preferences?.highContrast ? 'bg-black text-white border-t border-white' : 'bg-foreground text-white'} py-12`}>
        <div className="container mx-auto px-4">
          <div className={`grid ${persona?.preferences?.simplifiedLayout ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8`}>
            <div>
              <div className="flex items-center mb-4">
                <div className={`${persona?.preferences?.highContrast ? 'bg-white text-black' : 'bg-primary text-white'} rounded-lg p-2 mr-3`}>
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h3 className={`font-bold ${persona?.preferences?.largeText ? 'text-2xl' : 'text-xl'}`}>Claire & George</h3>
                </div>
              </div>
              <p className={`${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-gray-300'} ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>
                {persona?.disabilityType === 'cognitive' 
                  ? "We help make travel in Switzerland easy and stress-free."
                  : "Your one stop shop for accessible holidays and travel in Switzerland."
                }
              </p>
            </div>
            
            {!persona?.preferences?.simplifiedLayout && (
              <div>
                <h4 className={`font-semibold mb-4 ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>Contact</h4>
                <div className={`space-y-2 ${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-gray-300'}`}>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +41 31 301 55 65
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    contact@claireundgeorge.ch
                  </p>
                </div>
              </div>
            )}
            
            <div>
              <h4 className={`font-semibold mb-4 ${persona?.preferences?.largeText ? 'text-lg' : ''}`}>Services</h4>
              <div className={`space-y-2 ${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-gray-300'}`}>
                <Link to="/hotels" className="block hover:text-primary">Hotels</Link>
                <Link to="/tours" className="block hover:text-primary">Tours</Link>
                <Link to="/care-services" className="block hover:text-primary">Care Services</Link>
              </div>
            </div>
          </div>
          
          <div className={`border-t ${persona?.preferences?.highContrast ? 'border-white' : 'border-gray-700'} mt-8 pt-8 text-center ${persona?.preferences?.highContrast ? 'text-gray-300' : 'text-gray-300'}`}>
            <p>&copy; 2024 Claire & George. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;