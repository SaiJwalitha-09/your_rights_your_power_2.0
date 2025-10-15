import { useRef } from "react";
import { Hero } from "@/components/Hero";
import { LegalAssistant } from "@/components/LegalAssistant";
import { CategoryCard } from "@/components/CategoryCard";
import { ShoppingCart, Shield, Wifi, FileText } from "lucide-react";
import consumerRights from "@/assets/consumer-rights.jpg";
import womenSafety from "@/assets/women-safety.jpg";
import cyberSafety from "@/assets/cyber-safety.jpg";

const Index = () => {
  const assistantRef = useRef<HTMLDivElement>(null);

  const scrollToAssistant = () => {
    assistantRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const categories = [
    {
      title: "Consumer Rights",
      description: "Learn about your rights as a consumer, how to file complaints, and get justice for unfair practices.",
      icon: ShoppingCart,
      image: consumerRights,
      gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(14, 165, 233, 0.8))",
    },
    {
      title: "Women's Safety",
      description: "Information on laws protecting women, emergency helplines, and your legal rights.",
      icon: Shield,
      image: womenSafety,
      gradient: "linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(249, 115, 22, 0.8))",
    },
    {
      title: "Cyber Safety",
      description: "Stay safe online. Learn about cyber fraud prevention and how to report cybercrimes.",
      icon: Wifi,
      image: cyberSafety,
      gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(6, 182, 212, 0.8))",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={scrollToAssistant} />
      
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bridging the gap in legal awareness for rural, semi-urban, and underprivileged communities across India. 
              We believe that every person deserves to know their basic legal rights and have access to justice.
            </p>
          </div>
        </div>
      </section>

      <div ref={assistantRef}>
        <LegalAssistant />
      </div>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Explore Your Rights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through different categories to learn about your legal rights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <FileText className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Know Your Rights</h3>
          <p className="text-lg opacity-90 mb-6">
            Empowering communities with legal awareness
          </p>
          <p className="text-sm opacity-75">
            © 2025 Know Your Rights. Making justice accessible for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
