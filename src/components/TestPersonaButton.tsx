import { Button } from "@/components/ui/button";
import { usePersona } from "@/contexts/PersonaContext";

const TestPersonaButton = () => {
  const { persona, resetPersona } = usePersona();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
        <p className="text-sm font-medium mb-2">Debug Info:</p>
        <p className="text-xs">Assessment: {persona.assessmentCompleted ? 'Completed' : 'Not Completed'}</p>
        <p className="text-xs">Disability: {persona.disabilityType || 'None'}</p>
        <p className="text-xs">Has Disability: {persona.hasDisability ? 'Yes' : 'No'}</p>
      </div>
      <Button
        onClick={resetPersona}
        size="sm"
        variant="outline"
        className="w-full"
      >
        Reset Assessment
      </Button>
    </div>
  );
};

export default TestPersonaButton;