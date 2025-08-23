import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Phone, Mail, Menu, X } from "lucide-react";
import heroImage from "@/assets/harderkulm-hero.jpg";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-50">
        {/* Top Bar */}
        <div className="bg-primary text-white py-2 px-4">
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
              <Link to="/cms" className="hover:underline">
                CMS Login
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white shadow-sm">
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
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/hotels" className="text-foreground hover:text-primary font-medium">
                  Hotels
                </Link>
                <Link to="/tours" className="text-foreground hover:text-primary font-medium">
                  Tours
                </Link>
                <Link to="/care-services" className="text-foreground hover:text-primary font-medium">
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
                  <Link to="/hotels" className="text-foreground hover:text-primary font-medium">
                    Hotels
                  </Link>
                  <Link to="/tours" className="text-foreground hover:text-primary font-medium">
                    Tours
                  </Link>
                  <Link to="/care-services" className="text-foreground hover:text-primary font-medium">
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
          <div className="mb-6">
            <span className="text-primary font-semibold tracking-wider">CLAIRE & GEORGE</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to Accessible
            <br />
            Switzerland
          </h1>
          <div className="flex justify-center mb-8">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 border border-white/30 px-8 py-3"
            >
              Read more
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Welcome to Accessible Switzerland
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            We are your one stop shop for accessible holidays and travel in Switzerland. Our award-winning team has over 10 years of experience in simplifying holidays for people affected by physical or sensory disability. Contact us for advice and booking your private tour, your accessible hotel or for complementary support services and equipment. We are happy to help. Claire & George is a non-profit organisation.
          </p>
          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-2">
              Advice and Booking: 
              <a href="mailto:contact@claireundgeorge.ch" className="text-primary hover:underline ml-2">
                contact@claireundgeorge.ch
              </a>
            </p>
            <p className="text-lg font-medium text-foreground">
              Phone: 
              <a href="tel:+41313015565" className="text-primary hover:underline ml-2">
                +41 31 301 55 65
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            What we offer
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Holidays with Care */}
            <div className="bg-background rounded-lg overflow-hidden shadow-alpine hover:shadow-magenta transition-all duration-300">
              <div className="aspect-[2/1] bg-muted">
                {/* Placeholder for service image */}
                <div className="w-full h-full bg-gradient-alpine flex items-center justify-center">
                  <span className="text-white font-semibold">Holidays with Care</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Holidays with Care</h3>
                <p className="text-muted-foreground mb-4">
                  Additional services offered by Claire & George to ensure you have a relaxing and stress-free holiday – nothing is too much trouble.
                </p>
                <Link to="/care-services">
                  <Button variant="outline" className="w-full">
                    More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hotels and Accommodation */}
            <div className="bg-background rounded-lg overflow-hidden shadow-alpine hover:shadow-magenta transition-all duration-300">
              <div className="aspect-[2/1] bg-muted">
                <div className="w-full h-full bg-gradient-alpine flex items-center justify-center">
                  <span className="text-white font-semibold">Hotels & Accommodation</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Hotels and Accommodation</h3>
                <p className="text-muted-foreground mb-4">
                  Here you will find our selection of places to stay, including the best wheelchair accessible hotels, in Switzerland!
                </p>
                <Link to="/hotels">
                  <Button variant="outline" className="w-full">
                    More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Accessible Tour of Switzerland */}
            <div className="bg-background rounded-lg overflow-hidden shadow-alpine hover:shadow-magenta transition-all duration-300">
              <div className="aspect-[2/1] bg-muted">
                <div className="w-full h-full bg-gradient-alpine flex items-center justify-center">
                  <span className="text-white font-semibold">Accessible Tours</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">Accessible Tour of Switzerland</h3>
                <p className="text-muted-foreground mb-4">
                  Experience the beauty of Switzerland with our specially designed accessible tours and expert guidance.
                </p>
                <Link to="/tours">
                  <Button variant="outline" className="w-full">
                    More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-primary text-white rounded-lg p-2 mr-3">
                  <span className="font-bold text-lg">C&G</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Claire & George</h3>
                </div>
              </div>
              <p className="text-gray-300">
                Your one stop shop for accessible holidays and travel in Switzerland.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
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
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-gray-300">
                <Link to="/hotels" className="block hover:text-primary">Hotels</Link>
                <Link to="/tours" className="block hover:text-primary">Tours</Link>
                <Link to="/care-services" className="block hover:text-primary">Care Services</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Claire & George. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;