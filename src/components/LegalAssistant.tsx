import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Loader2, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const LegalAssistant = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        title: "Please enter your question",
        description: "Tell us about your legal concern so we can help you.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAnswer("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/legal-assistant`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ question }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get response");
      }

      const data = await response.json();
      setAnswer(data.answer);
      
      toast({
        title: "Got your answer!",
        description: "Your legal guidance is ready below.",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Oops! Something went wrong",
        description: error instanceof Error ? error.message : "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Format the markdown-style answer into HTML
  const formatAnswer = (text: string) => {
    return text.split('\n').map((line, i) => {
      // Bold headers
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h3 key={i} className="text-xl font-bold text-primary mt-6 mb-3">
            {line.replace(/\*\*/g, '')}
          </h3>
        );
      }
      // Bullet points
      if (line.startsWith('• ')) {
        return (
          <li key={i} className="ml-6 mb-2 text-lg">
            {line.substring(2)}
          </li>
        );
      }
      // Numbered lists
      if (/^\d+\./.test(line)) {
        return (
          <li key={i} className="ml-6 mb-2 text-lg">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      }
      // Regular paragraphs
      if (line.trim()) {
        return (
          <p key={i} className="mb-3 text-lg leading-relaxed">
            {line}
          </p>
        );
      }
      return <br key={i} />;
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI Legal Assistant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ask Your Legal Question
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Describe your problem in simple words. We'll explain it clearly so anyone can understand.
          </p>
        </div>

        <Card className="p-8 shadow-[var(--shadow-soft)]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="question" className="block text-lg font-semibold mb-3 text-foreground">
                What's your legal concern?
              </label>
              <Textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Example: My landlord won't return my security deposit..."
                className="min-h-[140px] text-lg p-4 resize-none"
                disabled={isLoading}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-full text-lg py-6 h-auto font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Getting your answer...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Get Help Now
                </>
              )}
            </Button>
          </form>

          {answer && (
            <div className="mt-10 pt-10 border-t-2 border-border">
              <div className="bg-accent/5 rounded-lg p-6 border-l-4 border-accent">
                <h3 className="text-2xl font-bold mb-6 text-accent flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  Your Legal Guidance
                </h3>
                <div className="prose prose-lg max-w-none text-foreground">
                  {formatAnswer(answer)}
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
};
