"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, Users, ArrowRight } from "lucide-react";

const courses = [
  {
    name: "Motor Vehicle Mechanics",
    icon: "🚗",
    description: "Master automotive repair, maintenance, and diagnostics.",
    duration: "6 months",
    category: "Automotive",
  },
  {
    name: "Culinary Arts",
    icon: "👨‍🍳",
    description: "Learn professional cooking techniques and kitchen management.",
    duration: "4 months",
    category: "Hospitality",
  },
  {
    name: "Cellphone and Tablet Repair",
    icon: "📱",
    description: "Diagnose and repair mobile devices with expert precision.",
    duration: "3 months",
    category: "Technology",
  },
  {
    name: "Sewing",
    icon: "🧵",
    description: "Create professional garments and develop fashion design skills.",
    duration: "4 months",
    category: "Fashion",
  },
  {
    name: "Cosmetology",
    icon: "💄",
    description: "Master beauty treatments, skincare, and makeup artistry.",
    duration: "6 months",
    category: "Beauty",
  },
  {
    name: "Panel Beating and Spray Painting",
    icon: "🎨",
    description: "Restore vehicles to pristine condition with expert techniques.",
    duration: "6 months",
    category: "Automotive",
  },
  {
    name: "Carpentry",
    icon: "🪚",
    description: "Build and craft with wood using traditional and modern methods.",
    duration: "6 months",
    category: "Construction",
  },
  {
    name: "Building",
    icon: "🏗️",
    description: "Learn construction fundamentals from foundation to finish.",
    duration: "8 months",
    category: "Construction",
  },
  {
    name: "Plumbing",
    icon: "🔧",
    description: "Install and maintain water and drainage systems professionally.",
    duration: "6 months",
    category: "Construction",
  },
  {
    name: "Auto Electrics and Electronics",
    icon: "⚡",
    description: "Specialize in vehicle electrical systems and diagnostics.",
    duration: "6 months",
    category: "Automotive",
  },
  {
    name: "Jewellery Making",
    icon: "💎",
    description: "Create stunning jewelry pieces using various techniques.",
    duration: "4 months",
    category: "Crafts",
  },
  {
    name: "Computer Repair and Maintenance",
    icon: "💻",
    description: "Diagnose, repair, and maintain computer hardware and software.",
    duration: "4 months",
    category: "Technology",
  },
  {
    name: "Steel Fabrication (Welding)",
    icon: "🔩",
    description: "Master welding techniques for industrial applications.",
    duration: "6 months",
    category: "Industrial",
  },
  {
    name: "Solar Installation and Inverter Repair",
    icon: "☀️",
    description: "Install and maintain renewable energy systems.",
    duration: "4 months",
    category: "Technology",
  },
  {
    name: "Sculpturing",
    icon: "🗿",
    description: "Create artistic sculptures using various materials and methods.",
    duration: "6 months",
    category: "Arts",
  },
  {
    name: "Leather Works",
    icon: "👜",
    description: "Craft quality leather goods from bags to accessories.",
    duration: "4 months",
    category: "Crafts",
  },
  {
    name: "Landscaping",
    icon: "🌳",
    description: "Design and maintain beautiful outdoor spaces.",
    duration: "4 months",
    category: "Outdoor",
  },
  {
    name: "Tiling",
    icon: "🔲",
    description: "Professional tile installation for floors and walls.",
    duration: "3 months",
    category: "Construction",
  },
  {
    name: "Electrical Installations",
    icon: "💡",
    description: "Install and maintain electrical systems safely and efficiently.",
    duration: "6 months",
    category: "Construction",
  },
  {
    name: "Hairdressing",
    icon: "💇",
    description: "Master hair styling, cutting, and treatment techniques.",
    duration: "6 months",
    category: "Beauty",
  },
  {
    name: "Photography and Videography",
    icon: "📸",
    description: "Capture stunning images and videos professionally.",
    duration: "4 months",
    category: "Media",
  },
  {
    name: "Graphic Design",
    icon: "🎨",
    description: "Create compelling visual designs for print and digital media.",
    duration: "6 months",
    category: "Media",
  },
  {
    name: "Technical Drawing",
    icon: "📐",
    description: "Master precision drafting for engineering and architecture.",
    duration: "4 months",
    category: "Technical",
  },
  {
    name: "Upholstery",
    icon: "🛋️",
    description: "Restore and create beautiful furniture upholstery.",
    duration: "4 months",
    category: "Crafts",
  },
  {
    name: "Barbering",
    icon: "✂️",
    description: "Learn professional men&apos;s grooming and hair cutting.",
    duration: "4 months",
    category: "Beauty",
  },
  {
    name: "Aluminium Fabrication",
    icon: "🏭",
    description: "Fabricate aluminium structures for windows, doors, and more.",
    duration: "6 months",
    category: "Industrial",
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

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-bg text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                {course.icon}
              </div>

              {/* Category Badge */}
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {course.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {course.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{course.description}</p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Limited Seats</span>
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-blue-600 font-semibold mt-4 group-hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 gradient-bg rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Career?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Enroll now and take the first step towards a rewarding career with
              hands-on training from industry experts.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Enroll Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
