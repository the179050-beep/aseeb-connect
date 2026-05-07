import { Globe, Phone, MapPin, Instagram, UtensilsCrossed, CalendarDays, MessageCircle } from "lucide-react";
import BioLink from "./BioLink";

const links = [
  { icon: Globe, label: "الموقع الرسمي", href: "https://aseeb.com.sa/" },
  { icon: UtensilsCrossed, label: "قائمة الطعام", href: "https://aseeb.com.sa/menu" },
  { icon: CalendarDays, label: "حجز فرع الياسمين", href: "https://aseeb.com.sa/" },
  { icon: CalendarDays, label: "حجز فرع الدرعية", href: "https://aseeb.com.sa/" },
  { icon: Phone, label: "اتصل بنا — 920028226", href: "tel:920028226" },
  { icon: MessageCircle, label: "واتساب — 0554003213", href: "https://wa.me/966554003213" },
  { icon: Instagram, label: "انستقرام", href: "https://www.instagram.com/aseeb_sa/" },
  { icon: MapPin, label: "موقعنا على الخريطة", href: "https://maps.google.com/?q=aseeb+restaurant+riyadh" },
];

export default function BioLinks() {
  return (
    <div className="flex flex-col gap-3 px-4 w-full max-w-md mx-auto">
      {links.map((link, i) => (
        <BioLink
          key={link.label}
          icon={link.icon}
          label={link.label}
          href={link.href}
          delay={0.4 + i * 0.07}
        />
      ))}
    </div>
  );
}