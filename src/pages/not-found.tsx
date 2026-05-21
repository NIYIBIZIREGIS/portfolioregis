import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <div className="text-8xl font-black text-primary/20">404</div>
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
      >
        Go Home
      </button>
    </div>
  );
}
