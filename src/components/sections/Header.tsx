import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SignAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-white/80 hover:text-white transition-colors">Showcase</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Reviews</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button variant="glass">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/20 py-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-white/80 hover:text-white transition-colors py-2">Features</a>
              <a href="#showcase" className="text-white/80 hover:text-white transition-colors py-2">Showcase</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors py-2">Pricing</a>
              <a href="#testimonials" className="text-white/80 hover:text-white transition-colors py-2">Reviews</a>
              <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                <Button variant="ghost" className="text-white hover:bg-white/10 justify-start">
                  Sign In
                </Button>
                <Button variant="glass" className="justify-start">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;