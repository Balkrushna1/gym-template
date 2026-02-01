import { motion } from "framer-motion";
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
  ChevronDown
} from "lucide-react";
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
  const programs = [
    {
      title: "Strength Training",
      description: "Build raw power and muscle mass with our dedicated free-weight zones and expert coaching.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", // powerlifter squat
    },
    {
      title: "HIIT Cardio",
      description: "Torch calories and boost endurance in our high-energy interval training sessions.",
      image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=2025&auto=format&fit=crop", // runner on treadmill
    },
    {
      title: "Yoga & Mobility",
      description: "Improve flexibility, balance, and mental focus with our calming yet challenging yoga classes.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop", // yoga pose
    },
    {
      title: "CrossFit",
      description: "Functional fitness that prepares you for anything life throws your way.",
      image: "https://images.unsplash.com/photo-1533681904393-9ab6eea9e171?q=80&w=2070&auto=format&fit=crop", // crossfit box jump
    },
    {
      title: "Personal Training",
      description: "1-on-1 guidance tailored to your specific goals, injuries, and lifestyle.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", // trainer with client
    },
    {
      title: "Nutrition Coaching",
      description: "Fuel your body right with personalized meal plans and nutritional advice.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop", // healthy food
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
                <div className="w-12 h-1 bg-primary mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
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
      image: "https://images.unsplash.com/photo-1609899537878-39d4a797f21d?q=80&w=1974&auto=format&fit=crop", // female trainer
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
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      features: ["Gym Access 24/7", "Locker Room Access", "Free Wi-Fi", "1 Guest Pass/mo"],
      featured: false,
    },
    {
      name: "Elite",
      price: "$89",
      period: "/month",
      features: ["All Basic Features", "Unlimited Group Classes", "Sauna & Steam Room", "Nutritional Guide", "Free Merch Pack"],
      featured: true,
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      features: ["All Elite Features", "2 Personal Training Sessions", "Monthly Body Scan", "Priority Support", "Smoothie Bar Discounts"],
      featured: false,
    }
  ];

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
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
