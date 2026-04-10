import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Calculadora from "./pages/Calculadora";
import NotFound from "./pages/NotFound";
import ConcretoUsinadoMaringa from "./pages/ConcretoUsinadoMaringa";
import PrecoConcreto from "./pages/PrecoConcreto";
import ConcretoLaje from "./pages/ConcretoLaje";
import ConcretoPiso from "./pages/ConcretoPiso";
import ConcretoCalcada from "./pages/ConcretoCalcada";
import FckConcreto from "./pages/FckConcreto";
import SlumpConcreto from "./pages/SlumpConcreto";
import BombeamentoConcreto from "./pages/BombeamentoConcreto";
import AreasAtendimento from "./pages/AreasAtendimento";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/concreto-usinado-maringa" element={<ConcretoUsinadoMaringa />} />
            <Route path="/preco-concreto-usinado" element={<PrecoConcreto />} />
            <Route path="/concreto-para-laje" element={<ConcretoLaje />} />
            <Route path="/concreto-para-piso" element={<ConcretoPiso />} />
            <Route path="/concreto-para-calcada" element={<ConcretoCalcada />} />
            <Route path="/fck-concreto" element={<FckConcreto />} />
            <Route path="/slump-concreto" element={<SlumpConcreto />} />
            <Route path="/bombeamento-concreto" element={<BombeamentoConcreto />} />
            <Route path="/areas-atendimento" element={<AreasAtendimento />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
