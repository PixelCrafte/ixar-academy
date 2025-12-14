"use client";

import { motion } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

const courses = [
  "Motor Vehicle Mechanics",
  "Culinary Arts",
  "Cellphone and Tablet Repair",
  "Sewing",
  "Cosmetology",
  "Panel Beating and Spray Painting",
  "Carpentry",
  "Building",
  "Plumbing",
  "Auto Electrics and Electronics",
  "Jewellery Making",
  "Computer Repair and Maintenance",
  "Steel Fabrication (Welding)",
  "Solar Installation and Inverter Repair",
  "Sculpturing",
  "Leather Works",
  "Landscaping",
  "Tiling",
  "Electrical Installations",
  "Hairdressing",
  "Photography and Videography",
  "Graphic Design",
  "Technical Drawing",
  "Upholstery",
  "Barbering",
  "Aluminium Fabrication",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Courses", href: "#courses" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "FAQs", href: "#" },
      { name: "Admission Process", href: "#" },
      { name: "Fee Structure", href: "#" },
      { name: "Career Support", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">Ixar Academy</span>
            </motion.a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming lives through practical vocational education. Join us
              and build the skills you need for a successful career.
            </p>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    {social[0].toUpperCase()}
                  </motion.a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.slice(0, 6).map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ixar Academy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for
              aspiring professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
