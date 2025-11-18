import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="mt-2">{quote}</p>
      </CardContent>
    </Card>
  );
}