
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, User, ArrowUpRight } from 'lucide-react';
import PaperCard, { Paper } from './PaperCard';
import JournalCard, { Journal } from './JournalCard';
import AuthorCard, { Author } from './AuthorCard';

interface AllResultsTabProps {
  hasSearched: boolean;
  searchTerm: string;
  papers: Paper[];
  journals: Journal[];
  authors: Author[];
  setActiveTab: (tab: string) => void;
}

const AllResultsTab: React.FC<AllResultsTabProps> = ({ 
  hasSearched, 
  searchTerm,
  papers, 
  journals, 
  authors,
  setActiveTab
}) => {
  if (!hasSearched) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Enter a search query to find research materials
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Papers Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            <FileText className="h-5 w-5 mr-2 text-blue-500" />
            Research Papers
          </h3>
          <Button variant="link" size="sm" onClick={() => setActiveTab("papers")}>
            View all papers
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {papers.slice(0, 2).map(paper => (
            <PaperCard key={paper.id} paper={paper} compact={true} />
          ))}
        </div>
      </section>
      
      {/* Journals Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
            Journals
          </h3>
          <Button variant="link" size="sm" onClick={() => setActiveTab("journals")}>
            View all journals
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {journals.slice(0, 2).map(journal => (
            <JournalCard key={journal.id} journal={journal} compact={true} />
          ))}
        </div>
      </section>
      
      {/* Authors Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium flex items-center">
            <User className="h-5 w-5 mr-2 text-green-500" />
            Authors
          </h3>
          <Button variant="link" size="sm" onClick={() => setActiveTab("authors")}>
            View all authors
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {authors.slice(0, 2).map(author => (
            <AuthorCard key={author.id} author={author} compact={true} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllResultsTab;
