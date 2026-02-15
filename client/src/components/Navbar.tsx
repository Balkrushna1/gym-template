import { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link, useLocation } from "wouter";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", to: "/", scrollTo: "home" },
  { name: "About", to: "/#about", scrollTo: "about" },
  { name: "Programs", to: "/programs", scrollTo: null },
  { name: "Trainers", to: "/#trainers", scrollTo: "trainers" },
  { name: "Pricing", to: "/pricing", scrollTo: null },
  { name: "Schedule", to: "/#schedule", scrollTo: "schedule" },
  { name: "Gallery", to: "/#gallery", scrollTo: "gallery" },
  { name: "Blog", to: "/blog", scrollTo: null },
  { name: "Contact", to: "/#contact", scrollTo: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();
  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (item: typeof navItems[0]) => {
    if (item.scrollTo) {
      if (!isHomePage) {
        // Navigate to home page first
        setLocation("/");
        // Wait for navigation and then scroll
        setTimeout(() => {
          scroller.scrollTo(item.scrollTo!, {
            duration: 500,
            delay: 0,
            smooth: true,
            offset: -100,
          });
        }, 100);
      }
    }
  };

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    // On home page, use scroll links for sections that exist on home
    if (isHomePage && item.scrollTo) {
      return (
        <ScrollLink
          to={item.scrollTo}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          activeClass="text-primary font-semibold"
        >
          {item.name}
        </ScrollLink>
      );
    }
    
    // For section links on non-home pages, handle navigation and scrolling
    if (!isHomePage && item.scrollTo) {
      return (
        <a
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick(item);
          }}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          {item.name}
        </a>
      );
    }
    
    // Otherwise use regular links for separate pages
    return (
      <Link href={item.to}>
        <a className={cn(
          "text-sm font-medium transition-colors cursor-pointer",
          location === item.to ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
        )}>
          {item.name}
        </a>
      </Link>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-primary p-2 rounded-lg group-hover:neon-shadow transition-all duration-300">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
              IRON<span className="text-primary">PULSE</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
          <Link href="/pricing">
            <Button size="sm" className="font-semibold rounded-full px-6">
              Join Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                // On home page, use scroll links for sections
                if (isHomePage && item.scrollTo) {
                  return (
                    <ScrollLink
                      key={item.name}
                      to={item.scrollTo}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0 cursor-pointer"
                      activeClass="text-primary font-semibold"
                    >
                      {item.name}
                    </ScrollLink>
                  );
                }
                
                // For section links on non-home pages
                if (!isHomePage && item.scrollTo) {
                  return (
                    <a
                      key={item.name}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        handleSectionClick(item);
                      }}
                      className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-border/50 last:border-0 cursor-pointer block"
                    >
                      {item.name}
                    </a>
                  );
                }
                
                // Otherwise use regular links for separate pages
                return (
                  <Link key={item.name} href={item.to}>
                    <a 
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium py-2 border-b border-border/50 last:border-0 cursor-pointer block",
                        location === item.to ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                      )}
                    >
                      {item.name}
                    </a>
                  </Link>
                );
              })}
              <Link href="/pricing">
                <Button 
                  size="sm" 
                  className="w-full font-semibold rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
