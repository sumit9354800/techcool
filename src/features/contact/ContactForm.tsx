import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="mb-6 text-2xl font-bold">
        Schedule Service
      </h3>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <select
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option>Select Service</option>
          <option>AC Repair</option>
          <option>AC Installation</option>
          <option>Gas Refilling</option>
          <option>LED TV Repair</option>
          <option>Annual Maintenance</option>
          <option>Emergency Service</option>
        </select>

        <textarea
          rows={5}
          placeholder="Describe your issue..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <Button
          className="w-full rounded-xl"
          size="lg"
        >
          Schedule Service
        </Button>
      </form>
    </div>
  );
}