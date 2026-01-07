import { Check } from "lucide-react";

const features = [
  "Award-winning design team",
  "Agile development methodology",
  "24/7 dedicated support",
  "Transparent communication",
  "On-time project delivery",
  "Competitive pricing",
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              About Nexus
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              We Craft Digital Experiences That Matter
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded in 2010, Nexus has grown from a small design studio to a
              full-service digital agency. We believe in the power of thoughtful
              design and clean code to transform businesses and create lasting
              impact in the digital landscape.
            </p>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our team of 50+ experts brings together diverse skills in design,
              development, and strategy to deliver solutions that exceed
              expectations.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover-lift">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-muted-foreground">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover-lift">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover-lift">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div className="bg-gradient-card border border-border rounded-2xl p-6 hover-lift">
                  <div className="font-display text-4xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-muted-foreground">Industry Awards</div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
