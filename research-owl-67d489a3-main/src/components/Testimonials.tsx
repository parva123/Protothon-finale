
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ResearchOwl helped me identify a critical research gap that became the foundation of my dissertation. The AI literature search saved me weeks of manual review.",
      author: "Dr. Sarah Chen",
      role: "Neuroscience Researcher",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "SC"
    },
    {
      quote: "The writing assistant helped me structure my methodology section and suggested relevant citations I hadn't discovered. My paper was accepted to a top-tier journal.",
      author: "Prof. Michael Rodriguez",
      role: "Computer Science Department",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "MR"
    },
    {
      quote: "As a non-native English speaker, the platform helped me improve my academic writing and avoid common mistakes. The plagiarism checker ensured perfect citation integrity.",
      author: "Dr. Aisha Patel",
      role: "Economics Researcher",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "AP"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Trusted by Researchers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            See how researchers and academics are transforming their work with our AI-powered platform.
          </p>
        </div>

        {/* Testimonials grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass rounded-2xl p-8 flex flex-col"
            >
              {/* Large quote mark */}
              <svg className="h-10 w-10 text-primary/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Quote */}
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-white">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact metrics */}
        <div className="mt-16 md:mt-24 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
              Research Impact Metrics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              See the difference our platform makes for the academic community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">85%</div>
              <p className="text-gray-600 dark:text-gray-400">Faster literature reviews</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">10k+</div>
              <p className="text-gray-600 dark:text-gray-400">Academic researchers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">32%</div>
              <p className="text-gray-600 dark:text-gray-400">Higher acceptance rates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-semibold text-primary mb-2">98%</div>
              <p className="text-gray-600 dark:text-gray-400">Plagiarism detection accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
