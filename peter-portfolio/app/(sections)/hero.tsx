"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <SectionContainer className="relative min-h-[90vh] flex items-center justify-center text-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 blur-xl opacity-50" />
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium">
            {siteConfig.profession}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto max-w-2xl text-base md:text-lg text-muted-foreground/80 mb-8"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" asChild className="group">
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href={siteConfig.cvUrl} download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </SectionContainer>
  );
}