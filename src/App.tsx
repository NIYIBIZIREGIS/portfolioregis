import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
