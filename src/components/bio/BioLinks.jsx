import { Globe, MapPin, Instagram, UtensilsCrossed, CalendarDays } from "lucide-react";
import BioLink from "./BioLink";

const links = [
  { icon: Globe, label: "الموقع الرسمي", href: "https://app.sawsbs.com/" },
  { icon: UtensilsCrossed, label: "قائمة الطعام", href: "https://app.sawsbs.com/menu" },
  { icon: CalendarDays, label: "فرع الياسمين", href: "https://app.sawsbs.com/" },
  { icon: CalendarDays, label: "فرع الدرعية", href: "https://app.sawsbs.com/" },

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
