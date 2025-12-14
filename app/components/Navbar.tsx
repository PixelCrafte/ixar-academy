"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Car,
  ChefHat,
  Smartphone,
  Scissors,
  Sparkles,
  PaintBucket,
  Hammer,
  Building2,
  Wrench,
  Zap,
  Gem,
  Monitor,
  Flame,
  Sun,
  Shapes,
  Briefcase,
  TreeDeciduous,
  LayoutGrid,
  Lightbulb,
  User,
  Camera,
  Palette,
  PenTool,
  Sofa,
  Factory,
  type LucideIcon,
} from "lucide-react";

interface Course {
  name: string;
  icon: LucideIcon;
}

const courses: Course[] = [
  { name: "Motor Vehicle Mechanics", icon: Car },
  { name: "Culinary Arts", icon: ChefHat },
  { name: "Cellphone and Tablet Repair", icon: Smartphone },
  { name: "Sewing", icon: Scissors },
  { name: "Cosmetology", icon: Sparkles },
  { name: "Panel Beating and Spray Painting", icon: PaintBucket },
  { name: "Carpentry", icon: Hammer },
  { name: "Building", icon: Building2 },
  { name: "Plumbing", icon: Wrench },
  { name: "Auto Electrics and Electronics", icon: Zap },
  { name: "Jewellery Making", icon: Gem },
  { name: "Computer Repair and Maintenance", icon: Monitor },
  { name: "Steel Fabrication (Welding)", icon: Flame },
  { name: "Solar Installation and Inverter Repair", icon: Sun },
  { name: "Sculpturing", icon: Shapes },
  { name: "Leather Works", icon: Briefcase },
  { name: "Landscaping", icon: TreeDeciduous },
  { name: "Tiling", icon: LayoutGrid },
  { name: "Electrical Installations", icon: Lightbulb },
  { name: "Hairdressing", icon: User },
  { name: "Photography and Videography", icon: Camera },
  { name: "Graphic Design", icon: Palette },
  { name: "Technical Drawing", icon: PenTool },
  { name: "Upholstery", icon: Sofa },
  { name: "Barbering", icon: Scissors },
  { name: "Aluminium Fabrication", icon: Factory },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              Ixar Academy
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                onMouseEnter={() => setIsCoursesOpen(true)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Courses
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isCoursesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsCoursesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-2 max-h-[70vh] overflow-y-auto"
                  >
                    {courses.map((course, index) => (
                      <motion.a
                        key={course.name}
                        href="#courses"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        <course.icon className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          {course.name}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                About
              </a>

              {/* Mobile Courses Accordion */}
              <div>
                <button
                  onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                >
                  Courses
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isCoursesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isCoursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 pl-4 space-y-1 max-h-60 overflow-y-auto"
                    >
                      {courses.map((course) => (
                        <a
                          key={course.name}
                          href="#courses"
                          onClick={() => {
                            setIsOpen(false);
                            setIsCoursesOpen(false);
                          }}
                          className="flex items-center gap-2 py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          <course.icon className="w-4 h-4" />
                          <span>{course.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block gradient-bg text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
