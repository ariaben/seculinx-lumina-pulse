import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="font-semibold tracking-tight text-lg">Seculinx</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a>
          <a href="/#products" className="opacity-80 hover:opacity-100 transition-opacity">Products</a>
          <a href="/brightsense" className="opacity-80 hover:opacity-100 transition-opacity">BrightSense</a>
          <a href="/invest" className="opacity-80 hover:opacity-100 transition-opacity">Invest</a>
          <a href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</a>
        </nav>
        <a href="/contact"><Button variant="hero" size="sm">Get Updates</Button></a>
      </div>
    </header>
  );
};

export default SiteHeader;
