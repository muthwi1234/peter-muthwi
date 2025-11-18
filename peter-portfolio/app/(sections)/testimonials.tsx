"use client";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <SectionContainer id="testimonials">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from satisfied clients and collaborators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-2 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
                
                <div className="relative z-10">
                  <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
