import { useState } from "react";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    "SALE",
    "SAREES", 
    "DRESS MATERIALS",
    "SALWAR SUITS",
    "LEHENGAS",
    "OTHERS",
    "NEW ARRIVALS",
    "OCCASIONS"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top promotional banner */}
      <div className="bg-gradient-primary text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          ✨ LIMITED TIME: SHOP ₹5999+ & GET EXTRA 10% OFF INSTANTLY! Use Code: PSB10
        </p>
      </div>

      {/* Secondary navigation */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-foreground transition-colors">DOWNLOAD THE APP</a>
              <a href="#" className="hover:text-foreground transition-colors">SIZE CHART</a>
              <a href="#" className="hover:text-foreground transition-colors">SHIPPING & DELIVERY</a>
              <a href="#" className="hover:text-foreground transition-colors">TRACK YOUR ORDER</a>
              <a href="#" className="hover:text-foreground transition-colors">CUSTOMER REVIEWS</a>
            </div>
            <div className="flex items-center space-x-4 text-right">
              <span className="hidden sm:inline">EXCLUSIVE: FIRST APP ORDER? ENJOY 15% OFF ON ₹7999</span>
              <a href="#" className="text-primary hover:underline">App download now!</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <h1 className="text-2xl font-heading font-bold text-primary">PSB</h1>
          </div>

          {/* Desktop search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for items..."
                className="pl-10 bg-muted/50 border-0 focus:bg-background"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile search */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent text-accent-foreground"
              >
                2
              </Badge>
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
              >
                3
              </Badge>
            </Button>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for items..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation menu */}
      <nav className="border-t border-border">
        <div className="container mx-auto px-4">
          {/* Desktop menu */}
          <div className="hidden md:flex items-center justify-center space-x-8 py-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <a href="#" className="block text-sm text-muted-foreground py-1">Download App</a>
                <a href="#" className="block text-sm text-muted-foreground py-1">Size Chart</a>
                <a href="#" className="block text-sm text-muted-foreground py-1">Track Order</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;