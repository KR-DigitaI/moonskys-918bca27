import { Croissant, Beef, Coffee, Cookie, Salad, IceCream } from "lucide-react";

const menuItems = [
  { icon: Croissant, name: "Classic Glazed Donuts", desc: "Our signature light, fluffy glazed donut — a Tulsa favorite.", price: "$1.25" },
  { icon: Cookie, name: "Specialty Donuts", desc: "Chocolate, sprinkles, maple bacon, and seasonal flavors.", price: "$1.75" },
  { icon: Beef, name: "Breakfast Tacos", desc: "Freshly made tacos loaded with eggs, cheese & your choice of meat.", price: "$3.50" },
  { icon: Salad, name: "Chicken & Shrimp Po'boy", desc: "Crispy chicken or shrimp on a toasted hoagie with all the fixings.", price: "$8.99" },
  { icon: Coffee, name: "Coffee & Drinks", desc: "Hot coffee, iced coffee, orange juice, and more.", price: "$2.00" },
  { icon: IceCream, name: "Donut Holes & Treats", desc: "Bite-sized donut holes and sweet treats for the whole family.", price: "$3.00" },
];

const MenuSection = () => (
  <section id="menu" className="py-24 bg-card">
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
        Our Menu
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-16">
        Something delicious for everyone — $10–$20 per person
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.name}</h3>
                  <span className="text-primary font-bold text-lg ml-2">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
