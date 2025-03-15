
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookMarked, TrendingUp, ListChecks, FileText, Upload, 
  GraduationCap, DollarSign, Bookmark, Calendar, Award
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { toast } from "sonner";

// Mock data for charts
const citationData = [
  { month: 'Jan', citations: 5 },
  { month: 'Feb', citations: 8 },
  { month: 'Mar', citations: 7 },
  { month: 'Apr', citations: 10 },
  { month: 'May', citations: 12 },
  { month: 'Jun', citations: 15 },
  { month: 'Jul', citations: 18 },
  { month: 'Aug', citations: 22 },
  { month: 'Sep', citations: 25 },
  { month: 'Oct', citations: 28 },
  { month: 'Nov', citations: 30 },
  { month: 'Dec', citations: 35 },
];

const paperStatusData = [
  { name: 'Drafting', value: 3 },
  { name: 'Review', value: 2 },
  { name: 'Submitted', value: 4 },
  { name: 'Published', value: 8 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const savedPapers = [
  { id: 1, title: "Advances in Natural Language Processing", date: "2023-10-15", journal: "Computational Linguistics" },
  { id: 2, title: "Machine Learning Applications in Healthcare", date: "2023-09-20", journal: "AI in Medicine" },
  { id: 3, title: "Quantum Computing: Current State and Future Directions", date: "2023-08-05", journal: "Quantum Information Processing" },
];

const fundingOpportunities = [
  { 
    id: 1, 
    title: "NSF Graduate Research Fellowship", 
    deadline: "Oct 30, 2023", 
    amount: "$138,000",
    match: "High match for your AI research focus"
  },
  { 
    id: 2, 
    title: "NIH R01 Research Project Grant", 
    deadline: "Nov 15, 2023", 
    amount: "$250,000-$500,000",
    match: "Medium match for your healthcare applications"
  },
  { 
    id: 3, 
    title: "DARPA Young Faculty Award", 
    deadline: "Dec 5, 2023", 
    amount: "$500,000",
    match: "High match for your quantum computing background"
  },
];

const Dashboard = () => {
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // In a real app, we would process the resume here
      setResumeUploaded(true);
      toast.success("Resume uploaded successfully! Analyzing your research profile...");
      
      // Simulate analysis delay
      setTimeout(() => {
        toast.success("Research profile analysis complete!");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Research Dashboard</h1>
          
          <div className="flex gap-2">
            <Button variant="outline">Export Data</Button>
            <Button>New Research Project</Button>
          </div>
        </div>
        
        <Tabs defaultValue="overview" onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="papers">Saved Papers</TabsTrigger>
            <TabsTrigger value="insights">Research Insights</TabsTrigger>
            <TabsTrigger value="funding">Funding Opportunities</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Citations</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">215</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Published Papers</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">17</div>
                  <p className="text-xs text-muted-foreground">3 in high-impact journals</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Projects</CardTitle>
                  <ListChecks className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">9</div>
                  <p className="text-xs text-muted-foreground">2 nearing completion</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Citation Impact</CardTitle>
                  <CardDescription>Monthly citation count for your papers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={citationData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="citations" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Research Status</CardTitle>
                  <CardDescription>Current status of your research papers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={paperStatusData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {paperStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="papers" className="pt-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Papers</CardTitle>
                  <CardDescription>Your bookmarked research papers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savedPapers.map(paper => (
                      <div key={paper.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <div>
                          <h3 className="font-medium">{paper.title}</h3>
                          <p className="text-sm text-muted-foreground">{paper.journal} • {new Date(paper.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Cite</Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Saved Papers</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="insights" className="pt-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Profile Analysis</CardTitle>
                  <CardDescription>Upload your resume or CV for personalized research insights</CardDescription>
                </CardHeader>
                <CardContent>
                  {!resumeUploaded ? (
                    <div className="grid gap-4">
                      <div className="border-2 border-dashed rounded-lg p-8 text-center">
                        <GraduationCap className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium mb-2">Upload your resume or CV</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Our AI will analyze your background and suggest research topics aligned with your career goals
                        </p>
                        <div className="flex justify-center">
                          <Label
                            htmlFor="resume-upload"
                            className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                          >
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Resume/CV
                          </Label>
                          <Input
                            id="resume-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleResumeUpload}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="text-lg font-medium flex items-center text-green-700 dark:text-green-300 mb-2">
                          <GraduationCap className="mr-2 h-5 w-5" />
                          Research Profile Analyzed
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          Based on your background in machine learning and healthcare data analysis, we've generated personalized research recommendations.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Recommended Research Topics</h3>
                        <div className="space-y-3">
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h4 className="font-medium">AI-Driven Diagnostic Tools for Rare Diseases</h4>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">98% Match</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Aligns with your machine learning expertise and healthcare background
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h4 className="font-medium">Federated Learning for Privacy-Preserving Medical Analysis</h4>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">95% Match</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Builds on your publications in data privacy and healthcare
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <div className="flex justify-between">
                              <h4 className="font-medium">Deep Learning Models for Medical Imaging Analysis</h4>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">90% Match</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Leverages your computer vision coursework and clinical data experience
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Trending Topics in Your Field</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                              Multimodal AI in Healthcare
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              428 papers published in the last 6 months
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                              LLMs for Medical Knowledge Extraction
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              315 papers published in the last 6 months
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                              Synthetic Medical Data Generation
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              287 papers published in the last 6 months
                            </p>
                          </div>
                          <div className="p-3 border rounded-lg">
                            <h4 className="font-medium flex items-center">
                              <TrendingUp className="h-4 w-4 mr-2 text-blue-500" />
                              AI for Drug Discovery
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              265 papers published in the last 6 months
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="funding" className="pt-4">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Opportunities</CardTitle>
                  <CardDescription>Grants and funding sources matched to your research profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fundingOpportunities.map(opportunity => (
                      <div key={opportunity.id} className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{opportunity.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              <span>Deadline: {opportunity.deadline}</span>
                              <span className="mx-2">•</span>
                              <DollarSign className="h-3.5 w-3.5 mr-1" />
                              <span>{opportunity.amount}</span>
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            opportunity.match.startsWith('High') 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {opportunity.match}
                          </span>
                        </div>
                        <div className="mt-3 flex justify-end">
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">View All Opportunities</Button>
                  <Button variant="outline">Set Funding Alerts</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
