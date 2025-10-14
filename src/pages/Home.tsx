import { Button } from "@/components/ui/button";
import { Users, Calendar, Trophy, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const stats = [
    { icon: Users, label: "Active Members", value: "500+" },
    { icon: Calendar, label: "Events Hosted", value: "50+" },
    { icon: Trophy, label: "Tournaments", value: "15+" },
    { icon: MessageCircle, label: "Daily Messages", value: "1000+" },
  ];

  const features = [
    {
      title: "Build Together",
      description: "Collaborate on massive builds and creative projects with talented builders from Nepal.",
    },
    {
      title: "Regular Events",
      description: "Participate in tournaments, building competitions, survival challenges, and more.",
    },
    {
      title: "Bilingual Community",
      description: "Communicate in both Nepali and English. Everyone is welcome in our inclusive community.",
    },
    {
      title: "Active Moderation",
      description: "Friendly and responsive staff team ensuring a safe and enjoyable experience for all.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 36, 0.8), rgba(15, 23, 36, 0.95)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Join the <span className="gradient-text-primary">Nepali Minecraft</span> Community
            </h1>
            <p className="text-xl text-muted-foreground">
              Connect with Nepali Minecraft players worldwide. Build, compete, and create unforgettable moments together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                  Join Our Discord
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">Learn More</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-16 glass-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-3xl font-bold gradient-text-primary">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Join NMC?</h2>
            <p className="text-muted-foreground text-lg">
              Experience the best Minecraft community for Nepali players
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 hover-scale">
                <h3 className="text-xl font-semibold mb-3 gradient-text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center space-y-6 relative overflow-hidden">
            <h2 className="text-4xl font-bold">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Become part of Nepal's largest Minecraft community. Connect, build, and play with hundreds of players.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                Join Discord Now
              </a>
            </Button>
            
            {/* Decorative element */}
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
