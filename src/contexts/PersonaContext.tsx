import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PersonaData {
  hasDisability: boolean | null;
  disabilityType: string | null;
  preferences: {
    highContrast: boolean;
    largeText: boolean;
    simplifiedLayout: boolean;
    audioSupport: boolean;
    keyboardNavigation: boolean;
  };
  assessmentCompleted: boolean;
}

interface PersonaContextType {
  persona: PersonaData;
  updatePersona: (updates: Partial<PersonaData>) => void;
  resetPersona: () => void;
  getPersonalizedContent: (content: any) => any;
}

const defaultPersona: PersonaData = {
  hasDisability: null,
  disabilityType: null,
  preferences: {
    highContrast: false,
    largeText: false,
    simplifiedLayout: false,
    audioSupport: false,
    keyboardNavigation: false,
  },
  assessmentCompleted: false,
};

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [persona, setPersona] = useState<PersonaData>(defaultPersona);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load persona from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('claire-george-persona');
    if (saved) {
      try {
        const parsedPersona = JSON.parse(saved);
        setPersona(parsedPersona);
      } catch (error) {
        console.error('Error loading persona:', error);
        // If there's an error, keep default persona (shows assessment)
      }
    }
    setIsLoaded(true);
  }, []);

  // Save persona to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('claire-george-persona', JSON.stringify(persona));
    }
  }, [persona, isLoaded]);

  const updatePersona = (updates: Partial<PersonaData>) => {
    setPersona(prev => ({ ...prev, ...updates }));
  };

  const resetPersona = () => {
    setPersona(defaultPersona);
    localStorage.removeItem('claire-george-persona');
  };

  // Don't render children until we've loaded the persona from localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Claire & George...</p>
        </div>
      </div>
    );
  }

  const getPersonalizedContent = (content: any) => {
    if (!persona.disabilityType) return content;

    // Filter and customize content based on disability type
    switch (persona.disabilityType) {
      case 'wheelchair':
        return {
          ...content,
          hotels: content.hotels?.filter((hotel: any) => hotel.wheelchairAccessible),
          tours: content.tours?.filter((tour: any) => tour.wheelchairAccessible),
          highlightFeatures: ['wheelchair-accessible', 'elevator-access', 'accessible-parking']
        };
      case 'low-vision':
        return {
          ...content,
          highlightFeatures: ['audio-descriptions', 'tactile-guides', 'high-contrast'],
          textSize: 'large',
          colorScheme: 'high-contrast'
        };
      case 'cognitive':
        return {
          ...content,
          layout: 'simplified',
          instructions: 'step-by-step',
          highlightFeatures: ['simple-booking', 'clear-instructions', 'support-available']
        };
      case 'anxiety':
        return {
          ...content,
          colorScheme: 'calming',
          supportInfo: true,
          highlightFeatures: ['24-7-support', 'flexible-cancellation', 'calm-environment']
        };
      case 'dyslexia':
        return {
          ...content,
          font: 'dyslexia-friendly',
          readingAids: true,
          highlightFeatures: ['audio-content', 'simplified-text', 'visual-aids']
        };
      default:
        return content;
    }
  };

  return (
    <PersonaContext.Provider value={{ persona, updatePersona, resetPersona, getPersonalizedContent }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};