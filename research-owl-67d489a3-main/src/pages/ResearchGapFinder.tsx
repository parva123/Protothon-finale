
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Compass, Layers, TrendingUp, TrendingDown, MapPin, ChevronRight, Lightbulb } from 'lucide-react';
import { toast } from "sonner";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ResearchGapFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Mock data for demonstration
  const trendData = [
    { year: '2018', current: 25, emerging: 8, projected: 0 },
    { year: '2019', current: 32, emerging: 15, projected: 0 },
    { year: '2020', current: 40, emerging: 22, projected: 0 },
    { year: '2021', current: 45, emerging: 35, projected: 0 },
    { year: '2022', current: 48, emerging: 42, projected: 0 },
    { year: '2023', current: 50, emerging: 55, projected: 0 },
    { year: '2024', current: 0, emerging: 0, projected: 65 },
    { year: '2025', current: 0, emerging: 0, projected: 78 },
    { year: '2026', current: 0, emerging: 0, projected: 92 },
  ];

  const researchGaps = [
    {
      id: '1',
      title: 'Explainable AI for Medical Diagnostics',
      description: 'Current research lacks focus on interpretable AI models that can explain diagnostic decisions to healthcare professionals.',
      opportunity: 'High',
      competitiveness: 'Medium',
      publications: 42,
      trend: 'rising'
    },
    {
      id: '2',
      title: 'Ethical Frameworks for AI in Clinical Trials',
      description: 'There is a notable gap in established ethical guidelines for using AI in designing and analyzing clinical trials.',
      opportunity: 'Very High',
      competitiveness: 'Low',
      publications: 23,
      trend: 'rising'
    },
    {
      id: '3',
      title: 'AI Robustness Against Medical Data Drift',
      description: 'Research is limited on maintaining AI model accuracy when medical data patterns change over time.',
      opportunity: 'High',
      competitiveness: 'Medium',
      publications: 37,
      trend: 'stable'
    }
  ];

  const researchDirections = [
    {
      id: '1',
      title: 'Develop Transparency Methods for Deep Learning in Radiology',
      description: 'Create techniques that expose the decision-making process of deep neural networks analyzing medical images.',
      difficulty: 'Medium',
      impact: 'High',
      timeframe: '1-2 years'
    },
    {
      id: '2',
      title: 'Design Unified Ethical AI Framework for Multiple Clinical Contexts',
      description: 'Create a comprehensive ethical framework that can be applied across various medical specialties and clinical scenarios.',
      difficulty: 'High',
      impact: 'Very High',
      timeframe: '2-3 years'
    },
    {
      id: '3',
      title: 'Implement Adaptive Learning Systems for Medical Data Evolution',
      description: 'Develop AI systems that can detect and adapt to changing patterns in medical data without requiring complete retraining.',
      difficulty: 'High',
      impact: 'High',
      timeframe: '1-3 years'
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a research topic");
      return;
    }
    
    // In a real app, this would trigger an API call to analyze research gaps
    setHasSearched(true);
    toast.success("AI analysis complete. Showing research gaps and opportunities.");
  };

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
      
      <main className="flex-grow pt-20">
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                  AI-Powered Research Gap Finder
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Discover unexplored research opportunities and emerging trends in your field
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-xl p-6 mb-8"
              >
                <div className="mb-4">
                  <div className="space-y-4">
                    <label className="text-base font-medium">Enter Research Topic</label>
                    <div className="flex gap-4">
                      <Input
                        placeholder="E.g., 'AI in healthcare' or 'sustainable energy'"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handleSearch}>
                        <Search className="mr-2 h-4 w-4" />
                        Analyze
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {hasSearched && (
                <div className="space-y-10">
                  {/* Trend Prediction Graph */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="glass rounded-xl p-6"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                      Research Trend Prediction
                    </h2>
                    
                    <div className="h-[300px] md:h-[400px] mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="year" />
                          <YAxis label={{ value: 'Publications', angle: -90, position: 'insideLeft' }} />
                          <Tooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="current" 
                            name="Current Research" 
                            stroke="#3B82F6" 
                            strokeWidth={2} 
                            dot={{ r: 4 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="emerging" 
                            name="Emerging Topic" 
                            stroke="#10B981" 
                            strokeWidth={2} 
                            dot={{ r: 4 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="projected" 
                            name="Projected Growth" 
                            stroke="#8B5CF6" 
                            strokeWidth={2} 
                            strokeDasharray="5 5" 
                            dot={{ r: 4 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                      <div className="flex items-start">
                        <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-amber-800 dark:text-amber-200">
                          <strong>AI Insight:</strong> Based on publication trends, research on "{searchQuery}" is shifting from established approaches towards emerging methodologies. There's a projected significant growth opportunity in the next 2-3 years.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Research Gaps */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                      <Compass className="mr-2 h-5 w-5 text-primary" />
                      Identified Research Gaps
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {researchGaps.map((gap) => (
                        <motion.div key={gap.id} variants={item}>
                          <Card className="p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium mb-3">{gap.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{gap.description}</p>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                              <div>
                                <div className="text-sm text-gray-500">Research Opportunity</div>
                                <div className={`font-medium ${
                                  gap.opportunity === 'Very High' || gap.opportunity === 'High'
                                    ? 'text-green-600' 
                                    : gap.opportunity === 'Medium'
                                      ? 'text-yellow-600' 
                                      : 'text-gray-600'
                                }`}>
                                  {gap.opportunity}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Competitiveness</div>
                                <div className={`font-medium ${
                                  gap.competitiveness === 'Low'
                                    ? 'text-green-600' 
                                    : gap.competitiveness === 'Medium'
                                      ? 'text-yellow-600' 
                                      : 'text-red-600'
                                }`}>
                                  {gap.competitiveness}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Publications</div>
                                <div className="font-medium flex items-center">
                                  {gap.publications}
                                  {gap.trend === 'rising' && <TrendingUp className="ml-1 h-4 w-4 text-green-500" />}
                                  {gap.trend === 'falling' && <TrendingDown className="ml-1 h-4 w-4 text-red-500" />}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Suggested Research Directions */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-primary" />
                      Suggested Research Directions
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {researchDirections.map((direction) => (
                        <motion.div key={direction.id} variants={item}>
                          <Card className="p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-medium mb-3">{direction.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{direction.description}</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                              <div>
                                <div className="text-sm text-gray-500">Difficulty Level</div>
                                <div className={`font-medium ${
                                  direction.difficulty === 'Low'
                                    ? 'text-green-600' 
                                    : direction.difficulty === 'Medium'
                                      ? 'text-yellow-600' 
                                      : 'text-red-600'
                                }`}>
                                  {direction.difficulty}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Potential Impact</div>
                                <div className={`font-medium ${
                                  direction.impact === 'Very High' || direction.impact === 'High'
                                    ? 'text-green-600' 
                                    : direction.impact === 'Medium'
                                      ? 'text-yellow-600' 
                                      : 'text-gray-600'
                                }`}>
                                  {direction.impact}
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Timeframe</div>
                                <div className="font-medium">{direction.timeframe}</div>
                              </div>
                            </div>
                            
                            <div className="mt-6">
                              <Button variant="outline" className="w-full md:w-auto">
                                Explore Research Direction
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResearchGapFinder;
