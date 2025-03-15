
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, BookOpen, MessageSquare, Calendar, Users, Clock, FileText, AlertCircle, Check, Trash2 } from 'lucide-react';
import { toast } from "sonner";

const Notifications = () => {
  const allNotifications = [
    {
      id: 1,
      type: 'citation',
      title: 'New Citation',
      description: 'Your paper "Machine Learning Ethics: A Framework" was cited by 3 new papers.',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'paper',
      title: 'Paper Published',
      description: 'Congratulations! Your paper has been published in Nature Machine Intelligence.',
      time: '1 day ago',
      read: false,
    },
    {
      id: 3,
      type: 'message',
      title: 'New Message',
      description: 'You received a message from Prof. Michael Chen about research collaboration.',
      time: '2 days ago',
      read: true,
    },
    {
      id: 4,
      type: 'event',
      title: 'Webinar Reminder',
      description: 'The webinar "Advanced NLP Techniques" starts in 24 hours.',
      time: '3 days ago',
      read: true,
    },
    {
      id: 5,
      type: 'citation',
      title: 'Citation Milestone',
      description: 'Your research has reached 500 citations! Your h-index is now 15.',
      time: '1 week ago',
      read: true,
    },
    {
      id: 6,
      type: 'paper',
      title: 'Paper Review',
      description: 'Your paper submission to ACL 2023 has received reviewer feedback.',
      time: '1 week ago',
      read: true,
    },
    {
      id: 7,
      type: 'alert',
      title: 'Research Gap Alert',
      description: 'New research gap identified in your field: "Ethical considerations in reinforcement learning systems"',
      time: '2 weeks ago',
      read: true,
    },
  ];

  const unreadNotifications = allNotifications.filter(notification => !notification.read);
  const citationNotifications = allNotifications.filter(notification => notification.type === 'citation');
  const paperNotifications = allNotifications.filter(notification => notification.type === 'paper');
  const messageNotifications = allNotifications.filter(notification => notification.type === 'message');

  const markAllAsRead = () => {
    toast.success('All notifications marked as read');
  };

  const clearAllNotifications = () => {
    toast.success('All notifications cleared');
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'citation':
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'paper':
        return <FileText className="h-5 w-5 text-purple-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-amber-500" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const NotificationList = ({ notifications }: { notifications: typeof allNotifications }) => (
    <div className="space-y-4">
      {notifications.length === 0 ? (
        <div className="text-center py-8">
          <Bell className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">No notifications to display</p>
        </div>
      ) : (
        notifications.map((notification) => (
          <Card key={notification.id} className={`transition-all hover:shadow-md ${!notification.read ? 'border-l-4 border-l-primary' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="mt-1">{getNotificationIcon(notification.type)}</div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-base font-medium ${!notification.read ? 'text-primary' : ''}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {notification.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                {!notification.read && (
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-8"
                    onClick={() => toast.success(`Marked "${notification.title}" as read`)}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Mark as read
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 text-destructive hover:text-destructive"
                  onClick={() => toast.success(`Deleted "${notification.title}"`)}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-semibold flex items-center">
                <Bell className="h-8 w-8 mr-3 text-primary" />
                Notifications
              </h1>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={markAllAsRead}>
                  <Check className="h-4 w-4 mr-1" />
                  Mark all as read
                </Button>
                <Button variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={clearAllNotifications}>
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear all
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all" className="flex items-center">
                  <Bell className="h-4 w-4 mr-2" />
                  All
                  {unreadNotifications.length > 0 && (
                    <span className="ml-2 text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                      {unreadNotifications.length}
                    </span>
                  )}
                </TabsTrigger>
                <TabsTrigger value="unread" className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Unread
                </TabsTrigger>
                <TabsTrigger value="citations" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Citations
                </TabsTrigger>
                <TabsTrigger value="papers" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Papers
                </TabsTrigger>
                <TabsTrigger value="messages" className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Messages
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <NotificationList notifications={allNotifications} />
              </TabsContent>
              
              <TabsContent value="unread" className="mt-6">
                <NotificationList notifications={unreadNotifications} />
              </TabsContent>
              
              <TabsContent value="citations" className="mt-6">
                <NotificationList notifications={citationNotifications} />
              </TabsContent>
              
              <TabsContent value="papers" className="mt-6">
                <NotificationList notifications={paperNotifications} />
              </TabsContent>
              
              <TabsContent value="messages" className="mt-6">
                <NotificationList notifications={messageNotifications} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Notifications;
