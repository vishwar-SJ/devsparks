import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, BookOpen, FileText, Clock, Users, Award } from "lucide-react";

const HowToApply = () => {
  const steps = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "1. Browse Scholarships",
      description: "Search through our comprehensive list of available scholarships that match your profile and interests."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "2. Check Eligibility",
      description: "Carefully review the eligibility criteria for each scholarship to ensure you meet all requirements."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "3. Prepare Documents",
      description: "Gather all necessary documents such as academic records, identification, and supporting materials."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "4. Complete Profile",
      description: "Fill in your student profile with accurate information about your academic background and achievements."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "5. Submit Application",
      description: "Submit your application before the deadline and ensure all required fields are completed."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "6. Track Status",
      description: "Monitor your application status through your dashboard and respond to any additional requirements."
    }
  ];

  const documents = [
    "Valid government-issued ID",
    "Recent passport-size photograph",
    "Academic transcripts",
    "Proof of income (if applicable)",
    "Letters of recommendation",
    "Statement of purpose",
    "Extracurricular achievements certificates",
    "Bank account details"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-12">
        <h1 className="text-4xl font-bold text-center mb-8">How to Apply for Scholarships</h1>
        
        {/* Application Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow">
              <div className="text-primary">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Required Documents Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>All documents should be in PDF format and clearly legible</li>
            <li>Maximum file size for each document is 5MB</li>
            <li>Applications must be submitted before the specified deadline</li>
            <li>Incomplete applications will not be considered</li>
            <li>Make sure to review your application before final submission</li>
          </ul>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default HowToApply;