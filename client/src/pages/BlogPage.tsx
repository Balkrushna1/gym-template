import { motion } from "framer-motion";
import { useState } from "react";
import { BookOpen, Heart } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Blog() {
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
              Fitness <span className="text-primary">Knowledge</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert tips, workout guides, and nutrition advice to fuel your fitness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
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
      </section>

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
    </div>
  );
}
