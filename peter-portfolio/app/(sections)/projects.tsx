"use client";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { ProjectCard } from "@/components/project-card";
import { siteConfig } from "@/lib/site";

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of production-ready applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {siteConfig.projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              stack={p.stack}
              features={p.features}
              links={p.deployment}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}