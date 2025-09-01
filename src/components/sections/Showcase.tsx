import { motion } from "framer-motion";
import neonSign1 from "@/assets/neon-sign-1.jpg";
import ledDisplay from "@/assets/led-display.jpg";
import digitalBillboard from "@/assets/digital-billboard.jpg";
import retailSigns from "@/assets/retail-signs.jpg";

const showcaseItems = [
  {
    title: "Neon Signs",
    description: "Vibrant and eye-catching neon signage for restaurants, bars, and retail stores",
    image: neonSign1,
    category: "Neon"
  },
  {
    title: "LED Displays",
    description: "High-resolution LED displays for dynamic content and digital advertising",
    image: ledDisplay,
    category: "Digital"
  },
  {
    title: "Digital Billboards",
    description: "Large-scale outdoor advertising with stunning visual impact",
    image: digitalBillboard,
    category: "Outdoor"
  },
  {
    title: "Retail Signage",
    description: "Professional storefront signs that attract customers and build brand recognition",
    image: retailSigns,
    category: "Retail"
  }
];

const Showcase = () => {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-blue/20 to-brand-purple/20" />
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
            Showcase of
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Professional Signage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From vibrant neon signs to cutting-edge digital displays, see what's possible 
            with SignAI's advanced design platform.
          </p>
        </motion.div>

        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                    {item.category}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Interactive elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to create signage like this? Start designing today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <div className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer">
              Browse Templates
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;