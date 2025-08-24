import React, { createContext, useContext, useState, useEffect } from 'react';

export type DisabilityType = 'wheelchair' | 'low-vision' | 'cognitive' | 'anxiety' | 'dyslexia' | 'hearing' | string | null;

interface PersonaContextType {
  disabilityType: DisabilityType;
  showAssessment: boolean;
  isLoading: boolean;
  setDisabilityType: (type: DisabilityType) => void;
  resetAssessment: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [disabilityType, setDisabilityTypeState] = useState<DisabilityType>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to apply dyslexia text transformation
  const applyDyslexiaTextTransformation = () => {
    const transformTextNodes = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        // Transform text content to lowercase
        node.textContent = node.textContent.toLowerCase();
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively process child nodes
        Array.from(node.childNodes).forEach(transformTextNodes);
      }
    };

    // Apply transformation to the entire document
    transformTextNodes(document.body);

    // Set up MutationObserver to handle dynamically added content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            transformTextNodes(node);
          }
        });
      });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Store the observer for cleanup
    (window as any).dyslexiaObserver = observer;
  };

  // Clear stored state on app initialization - start fresh each time
  useEffect(() => {
    // Clear any previously stored disability preference
    localStorage.removeItem('claire-george-disability');
    
    // Always start with no disability selected and show assessment
    setDisabilityTypeState(null);
    setShowAssessment(true);
    
    // Clean up any existing dyslexia observer
    if ((window as any).dyslexiaObserver) {
      (window as any).dyslexiaObserver.disconnect();
      (window as any).dyslexiaObserver = null;
    }
  }, []);

  const setDisabilityType = (type: DisabilityType) => {
    // Clean up existing dyslexia observer if switching away from dyslexia
    if (disabilityType === 'dyslexia' && type !== 'dyslexia') {
      if ((window as any).dyslexiaObserver) {
        (window as any).dyslexiaObserver.disconnect();
        (window as any).dyslexiaObserver = null;
      }
    }

    if (type && type !== 'null') {
      // Start loading for 3 seconds before applying changes
      setIsLoading(true);
      setShowAssessment(false);
      
      setTimeout(() => {
        setDisabilityTypeState(type);
        setIsLoading(false);
        // Don't save to localStorage - start fresh each time
        
        // Apply dyslexia-specific text transformation
        if (type === 'dyslexia') {
          applyDyslexiaTextTransformation();
        }
      }, 3000);
    } else {
      // No loading for null/no disability selection
      setDisabilityTypeState(type);
      setShowAssessment(false);
      // Don't save to localStorage - start fresh each time
    }
  };

  const resetAssessment = () => {
    setDisabilityTypeState(null);
    setShowAssessment(true);
    // Don't save to localStorage - start fresh each time
  };

  return (
    <PersonaContext.Provider value={{ disabilityType, showAssessment, isLoading, setDisabilityType, resetAssessment }}>
      <div className={`persona-${disabilityType || 'default'}`}>
        {children}
      </div>
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (!context) throw new Error('usePersona must be used within PersonaProvider');
  return context;
};