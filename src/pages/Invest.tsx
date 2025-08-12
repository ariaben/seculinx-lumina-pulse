import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Shield, Sparkles, Rocket, Leaf } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";

const useCountUp = (end: number, durationMs = 1400) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const step = (ts: number) => {
            const p = Math.min(1, (ts - start) / durationMs);
            setValue(Math.floor(end * (1 - Math.cos(Math.PI * p)) / 2));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, durationMs]);

  return { ref, value } as const;
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="max-w-3xl mx-auto text-center animate-fade-in">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
  </div>
);

const Stat = ({ label, end, suffix = "" }: { label: string; end: number; suffix?: string }) => {
  const { ref, value } = useCountUp(end);
  return (
    <div ref={ref} className="card-gradient-border rounded-lg p-[1px]">
      <div className="card-surface rounded-lg p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold">{value.toLocaleString()}{suffix}</div>
        <div className="text-sm text-muted-foreground mt-1">{label}</div>
      </div>
    </div>
  );
};

const Invest = () => {
  useEffect(() => {
    document.title = "Invest in Seculinx | Future of Smart Living";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Explore investment opportunities with Seculinx — visionary smart home solutions with sustainable growth.");
    const link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel','canonical');
    link.setAttribute('href','/invest');
    if (!link.parentNode) document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Hero */}
      <section className="relative min-h-[80svh] overflow-hidden bg-animated-gradient animate-gradient-move">
        <div className="relative container mx-auto grid place-items-center py-24">
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Invest in the Future of Smart Living</h1>
            <p className="text-lg md:text-xl text-muted-foreground">Seculinx is redefining the connected home experience with intelligent, sustainable, and secure solutions.</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/contact"><Button variant="hero" size="xl" className="hover-scale">Start the Conversation</Button></a>
              <a href="/investor-deck.pdf" download>
                <Button variant="soft" size="xl" className="hover-scale">Download Investor Deck</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Vision */}
        <section className="section-surface py-20">
          <div className="container mx-auto space-y-8">
            <SectionHeader title="Our Vision & Why We Exist" />
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our mission is to bridge innovation and practicality in smart home technology. We design products that feel effortless: innovation, sustainability, customer-centric solutions, and seamless integration into daily life. Our long-term ambition is clear — to lead smart living ecosystems worldwide.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {["Innovation", "Sustainability", "Customer-first", "Seamless Integration"].map((item) => (
                  <li key={item} className="flex items-center gap-2"><CheckCircle2 className="text-primary" /> <span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20">
          <div className="container mx-auto space-y-12">
            <SectionHeader title="Market Opportunity" subtitle="A rapidly expanding landscape driven by IoT and AI" />
            <div className="grid md:grid-cols-4 gap-6">
              <Stat label="Smart home market by 2030" end={200} suffix="B+" />
              <Stat label="Projected CAGR" end={14} suffix="%" />
              <Stat label="IoT-enabled households by 2030" end={1000} suffix="M" />
              <Stat label="Avg. energy savings" end={30} suffix="%" />
            </div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="section-surface py-20">
          <div className="container mx-auto space-y-10">
            <SectionHeader title="Our Competitive Advantage" />
            <div className="grid md:grid-cols-2 gap-10">
              <ul className="space-y-3">
                {[
                  "Proprietary designs and mmWave-driven zone-based lighting",
                  "Intuitive control interfaces with AI personalization",
                  "Privacy-first architecture and sustainability commitment",
                  "Seamless ecosystem integration across devices",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3"><Shield className="text-primary mt-1" /><span>{t}</span></li>
                ))}
              </ul>
              <div className="card-gradient-border rounded-lg p-[1px]">
                <div className="card-surface rounded-lg p-6">
                  <h4 className="font-semibold mb-3">Seculinx vs Typical Offerings</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="opacity-80">Zone detection</div><div className="font-medium">Advanced, room-level</div>
                    <div className="opacity-80">Energy optimization</div><div className="font-medium">AI-driven, context aware</div>
                    <div className="opacity-80">Privacy</div><div className="font-medium">Privacy-first, local processing</div>
                    <div className="opacity-80">Integration</div><div className="font-medium">Ecosystem-native</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20">
          <div className="container mx-auto space-y-10">
            <SectionHeader title="Current & Upcoming Products" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-gradient-border p-[1px] group"><div className="card-surface rounded-lg p-6 h-full"><h4 className="font-semibold">BrightSense</h4><div className="text-sm text-muted-foreground mb-2">Launching Q4 2025</div><p className="text-sm">Intelligent, zone-based lighting that adapts to presence and activity.</p><div className="pt-4"><a href="/brightsense"><Button variant="hero" className="w-full">Learn More</Button></a></div></div></div>
              <div className="card-gradient-border p-[1px] group"><div className="card-surface rounded-lg p-6 h-full"><h4 className="font-semibold">Smart Locks</h4><div className="text-sm text-muted-foreground mb-2">Coming Soon</div><p className="text-sm">Advanced biometric security with seamless entry.</p></div></div>
              <div className="card-gradient-border p-[1px] group"><div className="card-surface rounded-lg p-6 h-full"><h4 className="font-semibold">Energy Management</h4><div className="text-sm text-muted-foreground mb-2">Coming Soon</div><p className="text-sm">Optimize home energy usage without compromise.</p></div></div>
            </div>
          </div>
        </section>

        {/* Growth Plan */}
        <section className="section-surface py-20">
          <div className="container mx-auto space-y-10">
            <SectionHeader title="Our Growth Plan" />
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <ul className="space-y-3 text-base">
                <li className="flex gap-2 items-start"><Rocket className="text-primary mt-1" /><span>Short-term: BrightSense launch, early adopter programs, and strategic pilots.</span></li>
                <li className="flex gap-2 items-start"><TrendingUp className="text-primary mt-1" /><span>Mid-term: Expand product lines and partnerships across key markets.</span></li>
                <li className="flex gap-2 items-start"><Leaf className="text-primary mt-1" /><span>Long-term: Sustainable, privacy-first ecosystem leadership globally.</span></li>
              </ul>
              <div className="relative">
                <ol className="relative border-l pl-6 space-y-6">
                  {["Q4 2025 — BrightSense Launch", "2026 — Ecosystem Expansion", "2027+ — Global Scale"].map((m) => (
                    <li key={m} className="relative">
                      <span className="absolute -left-[9px] top-2 h-3 w-3 rounded-full bg-primary shadow-glow" />
                      <div className="card-gradient-border rounded-md p-[1px]"><div className="card-surface rounded-md p-4">{m}</div></div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20">
          <div className="container mx-auto space-y-8">
            <SectionHeader title="Why Partner with Us" />
            <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {[
                "Visionary brand and early-mover advantage",
                "Scalable business model with strong unit economics",
                "Deep product focus and commitment to innovation",
                "Experienced leadership and strategic advisory network",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3"><CheckCircle2 className="text-primary mt-1" /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* CTA Footer */}
      <section className="section-surface py-16">
        <div className="container mx-auto text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Let’s Shape the Future of Smart Living Together</h3>
          <div className="flex items-center justify-center gap-4">
            <a href="/contact"><Button variant="hero" size="lg" className="hover-scale">Get in Touch</Button></a>
            <a href="/investor-deck.pdf" download><Button variant="soft" size="lg" className="hover-scale">Investor Deck</Button></a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Invest in Seculinx",
        url: "/invest",
        about: { "@type": "Organization", name: "Seculinx" }
      }) }} />
    </div>
  );
};

export default Invest;
