import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return toast({ title: 'Please enter email and password' });
    setLoading(true);
    try {
      // Use local API server to create user and profile
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, role }),
      });

      // Safe JSON/text parsing
      let json: any = null;
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        try {
          json = await res.json();
        } catch (e) {
          json = null;
        }
      } else {
        try {
          const text = await res.text();
          json = { message: text };
        } catch (e) {
          json = null;
        }
      }

      if (!res.ok) throw new Error(json?.message || 'Signup failed');
      toast({ title: 'Signup successful', description: 'You can now log in.' });
      setEmail(''); setPassword(''); setName('');
    } catch (err: any) {
      console.error(err);
      toast({ title: 'Signup failed', description: err?.message || 'Unknown error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Sign up to apply for scholarships</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Choose a secure password" />
                </div>

                <div>
                  <Label htmlFor="role">Account type</Label>
                  <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-md border px-3 py-2">
                    <option value="student">Student</option>
                    <option value="institution">Institution</option>
                  </select>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Creating account...' : 'Sign up'}</Button>
              </form>

              <div className="mt-4 text-sm text-center text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
