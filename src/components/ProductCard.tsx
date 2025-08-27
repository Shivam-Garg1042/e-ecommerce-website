import { useState } from "react";
import { Heart, Eye, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    rating: number;
    reviewCount: number;
    isNew?: boolean;
    isBestseller?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Main image */}
          <div 
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${product.image})` }}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-card animate-pulse" />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 space-y-2">
            {product.isNew && (
              <Badge className="bg-secondary text-secondary-foreground font-medium">
                NEW
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-accent text-accent-foreground font-medium">
                BESTSELLER
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-destructive text-destructive-foreground font-medium">
                {discountPercentage}% OFF
              </Badge>
            )}
          </div>

          {/* Action buttons */}
          <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="secondary"
              className={`rounded-full p-2 h-auto shadow-soft ${
                isWishlisted ? 'bg-destructive text-destructive-foreground' : 'bg-white/90 text-foreground'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsWishlisted(!isWishlisted);
              }}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </Button>
            
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full p-2 h-auto bg-white/90 text-foreground shadow-soft"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Quick add to cart */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product details */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-medium text-foreground text-sm line-clamp-2 leading-5">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-secondary text-secondary'
                      : 'text-muted'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="font-heading font-semibold text-lg text-foreground">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;