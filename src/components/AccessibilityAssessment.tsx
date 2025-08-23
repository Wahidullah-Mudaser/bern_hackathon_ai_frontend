import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePersona } from '@/contexts/PersonaContext';
import { 
  Accessibility, 
  Eye, 
  Brain, 
  Heart, 
  BookOpen, 
  Ear,
  CheckCircle,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

const AccessibilityAssessment = () => {
  const { persona, updatePersona } = usePersona();
  const [step, setStep] = useState(1);

  const disabilityTypes = [
    {
      id: 'wheelchair',
      name: 'Wheelchair Assistance',
      icon: Accessibility,
      description: 'I use a wheelchair or mobility aid',
      color: 'bg-blue-500',
      preferences: {
        highContrast: false,
        largeText: false,
        simplifiedLayout: false,
        audioSupport: false,
        keyboardNavigation: true,
      }
    },
    {
      id: 'low-vision',
      name: 'Low Vision',
      icon: Eye,
      description: 'I have difficulty seeing or am visually impaired',
      color: 'bg-purple-500',
      preferences: {
        highContrast: true,
        largeText: true,
        simplifiedLayout: true,
        audioSupport: true,
        keyboardNavigation: true,
      }
    },
    {
      id: 'cognitive',
      name: 'Cognitive Impairment',
      icon: Brain,
      description: 'I have difficulty with memory, attention, or processing',
      color: 'bg-green-500',
      preferences: {
        highContrast: false,
        largeText: true,
        simplifiedLayout: true,
        audioSupport: true,
        keyboardNavigation: false,
      }
    },
    {
      id: 'anxiety',
      name: 'Anxiety Disorders',
      icon: Heart,
      description: 'I experience anxiety or stress-related challenges',
      color: 'bg-pink-500',
      preferences: {
        highContrast: false,
        largeText: false,
        simplifiedLayout: true,
        audioSupport: false,
        keyboardNavigation: false,
      }
    },
    {
      id: 'dyslexia',
      name: 'Dyslexia',
      icon: BookOpen,
      description: 'I have difficulty reading or processing text',
      color: 'bg-orange-500',
      preferences: {
        highContrast: false,
        largeText: true,
        simplifiedLayout: true,
        audioSupport: true,
        keyboardNavigation: false,
      }
    },
    {
      id: 'hearing',
      name: 'Hearing Impairment',
      icon: Ear,
      description: 'I am deaf or hard of hearing',
      color: 'bg-indigo-500',
      preferences: {
        highContrast: false,
        largeText: false,
        simplifiedLayout: false,
        audioSupport: false,
        keyboardNavigation: true,
      }
    },
  ];

  const handleDisabilityResponse = (hasDisability: boolean) => {
    if (hasDisability) {
      setStep(2);
    } else {
      updatePersona({
        hasDisability: false,
        disabilityType: null,
        assessmentCompleted: true,
      });
    }
  };

  const handleDisabilityTypeSelection = (type: string) => {
    const selectedType = disabilityTypes.find(t => t.id === type);
    updatePersona({
      hasDisability: true,
      disabilityType: type,
      preferences: selectedType?.preferences || persona.preferences,
      assessmentCompleted: true,
    });
  };

  const resetAssessment = () => {
    setStep(1);
    updatePersona({
      hasDisability: null,
      disabilityType: null,
      assessmentCompleted: false,
    });
  };

  if (persona.assessmentCompleted) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-scale-in">
          <CardHeader className="text-center">
            <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Welcome to Claire & George!</CardTitle>
            <CardDescription>
              {persona.hasDisability 
                ? `Your experience has been personalized for ${disabilityTypes.find(t => t.id === persona.disabilityType)?.name || 'your needs'}.`
                : "We're here to help you discover accessible Switzerland."
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {persona.hasDisability && (
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Activated Features:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(persona.preferences).map(([key, value]) => (
                    value && (
                      <Badge key={key} variant="secondary" className="text-xs">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </Badge>
                    )
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-3">
              <Button 
                onClick={() => updatePersona({ assessmentCompleted: true })}
                className="flex-1 bg-primary hover:bg-primary-glow"
              >
                Continue to Site
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={resetAssessment}
                size="icon"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Accessibility className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl">Welcome to Claire & George</CardTitle>
          <CardDescription className="text-lg">
            Let us personalize your experience for accessible travel in Switzerland
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Do you have any disabilities or accessibility needs?
                </h3>
                <p className="text-muted-foreground mb-6">
                  This helps us customize the website to better serve your specific needs.
                  Your privacy is important to us - this information stays on your device.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center gap-3"
                  onClick={() => handleDisabilityResponse(true)}
                >
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-semibold">Yes</div>
                    <div className="text-sm text-muted-foreground">
                      I have accessibility needs
                    </div>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-auto p-6 flex flex-col items-center gap-3"
                  onClick={() => handleDisabilityResponse(false)}
                >
                  <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">No</div>
                    <div className="text-sm text-muted-foreground">
                      Continue to the website
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  What type of accessibility support do you need?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Select the option that best describes your primary accessibility need.
                  We'll customize the interface accordingly.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disabilityTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-start gap-3 text-left hover:shadow-alpine transition-all duration-300"
                    onClick={() => handleDisabilityTypeSelection(type.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${type.color} rounded-lg p-2`}>
                        <type.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="font-semibold">{type.name}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {type.description}
                    </div>
                  </Button>
                ))}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  onClick={() => setStep(1)}
                >
                  ← Go Back
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessibilityAssessment;