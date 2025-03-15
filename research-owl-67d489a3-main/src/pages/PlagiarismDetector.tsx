import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, FileText, AlertTriangle, CheckCircle, 
  RefreshCw, Download, Edit, X, RotateCcw, Bot
} from 'lucide-react';
import { toast } from "sonner";

const PlagiarismDetector = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    plagiarismScore: number;
    aiGeneratedScore: number;
    selfPlagiarismScore: number;
    highlightedText: string;
    suggestions: Array<{id: number, original: string, suggestion: string}>;
  } | null>(null);
  const [activeTab, setActiveTab] = useState("upload");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      toast.success(`File "${e.target.files[0].name}" selected`);
    }
  };

  const handleFileUpload = () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setLoading(true);
    setActiveTab("analyzing");

    // Simulate analysis
    setTimeout(() => {
      setLoading(false);
      setResults({
        plagiarismScore: 12,
        aiGeneratedScore: 18,
        selfPlagiarismScore: 5,
        highlightedText: "The neural network architecture proposed in this paper demonstrates significant improvements over previous approaches. The model achieves state-of-the-art performance on benchmark tasks while requiring fewer computational resources.",
        suggestions: [
          {
            id: 1, 
            original: "The neural network architecture proposed in this paper demonstrates significant improvements over previous approaches.", 
            suggestion: "Our proposed neural network architecture shows considerable enhancements compared to existing methods."
          },
          {
            id: 2, 
            original: "The model achieves state-of-the-art performance on benchmark tasks while requiring fewer computational resources.", 
            suggestion: "The model attains leading performance on standard evaluation tasks while consuming less computational power."
          }
        ]
      });
      setActiveTab("results");
      toast.success("Analysis complete!");
    }, 3000);
  };

  const handleReset = () => {
    setFile(null);
    setResults(null);
    setActiveTab("upload");
    toast.info("Reset complete. You can upload a new document.");
  };

  const applyAllSuggestions = () => {
    toast.success("All suggestions applied to your document");
  };
  
  const downloadReport = () => {
    toast.success("Report downloaded successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Plagiarism & AI Content Detector</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check your paper for plagiarism, self-plagiarism, and AI-generated content. 
            Get rewrite suggestions to maintain originality.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload" disabled={loading}>Upload</TabsTrigger>
            <TabsTrigger value="analyzing" disabled={!loading && !results}>Analyzing</TabsTrigger>
            <TabsTrigger value="results" disabled={!results}>Results</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Document</CardTitle>
                <CardDescription>
                  Upload your research paper or document to check for plagiarism and AI-generated content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Upload Document</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We support PDF, DOCX, DOC, and TXT files up to 25MB
                  </p>
                  
                  <div className="flex flex-col items-center gap-4">
                    <Label
                      htmlFor="file-upload"
                      className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Select File
                    </Label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf,.doc,.docx,.txt"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    
                    {file && (
                      <div className="flex items-center gap-2 text-sm">
                        <FileText className="h-4 w-4" />
                        <span className="font-medium">{file.name}</span>
                        <span className="text-muted-foreground">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        <Button variant="ghost" size="icon" onClick={() => setFile(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={!file} 
                  onClick={handleFileUpload}
                >
                  Analyze Document
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="analyzing" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Analyzing Your Document</CardTitle>
                <CardDescription>
                  Please wait while we analyze your document for plagiarism and AI-generated content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 py-4">
                <div className="flex justify-center">
                  <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Checking for plagiarism...</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Detecting AI-generated content...</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Scanning for self-plagiarism...</span>
                      <span>40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Generating suggestions...</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                </div>
                
                <p className="text-sm text-center text-muted-foreground">
                  This may take a few minutes depending on the document size
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="results" className="pt-6">
            {results && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                    <CardDescription>Summary of plagiarism and AI content detection</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className={`p-4 rounded-lg border ${
                        results.plagiarismScore > 20 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">Plagiarism</p>
                            <p className="text-2xl font-bold">{results.plagiarismScore}%</p>
                          </div>
                          {results.plagiarismScore > 20 ? (
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-xs mt-2">
                          {results.plagiarismScore > 20 
                            ? 'High plagiarism detected. Review highlighted sections.'
                            : 'Low plagiarism detected. Your content appears to be original.'}
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-lg border ${
                        results.aiGeneratedScore > 30 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">AI-Generated</p>
                            <p className="text-2xl font-bold">{results.aiGeneratedScore}%</p>
                          </div>
                          {results.aiGeneratedScore > 30 ? (
                            <Bot className="h-5 w-5 text-yellow-500" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-xs mt-2">
                          {results.aiGeneratedScore > 30 
                            ? 'Significant AI-generated content detected. Review highlighted sections.'
                            : 'Low AI content detected. Content appears to be human-written.'}
                        </p>
                      </div>
                      
                      <div className={`p-4 rounded-lg border ${
                        results.selfPlagiarismScore > 15 ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'
                      }`}>
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="text-sm font-medium mb-1">Self-Plagiarism</p>
                            <p className="text-2xl font-bold">{results.selfPlagiarismScore}%</p>
                          </div>
                          {results.selfPlagiarismScore > 15 ? (
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          ) : (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-xs mt-2">
                          {results.selfPlagiarismScore > 15 
                            ? 'Self-plagiarism detected. Consider rewriting or citing your previous work.'
                            : 'Low self-plagiarism detected. Your content appears to be original.'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Highlighted Text</h3>
                      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm">{results.highlightedText}</p>
                      </div>
                      
                      <h3 className="text-lg font-semibold mt-4">Rewrite Suggestions</h3>
                      <div className="space-y-4">
                        {results.suggestions.map(suggestion => (
                          <div key={suggestion.id} className="border rounded-lg overflow-hidden">
                            <div className="p-3 bg-gray-50 border-b">
                              <h4 className="font-medium">Original Text</h4>
                              <p className="text-sm mt-1">{suggestion.original}</p>
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium flex items-center">
                                <Edit className="h-4 w-4 mr-1 text-primary" />
                                Suggested Revision
                              </h4>
                              <p className="text-sm mt-1">{suggestion.suggestion}</p>
                            </div>
                            <div className="p-2 bg-gray-50 border-t flex justify-end gap-2">
                              <Button size="sm" variant="outline">
                                <RotateCcw className="h-3.5 w-3.5 mr-1" />
                                Regenerate
                              </Button>
                              <Button size="sm">Apply Suggestion</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between flex-wrap gap-2">
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={handleReset}>
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New Document
                      </Button>
                      <Button variant="outline" onClick={downloadReport}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Report
                      </Button>
                    </div>
                    <Button onClick={applyAllSuggestions}>Apply All Suggestions</Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlagiarismDetector;
