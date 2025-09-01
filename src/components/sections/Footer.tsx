import { motion } from "framer-motion";
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">SignAI</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Transform your ideas into stunning visuals with SignAI's AI-driven signage platform. 
              Professional signs made simple, fast, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors group">
                <Twitter className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors group">
                <Linkedin className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors group">
                <Github className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 group-hover:text-brand-cyan transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Templates</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">API</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Support</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-background/80 text-sm">
            © {currentYear} SignAI by Epic Craftings. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/80 hover:text-background transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;