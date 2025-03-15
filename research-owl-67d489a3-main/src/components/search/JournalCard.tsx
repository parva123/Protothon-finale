
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink } from 'lucide-react';

export interface Journal {
  id: number;
  title: string;
  publisher: string;
  impactFactor: number;
  description: string;
  issuesPerYear: number;
  coverImage?: string;
}

interface JournalCardProps {
  journal: Journal;
  compact?: boolean;
}

const JournalCard: React.FC<JournalCardProps> = ({ journal, compact = false }) => {
  return (
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
        
        {!compact && (
          <>
            <p className="text-sm mt-4">
              {journal.description}
            </p>
            
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                Visit Journal
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default JournalCard;
