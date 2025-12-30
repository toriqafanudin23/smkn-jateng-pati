import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ProgramStudi from "./pages/ProgramStudi";
import LabBengkel from "./pages/LabBengkel";
import Berita from "./pages/Berita";
import GuruStaf from "./pages/GuruStaf";
import PPDB from "./pages/PPDB";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/program-studi" element={<ProgramStudi />} />
            <Route path="/lab-bengkel" element={<LabBengkel />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/guru-staf" element={<GuruStaf />} />
            <Route path="/ppdb" element={<PPDB />} />
            <Route path="/galeri" element={<Galeri />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
