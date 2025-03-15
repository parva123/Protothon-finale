
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Import search components
import AllResultsTab from '@/components/search/AllResultsTab';
import PapersTab from '@/components/search/PapersTab';
import JournalsTab from '@/components/search/JournalsTab';
import AuthorsTab from '@/components/search/AuthorsTab';
import TopicsTab from '@/components/search/TopicsTab';

// Import sample data
import { 
  samplePapers, 
  sampleJournals,
  sampleAuthors,
  sampleTopics 
} from '@/components/search/SearchData';

const Search = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query: string, filters: any) => {
    console.log('Search query:', query, 'Filters:', filters);
    setSearchTerm(query);
    setHasSearched(true);
    toast.success(`Searched for "${query}"`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              AI-Powered Literature Search
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find relevant research papers, journals, and authors with advanced AI filtering
            </p>
          </div>

          <SearchBar initialQuery={searchTerm} onSearch={handleSearch} />

          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All Results</TabsTrigger>
                <TabsTrigger value="papers">Papers</TabsTrigger>
                <TabsTrigger value="journals">Journals</TabsTrigger>
                <TabsTrigger value="authors">Authors</TabsTrigger>
                <TabsTrigger value="topics">Topics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <AllResultsTab 
                  hasSearched={hasSearched}
                  searchTerm={searchTerm}
                  papers={samplePapers}
                  journals={sampleJournals}
                  authors={sampleAuthors}
                  setActiveTab={setActiveTab}
                />
              </TabsContent>
              
              <TabsContent value="papers" className="mt-6">
                <PapersTab 
                  hasSearched={hasSearched}
                  searchTerm={searchTerm}
                  papers={samplePapers}
                />
              </TabsContent>
              
              <TabsContent value="journals" className="mt-6">
                <JournalsTab 
                  hasSearched={hasSearched}
                  searchTerm={searchTerm}
                  journals={sampleJournals}
                />
              </TabsContent>
              
              <TabsContent value="authors" className="mt-6">
                <AuthorsTab 
                  hasSearched={hasSearched}
                  searchTerm={searchTerm}
                  authors={sampleAuthors}
                />
              </TabsContent>
              
              <TabsContent value="topics" className="mt-6">
                <TopicsTab 
                  hasSearched={hasSearched}
                  searchTerm={searchTerm}
                  topics={sampleTopics}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Search;
