import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        size="lg"
        className="rounded-full px-8"
      >
        Schedule Service
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-8"
      >
        <Phone className="mr-2 h-4 w-4" />
        Call Now
      </Button>
    </div>
  );
}