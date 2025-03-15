
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Clock } from 'lucide-react';
import PaperCard, { Paper } from './PaperCard';

interface PapersTabProps {
  hasSearched: boolean;
  searchTerm: string;
  papers: Paper[];
}

const PapersTab: React.FC<PapersTabProps> = ({ hasSearched, searchTerm, papers }) => {
  if (!hasSearched) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Search for research papers
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
        <PaperCard key={paper.id} paper={paper} />
      ))}
    </div>
  );
};

export default PapersTab;
