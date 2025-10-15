import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question } = await req.json();
    
    if (!question) {
      return new Response(
        JSON.stringify({ error: "Question is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a friendly legal assistant helping people in India understand their rights. Your audience includes kids, elderly people, and those with limited legal knowledge.

CRITICAL FORMATTING RULES:
1. Always start with a brief, empathetic acknowledgment of their concern
2. Break down the response into clear, numbered steps
3. Use simple language - explain legal terms in plain words
4. Add visual breaks with section headers
5. End with actionable next steps
6. Keep sentences short and clear

FORMAT YOUR RESPONSE EXACTLY LIKE THIS:

**Understanding Your Situation:**
[Brief empathetic statement about their concern]

**Here's What You Need to Know:**

**Step 1: [Clear Action Title]**
[Simple explanation in 1-2 sentences]

**Step 2: [Clear Action Title]**
[Simple explanation in 1-2 sentences]

**Step 3: [Clear Action Title]**
[Simple explanation in 1-2 sentences]

**Important Points to Remember:**
• [Key point 1]
• [Key point 2]
• [Key point 3]

**Your Next Steps:**
1. [First actionable step]
2. [Second actionable step]
3. [Third actionable step]

**Need More Help?**
[Mention relevant helpline or resource]

Remember: Be warm, clear, and encouraging. Use words like "you can", "here's how", "it's simple".`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please try again later." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to get response from AI service" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content;

    if (!answer) {
      throw new Error("No response from AI");
    }

    return new Response(
      JSON.stringify({ answer }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in legal-assistant function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "An unexpected error occurred" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
