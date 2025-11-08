import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Building2, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type UserRole = "student" | "institution" | "admin";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // lazy import supabase to avoid type errors if package not installed yet
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast({ title: 'Please enter email and password' });
    setLoading(true);
    try {
      // Call local API for login
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Parse response safely to avoid res.json() throwing on non-JSON responses
      let json: any = null;
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        try {
          json = await res.json();
        } catch (e) {
          // fall through
          json = null;
        }
      } else {
        // If it's not JSON, try to get text to show as error message
        try {
          const text = await res.text();
          json = { message: text };
        } catch (e) {
          json = null;
        }
      }

      if (!res.ok) throw new Error(json?.message || 'Login failed');

      toast({ title: 'Login successful', description: 'Redirecting...' });
      // redirect based on role (response may include role)
      const userRole = json?.profile?.role || selectedRole;
      setTimeout(() => {
        window.location.href = `/${userRole}-dashboard`;
      }, 800);
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Login failed', description: err?.message || 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-12">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Welcome to THEDAL</h1>
              <p className="text-lg text-muted-foreground">
                Select your role to continue
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card
                className="cursor-pointer hover:shadow-elevated transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedRole("student")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Student</CardTitle>
                  <CardDescription>
                    Find and apply for scholarships
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-elevated transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedRole("institution")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Building2 className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>Institution</CardTitle>
                  <CardDescription>
                    Manage student applications
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-elevated transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedRole("admin")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Admin</CardTitle>
                  <CardDescription>
                    Manage platform and scholarships
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-md">
          <Button
            variant="ghost"
            onClick={() => setSelectedRole(null)}
            className="mb-6"
          >
            ← Back to role selection
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>
                {selectedRole === "student" && "Student Login"}
                {selectedRole === "institution" && "Institution Login"}
                {selectedRole === "admin" && "Admin Login"}
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Signing in...' : 'Login'}
                </Button>
              </form>

              <div className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
