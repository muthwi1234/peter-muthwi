import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 py-8 md:flex-row md:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} {siteConfig.name}</p>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="size-5" />
          </Link>
          <Link href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="size-5" />
          </Link>
          <Link href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
            <MessageSquare className="size-5" />
          </Link>
          <Link href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}