"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Clock,
  Users,
  ArrowRight,
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
  GraduationCap,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

interface Course {
  name: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  category: string;
  image: string;
}

const courses: Course[] = [
  {
    name: "Motor Vehicle Mechanics",
    icon: Car,
    description: "Master automotive repair, maintenance, and diagnostics.",
    duration: "6 months",
    category: "Automotive",
    image: "/images/mechanics.webp",
  },
  {
    name: "Culinary Arts",
    icon: ChefHat,
    description: "Learn professional cooking techniques and kitchen management.",
    duration: "4 months",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    name: "Cellphone and Tablet Repair",
    icon: Smartphone,
    description: "Diagnose and repair mobile devices with expert precision.",
    duration: "3 months",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=800&q=80",
  },
  {
    name: "Sewing",
    icon: Scissors,
    description: "Create professional garments and develop fashion design skills.",
    duration: "4 months",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    name: "Cosmetology",
    icon: Sparkles,
    description: "Master beauty treatments, skincare, and makeup artistry.",
    duration: "6 months",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    name: "Panel Beating and Spray Painting",
    icon: PaintBucket,
    description: "Restore vehicles to pristine condition with expert techniques.",
    duration: "6 months",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
  },
  {
    name: "Carpentry",
    icon: Hammer,
    description: "Build and craft with wood using traditional and modern methods.",
    duration: "6 months",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
  },
  {
    name: "Building",
    icon: Building2,
    description: "Learn construction fundamentals from foundation to finish.",
    duration: "8 months",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    name: "Plumbing",
    icon: Wrench,
    description: "Install and maintain water and drainage systems professionally.",
    duration: "6 months",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
  },
  {
    name: "Auto Electrics and Electronics",
    icon: Zap,
    description: "Specialize in vehicle electrical systems and diagnostics.",
    duration: "6 months",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    name: "Jewellery Making",
    icon: Gem,
    description: "Create stunning jewelry pieces using various techniques.",
    duration: "4 months",
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    name: "Computer Repair and Maintenance",
    icon: Monitor,
    description: "Diagnose, repair, and maintain computer hardware and software.",
    duration: "4 months",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80",
  },
  {
    name: "Steel Fabrication (Welding)",
    icon: Flame,
    description: "Master welding techniques for industrial applications.",
    duration: "6 months",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
  },
  {
    name: "Solar Installation and Inverter Repair",
    icon: Sun,
    description: "Install and maintain renewable energy systems.",
    duration: "4 months",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    name: "Sculpturing",
    icon: Shapes,
    description: "Create artistic sculptures using various materials and methods.",
    duration: "6 months",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800&q=80",
  },
  {
    name: "Leather Works",
    icon: Briefcase,
    description: "Craft quality leather goods from bags to accessories.",
    duration: "4 months",
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=800&q=80",
  },
  {
    name: "Landscaping",
    icon: TreeDeciduous,
    description: "Design and maintain beautiful outdoor spaces.",
    duration: "4 months",
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80",
  },
  {
    name: "Tiling",
    icon: LayoutGrid,
    description: "Professional tile installation for floors and walls.",
    duration: "3 months",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
  },
  {
    name: "Electrical Installations",
    icon: Lightbulb,
    description: "Install and maintain electrical systems safely and efficiently.",
    duration: "6 months",
    category: "Construction",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
  },
  {
    name: "Hairdressing",
    icon: User,
    description: "Master hair styling, cutting, and treatment techniques.",
    duration: "6 months",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80",
  },
  {
    name: "Photography and Videography",
    icon: Camera,
    description: "Capture stunning images and videos professionally.",
    duration: "4 months",
    category: "Media",
    image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
  },
  {
    name: "Graphic Design",
    icon: Palette,
    description: "Create compelling visual designs for print and digital media.",
    duration: "6 months",
    category: "Media",
    image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?w=800&q=80",
  },
  {
    name: "Technical Drawing",
    icon: PenTool,
    description: "Master precision drafting for engineering and architecture.",
    duration: "4 months",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  },
  {
    name: "Upholstery",
    icon: Sofa,
    description: "Restore and create beautiful furniture upholstery.",
    duration: "4 months",
    category: "Crafts",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    name: "Barbering",
    icon: Scissors,
    description: "Learn professional men's grooming and hair cutting.",
    duration: "4 months",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
  },
  {
    name: "Aluminium Fabrication",
    icon: Factory,
    description: "Fabricate aluminium structures for windows, doors, and more.",
    duration: "6 months",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80",
  },
];

const categories = [
  "All",
  "Automotive",
  "Technology",
  "Construction",
  "Beauty",
  "Crafts",
  "Media",
  "Industrial",
  "Arts",
  "Fashion",
  "Hospitality",
  "Technical",
  "Outdoor",
];

// Featured course card with large image
function FeaturedCourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Image */}
      <motion.div
        className={`relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
        
        {/* Category Badge on Image */}
        <div className="absolute top-6 left-6">
          <span className="bg-white/20 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
            {course.category}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-6 right-6">
          <span className="bg-cyan-500/90 backdrop-blur-md text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {course.duration}
          </span>
        </div>

        {/* Bottom Content on Image */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
              <course.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {course.name}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className={`space-y-6 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="text-xl text-gray-600 leading-relaxed">
          {course.description}
        </p>
        <ul className={`space-y-3 ${index % 2 === 1 ? "md:ml-auto" : ""}`}>
          {[
            "Industry-certified curriculum",
            "Hands-on practical training",
            "Expert instructors",
            "Job placement assistance",
          ].map((item, i) => (
            <li key={i} className={`flex items-center gap-3 text-gray-700 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              </div>
              {item}
            </li>
          ))}
        </ul>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
          whileTap={{ scale: 0.95 }}
          className={`inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          Enroll Now <ArrowRight className={`w-5 h-5 ${index % 2 === 1 ? "md:rotate-180" : ""}`} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

// Grid course card
function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-end p-6">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
            <course.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            {course.category}
          </span>
        </div>

        {/* Duration Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {course.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Users className="w-4 h-4" />
            <span>Limited Seats</span>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ x: 5 }}
            className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  // Get featured courses (first 3 for alternating layout)
  const featuredCourses = filteredCourses.slice(0, 3);
  // Get remaining courses for grid
  const gridCourses = showAll ? filteredCourses.slice(3) : filteredCourses.slice(3, 9);

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Explore Our <span className="gradient-text">Vocational Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from 26 industry-focused programs designed to give you
            practical skills and real-world experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-bg text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Courses - Alternating Layout */}
        <div className="space-y-24 mb-24">
          {featuredCourses.map((course, index) => (
            <FeaturedCourseCard key={course.name} course={course} index={index} />
          ))}
        </div>

        {/* Grid Courses */}
        {gridCourses.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-2xl font-bold text-gray-900 text-center mb-12"
            >
              More Courses to Explore
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {gridCourses.map((course, index) => (
                <CourseCard key={course.name} course={course} index={index} />
              ))}
            </div>

            {/* Show More Button */}
            {filteredCourses.length > 9 && !showAll && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                className="text-center"
              >
                <motion.button
                  onClick={() => setShowAll(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-200 px-8 py-4 rounded-full font-semibold hover:border-blue-400 transition-colors"
                >
                  View All Courses
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

// Full-page CTA section with video background and zoom-out scroll effect
export function CareerCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Video zooms out from 1.3 to 1 as you scroll into view
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video Background with Zoom Effect */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Ready To Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Career?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Enroll now and take the first step towards a rewarding career with
            hands-on training from industry experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/25 transition-all"
            >
              <GraduationCap className="w-6 h-6" />
              Enroll Today
            </motion.a>
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <BookOpen className="w-6 h-6" />
              View Courses
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
