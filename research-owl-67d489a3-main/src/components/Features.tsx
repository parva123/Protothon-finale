
import React from 'react';
import { Search, Edit, PieChart, AlertTriangle, BarChart4 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "AI Literature Search",
      description: "Intelligent search that understands research concepts, not just keywords. Find relevant papers faster with AI-powered analysis.",
      link: "/search"
    },
    {
      icon: <Edit className="h-8 w-8 text-primary" />,
      title: "Smart Writing Assistant",
      description: "AI co-author that helps structure papers, suggests citations, and enhances clarity while maintaining your unique voice.",
      link: "/writing"
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: "Research Gap Finder",
      description: "Identify unexplored areas and opportunities in your field. Discover promising research directions with AI analysis.",
      link: "/gaps"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Plagiarism Detection",
      description: "Advanced AI that detects potential integrity issues, including self-plagiarism and proper attribution of sources.",
      link: "/plagiarism"
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: "Journal Success Predictor",
      description: "Analyze your paper against successful publications to predict acceptance likelihood and suggest improvements.",
      link: "/predictor"
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
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            Powerful AI Tools for Every Research Stage
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our platform combines cutting-edge AI with research best practices to streamline your academic workflow.
          </p>
        </div>

        {/* Feature grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass rounded-2xl p-8 flex flex-col h-full transform hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div className="rounded-xl bg-primary/10 p-3 w-fit mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {feature.description}
              </p>
              <a 
                href={feature.link}
                className="text-primary flex items-center font-medium hover:text-primary/80 transition-colors"
              >
                Learn more
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
