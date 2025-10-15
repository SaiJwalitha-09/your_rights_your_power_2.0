import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'var(--gradient-hero)',
          opacity: 0.9,
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-full">
            <Scale className="w-16 h-16 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground">
          Know Your Rights
        </h1>
        <p className="text-2xl md:text-3xl mb-4 text-primary-foreground/95 font-medium">
          Empower Yourself
        </p>
        <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
          Free legal guidance in simple language for everyone. We bridge the gap in legal awareness for all communities across India.
        </p>
        
        <Button 
          onClick={onGetStarted}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-xl px-10 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Get Free Legal Help Now
        </Button>
      </div>
    </section>
  );
};
