import { contact } from "@/data/home";

/** https://wa.me/<number>?text=<encoded message> */
export function whatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
