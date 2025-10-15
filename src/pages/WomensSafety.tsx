import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, AlertCircle, Phone, Scale, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import womenSafety from "@/assets/women-safety.jpg";

const WomensSafety = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <div 
        className="h-80 relative"
        style={{
          backgroundImage: `url(${womenSafety})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 opacity-80"
          style={{ background: "linear-gradient(135deg, rgba(251, 146, 60, 0.8), rgba(249, 115, 22, 0.8))" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground px-4">
          <Shield className="w-20 h-20 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-center">Women's Safety</h1>
          <p className="text-xl mt-4 text-center max-w-2xl">Know Your Legal Rights and Protection</p>
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
          <Card className="p-8 border-2 bg-destructive/10">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-destructive mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Emergency Helplines</h2>
                <div className="space-y-3 text-xl font-semibold">
                  <p className="text-foreground">
                    Women Helpline: <span className="text-destructive">1091</span>
                  </p>
                  <p className="text-foreground">
                    Police Emergency: <span className="text-destructive">100</span>
                  </p>
                  <p className="text-foreground">
                    National Commission for Women: <span className="text-destructive">7827-170-170</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="w-8 h-8 text-secondary mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Important Laws for Women's Protection</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Indian law provides strong protection for women's rights and safety.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Protection of Women from Domestic Violence Act, 2005</h4>
                <p className="text-lg text-muted-foreground">
                  Protects women from physical, emotional, sexual, and economic abuse at home. You can get protection orders and monetary relief.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Sexual Harassment at Workplace Act, 2013</h4>
                <p className="text-lg text-muted-foreground">
                  Every workplace must have a complaints committee. No woman should face harassment at work.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Dowry Prohibition Act, 1961</h4>
                <p className="text-lg text-muted-foreground">
                  Demanding, giving, or taking dowry is illegal. Punishment can be up to 5 years imprisonment and fine.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Indian Penal Code Section 498A</h4>
                <p className="text-lg text-muted-foreground">
                  Protection against cruelty by husband or his relatives. This is a cognizable and non-bailable offense.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Protection of Children from Sexual Offences (POCSO) Act</h4>
                <p className="text-lg text-muted-foreground">
                  Strong law to protect children from sexual abuse and exploitation.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Your Rights in Marriage</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>✓ Right to live with dignity and without violence</p>
                  <p>✓ Right to own and inherit property</p>
                  <p>✓ Right to maintenance from husband</p>
                  <p>✓ Right to file for divorce</p>
                  <p>✓ Right to custody of children</p>
                  <p>✓ Right to live in the matrimonial home</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 bg-accent/10">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-accent mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How to Report Violence or Harassment</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p><strong className="text-foreground">Step 1:</strong> Your safety comes first. Move to a safe place</p>
                  <p><strong className="text-foreground">Step 2:</strong> Call emergency helpline: 1091 or 100</p>
                  <p><strong className="text-foreground">Step 3:</strong> You can file FIR at any police station</p>
                  <p><strong className="text-foreground">Step 4:</strong> Seek medical help and keep records</p>
                  <p><strong className="text-foreground">Step 5:</strong> Contact NGOs or legal aid for support</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold text-foreground mb-6">One Stop Centres (Sakhi)</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Government has set up One Stop Centres in every district. Here you get:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
              <li>Police assistance for filing complaints</li>
              <li>Medical help</li>
              <li>Legal counseling and aid</li>
              <li>Temporary shelter</li>
              <li>Psychological counseling</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WomensSafety;
