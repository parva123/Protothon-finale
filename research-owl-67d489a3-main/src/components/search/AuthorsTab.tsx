
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, FileText } from 'lucide-react';
import AuthorCard, { Author } from './AuthorCard';

interface AuthorsTabProps {
  hasSearched: boolean;
  searchTerm: string;
  authors: Author[];
}

const AuthorsTab: React.FC<AuthorsTabProps> = ({ hasSearched, searchTerm, authors }) => {
  if (!hasSearched) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Find researchers and authors
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
          Found <span className="font-medium">{authors.length}</span> authors matching "<span className="font-medium">{searchTerm}</span>"
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Star className="h-4 w-4 mr-1" />
            Citations
          </Button>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-1" />
            Publications
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {authors.map(author => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default AuthorsTab;
