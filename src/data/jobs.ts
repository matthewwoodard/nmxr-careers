
export interface Job {
  id: string;
  title: string;
  location: string;
  tags: string[];
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  equipment: string[];
  benefits: string[];
  stateLicensing?: string;
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Mobile X-Ray Technologist",
    location: "Texas",
    tags: ["ARRT", "Full-Time"],
    summary: "Join our team as a Mobile X-Ray Technologist covering healthcare facilities across Texas.",
    description: "National Mobile X-Ray is seeking certified Radiologic Technologists to join our growing team in Texas. This role offers flexible scheduling, competitive pay, and the opportunity to work independently while providing essential diagnostic services to patients in various healthcare settings.",
    responsibilities: [
      "Perform diagnostic imaging examinations with portable X-ray equipment",
      "Travel to nursing homes and other healthcare facilities",
      "Ensure proper patient positioning and image quality",
      "Maintain detailed patient records and documentation",
      "Collaborate with healthcare providers regarding examination results"
    ],
    requirements: [
      "Valid ARRT certification",
      "Texas state radiologic technologist license",
      "Valid driver's license with clean driving record",
      "Ability to lift and move equipment weighing up to 50 pounds",
      "Excellent patient care and communication skills",
      "1+ years of experience preferred (new graduates welcome to apply)"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive salary",
      "Flexible scheduling",
      "Health insurance options",
      "401(k) retirement plan",
      "Continuing education support",
      "Mileage reimbursement",
      "Career advancement opportunities"
    ],
    stateLicensing: "Texas requires Radiologic Technologists to hold both ARRT certification and state licensure through the Texas Medical Board (TMB).",
    postedDate: "2025-05-15"
  },
  {
    id: "2",
    title: "Mobile Ultrasound Technologist",
    location: "North Carolina",
    tags: ["ARDMS", "Part-Time"],
    summary: "Seeking skilled ultrasound professionals for mobile diagnostic services across North Carolina facilities.",
    description: "Join National Mobile X-Ray as a Mobile Ultrasound Technologist providing essential diagnostic services to patients throughout North Carolina. This role offers excellent work-life balance with part-time options and the opportunity to build valuable experience across various healthcare settings.",
    responsibilities: [
      "Perform diagnostic ultrasound examinations in various healthcare settings",
      "Travel to assigned locations throughout North Carolina",
      "Ensure proper equipment operation and maintenance",
      "Document examination findings and maintain patient records",
      "Adhere to all safety protocols and imaging guidelines"
    ],
    requirements: [
      "Valid ARDMS certification",
      "North Carolina state licensure",
      "Valid driver's license with clean driving record",
      "Excellent patient positioning and imaging techniques",
      "Strong communication and teamwork skills",
      "Ability to work independently"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive hourly pay",
      "Flexible schedule options",
      "Paid time off",
      "Mileage reimbursement",
      "Professional development opportunities",
      "Supportive team environment",
      "Modern, well-maintained equipment"
    ],
    stateLicensing: "North Carolina requires ultrasound technologists to hold ARDMS certification and state licensure through the North Carolina Medical Board.",
    postedDate: "2025-05-10"
  },
  {
    id: "3",
    title: "EKG Technician",
    location: "Georgia",
    tags: ["CET", "Full-Time"],
    summary: "Mobile EKG Technician position available for providing cardiac diagnostic services across Georgia facilities.",
    description: "National Mobile X-Ray is expanding our cardiac services team and seeking certified EKG Technicians to perform mobile diagnostic procedures at healthcare facilities throughout Georgia. This role offers stability with full-time hours while providing essential cardiac care to patients in need.",
    responsibilities: [
      "Perform electrocardiogram procedures using portable equipment",
      "Maintain and calibrate EKG equipment",
      "Prepare patients for procedures and explain process",
      "Record and report results to physicians",
      "Travel to multiple facilities throughout the assigned region"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "Georgia state certification/licensure",
      "Valid driver's license and reliable transportation",
      "Strong attention to detail and accuracy",
      "Excellent patient interaction skills",
      "Ability to work independently with minimal supervision"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Full-time schedule with predictable hours",
      "Comprehensive benefits package",
      "Paid holidays and vacation time",
      "Professional development opportunities",
      "Travel reimbursement",
      "Sign-on bonus for qualified candidates",
      "Team-oriented work culture"
    ],
    stateLicensing: "Georgia requires EKG Technicians to hold certification through a recognized program and register with the Georgia Composite Medical Board.",
    postedDate: "2025-05-08"
  }
];
