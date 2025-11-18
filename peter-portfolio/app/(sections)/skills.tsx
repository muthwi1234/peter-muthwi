"use client";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Layers, 
  Palette, 
  Server, 
  Smartphone,
  Wrench
} from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Styling",
    icon: Palette,
    skills: ["Tailwind CSS", "ShadCN UI", "CSS", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    category: "Integrations",
    icon: Smartphone,
    skills: ["M-PESA API", "SMS APIs", "Payment Gateways", "SOAP/REST"],
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "Vercel", "Docker", "Postman"],
  },
];

export default function Skills() {
  return (
    <SectionContainer id="skills" className="bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}