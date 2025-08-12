import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import SiteHeader from "@/components/SiteHeader";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Please include a brief message (min 10 chars)")
});

type FormValues = z.infer<typeof schema>;

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" }
  });

  useEffect(() => {
    document.title = "Contact Seculinx | Smart Home Automation";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Get in touch with Seculinx for smart home solutions, partnerships, or media inquiries.");
    const link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    link.setAttribute('rel','canonical');
    link.setAttribute('href','/contact');
    if (!link.parentNode) document.head.appendChild(link);
  }, []);

  const onSubmit = (values: FormValues) => {
    console.log("Contact form submitted:", values);
    toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-animated-gradient animate-gradient-move">
      <SiteHeader />
      <header className="container mx-auto py-8">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">We’d love to hear from you. Whether you’re exploring solutions, media, or partnerships—let’s talk.</p>
      </header>

      <main className="container mx-auto pb-16">
        <section className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Start the Conversation</h2>
            <p className="text-muted-foreground">Share a bit about your needs and we’ll respond within 1–2 business days.</p>
            <div className="card-gradient-border rounded-lg p-[1px]">
              <div className="card-surface rounded-lg p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Alex Johnson" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Partnership inquiry" {...field} />
                          </FormControl>
                          <FormDescription>Optional</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea rows={6} placeholder="Tell us about your project, timeline, and goals." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button type="submit" variant="hero" size="lg" className="hover-scale">Send Message</Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <h2 className="text-2xl font-semibold">Other ways to connect</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li><span className="font-medium">Email:</span> hello@seculinx.com</li>
              <li><span className="font-medium">Press:</span> press@seculinx.com</li>
              <li><span className="font-medium">Partnerships:</span> partners@seculinx.com</li>
            </ul>
          </aside>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Seculinx",
        url: "/contact",
        about: { "@type": "Organization", name: "Seculinx" }
      }) }} />
    </div>
  );
};

export default Contact;
