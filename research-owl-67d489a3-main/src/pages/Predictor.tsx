
import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Upload, PieChart, ChevronRight } from 'lucide-react';
import { toast } from "sonner";

const Predictor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      toast.success(`File selected: ${files[0].name}`);
    }
  };

  const handleSelectFileClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      toast.success(`File selected: ${files[0].name}`);
    }
  };

  const handleRunAnalysis = () => {
    if (!selectedFile) {
      toast.error("Please select a file first");
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload and analysis process
    setTimeout(() => {
      setIsUploading(false);
      setAnalysisComplete(true);
      toast.success("Analysis complete!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Journal Acceptance Predictor
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Evaluate your paper's chance of acceptance in top journals
            </p>
          </div>

          <Tabs defaultValue="upload" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upload">
                <Upload className="h-4 w-4 mr-2" />
                Upload Paper
              </TabsTrigger>
              <TabsTrigger value="analysis" disabled={!analysisComplete}>
                <PieChart className="h-4 w-4 mr-2" />
                Analysis
              </TabsTrigger>
              <TabsTrigger value="recommendations" disabled={!analysisComplete}>
                <Target className="h-4 w-4 mr-2" />
                Recommendations
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="upload" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Your Research Paper</CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-10 text-center cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {selectedFile ? `Selected: ${selectedFile.name}` : 'Drag and drop your paper (PDF, DOCX) or click to browse'}
                    </p>
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.doc"
                    />
                    <Button 
                      onClick={handleSelectFileClick}
                    >
                      Select File
                    </Button>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Target Journals (Optional)</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Select specific journals you're interested in, or let our AI recommend options
                    </p>
                    <Button variant="outline" className="w-full text-left justify-between">
                      <span>Select target journals</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button 
                      onClick={handleRunAnalysis} 
                      disabled={!selectedFile || isUploading}
                    >
                      {isUploading ? 'Analyzing...' : 'Run Analysis'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Paper Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisComplete ? (
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Analysis Results</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overall Score</p>
                            <p className="text-3xl font-bold text-primary">78%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Good chance of acceptance</p>
                          </div>
                          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Methodology Score</p>
                            <p className="text-3xl font-bold text-primary">82%</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Strong methodology section</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-3">Key Factors</h3>
                        <ul className="space-y-2">
                          <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span>Novelty of Research</span>
                            <span className="font-medium text-green-600">High</span>
                          </li>
                          <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span>Statistical Validity</span>
                            <span className="font-medium text-green-600">High</span>
                          </li>
                          <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span>Citation Quality</span>
                            <span className="font-medium text-yellow-600">Medium</span>
                          </li>
                          <li className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span>Writing Clarity</span>
                            <span className="font-medium text-yellow-600">Medium</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        Upload your paper to see the analysis
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Journal Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisComplete ? (
                    <div className="space-y-6">
                      <p className="text-gray-600 dark:text-gray-400">
                        Based on our analysis, these journals are the best fit for your paper:
                      </p>
                      
                      <div className="space-y-4">
                        {[
                          { name: "Journal of Advanced Research", score: 92, impact: 4.8, acceptRate: "24%" },
                          { name: "International Scientific Reports", score: 87, impact: 3.9, acceptRate: "32%" },
                          { name: "Research Quarterly", score: 84, impact: 3.6, acceptRate: "29%" },
                        ].map((journal, index) => (
                          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                              <h4 className="font-medium">{journal.name}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Impact Factor: {journal.impact} • Acceptance Rate: {journal.acceptRate}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm mr-3">
                                {journal.score}% Match
                              </div>
                              <Button size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Submission Strategy</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Consider these recommendations before submitting:
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                          <li>Strengthen the limitations section to address potential reviewer concerns</li>
                          <li>Add more recent citations (within the last 2 years)</li>
                          <li>Consider revising abstract to better highlight key findings</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 dark:text-gray-400">
                        Complete the analysis to get journal recommendations
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Predictor;
