import { useEffect, useState } from 'react';
import { Accessibility, Loader2, CheckCircle } from 'lucide-react';
import { DisabilityType } from '@/contexts/PersonaContext';

interface AccessibilityLoadingTransitionProps {
  disabilityType: DisabilityType;
  onComplete: () => void;
}

const AccessibilityLoadingTransition = ({ disabilityType, onComplete }: AccessibilityLoadingTransitionProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const getDisabilityInfo = () => {
    switch (disabilityType) {
      case 'wheelchair':
        return {
          name: 'Wheelchair Accessibility',
          color: 'text-blue-500',
          bgColor: 'bg-blue-500',
          gradientFrom: 'from-blue-500',
          gradientTo: 'to-blue-600',
          steps: [
            'Scanning accessibility features...',
            'Optimizing for mobility access...',
            'Personalizing your experience...'
          ]
        };
      case 'low-vision':
        return {
          name: 'Low Vision Support',
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-500',
          gradientFrom: 'from-yellow-500',
          gradientTo: 'to-yellow-600',
          steps: [
            'Enhancing visual contrast...',
            'Adjusting text size and clarity...',
            'Optimizing for better visibility...'
          ]
        };
      case 'cognitive':
        return {
          name: 'Cognitive Support',
          color: 'text-green-500',
          bgColor: 'bg-green-500',
          gradientFrom: 'from-green-500',
          gradientTo: 'to-green-600',
          steps: [
            'Simplifying content structure...',
            'Reducing cognitive load...',
            'Creating clear pathways...'
          ]
        };
      case 'anxiety':
        return {
          name: 'Anxiety Support',
          color: 'text-indigo-500',
          bgColor: 'bg-indigo-500',
          gradientFrom: 'from-indigo-500',
          gradientTo: 'to-indigo-600',
          steps: [
            'Creating calming environment...',
            'Highlighting safety features...',
            'Reducing stress elements...'
          ]
        };
      case 'dyslexia':
        return {
          name: 'Dyslexia Support',
          color: 'text-orange-500',
          bgColor: 'bg-orange-500',
          gradientFrom: 'from-orange-500',
          gradientTo: 'to-orange-600',
          steps: [
            'Adjusting font and spacing...',
            'Simplifying language...',
            'Improving readability...'
          ]
        };
      case 'hearing':
        return {
          name: 'Hearing Support',
          color: 'text-purple-500',
          bgColor: 'bg-purple-500',
          gradientFrom: 'from-purple-500',
          gradientTo: 'to-purple-600',
          steps: [
            'Enhancing visual information...',
            'Adding text alternatives...',
            'Optimizing visual cues...'
          ]
        };
      default:
        return {
          name: 'Accessibility Support',
          color: 'text-primary',
          bgColor: 'bg-primary',
          gradientFrom: 'from-primary',
          gradientTo: 'to-primary-glow',
          steps: [
            'Personalizing experience...',
            'Applying preferences...',
            'Optimizing interface...'
          ]
        };
    }
  };

  const disabilityInfo = getDisabilityInfo();

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const stepDuration = duration / 3;
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= 2) {
          clearInterval(stepInterval);
          return 2;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4">
      <div className="relative">
        {/* Background glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${disabilityInfo.gradientFrom} ${disabilityInfo.gradientTo} rounded-full blur-3xl opacity-20 scale-150`} />
        
        <div className="relative bg-card border border-border rounded-2xl p-8 w-96 text-center shadow-2xl">
          {/* Icon with animated ring */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 ${disabilityInfo.bgColor} rounded-full opacity-20 animate-ping`} />
            <div className={`relative ${disabilityInfo.bgColor} rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center`}>
              <Accessibility className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Personalizing Your Experience
          </h2>
          <p className={`text-lg font-medium ${disabilityInfo.color} mb-6`}>
            {disabilityInfo.name}
          </p>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="bg-muted rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${disabilityInfo.gradientFrom} ${disabilityInfo.gradientTo} transition-all duration-300 ease-out`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{progress}% Complete</p>
          </div>

          {/* Current step */}
          <div className="flex items-center justify-center gap-3 mb-4">
            {progress < 100 ? (
              <Loader2 className={`h-5 w-5 ${disabilityInfo.color} animate-spin`} />
            ) : (
              <CheckCircle className={`h-5 w-5 ${disabilityInfo.color}`} />
            )}
            <span className="text-muted-foreground">
              {disabilityInfo.steps[currentStep]}
            </span>
          </div>

          {/* Accessibility message */}
          <p className="text-sm text-muted-foreground">
            We're making Switzerland more accessible for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityLoadingTransition;