import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import eventBanner from "@/assets/event-banner.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Summer Building Competition",
      date: "December 15, 2025",
      time: "5:00 PM NPT",
      participants: "Open to all",
      description: "Showcase your creativity in our themed building competition. This month's theme: Futuristic Cities!",
      status: "Upcoming",
    },
    {
      title: "PvP Tournament - Season 3",
      date: "December 22, 2025",
      time: "6:00 PM NPT",
      participants: "32 slots",
      description: "Prove your combat skills in our quarterly PvP tournament. Prizes for top 3 players!",
      status: "Registration Open",
    },
    {
      title: "Community Survival Challenge",
      date: "December 30, 2025",
      time: "4:00 PM NPT",
      participants: "Teams of 4",
      description: "Work together to survive and thrive in a challenging custom world.",
      status: "Upcoming",
    },
  ];

  const pastEvents = [
    {
      title: "Halloween Build Contest",
      date: "October 31, 2024",
      winner: "BuildMaster123",
      description: "Amazing spooky builds were created!",
    },
    {
      title: "Speed Building Championship",
      date: "September 15, 2024",
      winner: "QuickBlocks",
      description: "Intense 30-minute building challenges.",
    },
    {
      title: "Redstone Innovation Fair",
      date: "August 20, 2024",
      winner: "RedstoneGenius",
      description: "Showcasing incredible contraptions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Community <span className="gradient-text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join exciting tournaments, competitions, and community activities
            </p>
          </div>
        </section>

        {/* Featured Event */}
        <section className="container mx-auto px-4 mb-20">
          <div 
            className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 36, 0.9), rgba(15, 23, 36, 0.95)), url(${eventBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Featured Event
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Summer Building Competition</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Our biggest building event of the year! Theme: Futuristic Cities. Show us your vision of tomorrow's world.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>December 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>5:00 PM NPT</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Amazing Prizes!</span>
                </div>
              </div>
              <Button variant="hero" asChild>
                <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="glass-card p-6 hover-scale">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                    {event.status}
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold mb-8">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <div className="text-sm text-muted-foreground mb-3">{event.date}</div>
                <p className="text-muted-foreground mb-3">{event.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold">Winner: {event.winner}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Host Event CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold">Want to Host an Event?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an idea for a community event? We'd love to hear it! Contact us on Discord.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                Contact Us on Discord
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
