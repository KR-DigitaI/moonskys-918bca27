import { useState } from "react";
import { MapPin, Phone, Clock, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground">Visit Our Shop</h3>
            <div className="space-y-6">
              {[
                { icon: MapPin, text: "2216 E Pine St, Tulsa, OK 74110", href: "https://www.google.com/maps/place/2216+E+Pine+St,+Tulsa,+OK+74110" },
                { icon: Phone, text: "+1 (918) 599-8530", href: "tel:+19185998530" },
                { icon: Clock, text: "Open daily · Closes at 3:30 PM" },
                { icon: Facebook, text: "facebook.com/moonskys", href: "https://www.facebook.com/moonskys" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl p-6 shadow-warm">
              <p className="text-sm text-muted-foreground italic">
                "Already addicted to their new menu! Breakfast Tacos!! 🌮🌮🌮" — Happy Customer
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-warm space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-warm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
