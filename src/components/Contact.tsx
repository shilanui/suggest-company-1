import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Fill
              out the form or reach out directly using the contact information
              below.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium">
                    hello@nexus.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="text-foreground font-medium">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Office</div>
                  <div className="text-foreground font-medium">
                    123 Innovation Street, San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-card">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-foreground font-medium">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground font-medium">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-medium">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-medium">
                  Company
                </label>
                <Input
                  placeholder="Your Company"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground font-medium">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
