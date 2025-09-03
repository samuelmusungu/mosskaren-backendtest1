import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Wine, Coffee } from "lucide-react";

const iconMap = {
  "Main Courses": Utensils,
  "Beverages": Wine,
  "Desserts & Coffee": Coffee,
};

const groupByCategory = (items) => {
  const grouped = {
    "Main Courses": [],
    "Beverages": [],
    "Desserts & Coffee": [],
  };

  items.forEach((item) => {
    if (item.category === "main") grouped["Main Courses"].push(item);
    if (item.category === "drink") grouped["Beverages"].push(item);
    if (item.category === "dessert") grouped["Desserts & Coffee"].push(item);
  });

  return grouped;
};

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((res) => res.json())
      .then((data) => {
        const grouped = groupByCategory(data);
        const formatted = Object.entries(grouped).map(([title, items]) => ({
          title,
          icon: iconMap[title],
          items,
        }));
        setCategories(formatted);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load menu");
        setLoading(false);
      });
  }, []);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully crafted menu featuring the finest local and international cuisine, 
            prepared with passion and served with pride.
          </p>
        </div>

        {loading && <p className="text-center text-muted-foreground">Loading menu...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <img
                        src={item.imageUrl}
                        alt={`Image of ${item.name}`}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                        loading="lazy"
                      />
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <Badge className="bg-secondary text-white">
                              Popular
                            </Badge>
                          )}
                        </h4>
                        <span className="text-xl font-bold text-primary">
                          {new Intl.NumberFormat("en-KE", {
                            style: "currency",
                            currency: "KES",
                          }).format(item.price)}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Full Menu Available
            </h3>
            <p className="text-muted-foreground mb-6">
              Visit us to explore our complete menu featuring seasonal specials, 
              wine pairings, and chef's recommendations.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-sm">Daily Specials</Badge>
              <Badge variant="secondary" className="text-sm">Wine Pairings</Badge>
              <Badge variant="secondary" className="text-sm">Vegetarian Options</Badge>
              <Badge variant="secondary" className="text-sm">Gluten-Free</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;