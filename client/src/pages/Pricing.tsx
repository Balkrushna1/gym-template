import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [enrollmentData, setEnrollmentData] = useState({
    name: "", email: "", phone: "", startDate: "", paymentMethod: "credit-card"
  });
  
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      features: ["Gym Access 24/7", "Locker Room Access", "Free Wi-Fi", "1 Guest Pass/mo"],
      featured: false,
      description: "Perfect for self-motivated individuals who want 24/7 gym access",
      commitment: "No contract - cancel anytime",
      includedClasses: "None",
      personalTraining: "Not included"
    },
    {
      name: "Elite",
      price: "$89",
      period: "/month",
      features: ["All Basic Features", "Unlimited Group Classes", "Sauna & Steam Room", "Nutritional Guide", "Free Merch Pack"],
      featured: true,
      description: "Our most popular plan with unlimited classes and premium amenities",
      commitment: "No contract - cancel anytime",
      includedClasses: "Unlimited group classes",
      personalTraining: "20% discount on PT sessions"
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      features: ["All Elite Features", "2 Personal Training Sessions", "Monthly Body Scan", "Priority Support", "Smoothie Bar Discounts"],
      featured: false,
      description: "For serious athletes who want the complete fitness experience",
      commitment: "No contract - cancel anytime",
      includedClasses: "Unlimited group classes + priority booking",
      personalTraining: "2 sessions/month included + 30% discount on additional"
    }
  ];

  const handleEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome to IronPulse! Your ${plans[selectedPlan!].name} membership starts on ${enrollmentData.startDate}. We'll send a confirmation email to ${enrollmentData.email}.`);
    setSelectedPlan(null);
    setEnrollmentData({ name: "", email: "", phone: "", startDate: "", paymentMethod: "credit-card" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
              Invest In <span className="text-primary">Yourself</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the membership plan that fits your goals and lifestyle. No hidden fees, cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  plan.featured 
                    ? "bg-secondary border-primary shadow-2xl scale-105 z-10" 
                    : "bg-background border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase py-1 px-4 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-muted-foreground uppercase tracking-wider mb-4">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-display font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => setSelectedPlan(index)}
                  className={`w-full h-12 rounded-full font-bold text-base ${
                    plan.featured ? "bg-primary text-primary-foreground hover:bg-primary/90 neon-shadow" : "bg-white/10 hover:bg-white/20 text-white border-none"
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <Dialog open={selectedPlan !== null} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPlan !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-display font-bold">
                  Subscribe to {plans[selectedPlan].name} Plan
                </DialogTitle>
                <p className="text-muted-foreground">{plans[selectedPlan].description}</p>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Plan Summary */}
                <div className="bg-secondary/50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Plan:</span>
                    <span className="text-primary font-bold">{plans[selectedPlan].name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Price:</span>
                    <span className="text-2xl font-display font-black">
                      {plans[selectedPlan].price}<span className="text-sm text-muted-foreground">{plans[selectedPlan].period}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Group Classes:</span>
                    <span className="text-muted-foreground">{plans[selectedPlan].includedClasses}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Personal Training:</span>
                    <span className="text-muted-foreground">{plans[selectedPlan].personalTraining}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">✓ {plans[selectedPlan].commitment}</p>
                  </div>
                </div>

                {/* Enrollment Form */}
                <form onSubmit={handleEnrollment} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <Input 
                        required
                        value={enrollmentData.name}
                        onChange={(e) => setEnrollmentData({...enrollmentData, name: e.target.value})}
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <Input 
                        required
                        type="email"
                        value={enrollmentData.email}
                        onChange={(e) => setEnrollmentData({...enrollmentData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone *</label>
                      <Input 
                        required
                        type="tel"
                        value={enrollmentData.phone}
                        onChange={(e) => setEnrollmentData({...enrollmentData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Start Date *</label>
                      <Input 
                        required
                        type="date"
                        value={enrollmentData.startDate}
                        onChange={(e) => setEnrollmentData({...enrollmentData, startDate: e.target.value})}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Payment Method</label>
                    <Select 
                      value={enrollmentData.paymentMethod}
                      onValueChange={(value) => setEnrollmentData({...enrollmentData, paymentMethod: value})}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="debit-card">Debit Card</SelectItem>
                        <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                        <SelectItem value="paypal">PayPal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setSelectedPlan(null)}
                      className="flex-1 h-12"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 h-12 neon-shadow">
                      Complete Enrollment
                    </Button>
                  </div>
                </form>

                <p className="text-xs text-center text-muted-foreground">
                  By enrolling, you agree to our Terms of Service and Privacy Policy. Your first payment will be processed on your start date.
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6 max-w-4xl">
          <SectionHeading title="Frequently Asked Questions" subtitle="Membership FAQs" />
          
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my membership anytime?",
                a: "Yes! All our memberships are month-to-month with no long-term contracts. You can cancel anytime with a 30-day notice."
              },
              {
                q: "Is there a joining fee?",
                a: "No joining fees! The price you see is what you pay. We occasionally run promotions with discounted first months."
              },
              {
                q: "Can I freeze my membership?",
                a: "Yes, you can freeze your membership for up to 3 months per year for medical reasons or travel. A small maintenance fee may apply."
              },
              {
                q: "Do you offer student or military discounts?",
                a: "Yes! We offer 15% discounts for students, military personnel, first responders, and healthcare workers with valid ID."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-background/50 rounded-lg p-6 border border-border">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
