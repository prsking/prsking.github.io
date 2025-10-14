import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const builds = [
    {
      image: gallery1,
      title: "Epic Castle Build",
      creator: "BuildMaster",
      description: "A magnificent medieval castle with intricate details",
    },
    {
      image: gallery2,
      title: "Fantasy Village",
      creator: "CreativeNinja",
      description: "Colorful village with unique architectural style",
    },
    {
      image: gallery3,
      title: "Modern City",
      creator: "CityBuilder",
      description: "Futuristic cityscape with advanced redstone",
    },
    {
      image: gallery4,
      title: "Mountain Base",
      creator: "SurvivalPro",
      description: "Cozy survival base carved into mountains",
    },
    {
      image: gallery1,
      title: "Community Hub",
      creator: "NMC Team",
      description: "Central gathering place for events",
    },
    {
      image: gallery2,
      title: "Pixel Art",
      creator: "ArtistMC",
      description: "Stunning large-scale pixel art creation",
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
              Community <span className="gradient-text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore amazing builds and creations from our talented community members
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build, index) => (
              <div key={index} className="glass-card overflow-hidden hover-scale group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={build.image}
                    alt={build.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{build.title}</h3>
                      <p className="text-sm text-muted-foreground">{build.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{build.title}</h3>
                  <div className="text-sm text-primary">by {build.creator}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="glass-card p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Community Builds</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Active Builders</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Collaborative Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Submit CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center space-y-6 relative overflow-hidden">
            <h2 className="text-4xl font-bold">Share Your Creations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built something amazing? Share it with the community and get featured in our gallery!
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://discord.gg/nmc" target="_blank" rel="noopener noreferrer">
                Submit Your Build
              </a>
            </Button>
            
            {/* Decorative element */}
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-secondary/20 rounded-full blur-[100px]" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
