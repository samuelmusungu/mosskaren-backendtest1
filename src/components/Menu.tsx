import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Wine, Coffee } from "lucide-react";

const Menu = () => {
  const categories = [
    {
      icon: Utensils,
      title: "Main Courses",
      items: [
        {
          name: "Grilled Nyama Choma Platter",
          description: "Premium beef cuts grilled to perfection, served with ugali and sukuma wiki",
          price: "KSh 2,800",
          popular: true,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Pan-Seared Tilapia",
          description: "Fresh Lake Victoria tilapia with coconut rice and steamed vegetables",
          price: "KSh 2,200",
          popular: false,
          image: "https://images.unsplash.com/photo-1613145993481-1f4b8b5d7c3e?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Chicken Tikka Masala",
          description: "Tender chicken in rich tomato curry sauce with basmati rice",
          price: "KSh 2,400",
          popular: true,
          image: "https://images.unsplash.com/photo-1605478371443-3c1c3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Vegetarian Pilau",
          description: "Aromatic spiced rice with seasonal vegetables and cashew nuts",
          price: "KSh 1,800",
          popular: false,
          image: "https://images.unsplash.com/photo-1625941134463-6f2c3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      icon: Wine,
      title: "Beverages",
      items: [
        {
          name: "House Special Cocktail",
          description: "Signature blend with premium spirits and tropical fruits",
          price: "KSh 1,200",
          popular: true,
          image: "https://images.unsplash.com/photo-1571079504900-897d1a7c7d4b?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Kenyan Wine Selection",
          description: "Carefully curated local wines from Naivasha vineyards",
          price: "KSh 3,500",
          popular: false,
          image: "https://images.unsplash.com/photo-1606788075761-6c0f7f6b7f6e?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Fresh Fruit Mocktails",
          description: "Refreshing non-alcoholic beverages with seasonal fruits",
          price: "KSh 650",
          popular: true,
          image: "https://images.unsplash.com/photo-1581579185169-4c3f3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Premium Beer Collection",
          description: "Local and imported beers, perfectly chilled",
          price: "KSh 450",
          popular: false,
          image: "https://images.unsplash.com/photo-1590080877037-4c3f3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        }
      ]
    },
    {
      icon: Coffee,
      title: "Desserts & Coffee",
      items: [
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center and vanilla ice cream",
          price: "KSh 950",
          popular: true,
          image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Kenyan Coffee Selection",
          description: "Premium single-origin beans from the highlands",
          price: "KSh 350",
          popular: false,
          image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Tropical Fruit Platter",
          description: "Fresh seasonal fruits beautifully presented",
          price: "KSh 750",
          popular: false,
          image: "https://images.unsplash.com/photo-1576402187877-9f7f3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        },
        {
          name: "Homemade Ice Cream",
          description: "Artisanal flavors made fresh daily",
          price: "KSh 450",
          popular: true,
          image: "https://images.unsplash.com/photo-1590080877037-4c3f3f4e9c3a?auto=format&fit=crop&w=600&q=80"
        }
      ]
    }
  ];

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
                        src={item.image}
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
                          {item.price}
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