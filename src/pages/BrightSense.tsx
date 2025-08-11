import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Waves, Sparkles, Brain, Lightbulb, Shield, Activity } from "lucide-react";
import hero from "@/assets/brightsense-hero.jpg";

const Step = ({ index, title, desc }: { index: number; title: string; desc: string }) => (
  <div className="flex items-start gap-4">
    <div className="h-10 w-10 rounded-full bg-secondary text-secondary-foreground grid place-items-center font-semibold">{index}</div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const BrightSense = () => {
  useEffect(() => {
    document.title = "BrightSense — Intelligent Lighting, Perfected | Seculinx";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "BrightSense uses mmWave and AI to deliver adaptive, privacy-first lighting. Launching Q4 2025.");
    const link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel','canonical');
    link.setAttribute('href','/brightsense');
    if (!link.parentNode) document.head.appendChild(link);
  }, []);

  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-animated-gradient animate-gradient-move">
        <div className="absolute inset-0">
          <img src={hero} alt="BrightSense lifestyle lighting adapting in real time" className="w-full h-full object-cover opacity-70" />
        </div>
        <div className="relative container mx-auto min-h-[80svh] grid place-items-center py-24">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">BrightSense — Intelligent Lighting, Perfected.</h1>
            <p className="text-lg text-muted-foreground">Launching Q4 2025</p>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex gap-3 max-w-md mx-auto">
              <input type="email" required placeholder="Enter your email" className="flex-1 h-12 rounded-md border px-4 bg-background" />
              <Button variant="hero" size="lg">Stay Notified</Button>
            </form>
            {submitted && <div className="text-sm text-primary">Thanks! We'll notify you at launch.</div>}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-surface py-20">
        <div className="container mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How It Works</h2>
            <p className="text-muted-foreground">A privacy-first system that detects, adapts, and optimizes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Step index={1} title="Detect" desc="Advanced mmWave sensing detects motion and activity zones without compromising privacy." />
            <Step index={2} title="Adapt" desc="Lighting adjusts brightness, warmth, and coverage based on your presence and needs." />
            <Step index={3} title="Optimize" desc="AI learns your preferences to reduce energy use while maximizing comfort." />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Key Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-gradient-border p-[1px]"><div className="card-surface rounded-lg p-5 h-full"><Waves className="text-primary mb-2" /><h4 className="font-semibold mb-1">Zone Detection</h4><p className="text-muted-foreground text-sm">Knows exactly where you are in the room.</p></div></div>
            <div className="card-gradient-border p-[1px]"><div className="card-surface rounded-lg p-5 h-full"><Activity className="text-primary mb-2" /><h4 className="font-semibold mb-1">Activity Awareness</h4><p className="text-muted-foreground text-sm">Recognizes if you’re reading, working, or relaxing.</p></div></div>
            <div className="card-gradient-border p-[1px]"><div className="card-surface rounded-lg p-5 h-full"><Shield className="text-primary mb-2" /><h4 className="font-semibold mb-1">Energy Optimization</h4><p className="text-muted-foreground text-sm">Only lights where and when needed.</p></div></div>
            <div className="card-gradient-border p-[1px]"><div className="card-surface rounded-lg p-5 h-full"><Sparkles className="text-primary mb-2" /><h4 className="font-semibold mb-1">Multi-Device Sync</h4><p className="text-muted-foreground text-sm">Seamlessly integrates with other Seculinx products.</p></div></div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-surface py-16">
        <div className="container mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Use Cases</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {[
              { title: "Home Office", desc: "Focus lighting during work hours." },
              { title: "Living Room", desc: "Ambient glow for movie nights." },
              { title: "Bedroom", desc: "Warm light transition for winding down." },
            ].map((item) => (
              <div key={item.title} className="min-w-[280px] md:min-w-[340px] snap-start card-gradient-border p-[1px]">
                <div className="card-surface rounded-lg p-5 h-full">
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech behind */}
      <section className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">The Tech Behind BrightSense</h2>
            <p className="text-muted-foreground text-lg">Powered by mmWave technology, BrightSense offers unparalleled detection accuracy while maintaining total privacy. Combined with AI-driven lighting algorithms, it delivers a lighting experience that feels natural and human.</p>
          </div>
          <div className="relative h-72 rounded-xl card-gradient-border p-[1px]">
            <div className="card-surface rounded-xl h-full grid place-items-center">
              <Lightbulb className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="section-surface py-20">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Launching Q4 2025 — Be the first to experience BrightSense.</h2>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="flex gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="Enter your email" className="flex-1 h-12 rounded-md border px-4 bg-background" />
            <Button variant="hero" size="lg">Join Waitlist</Button>
          </form>
          {submitted && <div className="text-sm text-primary">You're on the list! ✨</div>}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "BrightSense",
        brand: { "@type": "Brand", name: "Seculinx" },
        description: "AI-powered smart lighting with mmWave sensing. Launching Q4 2025.",
        releaseDate: "2025-10-01"
      }) }} />
    </div>
  );
};

export default BrightSense;
