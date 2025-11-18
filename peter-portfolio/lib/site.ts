export const siteConfig = {
  name: "Peter Muthwi Kilungya",
  profession: "Full-Stack Developer",
  title: "MERN/React/Next.js Developer",
  tagline: "Building production-ready systems with modern web technologies",
  profileImage: "/profile.jpg", // Add your photo as profile.jpg in the public folder
  technologies: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN UI",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
  ],
  interests: [
    "Full-stack development",
    "Building SaaS systems",
    "Payments integrations (M-PESA)",
    "Multi-tenant systems",
    "Backend architectures (MVC/MCS)",
    "Teaching React",
  ],
  bio:
    "I am a Kenyan full-stack developer specializing in modern React and Next.js solutions. I build scalable production systems with clean UI, strong backend architectures, and real-world integrations like M-PESA, STK Push, C2B, SMS APIs, and STS token generation for smart meters.",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "Technologies", value: "20+" },
  ],
  social: {
    github: "https://github.com/muthwi1234",
    linkedin: "https://www.linkedin.com/in/peter-muthwi-42403b240/",
    whatsapp: "https://wa.me/254790034942",
    instagram: "https://instagram.com/muthwi1234",
    twitter: "https://twitter.com/muthwi1234",
    email: "pinchezkeing@gmail.com",
    email2: "peterkilungya1@gmail.com",
  },
  cvUrl: "/cv.pdf",
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2022 — Present",
      description: "Building custom web applications with React, Next.js, and Node.js for various clients",
    },
    {
      title: "SmartLiquid Token System",
      company: "Production Project",
      period: "2023 — 2024",
      description: "Developed multi-company smart water meter token generation system with M-PESA integration",
    },
    {
      title: "School Fees Payment Platform",
      company: "Client Project",
      period: "2024",
      description: "Built multi-tenant payment system for schools with role-based authentication",
    },
  ],
  projects: [
    {
      title: "SmartMeter / SmartLiquid Water Token System",
      stack: [
        "Next.js",
        "ShadCN UI",
        "Tailwind CSS",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Multi-company smart water meter token generation",
        "Dynamic M-PESA integration (STK Push + C2B)",
        "Hexing STS 20-digit token generation via SOAP",
        "Customer dashboard, admin dashboard",
        "Meter management, tariff configuration, SMS notifications",
      ],
      deployment: {
        client: "https://smartliquid.co.ke",
        dev: "https://aquaflow.vercel.app",
      },
    },
    {
      title: "Multi-Tenant School Fees Payment System",
      stack: ["Next.js", "ShadCN UI", "Tailwind", "TypeScript", "Node.js"],
      features: [
        "Parents can pay school fees via Paybill or bank",
        "Owner dashboard for monitoring payments",
        "Role-based authentication",
        "Clean UI taken from Figma designs",
      ],
    },
    {
      title: "Cake Parlour E-Commerce System",
      stack: ["Next.js", "TypeScript", "Tailwind", "ShadCN UI", "Node.js"],
      features: [
        "Multi-vendor cake marketplace",
        "M-PESA integrated checkout",
        "Product listings, vendor dashboard, cart, checkout",
      ],
    },
    {
      title: "NGO Website – HopeHarbor",
      stack: ["Next.js", "ShadCN UI"],
      features: [
        "Home, About, Services, Impact, Contact",
        "Love Emoji theme logo",
      ],
    },
    {
      title: "Cassava Peace Youth Group Systems",
      stack: ["Next.js", "Node.js"],
      features: [
        "Loan management documents",
        "Group membership system",
        "Letters, notices, and forms",
      ],
    },
    {
      title: "Inventory Management System (In Progress)",
      stack: ["React", "Tailwind", "Express", "MongoDB"],
      features: [
        "Customers, products, transactions",
        "JWT authentication",
      ],
    },
    {
      title: "Student React Training Program",
      stack: ["React", "Next.js"],
      features: [
        "Structured teaching timetable",
        "Lessons: morning & evening sessions",
        "Projects after every phase",
      ],
    },
  ],
  testimonials: [
    {
      name: "Client A",
      role: "Product Manager",
      quote:
        "Peter delivers robust full-stack systems with clean UI and reliable integrations.",
    },
    {
      name: "Client B",
      role: "CTO",
      quote:
        "Strong architecture and attention to detail. Production-ready work every time.",
    },
  ],
};