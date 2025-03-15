
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, Key, Bell, BookOpen, Clock, FileText, Edit } from 'lucide-react';
import { toast } from "sonner";

const Profile = () => {
  const [profileImage, setProfileImage] = useState('/lovable-uploads/1a4a7191-f25e-4999-99db-f9f6c277ba5b.png');
  const [name, setName] = useState('Dr. Sarah Johnson');
  const [email, setEmail] = useState('sarah.johnson@example.edu');
  const [institution, setInstitution] = useState('Stanford University');
  const [bio, setBio] = useState('Associate Professor of Computer Science with research focus on machine learning ethics and natural language processing.');
  
  const handleSaveProfile = () => {
    toast.success("Profile updated successfully");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Sidebar */}
            <div className="w-full md:w-1/4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative group mb-4">
                      <Avatar className="h-32 w-32">
                        <AvatarImage src={profileImage} alt="Profile" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-white"
                          onClick={() => toast.info("Upload new image feature would open here")}
                        >
                          <Edit className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-1">{name}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">{institution}</p>
                    
                    <div className="w-full space-y-1 mt-4">
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                        onClick={() => toast.info("This would navigate to full profile view")}
                      >
                        <User className="mr-2 h-4 w-4" />
                        View Profile
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                        onClick={() => toast.info("This would show publications")}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Publications
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left"
                        onClick={() => toast.info("This would show activity history")}
                      >
                        <Clock className="mr-2 h-4 w-4" />
                        Activity
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="account">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="account" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Account
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </TabsTrigger>
                </TabsList>
                
                {/* Account Tab */}
                <TabsContent value="account" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="institution">Institution</Label>
                          <Input 
                            id="institution" 
                            value={institution} 
                            onChange={(e) => setInstitution(e.target.value)} 
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="academicField">Academic Field</Label>
                          <Input 
                            id="academicField" 
                            defaultValue="Computer Science" 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Biography</Label>
                        <Textarea 
                          id="bio" 
                          value={bio} 
                          onChange={(e) => setBio(e.target.value)} 
                          rows={4} 
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleSaveProfile}>
                          Save Changes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Settings Tab */}
                <TabsContent value="settings" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Privacy</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="publicProfile">Public Profile</Label>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Make your profile visible to other researchers
                              </p>
                            </div>
                            <Switch id="publicProfile" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <Label htmlFor="showActivity">Activity Visibility</Label>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Show your research activity on your profile
                              </p>
                            </div>
                            <Switch id="showActivity" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Security</h3>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full flex justify-between items-center" onClick={() => toast.info("Password change dialog would open")}>
                            <span>Change Password</span>
                            <Key className="h-4 w-4" />
                          </Button>
                          
                          <Button variant="outline" className="w-full flex justify-between items-center" onClick={() => toast.info("Two-factor authentication would be set up")}>
                            <span>Set up Two-Factor Authentication</span>
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={() => toast.success("Settings saved")}>
                          Save Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Notifications Tab */}
                <TabsContent value="notifications" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="emailNotifications">Email Notifications</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive notifications via email
                            </p>
                          </div>
                          <Switch id="emailNotifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="researchAlerts">Research Alerts</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Get notified about new research in your field
                            </p>
                          </div>
                          <Switch id="researchAlerts" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="citationAlerts">Citation Alerts</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Get notified when your papers are cited
                            </p>
                          </div>
                          <Switch id="citationAlerts" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="communityUpdates">Community Updates</Label>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive updates about community events and webinars
                            </p>
                          </div>
                          <Switch id="communityUpdates" />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={() => toast.success("Notification preferences saved")}>
                          Save Preferences
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
