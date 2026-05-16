import { Heart, Clock, Star } from "lucide-react";
import shopImg from "@/assets/shop-interior.jpg";

const features = [
  { icon: Heart, title: "Made Fresh Daily", desc: "Every donut is crafted from scratch each morning." },
  { icon: Clock, title: "Open Early", desc: "We're here bright and early so you never miss breakfast." },
  { icon: Star, title: "Community Favorite", desc: "Rated 4.4 stars with over 767 reviews from our neighbors." },
];

const AboutSection = () => (
  <section id="about" className="relative py-24 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0 -z-10">
      <img
        src={shopImg}
        alt="Warm interior of Moonskys & Daylight Donuts shop"
        className="w-full h-full object-cover"
        loading="lazy"
        width={1600}
        height={1000}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
    </div>

    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-6 animate-fade-up">
        About Us
      </h2>
      <p className="text-center text-foreground/80 text-lg max-w-2xl mx-auto mb-16 animate-fade-up animation-delay-200">
        Located at 2216 E Pine St in Tulsa, Moonskys & Daylight Donuts has been serving the community
        with delicious donuts, savory breakfast tacos, and our famous Chicken & Shrimp Po'boys.
        Whether you're dining in, driving through, or ordering delivery — we've got you covered.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`bg-card/95 backdrop-blur rounded-xl p-8 text-center shadow-warm-lg hover:-translate-y-1 transition-all duration-300 animate-fade-up animation-delay-${(i + 1) * 200}`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
              <f.icon size={28} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
