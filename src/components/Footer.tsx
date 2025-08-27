import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const footerSections = [
    {
      title: "Customer Care",
      links: [
        "Contact Us",
        "Size Chart", 
        "Shipping & Delivery",
        "Return & Exchange",
        "Track Your Order",
        "FAQ",
        "Care Instructions"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press",
        "Locate Stores",
        "Sitemap",
        "Terms of Service",
        "Privacy Policy"
      ]
    },
    {
      title: "Categories",
      links: [
        "Sarees",
        "Lehengas", 
        "Salwar Suits",
        "Dress Materials",
        "Dupattas",
        "Blouses",
        "Gowns"
      ]
    },
    {
      title: "Occasions",
      links: [
        "Wedding",
        "Bridal",
        "Festive",
        "Party Wear",
        "Casual",
        "Traditional",
        "Contemporary"
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/60 border-t border-border">
      {/* Newsletter section */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Stay Updated with Latest Collections
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Subscribe to get special offers, new arrivals, and exclusive discounts
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
              />
              <Button 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <h2 className="text-2xl font-heading font-bold text-primary">PSB</h2>
            </div>
            
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Your trusted destination for authentic ethnic wear. Celebrating tradition with contemporary elegance.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+91 1800-XXX-XXXX</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>support@psb.com</span>
              </div>
              <div className="flex items-start text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-primary flex-shrink-0" />
                <span>Rohtak 124001</span>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 PSB. All rights reserved.
            </p>
          </div>

          {/* Social media icons */}
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm mr-4">Follow us:</span>
            <Button variant="ghost" size="sm" className="rounded-full p-2 hover:bg-primary/10">
              <Facebook className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full p-2 hover:bg-primary/10">
              <Instagram className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full p-2 hover:bg-primary/10">
              <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full p-2 hover:bg-primary/10">
              <Youtube className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </Button>
          </div>

          {/* Payment and security badges */}
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-muted rounded border flex items-center justify-center">
                <span className="text-xs font-bold">💳</span>
              </div>
              <div className="w-8 h-5 bg-muted rounded border flex items-center justify-center">
                <span className="text-xs font-bold">🔒</span>
              </div>
            </div>
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;