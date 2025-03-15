
import React, { useState } from 'react';
import { Search, Filter, X, Book, FileText, User, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type SearchBarProps = {
  initialQuery?: string;
  onSearch?: (query: string, filters: any) => void;
};

const SearchBar = ({ initialQuery = '', onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('any');
  const [recentSearches, setRecentSearches] = useState([
    'machine learning ethics',
    'climate change adaptation strategies',
    'neural network architectures',
    'gene therapy advancements'
  ]);

  const searchTypes = [
    { value: 'all', label: 'All Content' },
    { value: 'papers', label: 'Research Papers' },
    { value: 'journals', label: 'Journals' },
    { value: 'authors', label: 'Authors' },
    { value: 'topics', label: 'Research Topics' },
  ];

  const yearOptions = [
    { value: 'any', label: 'Any Year' },
    { value: 'last-year', label: 'Last Year' },
    { value: 'last-5-years', label: '5 Years' },
    { value: 'last-10-years', label: '10 Years' },
    { value: 'custom', label: 'Custom Range' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Add to recent searches if not already present
    if (!recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev].slice(0, 5));
    }
    
    if (onSearch) {
      onSearch(query, { type: selectedType, year: selectedYear });
    }
  };

  const clearSearch = () => {
    setQuery('');
    setIsExpanded(false);
  };

  const handleRecentSearchClick = (search: string) => {
    setQuery(search);
    setIsExpanded(false);
    if (onSearch) {
      onSearch(search, { type: selectedType, year: selectedYear });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto transition-all duration-300">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center glass rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md focus-within:shadow-md focus-within:ring-2 focus-within:ring-primary/30">
          <div className="flex-grow flex items-center relative">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400 absolute left-4" />
            <Input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsExpanded(e.target.value.length > 0);
              }}
              onFocus={() => setIsExpanded(true)}
              placeholder="Search for research papers, topics, or journals..."
              className="pl-12 py-6 text-base border-0 bg-transparent focus-visible:ring-0 placeholder:text-gray-500"
            />
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={clearSearch}
                className="absolute right-2"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filters dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                <Filter className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md animate-slideDown"
            >
              <DropdownMenuLabel>Filter Results</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-gray-500 py-1">Content Type</DropdownMenuLabel>
                {searchTypes.map((type) => (
                  <DropdownMenuItem
                    key={type.value}
                    className={`flex items-center cursor-pointer ${
                      selectedType === type.value ? 'bg-primary/10 text-primary' : ''
                    }`}
                    onClick={() => setSelectedType(type.value)}
                  >
                    {type.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs text-gray-500 py-1">Time Period</DropdownMenuLabel>
                {yearOptions.map((year) => (
                  <DropdownMenuItem
                    key={year.value}
                    className={`flex items-center cursor-pointer ${
                      selectedYear === year.value ? 'bg-primary/10 text-primary' : ''
                    }`}
                    onClick={() => setSelectedYear(year.value)}
                  >
                    {year.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1" />

          <Button type="submit" className="rounded-xl m-1 px-4 py-2">
            Search
          </Button>
        </div>

        {/* Expanded search suggestions/history */}
        {isExpanded && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-xl p-4 shadow-lg divide-y divide-gray-200 dark:divide-gray-800 animate-slideDown z-10">
            {/* Recent searches */}
            <div className="pb-2">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Recent Searches</h4>
              <ul className="space-y-1">
                {recentSearches.map((search, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleRecentSearchClick(search)}
                      className="flex items-center w-full text-left px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
                    >
                      <Clock className="h-4 w-4 mr-2 text-gray-500" />
                      <span>{search}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick filters */}
            <div className="pt-3">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Search By Category</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('papers');
                    handleSubmit(new Event('submit') as unknown as React.FormEvent);
                  }}
                  className="flex items-center px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <Book className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm">Research Papers</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('journals');
                    handleSubmit(new Event('submit') as unknown as React.FormEvent);
                  }}
                  className="flex items-center px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <FileText className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm">Journals</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedType('authors');
                    handleSubmit(new Event('submit') as unknown as React.FormEvent);
                  }}
                  className="flex items-center px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <User className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                  <span className="text-sm">Authors</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
