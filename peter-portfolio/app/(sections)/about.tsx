"use client";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <SectionContainer id="about">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            {siteConfig.bio}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {siteConfig.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-4">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {siteConfig.interests.map((interest) => (
              <div
                key={interest}
                className="flex items-start gap-2 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="text-primary text-lg">→</span>
                <span className="text-muted-foreground">{interest}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}