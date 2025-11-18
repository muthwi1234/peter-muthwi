"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/section-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        form.reset();
      } else {
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "An error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionContainer id="contact" className="bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href={`mailto:${siteConfig.social.email}`} className="font-medium hover:text-primary transition-colors block truncate">
                    {siteConfig.social.email}
                  </a>
                  <a href={`mailto:${siteConfig.social.email2}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block truncate">
                    {siteConfig.social.email2}
                  </a>
                </div>
              </Card>

              <Card className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="font-medium hover:text-primary transition-colors">
                    +254 790 034 942
                  </a>
                </div>
              </Card>

              <Card className="p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Nairobi, Kenya</p>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name" 
                    placeholder="Your name" 
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="your.email@example.com" 
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message" 
                    placeholder="Tell me about your project..." 
                    required 
                    rows={5}
                    disabled={loading}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      status.type === "success" 
                        ? "bg-green-500/10 text-green-600 dark:text-green-400" 
                        : "bg-red-500/10 text-red-600 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}