import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePersona } from '@/contexts/PersonaContext';
import { 
  Accessibility, Eye, Brain, Heart, BookOpen, Ear, CheckCircle, X
} from 'lucide-react';

const AccessibilityAssessment = () => {
  const { setDisabilityType } = usePersona();
  const [step, setStep] = useState<'question' | 'selection'>('question');

  const disabilities = [
    { id: 'wheelchair', name: 'Wheelchair Assistance', icon: Accessibility, color: 'bg-blue-500' },
    { id: 'low-vision', name: 'Low Vision', icon: Eye, color: 'bg-purple-500' },
    { id: 'cognitive', name: 'Cognitive Support', icon: Brain, color: 'bg-green-500' },
    { id: 'anxiety', name: 'Anxiety Support', icon: Heart, color: 'bg-pink-500' },
    { id: 'dyslexia', name: 'Dyslexia Support', icon: BookOpen, color: 'bg-orange-500' },
    { id: 'hearing', name: 'Hearing Support', icon: Ear, color: 'bg-indigo-500' },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-scale-in">
        <CardHeader className="text-center relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0"
            onClick={() => setDisabilityType(null)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="mx-auto bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Accessibility className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Welcome to Claire & George</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 'question' && (
            <div className="text-center space-y-6">
              <h3 className="text-xl font-semibold">
                Do you need accessibility support?
              </h3>
              <p className="text-muted-foreground">
                We'll customize your experience to better serve your needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2"
                  onClick={() => setStep('selection')}
                >
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <span>Yes, I need support</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-20 flex-col gap-2"
                  onClick={() => setDisabilityType(null)}
                >
                  <span>No, continue normally</span>
                </Button>
              </div>
            </div>
          )}

          {step === 'selection' && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  What type of support do you need?
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {disabilities.map((disability) => (
                  <Button
                    key={disability.id}
                    variant="outline"
                    className="h-auto p-4 flex-col gap-3 hover:shadow-lg transition-all"
                    onClick={() => setDisabilityType(disability.id as any)}
                  >
                    <div className={`${disability.color} rounded-lg p-2`}>
                      <disability.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium">{disability.name}</span>
                  </Button>
                ))}
              </div>
              <div className="text-center">
                <Button variant="ghost" onClick={() => setStep('question')}>
                  ← Back
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