import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-bold text-xl">
                NMC
              </div>
              <span className="font-bold gradient-text-primary">
                Nepali Minecraft Community
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting Nepali Minecraft players worldwide. Build, play, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/events" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Events
              </Link>
              <Link to="/rules" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Community Rules
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://discord.gg/nmc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/nmc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://youtube.com/@nmc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Nepali Minecraft Community (NMC). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
