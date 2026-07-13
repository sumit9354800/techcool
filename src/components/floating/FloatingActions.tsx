import { FloatingCallButton } from "./FloatingCallButton";
import { FloatingWhatsAppButton } from "./FloatingWhatsAppButton";

export function FloatingActions() {
  return (
    <div
      className="
fixed
bottom-6
right-6
z-50

flex
flex-col-reverse
items-end

gap-4
"
    >
      <FloatingWhatsAppButton />
      <FloatingCallButton />
    </div>
  );
}
