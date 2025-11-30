import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import DashboardPage from "@/pages/DashboardPage";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dashboard">("home");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {currentPage === "home" ? (
          <HomePage onNavigateToDashboard={() => setCurrentPage("dashboard")} />
        ) : (
          <DashboardPage onBack={() => setCurrentPage("home")} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
