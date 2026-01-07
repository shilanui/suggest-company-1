import { Lightbulb, Palette, Code, Rocket, Shield, BarChart } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Strategy & Consulting",
    description: "We analyze your business goals and craft tailored strategies that drive measurable growth and innovation.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that captivate users and deliver seamless experiences across all platforms.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Cutting-edge web and mobile applications built with modern technologies for performance and scalability.",
  },
  {
    icon: Rocket,
    title: "Product Launch",
    description: "From MVP to market-ready products, we guide you through every step of the launch process.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security solutions ensuring your data and systems are protected at all times.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Data-driven insights that help you understand your users and optimize business performance.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Solutions That Drive Results
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital services designed to transform your business and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover-lift cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
