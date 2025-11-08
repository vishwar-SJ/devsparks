import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { scholarships } from "@/data/scholarships";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, IndianRupee, Building2, FileText, ExternalLink, CheckCircle, User, Phone, MessageSquare, Video } from "lucide-react";

const ScholarshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const scholarship = scholarships.find((s) => s.id === id);

  if (!scholarship) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Scholarship Not Found</h1>
            <p className="text-muted-foreground mb-6">The scholarship you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/scholarships")}>View All Scholarships</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "State":
        return "bg-primary/10 text-primary";
      case "Central":
        return "bg-secondary/10 text-secondary";
      case "Private":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-8 bg-gradient-hero">
          <div className="container">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/scholarships")}
              className="mb-4 text-white hover:bg-white/10"
            >
              ← Back to Scholarships
            </Button>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {scholarship.title}
              </h1>
              <Badge className={getTypeColor(scholarship.type)}>{scholarship.type}</Badge>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Building2 className="h-5 w-5" />
              <span className="text-lg">{scholarship.provider}</span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About this Scholarship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{scholarship.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {scholarship.detailedEligibility ? (
                        scholarship.detailedEligibility.map((criteria, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{criteria}</span>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted-foreground">{scholarship.eligibility}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Required Documents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {scholarship.requiredDocuments.map((doc, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {scholarship.videoTutorial && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="h-5 w-5" />
                        How to Apply - Video Tutorial
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={scholarship.videoTutorial}
                          title="Application Tutorial"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {scholarship.pastRecipients && scholarship.pastRecipients.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Past Scholarship Recipients</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Connect with previous recipients for guidance
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {scholarship.pastRecipients.map((recipient, index) => (
                          <div key={index}>
                            {index > 0 && <Separator className="my-4" />}
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4 text-primary" />
                                <span className="font-semibold">{recipient.name}</span>
                                <Badge variant="outline" className="text-xs">
                                  {recipient.year}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4" />
                                <a href={`tel:${recipient.contact}`} className="hover:text-primary">
                                  {recipient.contact}
                                </a>
                              </div>
                              <div className="flex items-start gap-2">
                                <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                <p className="text-sm italic text-muted-foreground">
                                  "{recipient.testimonial}"
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="space-y-4">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="text-xl">Key Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <IndianRupee className="h-4 w-4" />
                        <span>Scholarship Amount</span>
                      </div>
                      <p className="text-lg font-semibold text-success">{scholarship.amount}</p>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>Application Deadline</span>
                      </div>
                      <p className="font-semibold">{scholarship.deadline}</p>
                    </div>

                    <Separator />

                    <div>
                      <div className="text-sm text-muted-foreground mb-2">Category</div>
                      <Badge variant="outline">{scholarship.category}</Badge>
                    </div>

                    <Separator />

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => window.open(scholarship.applicationLink, '_blank')}
                    >
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      You'll be redirected to the official application portal
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ScholarshipDetail;
