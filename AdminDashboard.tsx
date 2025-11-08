import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award,
  Users,
  Building2,
  TrendingUp,
  Plus,
  FileText,
  BarChart3,
  Settings
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAddScholarship = () => {
    toast({
      title: "Add Scholarship",
      description: "Opening scholarship creation form...",
    });
  };

  const handleManageUsers = () => {
    toast({
      title: "User Management",
      description: "Opening user management panel...",
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-muted/50">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Manage scholarships, users, and platform analytics
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Scholarships</p>
                    <p className="text-2xl font-bold">1,248</p>
                    <p className="text-xs text-success">+12 this month</p>
                  </div>
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                    <p className="text-2xl font-bold">52,340</p>
                    <p className="text-xs text-success">+1,234 this month</p>
                  </div>
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Institutions</p>
                    <p className="text-2xl font-bold">856</p>
                    <p className="text-xs text-success">+23 this month</p>
                  </div>
                  <Building2 className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Applications</p>
                    <p className="text-2xl font-bold">15,672</p>
                    <p className="text-xs text-success">+892 this week</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Plus className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Add Scholarship</CardTitle>
                <CardDescription>
                  Create new scholarship opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={handleAddScholarship}>Add New Scholarship</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  View detailed platform analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={() => navigate("/scholarships")}>View Analytics</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Settings className="h-8 w-8 text-success mb-2" />
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>
                  Configure platform parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={handleManageUsers}>Manage Settings</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Scholarships */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Scholarships</CardTitle>
                <CardDescription>Recently added scholarship programs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "National Merit Scholarship 2025", type: "Central", status: "Active" },
                    { name: "State Engineering Scholarship", type: "State", status: "Active" },
                    { name: "Private Medical Scholarship", type: "Private", status: "Pending" },
                    { name: "Sports Excellence Award", type: "Central", status: "Active" },
                  ].map((scholarship, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div>
                        <p className="font-medium">{scholarship.name}</p>
                        <p className="text-sm text-muted-foreground">{scholarship.type}</p>
                      </div>
                      <Badge variant={scholarship.status === "Active" ? "default" : "secondary"}>
                        {scholarship.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Platform Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Activity</CardTitle>
                <CardDescription>Recent platform events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { event: "New institution registered", user: "ABC College", time: "2 hours ago" },
                    { event: "Scholarship approved", user: "XYZ Foundation", time: "5 hours ago" },
                    { event: "Bulk upload completed", user: "DEF University", time: "1 day ago" },
                    { event: "New user registered", user: "John Doe", time: "1 day ago" },
                  ].map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-border">
                      <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.event}</p>
                        <p className="text-sm text-muted-foreground">{activity.user}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
