import { motion, useInView } from "framer-motion";
import { 
  Dumbbell, 
  Users, 
  Clock, 
  Trophy, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ChevronDown,
  Calendar,
  Star,
  TrendingUp,
  Camera,
  BookOpen,
  MessageCircle,
  X as CloseIcon,
  Calculator,
  Zap,
  Award,
  Heart,
  Target
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// --- ANIMATED COUNTER HOOK ---
const useAnimatedCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, inView]);

  return { count, ref };
};

// --- HERO SECTION ---
const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* athletic man lifting weights dark gym */}
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider mb-6 backdrop-blur-sm">
            WELCOME TO IRONPULSE
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white mb-6 leading-tight tracking-tight">
            FORGE YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">LEGACY</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop wishing. Start doing. Join the most elite training facility designed to push your limits and transform your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="pricing" smooth={true} offset={-100} duration={800}>
              <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full neon-shadow hover:scale-105 transition-transform">
                Start Free Trial
              </Button>
            </Link>
            <Link to="programs" smooth={true} offset={-100} duration={800}>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold rounded-full border-2 hover:bg-white/10 hover:text-white transition-colors">
                View Programs
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <Link to="about" smooth={true} offset={-100} duration={800}>
          <ChevronDown className="h-10 w-10 text-muted-foreground hover:text-primary transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
};

// --- ABOUT SECTION ---
const About = () => {
  const stats = [
    { value: "5000+", label: "Happy Members", icon: Users },
    { value: "24/7", label: "Gym Access", icon: Clock },
    { value: "50+", label: "Expert Trainers", icon: Trophy },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-20 blur-xl" />
              {/* woman doing crossfit ropes */}
              <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
                alt="About IronPulse" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl max-w-xs hidden md:block">
                <p className="font-display font-bold text-xl mb-1">"Best gym in the city!"</p>
                <div className="flex gap-1 text-primary">★★★★★</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading title="More Than Just A Gym" subtitle="Who We Are" alignment="left" />
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At IronPulse, we believe that fitness is not a hobby, but a way of life. We founded our gym to be the second home for all of our customers. Whether you exercise every day or you’ve never stepped into a gym before, IronPulse can help shape the new you.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We want to be your next workout partner. Call us today! When you join us, you’re not just joining a gym—you’re joining a supportive community of like-minded people who are here to give you the encouragement you need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <stat.icon className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <h4 className="text-4xl font-display font-black text-foreground">{stat.value}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- PROGRAMS SECTION ---
const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  
  const programs = [
    {
      title: "Strength Training",
      description: "Build raw power and muscle mass with our dedicated free-weight zones and expert coaching.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
      fullDescription: "Our strength training program is designed for all levels, from beginners learning proper form to advanced lifters pushing new PRs. You'll work with state-of-the-art equipment including Olympic platforms, power racks, and a full range of free weights.",
      benefits: ["Increase muscle mass", "Boost metabolism", "Improve bone density", "Build functional strength", "Enhance athletic performance"],
      schedule: "Mon/Wed/Fri: 6 AM - 9 PM | Tue/Thu: 6 AM - 8 PM",
      duration: "60-90 minutes per session",
      level: "All Levels",
      trainer: "Marcus Johnson - 15 years experience",
      price: "Included with membership or $20/drop-in"
    },
    {
      title: "HIIT Cardio",
      description: "Torch calories and boost endurance in our high-energy interval training sessions.",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop",
      fullDescription: "High-Intensity Interval Training that alternates between intense bursts of activity and fixed periods of less-intense activity. Burn fat, build endurance, and see results fast in our climate-controlled HIIT studio.",
      benefits: ["Burn up to 500 calories in 30 mins", "Increase cardiovascular fitness", "Boost metabolism for 24 hours", "Time-efficient workouts", "No equipment needed"],
      schedule: "Daily classes: 6 AM, 12 PM, 5 PM, 7 PM",
      duration: "30-45 minutes",
      level: "Beginner to Advanced",
      trainer: "Emily Davis - HIIT Specialist",
      price: "Included with Elite & Pro memberships"
    },
    {
      title: "Yoga & Mobility",
      description: "Improve flexibility, balance, and mental focus with our calming yet challenging yoga classes.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop",
      fullDescription: "From gentle flow to power yoga, our classes help you build strength, flexibility, and mental clarity. Practice in our serene, naturally-lit yoga studio with experienced instructors guiding you through each pose.",
      benefits: ["Improve flexibility & balance", "Reduce stress & anxiety", "Build core strength", "Enhance mind-body connection", "Prevent injuries"],
      schedule: "Daily classes: 7 AM, 9 AM, 6 PM, 8 PM",
      duration: "60 minutes",
      level: "All Levels",
      trainer: "Sarah Chen - 500hr RYT Certified",
      price: "Included with all memberships"
    },
    {
      title: "CrossFit",
      description: "Functional fitness that prepares you for anything life throws your way.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      fullDescription: "Constantly varied functional movements performed at high intensity. Our CrossFit program builds strength, conditioning, and mental toughness through challenging WODs (Workout of the Day) scaled to your ability.",
      benefits: ["Total body conditioning", "Functional fitness for daily life", "Strong community support", "Scalable to any level", "Competition opportunities"],
      schedule: "Mon-Sat: 5 AM, 6:30 AM, 12 PM, 5 PM, 6:30 PM",
      duration: "60 minutes",
      level: "Scaled for all levels",
      trainer: "Alex Rivera & Team",
      price: "Included with Elite & Pro memberships"
    },
    {
      title: "Personal Training",
      description: "1-on-1 guidance tailored to your specific goals, injuries, and lifestyle.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      fullDescription: "Get personalized attention and a customized workout plan designed specifically for your goals. Whether you're training for a competition, recovering from injury, or just getting started, our certified trainers will guide you every step of the way.",
      benefits: ["Customized workout plans", "Proper form & technique", "Goal-specific programming", "Accountability & motivation", "Injury prevention & recovery"],
      schedule: "By appointment - 7 days a week",
      duration: "30, 45, or 60-minute sessions",
      level: "All Levels",
      trainer: "All certified trainers available",
      price: "$60-$100 per session (packages available)"
    },
    {
      title: "Nutrition Coaching",
      description: "Fuel your body right with personalized meal plans and nutritional advice.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
      fullDescription: "Nutrition is 80% of your results. Work with our certified nutritionists to create a sustainable eating plan that fits your lifestyle, preferences, and fitness goals. Includes macro tracking, meal planning, and ongoing support.",
      benefits: ["Custom meal plans", "Macro & calorie guidance", "Supplement recommendations", "Weekly check-ins", "Recipe database access"],
      schedule: "Initial consultation + weekly check-ins",
      duration: "60-min consultation + 15-min weekly",
      level: "All Levels",
      trainer: "Certified Nutritionists on staff",
      price: "$150/month or included in Pro membership"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Choose Your Path" subtitle="Our Programs" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProgram(index)}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
            >
              <div className="absolute inset-0">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{program.title}</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {program.description}
                </p>
                <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-sm font-semibold">Learn More</span>
                  <ChevronDown className="h-4 w-4 text-primary rotate-[-90deg]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <Dialog open={selectedProgram !== null} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProgram !== null && (
            <>
              <DialogHeader>
                <div className="relative h-48 rounded-xl overflow-hidden mb-4 -mt-2">
                  <img 
                    src={programs[selectedProgram].image} 
                    alt={programs[selectedProgram].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <DialogTitle className="text-3xl font-display font-bold">{programs[selectedProgram].title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">{programs[selectedProgram].fullDescription}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{programs[selectedProgram].duration}</p>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Target className="h-5 w-5" />
                      <span className="font-semibold">Level</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{programs[selectedProgram].level}</p>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="h-5 w-5" />
                      <span className="font-semibold">Schedule</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{programs[selectedProgram].schedule}</p>
                  </div>
                  
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Award className="h-5 w-5" />
                      <span className="font-semibold">Instructor</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{programs[selectedProgram].trainer}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Key Benefits
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {programs[selectedProgram].benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Investment</p>
                      <p className="text-xl font-bold text-foreground">{programs[selectedProgram].price}</p>
                    </div>
                    <Button size="lg" className="neon-shadow">
                      Enroll Now
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

// --- TRAINERS SECTION ---
const Trainers = () => {
  const trainers = [
    {
      name: "Alex Rivera",
      role: "Head Trainer",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop", // male trainer
    },
    {
      name: "Sarah Chen",
      role: "Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop", // female trainer yoga
    },
    {
      name: "Marcus Johnson",
      role: "Strength Coach",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1974&auto=format&fit=crop", // muscular trainer
    },
    {
      name: "Emily Davis",
      role: "HIIT Specialist",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop", // athletic woman
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Meet The Elite" subtitle="Our Trainers" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden bg-secondary border border-border"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4">
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-1">{trainer.role}</p>
                <h4 className="text-white font-display font-bold text-xl">{trainer.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PRICING SECTION ---
const Pricing = () => {
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
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Invest In Yourself" subtitle="Membership Plans" />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
    </section>
  );
};

// --- FAQ SECTION ---
const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl">
        <SectionHeading title="Common Questions" subtitle="FAQ" />
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-bold">What are your operating hours?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              We are open 24/7 for members with keycard access. Staffed hours are Monday through Friday from 6am to 9pm, and weekends from 8am to 6pm.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-bold">Do you offer a free trial?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes! We offer a 3-day complimentary pass for local residents. Just come in during staffed hours with a valid ID to get started.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-bold">Is personal training included?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Personal training is an add-on service, though our Pro membership includes 2 sessions per month. We have packages ranging from single sessions to monthly intensive programs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-bold">Can I freeze my membership?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, memberships can be frozen for up to 3 months per year for medical reasons or travel. A small maintenance fee may apply.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

// --- CLASS SCHEDULE SECTION ---
const ClassSchedule = () => {
  const schedule = [
    { time: "6:00 AM", monday: "HIIT Cardio", tuesday: "Yoga Flow", wednesday: "Strength", thursday: "Spin Class", friday: "CrossFit", saturday: "HIIT Cardio", sunday: "Rest" },
    { time: "9:00 AM", monday: "Yoga", tuesday: "Strength", wednesday: "Pilates", thursday: "HIIT Cardio", friday: "Yoga", saturday: "Bootcamp", sunday: "Yoga Flow" },
    { time: "12:00 PM", monday: "Spin", tuesday: "CrossFit", wednesday: "Yoga", thursday: "Strength", friday: "HIIT", saturday: "Strength", sunday: "Rest" },
    { time: "5:00 PM", monday: "CrossFit", tuesday: "HIIT", wednesday: "Spin", thursday: "Yoga", friday: "Bootcamp", saturday: "CrossFit", sunday: "Stretch" },
    { time: "7:00 PM", monday: "Strength", tuesday: "Spin", wednesday: "CrossFit", thursday: "Pilates", friday: "HIIT", saturday: "Yoga", sunday: "Rest" },
  ];

  const days = ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section id="schedule" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Plan Your Week" subtitle="Class Schedule" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px] bg-background rounded-2xl border border-border overflow-hidden shadow-xl">
            <div className="grid grid-cols-8 bg-secondary/50">
              {days.map((day, i) => (
                <div key={i} className="p-4 text-center font-bold text-foreground border-r border-border last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
            {schedule.map((row, i) => (
              <div key={i} className="grid grid-cols-8 border-t border-border hover:bg-secondary/20 transition-colors">
                <div className="p-4 text-center font-semibold text-primary border-r border-border">{row.time}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.monday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.tuesday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.wednesday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.thursday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.friday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground border-r border-border">{row.saturday}</div>
                <div className="p-4 text-center text-sm text-muted-foreground">{row.sunday}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6">
            <Calendar className="inline h-4 w-4 mr-2" />
            All classes are first-come, first-served. Arrive 10 minutes early to secure your spot!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS SECTION ---
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Weight Loss Journey",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      text: "Lost 30 pounds in 4 months! The trainers here are incredible and the community keeps me motivated every single day."
    },
    {
      name: "Michael Chen",
      role: "Strength Athlete",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      text: "Best investment I've ever made. Went from struggling with bodyweight exercises to deadlifting 400lbs. The coaching is top-notch!"
    },
    {
      name: "Jessica Rodriguez",
      role: "Busy Professional",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      text: "As a working mom, the 24/7 access is a game-changer. I can work out on my schedule and the classes fit perfectly into my routine."
    },
    {
      name: "David Thompson", 
      role: "Fitness Transformation",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      text: "Joined 6 months ago and never looked back. The facilities are pristine, equipment is state-of-the-art, and the energy is unmatched."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Success Stories" subtitle="What Our Members Say" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SUCCESS STORIES / TRANSFORMATIONS SECTION ---
const SuccessStories = () => {
  const transformations = [
    {
      name: "Tom Wilson",
      before: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1974&auto=format&fit=crop",
      timeframe: "6 Months",
      achievement: "Lost 45 lbs, Gained Muscle",
      stats: { weight: "-45 lbs", bodyfat: "-12%", strength: "+85%" }
    },
    {
      name: "Emma Davis",
      before: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
      timeframe: "4 Months",
      achievement: "Transformed Body & Mind",
      stats: { weight: "-25 lbs", bodyfat: "-8%", strength: "+60%" }
    },
    {
      name: "James Lee",
      before: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
      timeframe: "8 Months",
      achievement: "Complete Body Recomp",
      stats: { weight: "-35 lbs", bodyfat: "-15%", strength: "+120%" }
    }
  ];

  return (
    <section id="transformations" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Real People, Real Results" subtitle="Transformations" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-lg"
            >
              <div className="grid grid-cols-2 gap-1 p-1">
                <div className="relative aspect-[3/4]">
                  <img src={story.before} alt="Before" className="w-full h-full object-cover rounded-lg grayscale" />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                </div>
                <div className="relative aspect-[3/4]">
                  <img src={story.after} alt="After" className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">AFTER</div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display font-bold text-xl mb-1">{story.name}</h4>
                <p className="text-primary text-sm font-semibold mb-3">{story.timeframe} • {story.achievement}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <p className="text-xl font-bold text-primary">{story.stats.weight}</p>
                    <p className="text-xs text-muted-foreground">Weight</p>
                  </div>
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <p className="text-xl font-bold text-primary">{story.stats.bodyfat}</p>
                    <p className="text-xs text-muted-foreground">Body Fat</p>
                  </div>
                  <div className="text-center p-2 bg-secondary/50 rounded">
                    <p className="text-xl font-bold text-primary">{story.stats.strength}</p>
                    <p className="text-xs text-muted-foreground">Strength</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- BMI CALCULATOR SECTION ---
const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to m
    
    if (w > 0 && h > 0) {
      const bmiValue = w / (h * h);
      setBMI(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 25) setCategory("Normal weight");
      else if (bmiValue < 30) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  return (
    <section id="bmi-calculator" className="py-24 bg-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <SectionHeading title="Calculate Your BMI" subtitle="Fitness Calculator" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/50 rounded-2xl p-8 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-foreground">Weight (kg)</label>
                <Input 
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  className="h-12 bg-background border-border"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-2 text-foreground">Height (cm)</label>
                <Input 
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  className="h-12 bg-background border-border"
                />
              </div>
              <Button onClick={calculateBMI} className="w-full h-12 neon-shadow">
                <Calculator className="mr-2 h-4 w-4" />
                Calculate BMI
              </Button>
            </div>
            
            <div className="flex items-center justify-center">
              {bmi !== null ? (
                <div className="text-center">
                  <div className="mb-4">
                    <div className="text-6xl font-display font-black text-primary mb-2">{bmi}</div>
                    <div className="text-xl font-semibold text-foreground">{category}</div>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground text-left">
                    <div className="flex justify-between gap-4">
                      <span>Underweight:</span>
                      <span className="font-semibold">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Normal:</span>
                      <span className="font-semibold">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Overweight:</span>
                      <span className="font-semibold">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Obese:</span>
                      <span className="font-semibold">≥ 30</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Calculator className="h-16 w-16 mx-auto mb-3 opacity-50" />
                  <p>Enter your details to calculate your BMI</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- GALLERY SECTION ---
const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", title: "Cardio Zone" },
    { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop", title: "Free Weights" },
    { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop", title: "Yoga Studio" },
    { url: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2074&auto=format&fit=crop", title: "Locker Rooms" },
    { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop", title: "Group Classes" },
    { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop", title: "CrossFit Area" },
  ];

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Take A Virtual Tour" subtitle="Our Facility" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-white">{image.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- BLOG SECTION ---
const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  
  const articles = [
    {
      title: "10 Essential Exercises for Beginners",
      excerpt: "Start your fitness journey right with these foundational movements that build strength and confidence.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
      category: "Training",
      date: "Feb 10, 2026",
      readTime: "5 min read",
      author: "Alex Rivera",
      content: `
        <p>Starting your fitness journey can feel overwhelming with countless exercises and conflicting advice. This guide breaks down the 10 most essential movements every beginner should master.</p>
        
        <h3>1. Bodyweight Squats</h3>
        <p>The foundation of lower body strength. Squats engage your quads, glutes, hamstrings, and core. Start with bodyweight to master form before adding weight.</p>
        
        <h3>2. Push-Ups</h3>
        <p>A classic for good reason. Push-ups build chest, shoulders, and triceps while engaging your core. Modify by doing them on your knees if needed.</p>
        
        <h3>3. Planks</h3>
        <p>Core strength is crucial for every other exercise. Start with 20-30 seconds and gradually build up. Focus on keeping a straight line from head to heels.</p>
        
        <h3>4. Dumbbell Rows</h3>
        <p>Build a strong back with this fundamental pulling movement. Use light weights initially and focus on squeezing your shoulder blades together.</p>
        
        <h3>5. Walking Lunges</h3>
        <p>Improve balance and leg strength with lunges. They work each leg independently, helping correct muscle imbalances.</p>
        
        <h3>Key Takeaways</h3>
        <ul>
          <li>Master form before adding weight</li>
          <li>Start with 2-3 sets of 8-12 reps</li>
          <li>Rest 48 hours between working the same muscle groups</li>
          <li>Progress gradually to avoid injury</li>
        </ul>
      `
    },
    {
      title: "Nutrition Guide: Fueling Your Workouts",
      excerpt: "Learn what to eat before and after training to maximize results and recovery.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
      category: "Nutrition",
      date: "Feb 8, 2026",
      readTime: "7 min read",
      author: "Sarah Chen",
      content: `
        <p>Proper nutrition is just as important as your workout routine. What you eat before and after training can significantly impact your performance and results.</p>
        
        <h3>Pre-Workout Nutrition</h3>
        <p>Timing is everything. Eat 2-3 hours before training for a full meal, or 30-60 minutes before for a snack.</p>
        
        <h4>Best Pre-Workout Foods:</h4>
        <ul>
          <li><strong>Complex Carbs:</strong> Oatmeal, brown rice, sweet potato</li>
          <li><strong>Lean Protein:</strong> Chicken, fish, Greek yogurt</li>
          <li><strong>Healthy Fats:</strong> Avocado, nuts, olive oil (in moderation)</li>
        </ul>
        
        <h3>Post-Workout Nutrition</h3>
        <p>The 30-minute window after training is crucial for recovery. Your muscles are primed to absorb nutrients.</p>
        
        <h4>Recovery Meal Guidelines:</h4>
        <ul>
          <li>20-30g of protein for muscle repair</li>
          <li>40-60g of carbs to replenish glycogen</li>
          <li>Hydration is critical - drink 16-24oz of water</li>
        </ul>
        
        <h3>Sample Meal Plan</h3>
        <p><strong>Pre-Workout:</strong> Banana with almond butter, or oatmeal with berries</p>
        <p><strong>Post-Workout:</strong> Protein shake with fruit, or chicken with rice and vegetables</p>
        
        <p>Remember, consistency matters more than perfection. Build sustainable habits that support your fitness goals.</p>
      `
    },
    {
      title: "The Science of Progressive Overload",
      excerpt: "Understand how to continuously challenge your body to see consistent gains.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
      category: "Science",
      date: "Feb 5, 2026",
      readTime: "6 min read",
      author: "Marcus Johnson",
      content: `
        <p>Progressive overload is the cornerstone principle of strength training. Without it, your body has no reason to adapt and grow stronger.</p>
        
        <h3>What is Progressive Overload?</h3>
        <p>Simply put, it's gradually increasing the demands on your musculoskeletal system. Your body adapts to stress by becoming stronger, but only if that stress continues to increase over time.</p>
        
        <h3>Methods of Progressive Overload</h3>
        
        <h4>1. Increase Weight</h4>
        <p>The most obvious method. Add 2.5-5 lbs to your lifts when you can complete all prescribed reps with good form.</p>
        
        <h4>2. Increase Reps</h4>
        <p>Can't add weight yet? Add one more rep per set. When you reach the top of your rep range, increase the weight.</p>
        
        <h4>3. Increase Sets</h4>
        <p>Adding volume is another way to progress. Go from 3 sets to 4, or 4 to 5.</p>
        
        <h4>4. Increase Frequency</h4>
        <p>Train a muscle group more often per week (with adequate recovery).</p>
        
        <h4>5. Decrease Rest Time</h4>
        <p>Doing the same work in less time increases intensity.</p>
        
        <h3>Practical Application</h3>
        <p>Track your workouts! Write down weights, sets, and reps. Each week, aim to beat your previous performance in at least one variable.</p>
        
        <h3>Warning Signs</h3>
        <ul>
          <li>Form breakdown - take a step back</li>
          <li>Joint pain - you're progressing too fast</li>
          <li>Chronic fatigue - you need more recovery</li>
        </ul>
        
        <p>Progress isn't linear. You'll have great weeks and tough weeks. The key is long-term consistency, not week-to-week perfection.</p>
      `
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Knowledge Is Power" subtitle="Fitness Blog" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedArticle(index)}
              className="group bg-secondary/50 rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-xs">{article.category}</Badge>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <span className="text-xs text-muted-foreground">• {article.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  Read More <BookOpen className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedArticle !== null && (
            <>
              <DialogHeader>
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 -mt-2">
                  <img 
                    src={articles[selectedArticle].image} 
                    alt={articles[selectedArticle].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{articles[selectedArticle].category}</Badge>
                  <span className="text-sm text-muted-foreground">{articles[selectedArticle].date}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{articles[selectedArticle].readTime}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">By {articles[selectedArticle].author}</span>
                </div>
                
                <DialogTitle className="text-3xl font-display font-bold mb-4">
                  {articles[selectedArticle].title}
                </DialogTitle>
              </DialogHeader>
              
              <div 
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: articles[selectedArticle].content }}
                style={{
                  color: 'hsl(var(--muted-foreground))',
                }}
              />
              
              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Like Article
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                </div>
                <Button onClick={() => setSelectedArticle(null)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

// --- FREE TRIAL MODAL & CHAT WIDGET ---
const FreeTrialModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We'll contact you to confirm your free trial on ${formData.date}.`);
    setOpen(false);
    setFormData({ name: "", email: "", phone: "", date: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="fixed bottom-24 right-6 z-40 h-14 px-6 rounded-full neon-shadow animate-pulse hover:animate-none">
          <Zap className="mr-2 h-5 w-5" />
          Free Trial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold">Start Your Free Trial</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <Input 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Doe"
              className="h-12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <Input 
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
              className="h-12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <Input 
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              placeholder="(555) 123-4567"
              className="h-12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Preferred Start Date</label>
            <Input 
              required
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="h-12"
            />
          </div>
          <Button type="submit" className="w-full h-12 neon-shadow">
            Book My Free Trial
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 Welcome to IronPulse! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        from: "bot", 
        text: "Thanks for your message! A team member will get back to you shortly. For immediate assistance, call us at (555) 123-4567." 
      }]);
    }, 1000);
  };

  return (
    <>
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full neon-shadow"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
      
      {open && (
        <div className="fixed bottom-6 right-6 z-40 w-80 h-96 bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-primary p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-semibold text-primary-foreground">Live Chat</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground hover:opacity-80">
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.from === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-border"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
          
           <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="sm">Send</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- CONTACT SECTION ---
const Contact = () => {
  const { mutate, isPending } = useSubmitContact();
  
  const form = useForm({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      interestedIn: "Membership",
    },
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <SectionHeading title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-2xl p-8 border border-border shadow-lg"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">123 Fitness Blvd, Muscle City, MC 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@ironpulse.gym</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="bg-secondary hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-colors text-muted-foreground">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="mt-8 h-48 w-full bg-muted rounded-xl overflow-hidden grayscale opacity-70 hover:grayscale-0 transition-all">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <Card className="border-border bg-background shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-2 text-white">Send Us A Message</h3>
                <p className="text-muted-foreground mb-6">Ready to start your journey? Fill out the form below.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-secondary/50 border-border focus:border-primary h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-secondary/50 border-border focus:border-primary h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} className="bg-secondary/50 border-border focus:border-primary h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="interestedIn"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Interested In</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary h-12">
                                  <SelectValue placeholder="Select interest" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Membership">Membership</SelectItem>
                                <SelectItem value="Personal Training">Personal Training</SelectItem>
                                <SelectItem value="Classes">Group Classes</SelectItem>
                                <SelectItem value="Day Pass">Day Pass</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your fitness goals..." 
                              className="bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 neon-shadow"
                      disabled={isPending}
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- FOOTER ---
const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="home" smooth={true} className="flex items-center gap-2 mb-4 cursor-pointer">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">
                IRON<span className="text-primary">PULSE</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forging bodies and minds since 2023. The premier destination for serious fitness enthusiasts.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="about" smooth={true} className="hover:text-primary cursor-pointer">About Us</Link></li>
              <li><Link to="programs" smooth={true} className="hover:text-primary cursor-pointer">Programs</Link></li>
              <li><Link to="trainers" smooth={true} className="hover:text-primary cursor-pointer">Trainers</Link></li>
              <li><Link to="pricing" smooth={true} className="hover:text-primary cursor-pointer">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Strength Training</li>
              <li>HIIT Cardio</li>
              <li>Yoga & Mobility</li>
              <li>Personal Training</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Newsletter</h4>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="bg-white/5 border-white/10 h-10" />
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Get fitness tips and gym updates.</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 IronPulse Gym. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Trainers />
      <Pricing />
      <ClassSchedule />
      <Testimonials />
      <SuccessStories />
      <BMICalculator />
      <Gallery />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <FreeTrialModal />
      <ChatWidget />
    </div>
  );
}
