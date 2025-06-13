import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { Containers } from "./pages/Containers";
import { ContainerDetail } from "./pages/containers/ContainerDetail";
import { EditContainer } from "./pages/containers/EditContainer";
import { AddContainer } from "./pages/containers/AddContainer";
import { Dashboard } from "./pages/reports/Dashboard";
import { TeamComparison } from "./pages/reports/TeamComparison";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/containers/new" element={<AddContainer />} />
          <Route path="/containers/:id" element={<ContainerDetail />} />
          <Route path="/containers/:id/edit" element={<EditContainer />} />
          <Route path="/reports" element={<Dashboard />} />
          <Route path="/reports/teams" element={<TeamComparison />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;