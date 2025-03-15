
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, FileText } from 'lucide-react';
import TopicCard, { Topic } from './TopicCard';

interface TopicsTabProps {
  hasSearched: boolean;
  searchTerm: string;
  topics: Topic[];
}

const TopicsTab: React.FC<TopicsTabProps> = ({ hasSearched, searchTerm, topics }) => {
  if (!hasSearched) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Explore research topics
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
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
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicsTab;
