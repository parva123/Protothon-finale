
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { 
  ArrowRight, BookOpen, Lightbulb, FileCheck, 
  Users, Globe, Download, Lock, CheckCircle, Clock, ChartBar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  // Animation variants
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* How It Works */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-serif font-semibold mb-6"
              >
                How ResearchOwl Works
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                Our AI-powered platform supports your entire research workflow
              </motion.p>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            >
              {/* Step 1 */}
              <motion.div variants={item} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Literature Review</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our AI scans millions of papers to find relevant research, summarizes key findings, and identifies connections.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="group">
                    <span>Try Literature Search</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div variants={item} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Research & Writing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our writing assistant helps structure your paper, suggests citations, and ensures clarity while maintaining your voice.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="group">
                    <span>Try Writing Assistant</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div variants={item} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Publication Success</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Verify compliance with journal guidelines, check for ethical issues, and predict acceptance likelihood.
                </p>
                <div className="mt-auto">
                  <Button variant="link" className="group">
                    <span>Try Journal Finder</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Benefits for Researchers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our platform helps you work smarter, not harder
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <div className="rounded-xl bg-blue-500/10 p-3 w-fit mb-6">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-medium mb-4">
                  Save 80% of Research Time
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Our AI tools automate the most time-consuming parts of research: literature review, citation management, and formatting.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Instant paper summarization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Automated citation management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>One-click journal formatting</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefit 2 */}
              <div className="glass rounded-2xl p-8 md:p-10">
                <div className="rounded-xl bg-purple-500/10 p-3 w-fit mb-6">
                  <ChartBar className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-medium mb-4">
                  Increase Research Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Improve the quality and visibility of your research while maintaining complete research integrity.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Gap analysis to identify novel contributions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Higher-quality writing and argumentation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Strategic journal targeting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center glass rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Ready to Transform Your Research Process?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-10">
                Join thousands of researchers worldwide who are using ResearchOwl to enhance their academic work.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="rounded-xl px-6">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="rounded-xl px-6">
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">10,000+ Users</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">150+ Countries</span>
                </div>
                <div className="flex flex-col items-center">
                  <Download className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Free to Try</span>
                </div>
                <div className="flex flex-col items-center">
                  <Lock className="h-6 w-6 text-primary mb-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
