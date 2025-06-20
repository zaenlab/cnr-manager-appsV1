import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Containers } from "./pages/Containers";
import { AddContainer } from "./pages/containers/AddContainer";
import { EditContainer } from "./pages/containers/EditContainer";
import { Dashboard } from "./pages/reports/Dashboard";
import { TeamComparison } from "./pages/reports/TeamComparison";
import { TeamProfiles } from "./pages/reports/TeamProfiles";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNavigation } from "@/components/BottomNavigation";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1 pb-16">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/containers" element={<Containers />} />
                <Route path="/containers/new" element={<AddContainer />} />
                <Route path="/containers/edit/:id" element={<EditContainer />} />
                <Route path="/reports" element={<Dashboard />} />
                <Route path="/reports/teams" element={<TeamComparison />} />
                <Route path="/reports/profiles" element={<TeamProfiles />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <BottomNavigation />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;