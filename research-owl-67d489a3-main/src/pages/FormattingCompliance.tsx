
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { 
  FileText, CheckSquare, Settings, ShieldCheck, ThumbsUp, Upload, 
  FilePlus, Download, ListCheck, Check, AlertTriangle, List, Lightbulb 
} from 'lucide-react';
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FormattingCompliance = () => {
  const [selectedFormat, setSelectedFormat] = useState('apa');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [complianceChecked, setComplianceChecked] = useState(false);

  // Mock compliance results
  const complianceResults = {
    score: 83,
    issues: [
      { type: 'critical', message: 'Reference list not in alphabetical order', fixed: true },
      { type: 'warning', message: 'Abstract exceeds recommended word count (currently 275 words, recommended 250)', fixed: false },
      { type: 'warning', message: 'Some in-text citations missing year of publication', fixed: true },
      { type: 'info', message: 'Consider adding keywords section after abstract', fixed: false },
    ],
    suggestions: [
      'Add a clearer statement of research significance in your introduction',
      'Consider expanding the limitations section with specific future research directions',
      'Your methods section could benefit from a more detailed explanation of participant selection'
    ]
  };

  const formatStandards = [
    { id: 'apa', name: 'APA 7th Edition', description: 'American Psychological Association style' },
    { id: 'mla', name: 'MLA 9th Edition', description: 'Modern Language Association style' },
    { id: 'chicago', name: 'Chicago 17th Edition', description: 'Chicago Manual of Style' },
    { id: 'ieee', name: 'IEEE', description: 'Institute of Electrical and Electronics Engineers style' },
    { id: 'harvard', name: 'Harvard', description: 'Harvard referencing style' },
    { id: 'vancouver', name: 'Vancouver', description: 'Vancouver citation style for medical sciences' },
  ];

  const handleUpload = () => {
    // Simulate file upload
    toast.success("Document uploaded successfully");
    setFileUploaded(true);
  };

  const handleCheckCompliance = () => {
    // Simulate compliance check
    toast.success("Compliance check completed");
    setComplianceChecked(true);
  };

  const handleApplyFormatting = () => {
    // Simulate formatting application
    toast.success(`${formatStandards.find(f => f.id === selectedFormat)?.name} formatting applied successfully`);
  };

  const handleFixIssues = () => {
    // Simulate automatic fixing of issues
    toast.success("AI has automatically fixed formatting issues where possible");
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
                  Research Formatting & Compliance
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Automatically format your research paper and ensure journal compliance
                </p>
              </motion.div>
              
              <Tabs defaultValue="format" className="mb-10">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="format" className="flex items-center">
                    <Settings className="mr-2 h-4 w-4" />
                    Format Paper
                  </TabsTrigger>
                  <TabsTrigger value="compliance" className="flex items-center">
                    <CheckSquare className="mr-2 h-4 w-4" />
                    Check Compliance
                  </TabsTrigger>
                </TabsList>
                
                {/* Format Paper Tab */}
                <TabsContent value="format">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-xl p-6 space-y-6"
                  >
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium">Select Citation Style</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {formatStandards.map((format) => (
                          <div 
                            key={format.id}
                            className={`cursor-pointer border rounded-lg p-4 transition-colors ${
                              selectedFormat === format.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-gray-200 dark:border-gray-800 hover:border-primary/50'
                            }`}
                            onClick={() => setSelectedFormat(format.id)}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium">{format.name}</span>
                              {selectedFormat === format.id && (
                                <Check className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{format.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium">Upload Your Paper</h2>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                          <Upload className="h-10 w-10 text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium mb-2">Drag & drop your file here</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Supports DOCX, PDF, and LaTeX files
                          </p>
                          <Button onClick={handleUpload}>
                            <FilePlus className="mr-2 h-4 w-4" />
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button 
                        className="flex-1" 
                        onClick={handleApplyFormatting}
                        disabled={!fileUploaded}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Apply Formatting
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        disabled={!fileUploaded}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Formatted Paper
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
                
                {/* Check Compliance Tab */}
                <TabsContent value="compliance">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glass rounded-xl p-6 space-y-6"
                  >
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium">Journal Guidelines</h2>
                      <div className="space-y-4">
                        <Label htmlFor="journal">Select Target Journal</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a journal" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nature">Nature</SelectItem>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="cell">Cell</SelectItem>
                            <SelectItem value="plos">PLOS ONE</SelectItem>
                            <SelectItem value="ieee">IEEE Transactions</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          AI will check your paper against the selected journal's guidelines
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h2 className="text-xl font-medium">Upload Your Paper</h2>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center">
                          <Upload className="h-10 w-10 text-gray-400 mb-4" />
                          <h3 className="text-lg font-medium mb-2">Drag & drop your file here</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Supports DOCX, PDF, and LaTeX files
                          </p>
                          <Button onClick={handleUpload}>
                            <FilePlus className="mr-2 h-4 w-4" />
                            Select File
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button 
                        className="flex-1" 
                        onClick={handleCheckCompliance}
                        disabled={!fileUploaded}
                      >
                        <ListCheck className="mr-2 h-4 w-4" />
                        Check Compliance
                      </Button>
                    </div>
                    
                    {complianceChecked && (
                      <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="mt-8 space-y-6"
                      >
                        <motion.div variants={item} className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-medium flex items-center">
                              <ShieldCheck className="mr-2 h-5 w-5 text-primary" />
                              Compliance Score
                            </h3>
                            <div className={`text-2xl font-bold ${
                              complianceResults.score >= 80 
                                ? 'text-green-600' 
                                : complianceResults.score >= 60 
                                  ? 'text-yellow-600' 
                                  : 'text-red-600'
                            }`}>
                              {complianceResults.score}%
                            </div>
                          </div>
                          
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                complianceResults.score >= 80 
                                  ? 'bg-green-500' 
                                  : complianceResults.score >= 60 
                                    ? 'bg-yellow-500' 
                                    : 'bg-red-500'
                              }`}
                              style={{ width: `${complianceResults.score}%` }}
                            ></div>
                          </div>
                        </motion.div>
                        
                        <motion.div variants={item}>
                          <h3 className="text-xl font-medium mb-4 flex items-center">
                            <ListCheck className="mr-2 h-5 w-5 text-primary" />
                            Compliance Issues
                          </h3>
                          
                          <div className="space-y-3">
                            {complianceResults.issues.map((issue, index) => (
                              <div 
                                key={index} 
                                className={`p-4 rounded-lg flex items-start justify-between ${
                                  issue.type === 'critical' 
                                    ? 'bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800'
                                    : issue.type === 'warning'
                                      ? 'bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800'
                                      : 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800'
                                }`}
                              >
                                <div className="flex items-start">
                                  {issue.type === 'critical' && (
                                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                                  )}
                                  {issue.type === 'warning' && (
                                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                                  )}
                                  {issue.type === 'info' && (
                                    <List className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                  )}
                                  <div>
                                    <p className={`font-medium ${
                                      issue.type === 'critical' 
                                        ? 'text-red-800 dark:text-red-200'
                                        : issue.type === 'warning'
                                          ? 'text-yellow-800 dark:text-yellow-200'
                                          : 'text-blue-800 dark:text-blue-200'
                                    }`}>
                                      {issue.message}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  {issue.fixed ? (
                                    <span className="text-green-600 font-medium text-sm flex items-center">
                                      <Check className="h-4 w-4 mr-1" />
                                      Fixed
                                    </span>
                                  ) : (
                                    <Button variant="outline" size="sm">Fix</Button>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4">
                            <Button onClick={handleFixIssues}>
                              <CheckSquare className="mr-2 h-4 w-4" />
                              Auto-Fix All Issues
                            </Button>
                          </div>
                        </motion.div>
                        
                        <motion.div variants={item}>
                          <h3 className="text-xl font-medium mb-4 flex items-center">
                            <ThumbsUp className="mr-2 h-5 w-5 text-primary" />
                            Submission Readiness Feedback
                          </h3>
                          
                          <Card className="p-6">
                            <div className="space-y-4">
                              <h4 className="font-medium">Content Improvement Suggestions</h4>
                              <ul className="space-y-2">
                                {complianceResults.suggestions.map((suggestion, index) => (
                                  <li key={index} className="flex items-start">
                                    <Lightbulb className="h-5 w-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" />
                                    <span>{suggestion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </Card>
                          
                          <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <Button className="flex-1">
                              <Download className="mr-2 h-4 w-4" />
                              Download Compliance Report
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <FileText className="mr-2 h-4 w-4" />
                              Download Fixed Paper
                            </Button>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FormattingCompliance;
