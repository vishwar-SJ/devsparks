import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  FileText, 
  TrendingUp, 
  Award, 
  Bell, 
  BookmarkPlus,
  Calendar,
  CheckCircle2
} from "lucide-react";
import { scholarships } from "@/data/scholarships";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const recommendedScholarships = scholarships.slice(0, 3);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-muted/50">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
            <p className="text-muted-foreground">
              Here's an overview of your scholarship journey
            </p>
          </div>

          {/* Profile Completion Card */}
          <Card className="mb-8 bg-gradient-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Profile Completion</CardTitle>
                  <CardDescription>Complete your profile to get better matches</CardDescription>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={65} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">65% Complete</span>
                  <Button size="sm" onClick={() => navigate("/student-profile")}>Complete Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Matched</p>
                    <p className="text-2xl font-bold">24</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Applied</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <FileText className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Shortlisted</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <Award className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Bookmarked</p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                  <BookmarkPlus className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recommended Scholarships */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recommended Scholarships</CardTitle>
                <CardDescription>Based on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedScholarships.map((scholarship) => (
                    <div key={scholarship.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <p className="font-semibold">{scholarship.title}</p>
                        <p className="text-sm text-muted-foreground">{scholarship.provider}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{scholarship.category}</Badge>
                          <Badge variant="outline" className="text-success">{scholarship.amount}</Badge>
                        </div>
                      </div>
                      <Button onClick={() => navigate(`/scholarship/${scholarship.id}`)}>
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => navigate("/scholarships")}
                >
                  View All Scholarships
                </Button>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="lg:col-span-2 mt-6">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Track your scholarship applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Post Matric SC Scholarship", status: "Under Review", date: "Applied 5 days ago" },
                    { name: "Chief Minister's Scholarship", status: "Shortlisted", date: "Applied 12 days ago" },
                    { name: "National Merit Scholarship", status: "Applied", date: "Applied 18 days ago" },
                  ].map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div>
                        <p className="font-medium">{app.name}</p>
                        <p className="text-sm text-muted-foreground">{app.date}</p>
                      </div>
                      <Badge 
                        variant={app.status === "Shortlisted" ? "default" : "secondary"}
                      >
                        {app.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Notifications</CardTitle>
                    <Bell className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { text: "New scholarship match available", time: "2h ago" },
                      { text: "Application deadline approaching", time: "1d ago" },
                      { text: "Profile verification complete", time: "3d ago" },
                    ].map((notif, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium">{notif.text}</p>
                        <p className="text-muted-foreground text-xs">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Deadlines */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">Deadlines</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "UGC Scholarship", date: "15 Mar 2025" },
                      { name: "State Merit Award", date: "20 Mar 2025" },
                      { name: "Minority Scholarship", date: "31 Mar 2025" },
                    ].map((deadline, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <span className="font-medium">{deadline.name}</span>
                        <span className="text-muted-foreground">{deadline.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full" variant="outline" onClick={() => navigate("/student-profile")}>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Complete Profile
                  </Button>
                  <Button className="w-full" variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Upload Documents
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentDashboard;
