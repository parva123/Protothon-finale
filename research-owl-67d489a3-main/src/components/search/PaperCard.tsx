
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Star, ExternalLink, Download } from 'lucide-react';

export interface Paper {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  citationCount: number;
  abstract: string;
  tags: string[];
  access: "open" | "subscription";
}

interface PaperCardProps {
  paper: Paper;
  compact?: boolean;
}

const PaperCard: React.FC<PaperCardProps> = ({ paper, compact = false }) => {
  return (
    <Card key={paper.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-medium hover:text-primary transition-colors">
              {paper.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {paper.authors.join(", ")} • {paper.journal} • {paper.year}
            </p>
          </div>
          <Badge variant={paper.access === "open" ? "default" : "outline"}>
            {paper.access === "open" ? "Open Access" : "Subscription"}
          </Badge>
        </div>
        
        <p className={`text-sm mt-3 ${compact ? "line-clamp-2" : ""}`}>
          {paper.abstract}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {paper.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="mt-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center mr-4">
            <Star className="h-4 w-4 mr-1 text-amber-500" />
            {paper.citationCount} citations
          </div>
          <div className="flex ml-auto gap-2">
            {!compact && (
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-1" />
                View
              </Button>
            )}
            <Button variant={compact ? "ghost" : "outline"} size="sm">
              <Download className="h-4 w-4 mr-1" />
              PDF
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaperCard;
