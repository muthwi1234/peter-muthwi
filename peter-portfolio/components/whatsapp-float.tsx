import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <Link
      href={siteConfig.social.whatsapp}
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"
    >
      <MessageCircle className="size-6" />
    </Link>
  );
}