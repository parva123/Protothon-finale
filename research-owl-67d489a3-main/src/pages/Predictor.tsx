
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Upload, PieChart, ChevronRight } from 'lucide-react';

const Predictor = () => {
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
              <TabsTrigger value="analysis">
                <PieChart className="h-4 w-4 mr-2" />
                Analysis
              </TabsTrigger>
              <TabsTrigger value="recommendations">
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
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-10 text-center">
                    <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      Drag and drop your paper (PDF, DOCX) or click to browse
                    </p>
                    <Button>Select File</Button>
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
                    <Button disabled>
                      Run Analysis
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
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">
                      Upload your paper to see the analysis
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Journal Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">
                      Complete the analysis to get journal recommendations
                    </p>
                  </div>
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
