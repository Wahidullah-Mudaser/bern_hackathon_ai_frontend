import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// CMS Pages
import CMSDashboard from "./pages/cms/Dashboard";

// Public Website Pages  
import HomePage from "./pages/public/Home";
import HotelsPage from "./pages/public/Hotels";
import ToursPage from "./pages/public/Tours";
import ServicesPage from "./pages/public/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/care-services" element={<ServicesPage />} />
          
          {/* CMS Routes */}
          <Route path="/cms" element={<CMSDashboard />} />
          <Route path="/cms/*" element={<CMSDashboard />} />
          
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;