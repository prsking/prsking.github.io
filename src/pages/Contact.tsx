import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    alert("Thank you for your message! We'll get back to you soon on Discord.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Get in <span className="gradient-text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Reach out to us anytime.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                </div>
                
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Note: This form is for inquiries. For faster responses, message us on Discord!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Discord Card */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Discord Community</h3>
                    <p className="text-muted-foreground mb-4">
                      Join our Discord server for instant support and to connect with the community.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                        Join Discord
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground mb-2">
                      For official inquiries and partnerships
                    </p>
                    <a href="mailto:contact@nmc.com" className="text-primary hover:underline">
                      contact@nmc.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Connecting Nepali Minecraft players worldwide, from Kathmandu to every corner of the globe.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://discord.gg/nmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Discord"
                  >
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://instagram.com/nmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="https://youtube.com/@nmc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
