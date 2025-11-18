import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("container mx-auto px-4 py-16", className)}>
      {children}
    </section>
  );
}