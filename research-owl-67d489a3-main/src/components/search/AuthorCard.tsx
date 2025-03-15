
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from 'lucide-react';

export interface Author {
  id: number;
  name: string;
  affiliation: string;
  papers: number;
  citations: number;
  hIndex: number;
  fields: string[];
  avatar?: string;
}

interface AuthorCardProps {
  author: Author;
  compact?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({ author, compact = false }) => {
  return (
    <Card key={author.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className={compact ? "h-16 w-16" : "h-24 w-24"}>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className={compact ? "" : "text-xl"}>
              {author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h4 className={`${compact ? "text-lg" : "text-xl"} font-medium hover:text-primary transition-colors`}>
              {author.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {author.affiliation}
            </p>
            
            {compact ? (
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
            ) : (
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
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {author.fields.map((field, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {field}
            </Badge>
          ))}
        </div>

        {!compact && (
          <div className="flex justify-end mt-4">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-1" />
              View Profile
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
