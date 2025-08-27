import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import categorySarees from "@/assets/category-sarees.jpg";
import categoryLehengas from "@/assets/category-lehengas.jpg";

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Sarees",
      image: categorySarees,
      itemCount: "1,200+ Styles"
    },
    {
      id: 2,
      name: "Lehengas",
      image: categoryLehengas,
      itemCount: "800+ Styles"
    },
    {
      id: 3,
      name: "Salwar Suits",
      image: categorySarees, // Placeholder - would use different image
      itemCount: "950+ Styles"
    },
    {
      id: 4,
      name: "Dress Materials",
      image: categoryLehengas, // Placeholder - would use different image
      itemCount: "650+ Styles"
    },
    {
      id: 5,
      name: "Dupattas",
      image: categorySarees, // Placeholder - would use different image
      itemCount: "400+ Styles"
    },
    {
      id: 6,
      name: "Blouses",
      image: categoryLehengas, // Placeholder - would use different image
      itemCount: "350+ Styles"
    },
    {
      id: 7,
      name: "Gowns",
      image: categorySarees, // Placeholder - would use different image
      itemCount: "200+ Styles"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite collection of traditional and contemporary ethnic wear
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="text-white font-heading font-semibold text-lg mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {category.itemCount}
                    </p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary"
                      size="sm"
                      className="bg-white text-foreground hover:bg-white/90 font-medium"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;