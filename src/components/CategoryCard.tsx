import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  link: string;
}

export const CategoryCard = ({ title, description, icon: Icon, image, gradient, link }: CategoryCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
      onClick={() => navigate(link)}
    >
      <div 
        className="h-56 relative overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 opacity-80 group-hover:opacity-70 transition-opacity"
          style={{ background: gradient }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-card/90 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform shadow-lg">
            <Icon className="w-12 h-12 text-primary" />
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};
