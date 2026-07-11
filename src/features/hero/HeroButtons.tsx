import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button size="lg" className="rounded-full px-8">
        Book Service
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-8"
      >
        📞 Call Now
      </Button>
    </div>
  );
}