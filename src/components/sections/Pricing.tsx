import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { Check, Crown, Zap, Building } from "lucide-react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses and entrepreneurs",
    features: [
      "5 AI-generated designs per month",
      "Basic templates library",
      "Standard resolution exports",
      "Email support",
      "Cloud storage (2GB)"
    ],
    buttonText: "Get Started",
    featured: false
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$79",
    period: "/month", 
    description: "Ideal for growing businesses and agencies",
    features: [
      "Unlimited AI-generated designs",
      "Premium templates library",
      "High-resolution exports",
      "Priority support",
      "Cloud storage (50GB)",
      "Real-time collaboration",
      "Advanced customization tools",
      "Brand kit management"
    ],
    buttonText: "Choose Pro",
    featured: true
  },
  {
    name: "Enterprise",
    icon: Building,
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Custom AI model training",
      "White-label solution",
      "Dedicated account manager",
      "Unlimited cloud storage",
      "API access",
      "Custom integrations",
      "SLA guarantee"
    ],
    buttonText: "Contact Sales",
    featured: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-card rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-cta rounded-full blur-3xl" />
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
            Choose Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free, scale as you grow. All plans include our core AI-powered 
            signage generation with different levels of features and support.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${plan.featured ? 'md:-mt-4 md:scale-105' : ''}`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-card text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative p-8 bg-card rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                plan.featured 
                  ? 'border-primary/50 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30' 
                  : 'border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10'
              }`}>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl mb-6 p-2.5 ${
                  plan.featured 
                    ? 'bg-gradient-card' 
                    : 'bg-gradient-primary'
                }`}>
                  <plan.icon className="w-full h-full text-white" />
                </div>

                {/* Plan name and description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-card-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.featured ? "pricing-featured" : "pricing"}
                  size="lg"
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>

                {/* Background gradient */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-card group-hover:opacity-5' 
                    : 'bg-gradient-primary group-hover:opacity-5'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6">
              All plans include a 14-day free trial. No credit card required. 
              Cancel anytime with just one click.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>30-day money back</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;