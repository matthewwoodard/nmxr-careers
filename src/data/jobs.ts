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

// Updated jobs data with new requirements
export const jobs: Job[] = [
  // Arizona Jobs
  {
    id: "az-1",
    title: "Radiologic Technologist",
    location: "Arizona",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Join our team as a Mobile Radiologic Technologist covering healthcare facilities across Arizona.",
    description: "National Mobile X-Ray is seeking certified Radiologic Technologists to join our growing team in Arizona. This role offers flexible scheduling, competitive pay, and the opportunity to work independently while providing essential diagnostic services to patients in various healthcare settings.",
    responsibilities: [
      "Perform diagnostic imaging examinations with portable X-ray equipment",
      "Travel to nursing homes and other healthcare facilities",
      "Ensure proper patient positioning and image quality",
      "Maintain detailed patient records and documentation",
      "Collaborate with healthcare providers regarding examination results"
    ],
    requirements: [
      "Valid ARRT certification",
      "Arizona state radiologic technologist license",
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
    stateLicensing: "Arizona requires Radiologic Technologists to hold both ARRT certification and state licensure through the Arizona Medical Board.",
    postedDate: "2025-07-14"
  },
  {
    id: "az-2",
    title: "Radiologic Technologist",
    location: "Arizona",
    tags: ["ARDMS", "Part-Time", "Ultrasound"],
    summary: "Seeking skilled ultrasound professionals for mobile diagnostic services across Arizona facilities.",
    description: "Join National Mobile X-Ray as a Mobile Ultrasound Technologist providing essential diagnostic services to patients throughout Arizona. This role offers excellent work-life balance with part-time options and the opportunity to build valuable experience across various healthcare settings.",
    responsibilities: [
      "Perform diagnostic ultrasound examinations in various healthcare settings",
      "Travel to assigned locations throughout Arizona",
      "Ensure proper equipment operation and maintenance",
      "Document examination findings and maintain patient records",
      "Adhere to all safety protocols and imaging guidelines"
    ],
    requirements: [
      "Valid ARDMS certification",
      "Arizona state licensure",
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
    stateLicensing: "Arizona requires ultrasound technologists to hold ARDMS certification and state licensure through the Arizona Medical Board.",
    postedDate: "2025-07-14"
  },

  // Texas Jobs
  {
    id: "1",
    title: "Radiologic Technologist",
    location: "Texas",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Join our team as a Mobile Radiologic Technologist covering healthcare facilities across Texas.",
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
    id: "5",
    title: "Radiologic Technologist",
    location: "Dallas",
    tags: ["ARDMS", "Part-Time", "Ultrasound"],
    summary: "Part-time ultrasound technologist position available for mobile services in Dallas area.",
    description: "Join our growing team in Dallas as a Mobile Ultrasound Technologist. This part-time position is perfect for experienced sonographers looking for flexible scheduling while providing quality diagnostic imaging services.",
    responsibilities: [
      "Perform ultrasound examinations at various healthcare locations",
      "Operate and maintain portable ultrasound equipment",
      "Ensure patient comfort and safety during procedures",
      "Collaborate with physicians and healthcare teams",
      "Maintain accurate patient records and documentation"
    ],
    requirements: [
      "ARDMS certification in relevant specialty",
      "Texas state licensure",
      "3+ years of ultrasound experience",
      "Reliable transportation and valid driver's license",
      "Excellent patient communication skills",
      "Ability to work flexible schedules"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive hourly compensation",
      "Flexible scheduling options",
      "Mileage and equipment reimbursement",
      "Professional liability insurance",
      "Continuing education support",
      "Growth opportunities within the company"
    ],
    stateLicensing: "Texas requires ARDMS certification and registration with the Texas Medical Board.",
    postedDate: "2025-05-18"
  },
  {
    id: "7",
    title: "Radiologic Technologist",
    location: "Houston",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Mobile X-Ray Technologist needed for Houston metropolitan area facilities.",
    description: "Join our Houston team as a Mobile X-Ray Technologist serving a variety of healthcare facilities. This position offers excellent career growth opportunities in one of Texas's largest healthcare markets.",
    responsibilities: [
      "Provide mobile X-ray services to multiple facility types",
      "Ensure compliance with radiation safety protocols",
      "Maintain high standards of image quality",
      "Build relationships with facility staff and patients",
      "Participate in quality improvement initiatives"
    ],
    requirements: [
      "ARRT certification required",
      "Texas state radiologic technologist license",
      "Experience with portable imaging equipment",
      "Strong problem-solving abilities",
      "Excellent customer service skills",
      "Reliable transportation"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive annual salary",
      "Comprehensive benefits package",
      "Performance-based incentives",
      "Professional development support",
      "Flexible scheduling options",
      "Equipment and vehicle provided"
    ],
    stateLicensing: "Texas requires ARRT certification and state licensure through the Texas Medical Board.",
    postedDate: "2025-05-14"
  },
  {
    id: "11",
    title: "Radiologic Technologist",
    location: "Austin",
    tags: ["ARDMS", "Part-Time", "Ultrasound"],
    summary: "Ultrasound Technologist needed for part-time mobile services in Austin.",
    description: "Join our Austin team as a Mobile Ultrasound Technologist providing diagnostic imaging services throughout the greater Austin area. This part-time position offers excellent work-life balance.",
    responsibilities: [
      "Perform ultrasound examinations at various healthcare facilities",
      "Ensure high-quality imaging and patient care",
      "Maintain equipment and perform quality checks",
      "Document procedures and communicate findings",
      "Adhere to all safety and regulatory requirements"
    ],
    requirements: [
      "ARDMS certification in relevant specialty",
      "Texas state licensure",
      "2+ years of ultrasound experience",
      "Reliable transportation and flexibility",
      "Strong patient interaction skills",
      "Attention to detail and accuracy"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive hourly rate",
      "Flexible scheduling",
      "Mileage reimbursement",
      "Professional development opportunities",
      "Supportive work environment",
      "Growth potential within company"
    ],
    stateLicensing: "Texas requires ARDMS certification and state registration.",
    postedDate: "2025-05-07"
  },

  // North Carolina Jobs
  {
    id: "2",
    title: "Radiologic Technologist",
    location: "North Carolina",
    tags: ["ARDMS", "Part-Time", "Ultrasound"],
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
    id: "4",
    title: "Radiologic Technologist",
    location: "Raleigh",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Experienced X-Ray Technologist needed for mobile services in the Raleigh metropolitan area.",
    description: "We are seeking a dedicated Mobile X-Ray Technologist to serve healthcare facilities in and around Raleigh. This position offers competitive compensation and the opportunity to work with state-of-the-art portable imaging equipment.",
    responsibilities: [
      "Conduct portable X-ray examinations at various healthcare facilities",
      "Ensure optimal image quality and patient safety",
      "Maintain equipment and perform quality control checks",
      "Document procedures and communicate with medical staff",
      "Provide compassionate patient care during examinations"
    ],
    requirements: [
      "ARRT certification required",
      "North Carolina state licensure",
      "Minimum 2 years of radiologic experience",
      "Valid driver's license with clean record",
      "Physical ability to transport equipment",
      "Strong interpersonal and communication skills"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health and dental insurance",
      "401(k) with company matching",
      "Paid time off and holidays",
      "Continuing education reimbursement",
      "Company vehicle provided",
      "Professional development opportunities"
    ],
    stateLicensing: "North Carolina requires ARRT certification and state licensure through the North Carolina Medical Board.",
    postedDate: "2025-05-20"
  },
  {
    id: "8",
    title: "Radiologic Technologist",
    location: "Asheville",
    tags: ["ARDMS", "Part-Time", "Ultrasound"],
    summary: "Part-time ultrasound position available in beautiful Asheville, North Carolina.",
    description: "Experience work-life balance in the scenic Asheville area while providing essential ultrasound services to local healthcare facilities. This part-time role is ideal for experienced sonographers.",
    responsibilities: [
      "Conduct ultrasound examinations at healthcare facilities",
      "Maintain equipment performance and quality standards",
      "Provide excellent patient care and communication",
      "Document findings and coordinate with medical staff",
      "Ensure adherence to safety and protocol standards"
    ],
    requirements: [
      "ARDMS certification required",
      "North Carolina state licensure",
      "Minimum 2 years ultrasound experience",
      "Mountain driving experience preferred",
      "Strong organizational skills",
      "Professional appearance and demeanor"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive part-time compensation",
      "Flexible work schedule",
      "Beautiful work environment",
      "Mileage reimbursement",
      "Professional development opportunities",
      "Supportive team culture"
    ],
    stateLicensing: "North Carolina requires ARDMS certification and state licensure.",
    postedDate: "2025-05-12"
  },
  {
    id: "10",
    title: "Radiologic Technologist",
    location: "Fayetteville",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Mobile X-Ray Technologist position available in Fayetteville, North Carolina.",
    description: "We are seeking an experienced Mobile X-Ray Technologist to serve healthcare facilities in Fayetteville and the surrounding region. This role offers excellent compensation and benefits.",
    responsibilities: [
      "Perform diagnostic X-ray examinations at multiple locations",
      "Ensure patient safety and comfort during procedures",
      "Maintain equipment functionality and cleanliness",
      "Complete accurate documentation and reporting",
      "Collaborate with healthcare teams for optimal patient care"
    ],
    requirements: [
      "ARRT certification mandatory",
      "North Carolina state licensure",
      "Previous mobile imaging experience preferred",
      "Physical ability to transport equipment",
      "Strong technical and interpersonal skills",
      "Commitment to professional excellence"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Excellent salary and benefits package",
      "Health, dental, and vision coverage",
      "Retirement savings plan",
      "Paid vacation and sick time",
      "Professional development support",
      "Equipment and transportation provided"
    ],
    stateLicensing: "North Carolina requires ARRT certification and state licensure.",
    postedDate: "2025-05-09"
  },

  // Georgia Jobs
  {
    id: "15",
    title: "Radiologic Technologist",
    location: "Georgia",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "Mobile X-Ray Technologist needed for Georgia healthcare facilities.",
    description: "Join our Georgia team as a Mobile X-Ray Technologist providing diagnostic services across the state. This position offers stability with full-time hours while providing essential care to patients in need.",
    responsibilities: [
      "Perform portable X-ray examinations using mobile equipment",
      "Travel to multiple facilities throughout assigned regions",
      "Ensure patient safety and comfort during procedures",
      "Maintain equipment and perform quality checks",
      "Complete documentation and reporting requirements"
    ],
    requirements: [
      "ARRT certification required",
      "Georgia state radiologic technologist license",
      "Valid driver's license and reliable transportation",
      "Strong attention to detail and accuracy",
      "Excellent patient interaction skills",
      "Ability to work independently with minimal supervision"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Full-time schedule with predictable hours",
      "Comprehensive benefits package",
      "Paid holidays and vacation time",
      "Professional development opportunities",
      "Travel reimbursement",
      "Team-oriented work culture"
    ],
    stateLicensing: "Georgia requires X-Ray Technologists to hold ARRT certification and register with the Georgia Composite Medical Board.",
    postedDate: "2025-05-08"
  },

  // Virginia Jobs
  {
    id: "9",
    title: "Radiologic Technologist",
    location: "Roanoke",
    tags: ["ARRT", "Full-Time", "X-Ray"],
    summary: "X-Ray Technologist opportunity in Roanoke, Virginia serving multiple healthcare facilities.",
    description: "Join our Virginia team as an X-Ray Technologist providing mobile diagnostic services in the Roanoke area. This position offers stability and growth opportunities in a supportive environment.",
    responsibilities: [
      "Perform X-ray procedures at various healthcare locations",
      "Ensure accurate test results and documentation",
      "Maintain professional relationships with facility staff",
      "Participate in quality assurance programs",
      "Provide patient education and support"
    ],
    requirements: [
      "ARRT certification required",
      "Virginia state certification",
      "Experience with mobile healthcare services",
      "Valid driver's license with clean record",
      "Strong work ethic and reliability",
      "Excellent communication skills"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive full-time salary",
      "Health and wellness benefits",
      "Paid time off and holidays",
      "Career advancement opportunities",
      "Training and certification support",
      "Company vehicle and equipment"
    ],
    stateLicensing: "Virginia requires ARRT certification and state registration.",
    postedDate: "2025-05-11"
  }
];