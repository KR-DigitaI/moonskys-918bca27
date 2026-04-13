import heroImg from "@/assets/hero-donuts.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Fresh assorted donuts on a wooden board"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up">
        Moonskys & Daylight Donuts
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up animation-delay-200 font-body">
        Fresh donuts, breakfast tacos & po'boys — made with love every morning in Tulsa, OK.
      </p>
      <div className="animate-fade-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#menu"
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-warm-lg"
        >
          View Our Menu
        </a>
        <a
          href="#contact"
          className="inline-block border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors text-lg"
        >
          Visit Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
