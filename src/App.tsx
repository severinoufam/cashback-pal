
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Store from "./pages/Store";
import Partners from "./pages/Partners";
import Wallet from "./pages/Wallet";
import Orders from "./pages/Orders";
import SecondInvoice from "./pages/SecondInvoice";
import InvoiceDiscount from "./pages/InvoiceDiscount";
import Contact from "./pages/Contact";
import Rules from "./pages/Rules";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<Store />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/second-invoice" element={<SecondInvoice />} />
          <Route path="/invoice-discount" element={<InvoiceDiscount />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
