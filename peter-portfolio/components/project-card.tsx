"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({
  title,
  stack,
  features,
  links,
}: {
  title: string;
  stack: string[];
  features: string[];
  links?: { client?: string; dev?: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <Card className="h-full flex flex-col border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl overflow-hidden group">
        <div className="h-2 bg-gradient-to-r from-primary to-primary/50 group-hover:from-primary/70 group-hover:to-primary transition-all" />
        
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs">
                {s}
              </Badge>
            ))}
          </div>
          
          <ul className="space-y-2 flex-1">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          
          {links && (links.client || links.dev) && (
            <div className="flex flex-wrap gap-3 pt-4 border-t">
              {links.client && (
                <Button
                  size="sm"
                  variant="default"
                  asChild
                  className="flex-1 min-w-[120px]"
                >
                  <a href={links.client} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Site
                  </a>
                </Button>
              )}
              {links.dev && (
                <Button
                  size="sm"
                  variant="outline"
                  asChild
                  className="flex-1 min-w-[120px]"
                >
                  <a href={links.dev} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}