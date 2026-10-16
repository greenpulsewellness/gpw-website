import { contact, rental } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./icons";

export function RentalStrip() {
  return (
    <section id="rental" aria-label={rental.eyebrow} className="relative overflow-hidden bg-black border-y border-white/10 text-white">
      {/* Subtle ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-0 h-full w-96 bg-white/[0.03] blur-2xl"
      />
      <div className="shell relative z-10 flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:py-8">
        <div>
          <p className="text-xl font-medium leading-snug tracking-tight text-white md:text-2xl">{rental.line}</p>
        </div>
        <Button asChild variant="dark" size="lg" className="w-full sm:w-auto min-h-[44px] justify-center md:self-auto">
          <a href={whatsappUrl(contact.rentalMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {rental.cta}
          </a>
        </Button>
      </div>
    </section>
  );
}
