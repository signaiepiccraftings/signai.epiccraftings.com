import { motion } from "framer-motion";
import { Wand2, Eye, Palette, Cloud, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI Sign Generator",
    description: "Transform your ideas into professional signage with AI-powered design suggestions and automated layouts.",
    gradient: "from-brand-blue to-brand-purple"
  },
  {
    icon: Eye,
    title: "Real-Time Preview",
    description: "See your designs come to life instantly with our advanced real-time preview and 3D visualization.",
    gradient: "from-brand-purple to-brand-pink"
  },
  {
    icon: Palette,
    title: "Easy Customization",
    description: "Intuitive drag-and-drop interface with unlimited customization options for colors, fonts, and layouts.",
    gradient: "from-brand-pink to-brand-cyan"
  },
  {
    icon: Cloud,
    title: "Cloud-Based Storage",
    description: "Access your designs anywhere with secure cloud storage and seamless synchronization across devices.",
    gradient: "from-brand-cyan to-brand-blue"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate professional-quality signs in seconds, not hours. Optimized for speed and performance.",
    gradient: "from-brand-blue to-brand-cyan"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encrypted data, SOC 2 compliance, and advanced user permissions.",
    gradient: "from-brand-purple to-brand-blue"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-cta rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Modern Signage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, customize, and deploy professional signage 
            with the power of artificial intelligence.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the future of signage design?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer">
              Start Your Free Trial
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;