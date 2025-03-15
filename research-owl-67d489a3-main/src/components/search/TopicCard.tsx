
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FileText, Bell } from 'lucide-react';

export interface Topic {
  id: number;
  name: string;
  paperCount: number;
  trendDirection: "up" | "down";
  trendPercentage: number;
  description: string;
}

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  return (
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
  );
};

export default TopicCard;
