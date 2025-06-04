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
  },
  {
    id: "4",
    title: "Mobile X-Ray Technologist",
    location: "Raleigh",
    tags: ["ARRT", "Full-Time"],
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
    id: "5",
    title: "Mobile Ultrasound Technologist",
    location: "Dallas",
    tags: ["ARDMS", "Part-Time"],
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
    id: "6",
    title: "EKG Technician",
    location: "Charlotte",
    tags: ["CET", "Full-Time"],
    summary: "Full-time EKG Technician position serving Charlotte and surrounding areas.",
    description: "We are expanding our cardiac services in Charlotte and seeking a skilled EKG Technician to join our mobile team. This role offers stable full-time employment with excellent benefits.",
    responsibilities: [
      "Perform 12-lead EKGs and rhythm strips",
      "Travel to healthcare facilities throughout Charlotte area",
      "Ensure proper electrode placement and signal quality",
      "Assist with patient preparation and education",
      "Maintain equipment and supply inventory"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "North Carolina certification",
      "1+ years of EKG experience preferred",
      "Valid driver's license",
      "Strong attention to detail",
      "Professional demeanor and communication skills"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Full-time salary with benefits",
      "Health, dental, and vision insurance",
      "Paid vacation and sick leave",
      "Retirement plan with matching",
      "Professional development opportunities",
      "Company-provided equipment and supplies"
    ],
    stateLicensing: "North Carolina requires CET certification and state registration.",
    postedDate: "2025-05-16"
  },
  {
    id: "7",
    title: "Mobile X-Ray Technologist",
    location: "Houston",
    tags: ["ARRT", "Full-Time"],
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
    id: "8",
    title: "Mobile Ultrasound Technologist",
    location: "Asheville",
    tags: ["ARDMS", "Part-Time"],
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
    id: "9",
    title: "EKG Technician",
    location: "Roanoke",
    tags: ["CET", "Full-Time"],
    summary: "EKG Technician opportunity in Roanoke, Virginia serving multiple healthcare facilities.",
    description: "Join our Virginia team as an EKG Technician providing mobile cardiac diagnostic services in the Roanoke area. This position offers stability and growth opportunities in a supportive environment.",
    responsibilities: [
      "Perform EKG procedures at various healthcare locations",
      "Ensure accurate test results and documentation",
      "Maintain professional relationships with facility staff",
      "Participate in quality assurance programs",
      "Provide patient education and support"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "Virginia state certification",
      "Experience with mobile healthcare services",
      "Valid driver's license with clean record",
      "Strong work ethic and reliability",
      "Excellent communication skills"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Competitive full-time salary",
      "Health and wellness benefits",
      "Paid time off and holidays",
      "Career advancement opportunities",
      "Training and certification support",
      "Company vehicle and equipment"
    ],
    stateLicensing: "Virginia requires CET certification and state registration.",
    postedDate: "2025-05-11"
  },
  {
    id: "10",
    title: "Mobile X-Ray Technologist",
    location: "Fayetteville",
    tags: ["ARRT", "Full-Time"],
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
  {
    id: "11",
    title: "Mobile Ultrasound Technologist",
    location: "Austin",
    tags: ["ARDMS", "Part-Time"],
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
  {
    id: "12",
    title: "EKG Technician",
    location: "Winston Salem",
    tags: ["CET", "Full-Time"],
    summary: "Full-time EKG Technician position in Winston Salem, North Carolina.",
    description: "We are expanding our cardiac services in Winston Salem and seeking a dedicated EKG Technician to join our mobile healthcare team. This full-time role offers excellent stability and benefits.",
    responsibilities: [
      "Conduct EKG tests at multiple healthcare locations",
      "Ensure proper electrode placement and signal quality",
      "Maintain equipment calibration and cleanliness",
      "Provide patient education and comfort",
      "Complete accurate documentation and reporting"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "North Carolina state certification",
      "Previous healthcare experience preferred",
      "Valid driver's license",
      "Professional communication skills",
      "Reliable and punctual work habits"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Full-time salary with benefits",
      "Comprehensive health insurance",
      "Paid time off and holidays",
      "Retirement plan with matching",
      "Training and education support",
      "Company equipment and vehicle"
    ],
    stateLicensing: "North Carolina requires CET certification and state registration.",
    postedDate: "2025-05-06"
  },
  {
    id: "13",
    title: "Mobile X-Ray Technologist",
    location: "San Antonio",
    tags: ["ARRT", "Full-Time"],
    summary: "Mobile X-Ray Technologist opportunity in San Antonio, Texas.",
    description: "Join our San Antonio team as a Mobile X-Ray Technologist serving diverse healthcare facilities throughout the area. This position offers competitive compensation and excellent growth opportunities.",
    responsibilities: [
      "Provide mobile X-ray services to healthcare facilities",
      "Maintain high standards of image quality and patient care",
      "Ensure compliance with radiation safety protocols",
      "Build positive relationships with facility personnel",
      "Participate in continuous quality improvement"
    ],
    requirements: [
      "ARRT certification required",
      "Texas state radiologic technologist license",
      "Experience with portable imaging preferred",
      "Bilingual (English/Spanish) preferred",
      "Strong organizational skills",
      "Professional appearance and demeanor"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive annual salary",
      "Full benefits package",
      "Performance bonuses",
      "Bilingual pay differential",
      "Professional development support",
      "Company vehicle provided"
    ],
    stateLicensing: "Texas requires ARRT certification and state licensure.",
    postedDate: "2025-05-05"
  },
  {
    id: "14",
    title: "Mobile Ultrasound Technologist",
    location: "Greensboro",
    tags: ["ARDMS", "Part-Time"],
    summary: "Part-time ultrasound position serving healthcare facilities in Greensboro, NC.",
    description: "We are seeking a skilled Mobile Ultrasound Technologist for part-time work in the Greensboro area. This position offers flexibility and competitive compensation for experienced sonographers.",
    responsibilities: [
      "Perform mobile ultrasound examinations",
      "Maintain equipment and ensure proper function",
      "Provide excellent patient care and communication",
      "Document findings and communicate with healthcare team",
      "Adhere to quality assurance protocols"
    ],
    requirements: [
      "ARDMS certification required",
      "North Carolina state licensure",
      "3+ years of relevant ultrasound experience",
      "Reliable transportation",
      "Strong work ethic and professionalism",
      "Excellent problem-solving abilities"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive hourly compensation",
      "Flexible scheduling options",
      "Mileage reimbursement",
      "Professional liability coverage",
      "Continuing education support",
      "Supportive professional environment"
    ],
    stateLicensing: "North Carolina requires ARDMS certification and state licensure.",
    postedDate: "2025-05-04"
  },
  {
    id: "15",
    title: "EKG Technician",
    location: "Atlanta",
    tags: ["CET", "Full-Time"],
    summary: "Experienced EKG Technician needed for mobile services in Atlanta.",
    description: "Join our growing Atlanta team as an EKG Technician providing mobile diagnostic services throughout the metro area. This full-time position offers excellent compensation and career growth opportunities.",
    responsibilities: [
      "Perform EKGs at various healthcare facilities",
      "Ensure accurate test results and patient care",
      "Maintain equipment and supplies inventory",
      "Complete documentation and reporting requirements",
      "Participate in team meetings and quality assurance"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "Georgia state certification",
      "Experience with mobile healthcare services",
      "Familiarity with Atlanta metro area",
      "Strong interpersonal and communication skills",
      "Physical ability to transport equipment"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Competitive full-time salary",
      "Comprehensive benefits package",
      "Paid time off and holidays",
      "Career advancement opportunities",
      "Company equipment and vehicle",
      "Supportive team environment"
    ],
    stateLicensing: "Georgia requires CET certification and state registration.",
    postedDate: "2025-05-03"
  },
  {
    id: "16",
    title: "Mobile X-Ray Technologist",
    location: "Hickory",
    tags: ["ARRT", "Full-Time"],
    summary: "X-Ray Technologist position available for mobile services in Hickory, NC.",
    description: "We're seeking a dedicated Mobile X-Ray Technologist to serve healthcare facilities in the Hickory region of North Carolina. This position offers excellent compensation and work-life balance.",
    responsibilities: [
      "Perform mobile X-ray examinations at various facilities",
      "Ensure optimal image quality and radiation safety",
      "Provide exceptional patient care and communication",
      "Maintain equipment and supply inventory",
      "Complete required documentation and reporting"
    ],
    requirements: [
      "ARRT certification required",
      "North Carolina state licensure",
      "Previous experience in mobile imaging preferred",
      "Valid driver's license with clean record",
      "Strong organizational and time management skills",
      "Commitment to professional excellence"
    ],
    equipment: [
      "SR-130 Portable X-Ray Machine"
    ],
    benefits: [
      "Competitive salary package",
      "Health, dental, and vision insurance",
      "401(k) retirement plan",
      "Paid time off and holidays",
      "Continuing education support",
      "Company vehicle provided"
    ],
    stateLicensing: "North Carolina requires ARRT certification and state licensure.",
    postedDate: "2025-05-02"
  },
  {
    id: "17",
    title: "Mobile Ultrasound Technologist",
    location: "Jacksonville",
    tags: ["ARDMS", "Part-Time"],
    summary: "Part-time Ultrasound Technologist needed for Jacksonville, NC area.",
    description: "Join our Jacksonville team as a Mobile Ultrasound Technologist providing diagnostic services to healthcare facilities in the region. This part-time position offers excellent flexibility and competitive compensation.",
    responsibilities: [
      "Perform ultrasound examinations at multiple facilities",
      "Maintain equipment functionality and cleanliness",
      "Ensure patient comfort and safety during procedures",
      "Document findings and communicate with healthcare team",
      "Adhere to quality assurance standards"
    ],
    requirements: [
      "ARDMS certification required",
      "North Carolina state licensure",
      "2+ years of ultrasound experience",
      "Military base access a plus (Camp Lejeune area)",
      "Reliable transportation",
      "Strong customer service orientation"
    ],
    equipment: [
      "Mindray Ultrasound System"
    ],
    benefits: [
      "Competitive hourly compensation",
      "Flexible scheduling",
      "Mileage reimbursement",
      "Professional liability coverage",
      "Supportive team environment",
      "Growth opportunities within company"
    ],
    stateLicensing: "North Carolina requires ARDMS certification and state licensure.",
    postedDate: "2025-05-01"
  },
  {
    id: "18",
    title: "Mobile EKG Technician",
    location: "New Bern",
    tags: ["CET", "Full-Time"],
    summary: "EKG Technician position available for New Bern, North Carolina area.",
    description: "We are seeking a skilled EKG Technician to join our mobile team serving healthcare facilities in the New Bern area. This full-time position offers stability and excellent benefits.",
    responsibilities: [
      "Perform electrocardiogram procedures at various facilities",
      "Ensure accurate electrode placement and signal quality",
      "Provide patient education and support during procedures",
      "Maintain equipment and complete required documentation",
      "Collaborate with healthcare teams for optimal patient care"
    ],
    requirements: [
      "Certified EKG Technician (CET)",
      "North Carolina state certification",
      "Previous healthcare experience preferred",
      "Valid driver's license with clean record",
      "Strong attention to detail",
      "Professional communication skills"
    ],
    equipment: [
      "Portable EKG Machines"
    ],
    benefits: [
      "Competitive full-time salary",
      "Comprehensive health benefits",
      "Paid time off and holidays",
      "Retirement savings plan",
      "Professional development support",
      "Company vehicle and equipment"
    ],
    stateLicensing: "North Carolina requires CET certification and state registration.",
    postedDate: "2025-04-30"
  }
];
