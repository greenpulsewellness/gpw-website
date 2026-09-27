import { contact, rental } from "@/data/home";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "./icons";

export function RentalStrip() {
  return (
    <section id="rental" aria-label={rental.eyebrow} className="on-dark bg-pine text-canvas">
      <div className="shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between md:py-7">
        <div>
          <p className="text-xl font-medium leading-snug tracking-tight md:text-2xl">{rental.line}</p>
        </div>
        <Button asChild size="lg" className="w-full sm:w-auto min-h-[44px] justify-center md:self-auto">
          <a href={whatsappUrl(contact.rentalMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {rental.cta}
          </a>
        </Button>
      </div>
    </section>
  );
}
