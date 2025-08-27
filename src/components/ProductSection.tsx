import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { Product } from "@/data/mockProducts";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  className?: string;
}

const ProductSection = ({ title, subtitle, products, viewAllLink, className = "" }: ProductSectionProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          
          {viewAllLink && (
            <Button 
              variant="ghost" 
              className="group hidden md:flex items-center text-primary hover:text-primary/80"
            >
              View All
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile view all button */}
        {viewAllLink && (
          <div className="text-center mt-8 md:hidden">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View All {title}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;