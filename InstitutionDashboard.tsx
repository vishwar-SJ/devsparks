import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  UserPlus, 
  FileSpreadsheet, 
  TrendingUp,
  Award,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InstitutionDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBulkUpload = () => {
    toast({
      title: "Bulk Upload",
      description: "Please upload a CSV file with student details.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your student data is being exported...",
    });
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8 bg-muted/50">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Institution Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your students and scholarship applications
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                    <p className="text-2xl font-bold">342</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Applications</p>
                    <p className="text-2xl font-bold">156</p>
                  </div>
                  <FileSpreadsheet className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Awarded</p>
                    <p className="text-2xl font-bold">48</p>
                  </div>
                  <Award className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                    <p className="text-2xl font-bold">31%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <UserPlus className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Add Students</CardTitle>
                <CardDescription>
                  Manually add or bulk upload student records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full" onClick={handleBulkUpload}>Add Single Student</Button>
                  <Button variant="outline" className="w-full" onClick={handleBulkUpload}>
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    Bulk Upload CSV
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Users className="h-8 w-8 text-secondary mb-2" />
                <CardTitle>Manage Students</CardTitle>
                <CardDescription>
                  View, edit, or delete student information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={handleExport}>View All Students</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Download className="h-8 w-8 text-success mb-2" />
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and export institution reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" onClick={handleExport}>Generate Report</Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Students Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Student Applications</CardTitle>
              <CardDescription>
                Latest scholarship applications from your students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Raj Kumar", scholarship: "Post Matric SC", status: "Shortlisted", date: "2 days ago" },
                  { name: "Priya Sharma", scholarship: "Chief Minister's", status: "Under Review", date: "3 days ago" },
                  { name: "Arun Singh", scholarship: "Merit Scholarship", status: "Applied", date: "5 days ago" },
                  { name: "Lakshmi Devi", scholarship: "Girl Child Award", status: "Awarded", date: "1 week ago" },
                  { name: "Mohammed Ali", scholarship: "Minority Scheme", status: "Applied", date: "1 week ago" },
                ].map((student, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.scholarship}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">{student.date}</span>
                      <Badge 
                        variant={
                          student.status === "Awarded" ? "default" : 
                          student.status === "Shortlisted" ? "secondary" : 
                          "outline"
                        }
                      >
                        {student.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InstitutionDashboard;
