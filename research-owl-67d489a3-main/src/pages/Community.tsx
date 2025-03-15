
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, Users, UserPlus, Video, Search, 
  Calendar, User, GraduationCap, Award, ArrowRight,
  ThumbsUp, BookOpen, Bookmark, MessageCircle, ExternalLink
} from 'lucide-react';
import { toast } from "sonner";

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Associate Professor of Computer Science",
    institution: "Stanford University",
    expertise: ["Machine Learning", "Natural Language Processing", "AI Ethics"],
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.9,
    students: 28,
    available: true
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Professor of Biochemistry",
    institution: "Harvard University",
    expertise: ["Genomics", "Proteomics", "Drug Discovery"],
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    students: 35,
    available: true
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    title: "Research Scientist",
    institution: "Google Research",
    expertise: ["Computer Vision", "Deep Learning", "Robotics"],
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.7,
    students: 17,
    available: false
  },
  {
    id: 4,
    name: "Dr. David Kim",
    title: "Assistant Professor of Physics",
    institution: "MIT",
    expertise: ["Quantum Computing", "Theoretical Physics", "Materials Science"],
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4.9,
    students: 22,
    available: true
  }
];

const discussionTopics = [
  {
    id: 1,
    title: "Best Practices for Research Data Management",
    category: "Research Methods",
    author: {
      name: "Alex Wong",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    replies: 32,
    views: 127,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    title: "How to Get Your First Paper Published in a Top Journal",
    category: "Publishing Tips",
    author: {
      name: "Maria Garcia",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    replies: 48,
    views: 215,
    lastActive: "4 hours ago"
  },
  {
    id: 3,
    title: "Ethical Considerations in AI Research",
    category: "Ethics",
    author: {
      name: "Jamal Lewis",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    replies: 56,
    views: 189,
    lastActive: "1 day ago"
  },
  {
    id: 4,
    title: "Tools for Remote Research Collaboration",
    category: "Tools & Resources",
    author: {
      name: "Lisa Chen",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    replies: 27,
    views: 143,
    lastActive: "2 days ago"
  }
];

const webinars = [
  {
    id: 1,
    title: "Applying Machine Learning to Scientific Discovery",
    speaker: "Dr. James Wilson, DeepMind",
    date: "June 15, 2023",
    time: "10:00 AM - 11:30 AM (PST)",
    description: "Learn how machine learning techniques are accelerating scientific breakthroughs across disciplines.",
    attendees: 156,
    registered: false
  },
  {
    id: 2,
    title: "Navigating the Peer Review Process: Tips from Journal Editors",
    speaker: "Panel of Journal Editors",
    date: "June 18, 2023",
    time: "1:00 PM - 2:30 PM (PST)",
    description: "Get insider advice from experienced journal editors on how to successfully navigate peer review.",
    attendees: 213,
    registered: true
  },
  {
    id: 3,
    title: "Research Grant Writing Workshop",
    speaker: "Dr. Elizabeth Parker, Research Funding Consultant",
    date: "June 24, 2023",
    time: "9:00 AM - 12:00 PM (PST)",
    description: "Hands-on workshop on writing compelling research grant proposals with higher success rates.",
    attendees: 178,
    registered: false
  }
];

const Community = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleExpertiseToggle = (expertise: string) => {
    if (selectedExpertise.includes(expertise)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== expertise));
    } else {
      setSelectedExpertise([...selectedExpertise, expertise]);
    }
  };

  const filteredMentors = mentors.filter(mentor => {
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Filter by selected expertise
    const matchesExpertise = selectedExpertise.length === 0 || 
      mentor.expertise.some(e => selectedExpertise.includes(e));
    
    return matchesSearch && matchesExpertise;
  });

  const requestMentorship = (mentorId: number) => {
    toast.success(`Mentorship request sent! We'll notify you when they respond.`);
  };

  const registerForWebinar = (webinarId: number, isRegistered: boolean) => {
    if (isRegistered) {
      toast.info("You're already registered for this webinar");
    } else {
      toast.success("Registration successful! Check your email for details");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Research Community & Mentorship</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow researchers, find expert mentors, and participate in live webinars to accelerate your research journey.
          </p>
        </div>
        
        <Tabs defaultValue="mentors" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mentors" className="flex gap-2 items-center">
              <UserPlus className="h-4 w-4" />
              <span>Find Mentors</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex gap-2 items-center">
              <MessageSquare className="h-4 w-4" />
              <span>Discussion Forum</span>
            </TabsTrigger>
            <TabsTrigger value="webinars" className="flex gap-2 items-center">
              <Video className="h-4 w-4" />
              <span>Live Webinars</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="mentors" className="pt-6">
            <div className="mb-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search mentors by name or expertise..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Natural Language Processing", "Computer Vision", 
                   "Genomics", "Quantum Computing", "AI Ethics"].map(expertise => (
                    <Button
                      key={expertise}
                      variant={selectedExpertise.includes(expertise) ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleExpertiseToggle(expertise)}
                      className="text-xs"
                    >
                      {expertise}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMentors.map(mentor => (
                <Card key={mentor.id} className={`${mentor.available ? '' : 'opacity-75'}`}>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <img 
                      src={mentor.imageUrl} 
                      alt={mentor.name} 
                      className="rounded-full h-16 w-16 object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-xl flex items-center">
                        {mentor.name}
                        {mentor.available ? (
                          <span className="ml-2 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                        ) : (
                          <span className="ml-2 text-xs text-muted-foreground">(Not Available)</span>
                        )}
                      </CardTitle>
                      <CardDescription>{mentor.title}</CardDescription>
                      <CardDescription>{mentor.institution}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex gap-1 mb-2">
                        {mentor.expertise.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm">
                        <ThumbsUp className="h-3.5 w-3.5 mr-1 text-yellow-500" />
                        <span className="font-medium">{mentor.rating}/5.0</span>
                        <span className="mx-2">•</span>
                        <GraduationCap className="h-3.5 w-3.5 mr-1 text-blue-500" />
                        <span>{mentor.students} mentees</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Provides guidance on research methods and paper writing</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Published in top journals in their field</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm">Typically responds within 48 hours</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      disabled={!mentor.available}
                      onClick={() => requestMentorship(mentor.id)}
                    >
                      Request Mentorship
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Don't see a mentor in your research area? We're constantly adding new mentors.
              </p>
              <Button variant="outline">
                Request a Specific Mentor
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="forum" className="pt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Discussion Forum</h2>
              <div className="flex gap-2">
                <Button>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  New Topic
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {discussionTopics.map(topic => (
                <Card key={topic.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                  <CardContent className="p-4 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex gap-4 items-start mb-4 md:mb-0">
                      <div className="flex-shrink-0">
                        <img 
                          src={topic.author.avatar} 
                          alt={topic.author.name} 
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium hover:text-primary transition">{topic.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <span className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                            {topic.category}
                          </span>
                          <span className="mx-2">•</span>
                          <span>By {topic.author.name}</span>
                          <span className="mx-2">•</span>
                          <span>Active {topic.lastActive}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center md:gap-8 text-sm justify-between md:justify-end">
                      <div className="flex items-center">
                        <MessageSquare className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                        <span>{topic.replies} replies</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                        <span>{topic.views} views</span>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              <div className="text-sm text-muted-foreground">
                Page 1 of 12
              </div>
              <Button size="sm">
                Next
              </Button>
            </div>
            
            <Card className="mt-10">
              <CardHeader>
                <CardTitle>Popular Categories</CardTitle>
                <CardDescription>Browse discussions by research area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Research Methods", "Publishing Tips", "Career Advice", "Ethics", 
                   "Tools & Resources", "Funding", "Interdisciplinary Research", "Open Science"].map(category => (
                    <Button key={category} variant="outline" className="justify-start">
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="webinars" className="pt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Upcoming Live Webinars</h2>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  My Calendar
                </Button>
                <Button variant="outline">
                  <Video className="h-4 w-4 mr-2" />
                  Past Recordings
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              {webinars.map(webinar => (
                <Card key={webinar.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <User className="h-3.5 w-3.5 mr-1" />
                          <span>{webinar.speaker}</span>
                          <span className="mx-2">•</span>
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          <span>{webinar.date}, {webinar.time}</span>
                        </div>
                        <p className="text-sm mb-4">{webinar.description}</p>
                        <div className="flex items-center text-sm">
                          <Users className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                          <span>{webinar.attendees} researchers attending</span>
                        </div>
                      </div>
                      <div className="md:w-1/3 flex flex-col justify-between">
                        <div className="mb-4 md:mb-0 md:text-right">
                          {webinar.registered ? (
                            <>
                              <div className="text-sm text-primary font-medium mb-2">You're registered! ✓</div>
                              <div className="text-xs text-muted-foreground">
                                Calendar invite sent to your email
                              </div>
                            </>
                          ) : (
                            <div className="text-sm text-muted-foreground mb-2">
                              Seats available
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button 
                            variant={webinar.registered ? "outline" : "default"}
                            onClick={() => registerForWebinar(webinar.id, webinar.registered)}
                          >
                            {webinar.registered ? "Already Registered" : "Register Now"}
                          </Button>
                          <Button variant="ghost" className="flex items-center">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Add to Watchlist
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-10">
              <CardHeader>
                <CardTitle>Want to Share Your Expertise?</CardTitle>
                <CardDescription>
                  Submit a proposal to host your own research webinar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">
                  Hosting a webinar is a great way to share your research, build your reputation, and connect with researchers in your field.
                </p>
                <Button>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Submit Webinar Proposal
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;
