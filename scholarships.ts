export interface PastRecipient {
  name: string;
  year: string;
  contact: string;
  testimonial: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  type: "State" | "Central" | "Private";
  category: string;
  eligibility: string;
  description: string;
  requiredDocuments: string[];
  applicationLink: string;
  videoTutorial?: string;
  pastRecipients?: PastRecipient[];
  detailedEligibility?: string[];
}

export const scholarships: Scholarship[] = [
  {
    id: "1",
    title: "Post Matric Scholarship for SC Students",
    provider: "Ministry of Social Justice and Empowerment",
    amount: "₹10,000 - ₹1,20,000/year",
    deadline: "31st March 2025",
    type: "Central",
    category: "SC/ST",
    eligibility: "Class 11-12, UG, PG Students",
    description: "This scholarship is provided by the Ministry of Social Justice and Empowerment to SC students pursuing post-matriculation studies.",
    requiredDocuments: ["Caste Certificate", "Income Certificate", "Marksheet", "Aadhaar Card", "Bank Account Details"],
    applicationLink: "https://scholarships.gov.in",
    videoTutorial: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedEligibility: [
      "Student must belong to Scheduled Caste category",
      "Annual family income should not exceed ₹2.5 lakhs",
      "Minimum 50% marks in previous qualifying examination",
      "Must be studying in a recognized institution",
      "Age limit: No upper age limit"
    ],
    pastRecipients: [
      {
        name: "Priya Sharma",
        year: "2023",
        contact: "+91 9876543210",
        testimonial: "This scholarship helped me complete my engineering degree without financial stress."
      },
      {
        name: "Raj Kumar",
        year: "2022",
        contact: "+91 9876543211",
        testimonial: "Thanks to this scholarship, I could focus on my studies and achieve my dreams."
      }
    ]
  },
  {
    id: "2",
    title: "Chief Minister's Higher Education Scholarship",
    provider: "Government of Tamil Nadu",
    amount: "₹25,000/year",
    deadline: "15th April 2025",
    type: "State",
    category: "Merit-Based",
    eligibility: "UG Students (75%+ marks)",
    description: "Merit-based scholarship for Tamil Nadu students who have secured 75% or above in their 12th standard examinations.",
    requiredDocuments: ["12th Marksheet", "Income Certificate", "Aadhaar Card", "College Admission Proof"],
    applicationLink: "https://tn.gov.in/scholarships",
    videoTutorial: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    detailedEligibility: [
      "Must be a resident of Tamil Nadu",
      "Minimum 75% marks in 12th standard",
      "Family income below ₹2.5 lakhs per annum",
      "Enrolled in UG courses in recognized institutions"
    ],
    pastRecipients: [
      {
        name: "Anitha Devi",
        year: "2023",
        contact: "+91 9876543212",
        testimonial: "The scholarship made my dream of becoming a doctor possible."
      }
    ]
  },
  {
    id: "3",
    title: "National Means cum Merit Scholarship",
    provider: "Ministry of Education",
    amount: "₹12,000/year",
    deadline: "20th April 2025",
    type: "Central",
    category: "Merit-Based",
    eligibility: "Class 9-12 Students",
    description: "Scholarship for meritorious students from economically weaker sections to prevent dropouts and continue education.",
    requiredDocuments: ["Previous Marksheet", "Income Certificate", "School Certificate", "Aadhaar Card"],
    applicationLink: "https://scholarships.gov.in",
  },
  {
    id: "4",
    title: "Reliance Foundation Undergraduate Scholarship",
    provider: "Reliance Foundation",
    amount: "₹2,00,000/year",
    deadline: "30th April 2025",
    type: "Private",
    category: "Merit-Based",
    eligibility: "UG Students (All streams)",
    description: "Comprehensive scholarship covering tuition fees and living expenses for talented undergraduate students across India.",
    requiredDocuments: ["Entrance Exam Score", "Income Certificate", "Academic Transcripts", "Recommendation Letters"],
    applicationLink: "https://reliancefoundation.org/scholarships",
  },
  {
    id: "5",
    title: "Pre-Matric Scholarship for OBC Students",
    provider: "Ministry of Social Justice",
    amount: "₹3,000 - ₹6,000/year",
    deadline: "28th March 2025",
    type: "Central",
    category: "OBC",
    eligibility: "Class 9-10 Students",
    description: "Financial assistance to OBC students studying in classes 9th and 10th to support their education.",
    requiredDocuments: ["Caste Certificate", "Income Certificate", "School Certificate", "Bank Details"],
    applicationLink: "https://scholarships.gov.in",
  },
  {
    id: "6",
    title: "Tata Capital Pankh Scholarship",
    provider: "Tata Capital",
    amount: "₹10,000 - ₹12,000/year",
    deadline: "25th March 2025",
    type: "Private",
    category: "Girl Child Education",
    eligibility: "Class 6-12 Girls",
    description: "Supporting girl child education by providing financial assistance to meritorious female students from underprivileged backgrounds.",
    requiredDocuments: ["Marksheet", "Income Certificate", "School ID", "Parent ID Proof"],
    applicationLink: "https://www.buddy4study.com/page/tata-capital-pankh-scholarship-programme",
  },
  {
    id: "7",
    title: "Post Graduate Indira Gandhi Scholarship",
    provider: "UGC",
    amount: "₹25,000 - ₹31,000/month",
    deadline: "10th April 2025",
    type: "Central",
    category: "Single Girl Child",
    eligibility: "PG Students (Single Girl Child)",
    description: "Scholarship for single girl child pursuing post-graduation to encourage higher education among women.",
    requiredDocuments: ["Single Girl Child Certificate", "Admission Proof", "Academic Records", "Aadhaar Card"],
    applicationLink: "https://www.ugc.ac.in",
  },
  {
    id: "8",
    title: "Dr. Ambedkar Post-Matric Scholarship",
    provider: "Government of Karnataka",
    amount: "₹15,000/year",
    deadline: "5th April 2025",
    type: "State",
    category: "SC/ST",
    eligibility: "Post-Matric Students (Karnataka)",
    description: "State scholarship for SC/ST students in Karnataka pursuing higher education after 10th standard.",
    requiredDocuments: ["Caste Certificate", "Income Certificate", "Domicile Certificate", "Admission Receipt"],
    applicationLink: "https://scholarships.karnataka.gov.in",
  },
  {
    id: "9",
    title: "Google India Scholarship",
    provider: "Google India",
    amount: "₹75,000/year",
    deadline: "15th May 2025",
    type: "Private",
    category: "Computer Science",
    eligibility: "UG/PG CS Students",
    description: "Supporting students pursuing computer science and technology programs in recognition of academic excellence.",
    requiredDocuments: ["Academic Transcripts", "Essay", "Recommendation Letter", "Resume"],
    applicationLink: "https://buildyourfuture.withgoogle.com/scholarships",
  },
  {
    id: "10",
    title: "Minority Scholarship Scheme",
    provider: "Ministry of Minority Affairs",
    amount: "₹10,000 - ₹20,000/year",
    deadline: "31st March 2025",
    type: "Central",
    category: "Minority Community",
    eligibility: "Class 11-12, UG, PG Students",
    description: "Merit-cum-means based scholarship for students from notified minority communities.",
    requiredDocuments: ["Community Certificate", "Income Certificate", "Previous Year Marksheet", "Bank Details"],
    applicationLink: "https://scholarships.gov.in",
  },
  {
    id: "11",
    title: "Sitaram Jindal Foundation Scholarship",
    provider: "Sitaram Jindal Foundation",
    amount: "₹20,000/year",
    deadline: "30th April 2025",
    type: "Private",
    category: "Merit-Based",
    eligibility: "Class 11-12 Students",
    description: "Supporting meritorious students from economically challenged backgrounds to pursue higher secondary education.",
    requiredDocuments: ["Marksheet", "Income Certificate", "School Certificate", "Aadhaar Card"],
    applicationLink: "https://www.buddy4study.com/page/sitaram-jindal-scholarship",
  },
  {
    id: "12",
    title: "Inspire Scholarship for Higher Education",
    provider: "Department of Science and Technology",
    amount: "₹80,000/year",
    deadline: "20th April 2025",
    type: "Central",
    category: "Science Stream",
    eligibility: "UG/PG Science Students",
    description: "Attracting talent to study science at higher education level and ensuring better career opportunities.",
    requiredDocuments: ["12th Marksheet (Science)", "Entrance Exam Score", "Admission Proof", "Bank Details"],
    applicationLink: "https://online-inspire.gov.in",
  },
];
