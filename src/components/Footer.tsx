import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading text-xl font-bold text-primary-foreground">
            Moonskys & Daylight Donuts
          </h3>
          <p className="text-primary-foreground/60 text-sm mt-1">Fresh donuts daily in Tulsa, OK</p>
        </div>

        <div className="flex gap-4">
          {[
            { icon: Facebook, href: "https://www.facebook.com/moonskys", label: "Facebook" },
            { icon: Instagram, href: "https://www.instagram.com/moonskys", label: "Instagram" },
            { icon: MapPin, href: "https://www.google.com/maps/place/2216+E+Pine+St,+Tulsa,+OK+74110", label: "Google Maps" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 text-primary-foreground/70 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Moonskys & Daylight Donuts. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
