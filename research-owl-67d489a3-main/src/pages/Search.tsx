
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Book, FileText, User, Calendar, ArrowUpRight, BookOpen, ExternalLink, Download, Star, Clock, Bell } from 'lucide-react';
import { toast } from "sonner";

const Search = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample search results
  const papers = [
    {
      id: 1,
      title: "Advancements in Natural Language Processing: A Comprehensive Review",
      authors: ["Michael Chen", "Sarah Johnson"],
      journal: "Journal of Artificial Intelligence Research",
      year: 2023,
      citationCount: 145,
      abstract: "This paper presents a comprehensive review of recent advancements in Natural Language Processing (NLP), focusing on transformer-based models and their applications.",
      tags: ["NLP", "AI", "Machine Learning"],
      access: "open"
    },
    {
      id: 2,
      title: "Ethical Considerations in Large Language Models",
      authors: ["Sarah Johnson", "David Miller"],
      journal: "Ethics in AI Conference Proceedings",
      year: 2022,
      citationCount: 87,
      abstract: "An examination of ethical challenges posed by large language models, including bias, misinformation, and privacy concerns.",
      tags: ["Ethics", "AI", "LLM"],
      access: "subscription"
    },
    {
      id: 3,
      title: "Neural Network Architectures for Computer Vision Tasks",
      authors: ["James Wilson", "Emily Rodriguez"],
      journal: "Computer Vision and Pattern Recognition",
      year: 2023,
      citationCount: 112,
      abstract: "This study compares different neural network architectures for image recognition, segmentation, and object detection tasks.",
      tags: ["Computer Vision", "Deep Learning", "Neural Networks"],
      access: "open"
    }
  ];

  const journals = [
    {
      id: 1,
      title: "Nature Machine Intelligence",
      publisher: "Nature Publishing Group",
      impactFactor: 15.8,
      description: "A premier journal covering artificial intelligence, machine learning, and robotics research.",
      issuesPerYear: 12,
      coverImage: "/lovable-uploads/b280db28-8850-4ee2-a2cf-8aebfe28c848.png"
    },
    {
      id: 2,
      title: "Journal of Artificial Intelligence Research",
      publisher: "AI Access Foundation",
      impactFactor: 9.2,
      description: "Publishes cutting-edge research in all areas of artificial intelligence.",
      issuesPerYear: 4,
      coverImage: "/lovable-uploads/994d06cd-b9c0-41ad-8b9a-be5753832758.png"
    }
  ];

  const authors = [
    {
      id: 1,
      name: "Sarah Johnson",
      affiliation: "Stanford University",
      papers: 87,
      citations: 4560,
      hIndex: 38,
      fields: ["Machine Learning", "AI Ethics", "NLP"],
      avatar: "/lovable-uploads/1a4a7191-f25e-4999-99db-f9f6c277ba5b.png"
    },
    {
      id: 2,
      name: "Michael Chen",
      affiliation: "Harvard University",
      papers: 124,
      citations: 7890,
      hIndex: 45,
      fields: ["Biochemistry", "Drug Discovery", "Proteomics"],
      avatar: "/lovable-uploads/55638366-e63c-44cb-9996-73c55d221e7f.png"
    }
  ];

  const topics = [
    {
      id: 1,
      name: "Machine Learning Ethics",
      paperCount: 1245,
      trendDirection: "up",
      trendPercentage: 28,
      description: "Ethical considerations in the development and deployment of machine learning algorithms."
    },
    {
      id: 2,
      name: "Large Language Models",
      paperCount: 3560,
      trendDirection: "up",
      trendPercentage: 156,
      description: "Research on large-scale language models like GPT, their capabilities, limitations, and applications."
    },
    {
      id: 3,
      name: "Neuromorphic Computing",
      paperCount: 785,
      trendDirection: "up",
      trendPercentage: 42,
      description: "Computing systems that mimic the structure and function of the human brain."
    }
  ];

  const handleSearch = (query: string, filters: any) => {
    console.log('Search query:', query, 'Filters:', filters);
    setSearchTerm(query);
    setHasSearched(true);
    toast.success(`Searched for "${query}"`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              AI-Powered Literature Search
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find relevant research papers, journals, and authors with advanced AI filtering
            </p>
          </div>

          <SearchBar initialQuery={searchTerm} onSearch={handleSearch} />

          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Results</TabsTrigger>
                <TabsTrigger value="papers">Papers</TabsTrigger>
                <TabsTrigger value="journals">Journals</TabsTrigger>
                <TabsTrigger value="authors">Authors</TabsTrigger>
                <TabsTrigger value="topics">Topics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                {!hasSearched ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Enter a search query to find research materials
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-8">
                    {/* Papers Section */}
                    <section>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium flex items-center">
                          <FileText className="h-5 w-5 mr-2 text-blue-500" />
                          Research Papers
                        </h3>
                        <Button variant="link" size="sm" onClick={() => setActiveTab("papers")}>
                          View all papers
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {papers.slice(0, 2).map(paper => (
                          <Card key={paper.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                    {paper.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                    {paper.authors.join(", ")} • {paper.journal} • {paper.year}
                                  </p>
                                </div>
                                <Badge variant={paper.access === "open" ? "default" : "outline"}>
                                  {paper.access === "open" ? "Open Access" : "Subscription"}
                                </Badge>
                              </div>
                              
                              <p className="text-sm mt-3 line-clamp-2">
                                {paper.abstract}
                              </p>
                              
                              <div className="mt-4 flex flex-wrap gap-2">
                                {paper.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              
                              <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center mr-4">
                                  <Star className="h-4 w-4 mr-1 text-amber-500" />
                                  {paper.citationCount} citations
                                </div>
                                <Button variant="ghost" size="sm" className="ml-auto">
                                  <Download className="h-4 w-4 mr-1" />
                                  PDF
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </section>
                    
                    {/* Journals Section */}
                    <section>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium flex items-center">
                          <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
                          Journals
                        </h3>
                        <Button variant="link" size="sm" onClick={() => setActiveTab("journals")}>
                          View all journals
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {journals.slice(0, 2).map(journal => (
                          <Card key={journal.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 h-16 w-16 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                  {journal.coverImage ? (
                                    <img 
                                      src={journal.coverImage} 
                                      alt={journal.title}
                                      className="object-cover h-full w-full"
                                    />
                                  ) : (
                                    <Book className="h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                                  )}
                                </div>
                                
                                <div className="flex-1">
                                  <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                    {journal.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {journal.publisher}
                                  </p>
                                  <div className="flex items-center mt-1">
                                    <Badge variant="outline" className="text-xs">
                                      Impact Factor: {journal.impactFactor.toFixed(1)}
                                    </Badge>
                                    <span className="mx-2 text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-600 dark:text-gray-400">
                                      {journal.issuesPerYear} issues per year
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </section>
                    
                    {/* Authors Section */}
                    <section>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium flex items-center">
                          <User className="h-5 w-5 mr-2 text-green-500" />
                          Authors
                        </h3>
                        <Button variant="link" size="sm" onClick={() => setActiveTab("authors")}>
                          View all authors
                          <ArrowUpRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {authors.slice(0, 2).map(author => (
                          <Card key={author.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                  <AvatarImage src={author.avatar} alt={author.name} />
                                  <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                
                                <div className="flex-1">
                                  <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                    {author.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {author.affiliation}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    <div className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full px-2 py-1">
                                      {author.papers} papers
                                    </div>
                                    <div className="text-xs bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded-full px-2 py-1">
                                      {author.citations} citations
                                    </div>
                                    <div className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full px-2 py-1">
                                      h-index: {author.hIndex}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {author.fields.map((field, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    {field}
                                  </Badge>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </section>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="papers" className="mt-6">
                {!hasSearched ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Search for research papers
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Found <span className="font-medium">{papers.length}</span> papers matching "<span className="font-medium">{searchTerm}</span>"
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Clock className="h-4 w-4 mr-1" />
                          Most Recent
                        </Button>
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Most Cited
                        </Button>
                      </div>
                    </div>
                    
                    {papers.map(paper => (
                      <Card key={paper.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                {paper.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {paper.authors.join(", ")} • {paper.journal} • {paper.year}
                              </p>
                            </div>
                            <Badge variant={paper.access === "open" ? "default" : "outline"}>
                              {paper.access === "open" ? "Open Access" : "Subscription"}
                            </Badge>
                          </div>
                          
                          <p className="text-sm mt-3">
                            {paper.abstract}
                          </p>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {paper.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center mr-4">
                              <Star className="h-4 w-4 mr-1 text-amber-500" />
                              {paper.citationCount} citations
                            </div>
                            <div className="flex ml-auto gap-2">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Download className="h-4 w-4 mr-1" />
                                PDF
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="journals" className="mt-6">
                {!hasSearched ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Browse academic journals
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Found <span className="font-medium">{journals.length}</span> journals matching "<span className="font-medium">{searchTerm}</span>"
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Impact Factor
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {journals.map(journal => (
                        <Card key={journal.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0 h-20 w-20 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                {journal.coverImage ? (
                                  <img 
                                    src={journal.coverImage} 
                                    alt={journal.title}
                                    className="object-cover h-full w-full"
                                  />
                                ) : (
                                  <Book className="h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                                )}
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                  {journal.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {journal.publisher}
                                </p>
                                <div className="flex items-center mt-2">
                                  <Badge variant="outline" className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/30">
                                    Impact Factor: {journal.impactFactor.toFixed(1)}
                                  </Badge>
                                  <span className="mx-2 text-xs text-gray-400">•</span>
                                  <span className="text-xs text-gray-600 dark:text-gray-400">
                                    {journal.issuesPerYear} issues per year
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-sm mt-4">
                              {journal.description}
                            </p>
                            
                            <div className="mt-4 flex justify-end">
                              <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Visit Journal
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="authors" className="mt-6">
                {!hasSearched ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Find researchers and authors
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Found <span className="font-medium">{authors.length}</span> authors matching "<span className="font-medium">{searchTerm}</span>"
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Citations
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Publications
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {authors.map(author => (
                        <Card key={author.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-6">
                              <Avatar className="h-24 w-24">
                                <AvatarImage src={author.avatar} alt={author.name} />
                                <AvatarFallback className="text-xl">{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              
                              <div className="flex-1">
                                <h4 className="text-xl font-medium hover:text-primary transition-colors">
                                  {author.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                  {author.affiliation}
                                </p>
                                
                                <div className="grid grid-cols-3 gap-4 mb-3">
                                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{author.papers}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Papers</div>
                                  </div>
                                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{author.citations}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">Citations</div>
                                  </div>
                                  <div className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{author.hIndex}</div>
                                    <div className="text-xs text-gray-600 dark:text-gray-400">h-index</div>
                                  </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {author.fields.map((field, index) => (
                                    <Badge key={index} variant="secondary">
                                      {field}
                                    </Badge>
                                  ))}
                                </div>
                                
                                <div className="flex justify-end">
                                  <Button variant="outline" size="sm">
                                    <User className="h-4 w-4 mr-1" />
                                    View Profile
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="topics" className="mt-6">
                {!hasSearched ? (
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Explore research topics
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Found <span className="font-medium">{topics.length}</span> topics matching "<span className="font-medium">{searchTerm}</span>"
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          Trending
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Publication Count
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {topics.map(topic => (
                        <Card key={topic.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-lg font-medium hover:text-primary transition-colors">
                                  {topic.name}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                  {topic.paperCount.toLocaleString()} papers
                                </p>
                              </div>
                              <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800/30">
                                <ArrowUpRight className="h-3 w-3 mr-1" />
                                {topic.trendPercentage}% {topic.trendDirection === 'up' ? 'increase' : 'decrease'}
                              </Badge>
                            </div>
                            
                            <p className="text-sm mt-3">
                              {topic.description}
                            </p>
                            
                            <div className="mt-4 flex justify-between items-center">
                              <Button variant="outline" size="sm">
                                <FileText className="h-4 w-4 mr-1" />
                                Browse Papers
                              </Button>
                              <Button variant="outline" size="sm">
                                <Bell className="h-4 w-4 mr-1" />
                                Set Alert
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
