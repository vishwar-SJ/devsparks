import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, IndianRupee, Building2, BookOpen } from "lucide-react";

interface ScholarshipCardProps {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  type: "State" | "Central" | "Private";
  category: string;
  eligibility: string;
}

const ScholarshipCard = ({
  id,
  title,
  provider,
  amount,
  deadline,
  type,
  category,
  eligibility,
}: ScholarshipCardProps) => {
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
    <Card className="group hover:shadow-elevated transition-all duration-300 bg-gradient-card">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <Badge className={getTypeColor(type)}>{type}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span>{provider}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <IndianRupee className="h-4 w-4 text-success" />
            <span className="font-semibold text-success">{amount}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{deadline}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{eligibility}</span>
        </div>

        <Badge variant="outline" className="text-xs">
          {category}
        </Badge>
      </CardContent>

      <CardFooter>
        <Link to={`/scholarship/${id}`} className="w-full">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ScholarshipCard;
