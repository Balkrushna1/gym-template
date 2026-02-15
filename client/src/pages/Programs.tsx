import { motion } from "framer-motion";
import { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  Calendar,
  Award,
  Heart,
  Target,
  ChevronDown
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Programs() {
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
              Choose Your <span className="text-primary">Path</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're just starting out or training for competition, we have programs designed to help you reach your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      </section>

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

      {/* Footer CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which program is right for you? Schedule a free consultation with one of our trainers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-shadow">
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              View Class Schedule
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
