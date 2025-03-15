
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';
import JournalCard, { Journal } from './JournalCard';

interface JournalsTabProps {
  hasSearched: boolean;
  searchTerm: string;
  journals: Journal[];
}

const JournalsTab: React.FC<JournalsTabProps> = ({ hasSearched, searchTerm, journals }) => {
  if (!hasSearched) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Browse academic journals
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
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
    </div>
  );
};

export default JournalsTab;
