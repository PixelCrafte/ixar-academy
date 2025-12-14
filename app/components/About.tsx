"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Hands-On Training",
      description:
        "Learn by doing with practical, real-world projects and industry-standard equipment.",
    },
    {
      icon: Heart,
      title: "Passionate Instructors",
      description:
        "Our expert trainers bring years of industry experience and genuine care for student success.",
    },
    {
      icon: Lightbulb,
      title: "Industry-Ready Skills",
      description:
        "Graduate with the practical skills and certifications employers are looking for.",
    },
    {
      icon: TrendingUp,
      title: "Career Support",
      description:
        "From enrollment to employment, we support your journey every step of the way.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Empowering the Next Generation of{" "}
              <span className="gradient-text">Skilled Professionals</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Ixar Academy, we believe in the power of practical education.
              Our vocational training programs are designed to equip students
              with the hands-on skills needed to thrive in today&apos;s competitive
              job market. With state-of-the-art facilities and experienced
              instructors, we transform passion into profession.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you dream of becoming a skilled mechanic, a creative
              designer, or a master craftsman, Ixar Academy provides the
              training, tools, and support you need to succeed.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex gradient-bg text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Your Journey
            </motion.a>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-5"></div>
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                &ldquo;To be the leading vocational training institution that transforms
                lives through practical education, creating skilled professionals
                who drive economic growth and community development.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
