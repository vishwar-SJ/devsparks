import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Search, Shield, TrendingUp, Users, Award, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-10" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Award className="h-4 w-4" />
                <span>India's Leading Scholarship Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Unlock Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Educational Dreams
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Discover thousands of scholarships tailored to your profile. We help students across India find and apply for financial aid opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/scholarships">
                  <Button size="lg" className="text-lg px-8">
                    Explore Scholarships
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Get Started Free
                  </Button>
                </Link>
              </div>

              <div className="pt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50,000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>1000+ Scholarships</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose THEDAL?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We make scholarship discovery and application seamless for students, institutions, and administrators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-elevated transition-all duration-300 bg-gradient-card">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI-powered system matches you with scholarships based on your profile, eligibility, and goals.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-elevated transition-all duration-300 bg-gradient-card">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Your data is protected with industry-standard encryption and security measures.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-elevated transition-all duration-300 bg-gradient-card">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your applications, deadlines, and scholarship status all in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                <p className="text-muted-foreground">
                  Sign up and complete your profile with academic and personal details
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Scholarships</h3>
                <p className="text-muted-foreground">
                  Browse and filter scholarships that match your eligibility criteria
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply & Track</h3>
                <p className="text-muted-foreground">
                  Submit applications and track their status in your dashboard
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/login">
                <Button size="lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Find Your Perfect Scholarship?
              </h2>
              <p className="text-lg opacity-90">
                Join thousands of students who have successfully secured scholarships through THEDAL
              </p>
              <Link to="/scholarships">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Browse Scholarships
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
