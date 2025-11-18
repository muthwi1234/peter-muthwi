"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/section-container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  { 
    slug: "hello-world", 
    title: "Getting Started with Modern Web Development",
    excerpt: "An introduction to building production-ready web applications with Next.js and TypeScript",
    date: "Nov 2024",
    readTime: "5 min read"
  },
  { 
    slug: "smartmeter-token-system", 
    title: "Building a Smart Meter Token System",
    excerpt: "How I built a multi-company water meter token generation system with M-PESA integration",
    date: "Oct 2024",
    readTime: "8 min read"
  },
];

export default function Blog() {
  return (
    <SectionContainer id="blog">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on web development, best practices, and project insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Button variant="ghost" className="group-hover:translate-x-1 transition-transform p-0">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}