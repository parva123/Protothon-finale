
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JournalFinder from "./pages/JournalFinder";
import ResearchGapFinder from "./pages/ResearchGapFinder";
import FormattingCompliance from "./pages/FormattingCompliance";
import Dashboard from "./pages/Dashboard";
import PlagiarismDetector from "./pages/PlagiarismDetector";
import Pricing from "./pages/Pricing";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Writing from "./pages/Writing";
import Predictor from "./pages/Predictor";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";

// Make sure all routes in the Navbar have corresponding routes here
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journals" element={<JournalFinder />} />
          <Route path="/gaps" element={<ResearchGapFinder />} />
          <Route path="/compliance" element={<FormattingCompliance />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plagiarism" element={<PlagiarismDetector />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/community" element={<Community />} />
          <Route path="/search" element={<Search />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
