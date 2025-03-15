
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Search, Book, Building, Lightbulb, Bookmark, Star, ChevronRight } from 'lucide-react';
import { toast } from "sonner";

const JournalFinder = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('topic');
  const [hasSearched, setHasSearched] = useState(false);
  const [bookmarkedJournals, setBookmarkedJournals] = useState<string[]>([]);

  // Mock data for demonstration
  const mockJournals = [
    {
      id: '1',
      name: 'Nature Machine Intelligence',
      impact: 25.8,
      acceptanceRate: '12%',
      deadline: '2023-12-15',
      aiPrediction: 78,
      category: 'AI & Machine Learning',
      description: 'Focuses on research advances in artificial intelligence, machine learning, and their applications across various fields.'
    },
    {
      id: '2',
      name: 'IEEE Transactions on Neural Networks',
      impact: 12.4,
      acceptanceRate: '18%',
      deadline: '2023-11-30',
      aiPrediction: 65,
      category: 'Neural Networks',
      description: 'Publishes high-quality technical articles in the field of neural networks and related disciplines.'
    },
    {
      id: '3',
      name: 'Science Advances',
      impact: 14.9,
      acceptanceRate: '15%',
      deadline: '2023-10-25',
      aiPrediction: 52,
      category: 'Multidisciplinary Research',
      description: 'Open access journal publishing innovative research across all disciplines of science.'
    }
  ];

  const mockConferences = [
    {
      id: '4',
      name: 'International Conference on Machine Learning (ICML)',
      impact: 'A*',
      acceptanceRate: '21%',
      deadline: '2023-02-10',
      aiPrediction: 71,
      location: 'Honolulu, Hawaii',
      description: 'Premier gathering of professionals dedicated to the advancement of machine learning.'
    },
    {
      id: '5',
      name: 'NeurIPS (Neural Information Processing Systems)',
      impact: 'A*',
      acceptanceRate: '24%',
      deadline: '2023-05-18',
      aiPrediction: 68,
      location: 'Virtual',
      description: 'Leading conference on machine learning and computational neuroscience.'
    }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a research topic or abstract");
      return;
    }
    
    // In a real app, this would trigger an API call to get AI recommendations
    setHasSearched(true);
    toast.success("AI analysis complete. Showing recommended journals and conferences.");
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedJournals(prev => 
      prev.includes(id) 
        ? prev.filter(journalId => journalId !== id) 
        : [...prev, id]
    );
    
    toast.success(
      bookmarkedJournals.includes(id) 
        ? "Removed from bookmarks" 
        : "Added to bookmarks"
    );
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
                  Journal & Conference Finder
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Find the perfect publication venue for your research with AI-powered recommendations
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass rounded-xl p-6 mb-8"
              >
                <div className="mb-4">
                  <Tabs defaultValue="topic" onValueChange={(val) => setSearchType(val)}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="topic">Research Topic</TabsTrigger>
                      <TabsTrigger value="abstract">Paper Abstract</TabsTrigger>
                    </TabsList>
                    <TabsContent value="topic">
                      <div className="space-y-4">
                        <Input
                          placeholder="Enter your research topic (e.g., 'AI in healthcare')"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full text-base md:text-lg"
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="abstract">
                      <div className="space-y-4">
                        <Textarea
                          placeholder="Paste your paper abstract here..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full min-h-[150px] text-base"
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                
                <Button onClick={handleSearch} className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" />
                  Find Publication Venues
                </Button>
              </motion.div>
              
              {hasSearched && (
                <div className="space-y-10">
                  {/* Journal Recommendations */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                      <Book className="mr-2 h-5 w-5 text-primary" />
                      Journal Recommendations
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {mockJournals.map((journal) => (
                        <motion.div key={journal.id} variants={item}>
                          <Card className="p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-medium mb-2">{journal.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{journal.description}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => toggleBookmark(journal.id)}
                                className="text-yellow-500"
                              >
                                {bookmarkedJournals.includes(journal.id) ? (
                                  <Star className="h-5 w-5 fill-yellow-500" />
                                ) : (
                                  <Bookmark className="h-5 w-5" />
                                )}
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                              <div>
                                <div className="text-sm text-gray-500">Impact Factor</div>
                                <div className="font-medium">{journal.impact}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Acceptance Rate</div>
                                <div className="font-medium">{journal.acceptanceRate}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Next Deadline</div>
                                <div className="font-medium">{journal.deadline}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">AI Success Prediction</div>
                                <div className={`font-medium ${
                                  journal.aiPrediction > 70 
                                    ? 'text-green-600' 
                                    : journal.aiPrediction > 50 
                                      ? 'text-yellow-600' 
                                      : 'text-red-600'
                                }`}>
                                  {journal.aiPrediction}%
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-6">
                              <Button variant="outline" className="w-full md:w-auto">
                                View Journal Details
                                <ChevronRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Conference Recommendations */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                  >
                    <h2 className="text-2xl font-serif font-semibold mb-6 flex items-center">
                      <Building className="mr-2 h-5 w-5 text-primary" />
                      Conference Recommendations
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-6">
                      {mockConferences.map((conference) => (
                        <motion.div key={conference.id} variants={item}>
                          <Card className="p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-medium mb-2">{conference.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{conference.description}</p>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => toggleBookmark(conference.id)}
                                className="text-yellow-500"
                              >
                                {bookmarkedJournals.includes(conference.id) ? (
                                  <Star className="h-5 w-5 fill-yellow-500" />
                                ) : (
                                  <Bookmark className="h-5 w-5" />
                                )}
                              </Button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                              <div>
                                <div className="text-sm text-gray-500">Ranking</div>
                                <div className="font-medium">{conference.impact}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Acceptance Rate</div>
                                <div className="font-medium">{conference.acceptanceRate}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">Submission Deadline</div>
                                <div className="font-medium">{conference.deadline}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">AI Success Prediction</div>
                                <div className={`font-medium ${
                                  conference.aiPrediction > 70 
                                    ? 'text-green-600' 
                                    : conference.aiPrediction > 50 
                                      ? 'text-yellow-600' 
                                      : 'text-red-600'
                                }`}>
                                  {conference.aiPrediction}%
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <div className="text-sm text-gray-500">Location</div>
                              <div className="font-medium">{conference.location}</div>
                            </div>
                            
                            <div className="mt-6">
                              <Button variant="outline" className="w-full md:w-auto">
                                View Conference Details
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

export default JournalFinder;
