const featuredItems = [
  {
    name: "Grilled Nile Perch",
    description: "Served with lemon butter sauce and seasonal vegetables.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", // elegant fish dish
  },
  {
    name: "Karen Sunset Cocktail",
    description: "A tropical blend of mango, passion, and rum.",
    image: "https://images.unsplash.com/photo-1581404917879-9b1c0e1f0b1c", // vibrant cocktail
  },
  {
    name: "Spiced Lamb Skewers",
    description: "Char-grilled with house marinade and mint yogurt.",
    image: "https://images.unsplash.com/photo-1625941136403-6b3c3e3f7e2e", // grilled meat
  },
];

const FeaturedMenu = () => {
  return (
    <section className="bg-background py-20 text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Featured Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-500">{item.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;