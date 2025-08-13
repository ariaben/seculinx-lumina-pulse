import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Leaf, Lock, Sparkles, Lightbulb, Activity, Gauge, Instagram, Linkedin, Twitter } from "lucide-react";
import heroImage from "@/assets/hero-smart-home.jpg";
import SiteHeader from "@/components/SiteHeader";

const useParallax = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--parallax-x", String(x * 8));
      el.style.setProperty("--parallax-y", String(y * 8));
    };
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);
  return ref;
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="max-w-3xl mx-auto text-center animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    document.title = "Seculinx — Smarter Living, Connected by Design";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Premium smart home automation: intelligent lighting, security, and sensors by Seculinx.");
  }, []);

  const parallaxRef = useParallax();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const [quoteIndex, setQuoteIndex] = useState(0);
  const quotes = [
    { q: "The most thoughtfully designed smart home experience we've tested.", a: "Modern Living Journal" },
    { q: "Seculinx blends privacy-first design with brilliant automation.", a: "Tech & Home" },
    { q: "Lighting that actually understands your life.", a: "Beta User" },
  ];
  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section id="home" className="relative min-h-[100svh] overflow-hidden bg-animated-gradient animate-gradient-move">
          <div ref={parallaxRef} className="absolute inset-0 pointer-events-none" style={{ transform: "translate3d(calc(var(--parallax-x, 0px)*1px), calc(var(--parallax-y, 0px)*1px), 0)" }}>
            <img src={heroImage} alt="Futuristic smart home interior with adaptive lighting by Seculinx" className="w-full h-full object-cover opacity-70 img-zoom" loading="eager" />
          </div>
          
          {/* Interactive Light Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Light 1 - Top left ceiling light */}
            <div className="absolute top-[20%] left-[25%] w-16 h-16 pointer-events-auto group cursor-pointer">
              <div className="w-full h-full rounded-full bg-primary/20 group-hover:bg-primary/60 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300 group-hover:scale-150"></div>
            </div>
            
            {/* Light 2 - Top right ceiling light */}
            <div className="absolute top-[25%] right-[30%] w-12 h-12 pointer-events-auto group cursor-pointer">
              <div className="w-full h-full rounded-full bg-primary/20 group-hover:bg-primary/60 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.8)] transition-all duration-300 group-hover:scale-150"></div>
            </div>
            
            {/* Light 3 - Wall accent light */}
            <div className="absolute top-[45%] left-[15%] w-10 h-10 pointer-events-auto group cursor-pointer">
              <div className="w-full h-full rounded-full bg-accent/30 group-hover:bg-accent/70 group-hover:shadow-[0_0_20px_hsl(var(--accent)/0.8)] transition-all duration-300 group-hover:scale-150"></div>
            </div>
            
            {/* Light 4 - Floor lamp */}
            <div className="absolute bottom-[30%] right-[25%] w-14 h-14 pointer-events-auto group cursor-pointer">
              <div className="w-full h-full rounded-full bg-secondary/25 group-hover:bg-secondary/65 group-hover:shadow-[0_0_35px_hsl(var(--secondary)/0.8)] transition-all duration-300 group-hover:scale-150"></div>
            </div>
            
            {/* Light 5 - Under cabinet lighting */}
            <div className="absolute bottom-[40%] left-[40%] w-8 h-8 pointer-events-auto group cursor-pointer">
              <div className="w-full h-full rounded-full bg-primary/25 group-hover:bg-primary/65 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.8)] transition-all duration-300 group-hover:scale-150"></div>
            </div>
          </div>
          
          <div className="relative container mx-auto min-h-[100svh] grid place-items-center">
            <div className="max-w-3xl text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Smarter Living, Connected by Design.</h1>
              <p className="text-lg md:text-xl text-foreground/90">
                At Seculinx, we create intelligent, sustainable, and secure living experiences through seamless automation.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="hero" size="xl" onClick={scrollToProducts}>
                  Explore Our Solutions
                  <ArrowRight className="ml-1" />
                </Button>
                <a href="/brightsense">
                  <Button variant="soft" size="xl">Discover BrightSense</Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-surface py-20">
          <div className="container mx-auto space-y-12">
            <SectionHeader title="Innovation Meets Comfort." subtitle="Reimagining smart living with technology that adapts to you." />
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Seculinx is reimagining smart living. Our mission is to integrate cutting-edge technology into everyday life, creating a connected ecosystem that adapts to you. From intelligent lighting to advanced home security, we make your home safer, more efficient, and more intuitive.
              </p>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                <div className="card-gradient-border p-[1px]">
                  <div className="card-surface rounded-lg p-4 h-full">
                    <Sparkles className="icon-pulse text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Innovation</h4>
                    <p className="text-sm text-muted-foreground">We push the boundaries of smart technology.</p>
                  </div>
                </div>
                <div className="card-gradient-border p-[1px]">
                  <div className="card-surface rounded-lg p-4 h-full">
                    <Leaf className="icon-pulse text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Sustainability</h4>
                    <p className="text-sm text-muted-foreground">Energy-efficient designs for a greener tomorrow.</p>
                  </div>
                </div>
                <div className="card-gradient-border p-[1px]">
                  <div className="card-surface rounded-lg p-4 h-full">
                    <ShieldCheck className="icon-pulse text-primary mb-2" />
                    <h4 className="font-semibold mb-1">Security</h4>
                    <p className="text-sm text-muted-foreground">Your home, your data, always protected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20">
          <div className="container mx-auto space-y-12">
            <SectionHeader title="Product Ecosystem" subtitle="Explore our connected solutions" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* BrightSense */}
              <div className="card-gradient-border p-[1px] group">
                <Card className="card-surface rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'var(--gradient-emerald)' }} />
                    <div className="absolute inset-0 bg-animated-gradient animate-gradient-move opacity-20" />
                  </div>
                  <CardHeader>
                    <CardTitle>BrightSense</CardTitle>
                    <CardDescription>Launching Q4 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground flex-1">
                    Our flagship smart lighting system with AI-powered zone detection and adaptive brightness.
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <a href="/brightsense"><Button variant="hero" className="w-full">Learn More</Button></a>
                  </div>
                </Card>
              </div>

              {/* Smart Locks */}
              <div className="card-gradient-border p-[1px] group">
                <Card className="card-surface rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden grid place-items-center">
                    <Lock className="text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle>Smart Locks</CardTitle>
                    <CardDescription>Coming Soon</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Advanced biometric locks for next-level home security.
                  </CardContent>
                </Card>
              </div>

              {/* Home Sensors */}
              <div className="card-gradient-border p-[1px] group">
                <Card className="card-surface rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden grid place-items-center">
                    <Activity className="text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle>Home Sensors</CardTitle>
                    <CardDescription>Coming Soon</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Environmental and security sensors for complete awareness.
                  </CardContent>
                </Card>
              </div>

              {/* Surveillance */}
              <div className="card-gradient-border p-[1px] group">
                <Card className="card-surface rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative h-40 overflow-hidden grid place-items-center">
                    <Gauge className="text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle>Surveillance Systems</CardTitle>
                    <CardDescription>Coming Soon</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    AI-driven, privacy-focused home monitoring.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* BrightSense Highlight */}
        <section className="section-surface py-20">
          <div className="container mx-auto space-y-8">
            <SectionHeader title="BrightSense — Lighting That Thinks For You." subtitle="Launching Q4 2025" />
            <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
              With cutting-edge mmWave sensing, BrightSense understands your presence, activity, and preferences to create the perfect lighting experience.
            </p>
            <div className="text-center">
              <a href="/brightsense"><Button variant="hero" size="lg">Experience BrightSense</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials / Vision */}
        <section className="py-20">
          <div className="container mx-auto space-y-12">
            <SectionHeader title="Trusted Innovation." />
            <div className="max-w-3xl mx-auto text-center min-h-[120px]">
              <blockquote className="text-xl md:text-2xl font-medium transition-all animate-fade-in">
                “{quotes[quoteIndex].q}”
              </blockquote>
              <div className="mt-3 text-muted-foreground">— {quotes[quoteIndex].a}</div>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Seculinx envisions a future where technology serves you quietly, intelligently, and beautifully.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="section-surface pt-16 pb-10 mt-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-3">Seculinx</h4>
            <p className="text-muted-foreground max-w-md">Premium smart home solutions for a life that feels effortless.</p>
            <div className="flex gap-4 mt-4">
              <a 
                aria-label="Instagram" 
                className="icon-pulse text-foreground hover:text-primary transition-colors" 
                href="https://www.instagram.com/seculinx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                aria-label="LinkedIn" 
                className="icon-pulse text-foreground hover:text-primary transition-colors" 
                href="https://www.linkedin.com/company/seculinx/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a 
                aria-label="X (Twitter)" 
                className="icon-pulse text-foreground hover:text-primary transition-colors" 
                href="https://x.com/seculinx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Newsletter</h5>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll keep you posted."); }} className="flex gap-3 max-w-md">
              <input type="email" required placeholder="you@example.com" className="flex-1 h-11 rounded-md border px-4 bg-background" />
              <Button variant="hero">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="container mx-auto mt-10 text-sm text-muted-foreground">© {new Date().getFullYear()} Seculinx. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Index;
