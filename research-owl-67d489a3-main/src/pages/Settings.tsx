
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Moon, Sun, Laptop, Globe, Key, Bell, Eye, Shield, Download, User, LogOut, BookOpen, Trash2 } from 'lucide-react';
import { toast } from "sonner";

const Settings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Settings</h1>
            
            <Tabs defaultValue="appearance" className="w-full">
              <div className="flex overflow-x-auto pb-2 mb-6">
                <TabsList className="inline-flex h-auto p-1 gap-1">
                  <TabsTrigger value="appearance" className="flex items-center gap-2 px-3 py-2">
                    <Sun className="h-4 w-4" />
                    <span>Appearance</span>
                  </TabsTrigger>
                  <TabsTrigger value="account" className="flex items-center gap-2 px-3 py-2">
                    <User className="h-4 w-4" />
                    <span>Account</span>
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="flex items-center gap-2 px-3 py-2">
                    <Shield className="h-4 w-4" />
                    <span>Privacy</span>
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="flex items-center gap-2 px-3 py-2">
                    <Bell className="h-4 w-4" />
                    <span>Notifications</span>
                  </TabsTrigger>
                  <TabsTrigger value="data" className="flex items-center gap-2 px-3 py-2">
                    <Download className="h-4 w-4" />
                    <span>Data</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Appearance Tab */}
              <TabsContent value="appearance">
                <Card>
                  <CardHeader>
                    <CardTitle>Appearance Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="darkMode">Theme Preference</Label>
                          <p className="text-sm text-muted-foreground">
                            Choose your preferred theme
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Select defaultValue="system">
                            <SelectTrigger className="w-36">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">
                                <div className="flex items-center gap-2">
                                  <Sun className="h-4 w-4" />
                                  <span>Light</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="dark">
                                <div className="flex items-center gap-2">
                                  <Moon className="h-4 w-4" />
                                  <span>Dark</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="system">
                                <div className="flex items-center gap-2">
                                  <Laptop className="h-4 w-4" />
                                  <span>System</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="reducedMotion">Reduced Motion</Label>
                          <p className="text-sm text-muted-foreground">
                            Reduce animations and motion effects
                          </p>
                        </div>
                        <Switch id="reducedMotion" />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="language">Language</Label>
                          <p className="text-sm text-muted-foreground">
                            Choose your preferred language
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Select defaultValue="english">
                            <SelectTrigger className="w-36">
                              <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="english">
                                <div className="flex items-center gap-2">
                                  <Globe className="h-4 w-4" />
                                  <span>English</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="spanish">Spanish</SelectItem>
                              <SelectItem value="french">French</SelectItem>
                              <SelectItem value="german">German</SelectItem>
                              <SelectItem value="chinese">Chinese</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => toast.success("Appearance settings saved")}>
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Account Tab */}
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Email Address</Label>
                          <p className="text-sm text-muted-foreground">
                            sarah.johnson@example.edu
                          </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toast.info("Email change dialog would open")}>
                          Change
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label>Password</Label>
                          <p className="text-sm text-muted-foreground">
                            Last changed 3 months ago
                          </p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toast.info("Password change dialog would open")}>
                          <Key className="h-4 w-4 mr-2" />
                          Change
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label>Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Adds an extra layer of security to your account
                          </p>
                        </div>
                        <Switch id="2fa" />
                      </div>
                      
                      <div className="border-t pt-4">
                        <p className="text-sm font-medium text-destructive">Danger Zone</p>
                        <div className="mt-2 space-y-3">
                          <Button 
                            variant="outline" 
                            className="w-full justify-between border-destructive/20 hover:bg-destructive/10"
                            onClick={() => toast.info("Account deactivation dialog would open")}
                          >
                            <span>Deactivate Account</span>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full justify-between text-destructive border-destructive/20 hover:bg-destructive/10"
                            onClick={() => toast.info("Account deletion dialog would open")}
                          >
                            <span>Delete Account Permanently</span>
                            <LogOut className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Privacy Tab */}
              <TabsContent value="privacy">
                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="publicProfile">Public Profile</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow others to view your profile
                          </p>
                        </div>
                        <Switch id="publicProfile" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="showActivity">Activity Visibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Show your research activity on your profile
                          </p>
                        </div>
                        <Switch id="showActivity" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="dataCollection">Data Collection</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow us to collect usage data to improve services
                          </p>
                        </div>
                        <Switch id="dataCollection" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="cookieSettings">Cookie Settings</Label>
                          <p className="text-sm text-muted-foreground">
                            Manage your cookie preferences
                          </p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => toast.info("Cookie settings dialog would open")}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Manage
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => toast.success("Privacy settings saved")}>
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Notifications Tab */}
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch id="emailNotifications" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="researchAlerts">Research Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about new research in your field
                          </p>
                        </div>
                        <Switch id="researchAlerts" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="citationAlerts">Citation Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when your papers are cited
                          </p>
                        </div>
                        <Switch id="citationAlerts" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="communityUpdates">Community Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about community events and webinars
                          </p>
                        </div>
                        <Switch id="communityUpdates" />
                      </div>
                      
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="space-y-0.5">
                          <Label htmlFor="marketingEmails">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive promotional emails and special offers
                          </p>
                        </div>
                        <Switch id="marketingEmails" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => toast.success("Notification settings saved")}>
                        Save Changes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Data Tab */}
              <TabsContent value="data">
                <Card>
                  <CardHeader>
                    <CardTitle>Data & Export</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-sm">
                        Export your data or manage how your information is stored and used.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <Button 
                          variant="outline" 
                          className="h-auto py-6 flex flex-col items-center justify-center"
                          onClick={() => toast.info("Data export would start")}
                        >
                          <Download className="h-6 w-6 mb-2" />
                          <span className="font-medium">Export All Data</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Download your research, citations, and profile
                          </span>
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="h-auto py-6 flex flex-col items-center justify-center"
                          onClick={() => toast.info("Citation export would start")}
                        >
                          <BookOpen className="h-6 w-6 mb-2" />
                          <span className="font-medium">Export Citations</span>
                          <span className="text-xs text-muted-foreground mt-1">
                            BibTeX, RIS, and other formats
                          </span>
                        </Button>
                      </div>
                      
                      <div className="border-t pt-4 mt-6">
                        <p className="text-sm font-medium mb-4">Data Retention & Privacy</p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="searchHistory">
                                Search History
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                Store your search history for better recommendations
                              </p>
                            </div>
                            <Switch id="searchHistory" defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label htmlFor="aiUsage">
                                AI Usage Data
                              </Label>
                              <p className="text-xs text-muted-foreground">
                                Allow AI to learn from your research patterns
                              </p>
                            </div>
                            <Switch id="aiUsage" defaultChecked />
                          </div>
                          
                          <Button 
                            variant="outline"
                            className="w-full justify-between text-amber-600 border-amber-200 dark:border-amber-800/30 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                            onClick={() => toast.info("Search history would be cleared")}
                          >
                            <span>Clear Search History</span>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
