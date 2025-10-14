import { Button } from "@/components/ui/button";
import { Heart, Globe, Users, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusive Community",
      description: "We welcome all Nepali Minecraft players regardless of skill level or experience.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting Nepali players from around the world in one unified community.",
    },
    {
      icon: Users,
      title: "Active Engagement",
      description: "Regular events, tournaments, and community activities to keep everyone engaged.",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Dedicated moderation team ensuring respectful and positive interactions.",
    },
  ];

  const team = [
    { name: "Admin Team", role: "Community Leadership", description: "Managing overall community direction and growth" },
    { name: "Moderators", role: "Server Moderation", description: "Ensuring rules are followed and helping members" },
    { name: "Event Coordinators", role: "Events & Activities", description: "Planning and hosting community events" },
    { name: "Build Team", role: "Creative Projects", description: "Leading collaborative building projects" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="gradient-text-primary">NMC</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the largest and most vibrant Nepali Minecraft community
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center gradient-text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground text-center mb-6">
              The Nepali Minecraft Community (NMC) was created to bring together Minecraft players from Nepal and the Nepali diaspora worldwide. Our goal is to provide a welcoming space where players can connect, collaborate, and create amazing experiences together.
            </p>
            <p className="text-lg text-muted-foreground text-center">
              Whether you're a builder, redstone engineer, PvP enthusiast, or just love exploring, you'll find your place in NMC. We celebrate Nepali culture while embracing players of all backgrounds.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-6 hover-scale">
                <value.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our dedicated staff work tirelessly to create the best experience for all members
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text-primary">{member.name}</h3>
                <div className="text-sm text-secondary mb-3">{member.role}</div>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Journey</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                NMC started as a small Discord server with a handful of friends who shared a passion for Minecraft. We wanted to create a space where Nepali players could communicate in their native language while also practicing English.
              </p>
              <p>
                Over time, word spread and more players joined. We began hosting events, building collaborative projects, and forming lasting friendships. Today, NMC has grown into a thriving community with hundreds of active members.
              </p>
              <p>
                We're proud of how far we've come, but we're even more excited about the future. Join us and be part of our ongoing story!
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Join the Community Today</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience what makes NMC special. Connect with fellow Nepali players now.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                Join Our Discord
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
