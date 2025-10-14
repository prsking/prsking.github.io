import { Button } from "@/components/ui/button";
import { Shield, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Rules = () => {
  const rules = [
    {
      title: "Be Respectful",
      description: "Treat all community members with respect. No harassment, hate speech, discrimination, or personal attacks will be tolerated.",
    },
    {
      title: "No Griefing or Cheating",
      description: "Do not grief other players' builds. Using hacks, exploits, or cheats on community servers is strictly prohibited.",
    },
    {
      title: "Keep Chat Clean",
      description: "Avoid excessive profanity, spam, or NSFW content. Keep conversations appropriate for all age groups.",
    },
    {
      title: "No Self-Promotion or Spam",
      description: "Don't spam channels with repetitive messages or advertise your own servers/content without permission.",
    },
    {
      title: "Follow Channel Guidelines",
      description: "Use channels for their intended purposes. Read channel descriptions and follow specific guidelines.",
    },
    {
      title: "Respect Staff Decisions",
      description: "Listen to moderators and admins. If you disagree with a decision, discuss it respectfully in private.",
    },
    {
      title: "Use Appropriate Names",
      description: "Keep your username and nickname appropriate. No offensive or impersonating names.",
    },
    {
      title: "English & Nepali Only",
      description: "Communicate in English or Nepali to keep conversations accessible to all members.",
    },
    {
      title: "No Drama or Arguments",
      description: "Keep personal disputes out of public channels. Resolve conflicts privately or with staff help.",
    },
    {
      title: "Report Issues",
      description: "If you see rule violations or concerning behavior, report it to staff instead of engaging.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Community <span className="gradient-text-primary">Rules</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Guidelines to ensure a safe, respectful, and enjoyable experience for everyone
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="container mx-auto px-4 mb-12">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-3">Important Note</h2>
                <p className="text-muted-foreground">
                  These rules apply to all NMC community spaces including Discord, Minecraft servers, and social media. By participating in our community, you agree to follow these guidelines. Violations may result in warnings, temporary mutes, kicks, or permanent bans depending on severity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules List */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="glass-card p-6 hover-scale">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
                    <p className="text-muted-foreground">{rule.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Consequences Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 gradient-text-primary">Rule Violations & Consequences</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Minor Violations</h3>
                <p>First-time minor infractions (mild spam, off-topic chat, etc.) will typically result in a verbal warning from staff.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Moderate Violations</h3>
                <p>Repeated minor violations or moderate infractions (excessive profanity, disrespect, etc.) may result in temporary mutes or kicks.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Severe Violations</h3>
                <p>Serious infractions (harassment, hate speech, griefing, cheating, etc.) will result in immediate removal and possible permanent ban.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Appeals</h3>
                <p>If you believe you were punished unfairly, you may appeal to the admin team through Discord DM. Remain respectful during the appeal process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to Join?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              By following these simple guidelines, you'll help us maintain a positive and welcoming community for everyone.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                Join Our Community
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rules;
