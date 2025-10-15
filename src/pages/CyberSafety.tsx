import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, ArrowLeft, AlertTriangle, Shield, Phone, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import cyberSafety from "@/assets/cyber-safety.jpg";

const CyberSafety = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30">
      <div 
        className="h-80 relative"
        style={{
          backgroundImage: `url(${cyberSafety})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div 
          className="absolute inset-0 opacity-80"
          style={{ background: "linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(6, 182, 212, 0.8))" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground px-4">
          <Wifi className="w-20 h-20 mb-4" />
          <h1 className="text-5xl md:text-6xl font-bold text-center">Cyber Safety</h1>
          <p className="text-xl mt-4 text-center max-w-2xl">Stay Safe Online and Fight Cybercrime</p>
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
              <AlertTriangle className="w-8 h-8 text-destructive mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Report Cybercrime Now</h2>
                <div className="space-y-3 text-xl font-semibold">
                  <p className="text-foreground">
                    National Cybercrime Helpline: <span className="text-destructive">1930</span>
                  </p>
                  <p className="text-foreground">
                    Report Online: <span className="text-accent">cybercrime.gov.in</span>
                  </p>
                  <p className="text-muted-foreground text-lg">
                    Available 24x7 in all languages
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4 mb-4">
              <Shield className="w-8 h-8 text-accent mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Common Cyber Threats</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Know these threats to protect yourself and your family online.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Online Fraud & Scams</h4>
                <p className="text-lg text-muted-foreground">
                  Fake calls pretending to be from banks, lottery wins, or government officials asking for money or OTPs. Never share OTP with anyone!
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Phishing Attacks</h4>
                <p className="text-lg text-muted-foreground">
                  Fake emails or messages that look real, asking you to click links or share passwords. Always verify before clicking.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Identity Theft</h4>
                <p className="text-lg text-muted-foreground">
                  Someone steals your personal information (Aadhaar, PAN, bank details) to commit fraud in your name.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Cyberbullying & Harassment</h4>
                <p className="text-lg text-muted-foreground">
                  Threats, insults, or sharing private photos without consent on social media or messaging apps.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">UPI & Payment Frauds</h4>
                <p className="text-lg text-muted-foreground">
                  Scammers sending fake payment requests or QR codes. Always verify before scanning any QR code.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 bg-primary/5">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">10 Simple Safety Rules</h3>
                <div className="space-y-3 text-lg text-muted-foreground">
                  <p>1. <strong className="text-foreground">Never share OTPs</strong> - Not with anyone, not even bank employees</p>
                  <p>2. <strong className="text-foreground">Use strong passwords</strong> - Mix letters, numbers, and symbols</p>
                  <p>3. <strong className="text-foreground">Don't click unknown links</strong> - Even if they look real</p>
                  <p>4. <strong className="text-foreground">Verify before paying</strong> - Double check UPI IDs and phone numbers</p>
                  <p>5. <strong className="text-foreground">Keep apps updated</strong> - Install security updates promptly</p>
                  <p>6. <strong className="text-foreground">Use secure Wi-Fi</strong> - Avoid public Wi-Fi for banking</p>
                  <p>7. <strong className="text-foreground">Check app permissions</strong> - Don't give unnecessary access</p>
                  <p>8. <strong className="text-foreground">Enable two-factor authentication</strong> - Extra layer of security</p>
                  <p>9. <strong className="text-foreground">Don't overshare on social media</strong> - Protect personal information</p>
                  <p>10. <strong className="text-foreground">Trust your instincts</strong> - If something feels wrong, it probably is</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-secondary mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">How to Report Cybercrime</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p><strong className="text-foreground">Step 1:</strong> Save all evidence - screenshots, messages, emails, call records</p>
                  <p><strong className="text-foreground">Step 2:</strong> Visit cybercrime.gov.in or call 1930</p>
                  <p><strong className="text-foreground">Step 3:</strong> Fill complaint form with all details</p>
                  <p><strong className="text-foreground">Step 4:</strong> You'll get a complaint number - keep it safe</p>
                  <p><strong className="text-foreground">Step 5:</strong> If money lost, immediately call bank and report</p>
                  <p><strong className="text-foreground">Remember:</strong> Quick reporting increases chance of getting money back</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 bg-accent/10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Common Warning Signs of Fraud</h3>
            <ul className="space-y-3 text-lg text-muted-foreground list-disc list-inside">
              <li>Calls asking for urgent money transfer or OTP</li>
              <li>Messages saying you won a lottery you never entered</li>
              <li>Job offers asking for money first</li>
              <li>Links claiming your KYC needs update urgently</li>
              <li>Requests to install remote access apps like AnyDesk</li>
              <li>Too-good-to-be-true investment schemes</li>
              <li>Messages from unknown numbers pretending to be relatives</li>
            </ul>
          </Card>

          <Card className="p-8 border-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">Important Resources</h3>
            <div className="space-y-3 text-lg text-muted-foreground">
              <p><strong className="text-foreground">Report Portal:</strong> cybercrime.gov.in</p>
              <p><strong className="text-foreground">Helpline:</strong> 1930 (for financial frauds)</p>
              <p><strong className="text-foreground">For Women & Children:</strong> 1091 or helpline.nic.in</p>
              <p><strong className="text-foreground">CERT-In:</strong> cert-in.org.in (for cyber security issues)</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CyberSafety;
