import { Croissant, Beef, Coffee, Cookie, Salad, IceCream, Sandwich, CupSoda } from "lucide-react";
import foodImg from "@/assets/food-spread.jpg";

type MenuItem = { name: string; desc?: string; price: string };
type MenuCategory = { icon: typeof Coffee; title: string; items: MenuItem[] };

const menu: MenuCategory[] = [
  {
    icon: Cookie,
    title: "Donuts",
    items: [
      { name: "Classic Glazed", desc: "Our signature light, fluffy glazed donut.", price: "$1.25" },
      { name: "Chocolate Iced", desc: "Glazed donut topped with rich chocolate icing.", price: "$1.75" },
      { name: "Sprinkles", desc: "Chocolate or vanilla iced, topped with sprinkles.", price: "$1.75" },
      { name: "Maple Bacon", desc: "Maple glaze topped with crispy bacon.", price: "$2.50" },
      { name: "Cinnamon Sugar", desc: "Fresh donut rolled in cinnamon sugar.", price: "$1.50" },
      { name: "Filled Donut", desc: "Cream, custard, or fruit filled.", price: "$2.00" },
      { name: "Seasonal Specialty", desc: "Ask about our flavor of the week.", price: "$2.25" },
      { name: "Donut Holes (Dozen)", desc: "Bite-sized glazed donut holes.", price: "$3.00" },
      { name: "Half Dozen Donuts", price: "$7.50" },
      { name: "Dozen Donuts", price: "$13.99" },
    ],
  },
  {
    icon: Beef,
    title: "Breakfast Tacos",
    items: [
      { name: "Bacon, Egg & Cheese", desc: "Crispy bacon with scrambled eggs and cheese.", price: "$3.50" },
      { name: "Sausage, Egg & Cheese", desc: "Savory sausage with eggs and melted cheese.", price: "$3.50" },
      { name: "Chorizo & Egg", desc: "Spicy chorizo scrambled with eggs.", price: "$3.75" },
      { name: "Potato, Egg & Cheese", desc: "Crispy potatoes with eggs and cheese.", price: "$3.25" },
      { name: "Steak & Egg", desc: "Tender steak with eggs and cheese.", price: "$4.50" },
    ],
  },
  {
    icon: Sandwich,
    title: "Po'boys & Sandwiches",
    items: [
      { name: "Chicken Po'boy", desc: "Crispy fried chicken on a toasted hoagie.", price: "$8.99" },
      { name: "Shrimp Po'boy", desc: "Golden fried shrimp with all the fixings.", price: "$9.99" },
      { name: "Combo Po'boy", desc: "Half chicken, half shrimp — best of both.", price: "$10.99" },
      { name: "Catfish Po'boy", desc: "Crispy catfish on a toasted hoagie.", price: "$9.99" },
    ],
  },
  {
    icon: Salad,
    title: "Sides",
    items: [
      { name: "French Fries", price: "$2.99" },
      { name: "Cajun Fries", price: "$3.49" },
      { name: "Onion Rings", price: "$3.99" },
      { name: "Side Salad", price: "$3.50" },
    ],
  },
  {
    icon: Coffee,
    title: "Hot Drinks",
    items: [
      { name: "Hot Coffee (Small)", price: "$2.00" },
      { name: "Hot Coffee (Large)", price: "$2.75" },
      { name: "Hot Tea", price: "$2.00" },
      { name: "Hot Chocolate", price: "$2.75" },
    ],
  },
  {
    icon: CupSoda,
    title: "Cold Drinks",
    items: [
      { name: "Iced Coffee", price: "$3.00" },
      { name: "Orange Juice", price: "$2.50" },
      { name: "Bottled Water", price: "$1.50" },
      { name: "Soft Drinks", desc: "Coke, Diet Coke, Sprite, Dr Pepper.", price: "$2.00" },
      { name: "Sweet or Unsweet Tea", price: "$2.25" },
      { name: "Milk", price: "$1.75" },
    ],
  },
  {
    icon: IceCream,
    title: "Sweet Treats",
    items: [
      { name: "Cinnamon Roll", price: "$2.99" },
      { name: "Apple Fritter", price: "$2.75" },
      { name: "Kolache", desc: "Sweet or sausage-filled.", price: "$2.50" },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <img
        src={foodImg}
        alt="Tacos, po'boys, fries and donuts spread"
        className="w-full h-full object-cover"
        loading="lazy"
        width={1600}
        height={1000}
      />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>
    <div className="container mx-auto px-4 max-w-6xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-primary-foreground mb-4">
        Our Full Menu
      </h2>
      <p className="text-center text-primary-foreground/80 text-lg mb-16">
        Something delicious for everyone — $10–$20 per person
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((cat) => (
          <div
            key={cat.title}
            className="bg-background/95 backdrop-blur rounded-xl p-6 shadow-warm-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
              <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <cat.icon size={22} />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">{cat.title}</h3>
            </div>

            <ul className="space-y-4">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    {item.desc && (
                      <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                    )}
                  </div>
                  <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-center text-primary-foreground/80 text-sm mt-10">
        Prices may vary. Ask in-store for daily specials and seasonal items.
      </p>
    </div>
  </section>
);

export default MenuSection;
