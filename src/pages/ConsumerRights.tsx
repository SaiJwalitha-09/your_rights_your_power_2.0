import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Scale, AlertCircle, Phone, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import consumerRights from "@/assets/consumer-rights.jpg";

const ConsumerRights = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <div 
        className="h-80 relative"
        style={{
          backgroundImage: `url(${consumerRights})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 opacity-80"
          style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(14, 165, 233, 0.8))" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground px-4">
          <ShoppingCart className="w-20 h-20 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-center">Consumer Rights</h1>
          <p className="text-xl mt-4 text-center max-w-2xl">Know Your Rights as a Consumer</p>
        </div>
        <Button
          variant="outline"
          className="absolute top-6 left-6 bg-card/90 backdrop-blur-sm"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-8 h-8 text-primary mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights as a Consumer</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every consumer in India has important rights protected by the Consumer Protection Act, 2019.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">Six Basic Consumer Rights</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">1. Right to Safety</h4>
                <p className="text-lg text-muted-foreground">
                  You have the right to be protected against products that are hazardous to your health and life.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">2. Right to Information</h4>
                <p className="text-lg text-muted-foreground">
                  You have the right to know about the quality, quantity, price, and purity of goods or services.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">3. Right to Choose</h4>
                <p className="text-lg text-muted-foreground">
                  You have the right to choose from a variety of goods at competitive prices.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">4. Right to be Heard</h4>
                <p className="text-lg text-muted-foreground">
                  Your voice matters. You can represent your interests in consumer forums.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">5. Right to Seek Redressal</h4>
                <p className="text-lg text-muted-foreground">
                  You have the right to get compensation for unfair trade practices or defective goods.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">6. Right to Consumer Education</h4>
                <p className="text-lg text-muted-foreground">
                  You have the right to learn about your consumer rights throughout your life.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 bg-accent/10">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How to File a Complaint</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p><strong className="text-foreground">Step 1:</strong> Try to resolve with the seller first</p>
                  <p><strong className="text-foreground">Step 2:</strong> Keep all receipts, bills, and proof of purchase</p>
                  <p><strong className="text-foreground">Step 3:</strong> File complaint online at National Consumer Helpline</p>
                  <p><strong className="text-foreground">Step 4:</strong> If not resolved, approach District Consumer Forum</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 bg-primary/5">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Important Helplines</h3>
                <div className="space-y-3 text-lg">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">National Consumer Helpline:</strong> 1800-11-4000
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Website:</strong> consumerhelpline.gov.in
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">WhatsApp:</strong> 8800001915
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-secondary mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Common Consumer Issues</h3>
                <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
                  <li>Defective products not replaced</li>
                  <li>Wrong billing or overcharging</li>
                  <li>Poor quality of services</li>
                  <li>Misleading advertisements</li>
                  <li>Unfair contract terms</li>
                  <li>Delayed delivery of goods</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConsumerRights;
