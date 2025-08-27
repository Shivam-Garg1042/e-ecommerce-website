import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { featuredProducts, newArrivals, saleProducts } from "@/data/mockProducts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <CategoryGrid />
        
        <ProductSection 
          title="Bestsellers"
          subtitle="Our most loved pieces that define elegance and style"
          products={featuredProducts}
          viewAllLink="/bestsellers"
          className="bg-background"
        />
        
        <ProductSection 
          title="New Arrivals"
          subtitle="Fresh designs that celebrate contemporary Indian fashion"
          products={newArrivals}
          viewAllLink="/new-arrivals"
          className="bg-muted/20"
        />
        
        <ProductSection 
          title="Flash Sale"
          subtitle="Limited time offers on premium ethnic wear"
          products={saleProducts}
          viewAllLink="/sale"
          className="bg-gradient-to-b from-primary-muted/30 to-secondary-muted/30"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
