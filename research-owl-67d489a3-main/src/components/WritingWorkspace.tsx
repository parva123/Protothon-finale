
import React, { useState, useRef } from 'react';
import { 
  File, Save, Share, CloudLightning, AlertTriangle, Book, 
  FileText, Download, Type, List, Highlighter, Quote, Link as LinkIcon, 
  Image, Code, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight,
  Copy, Users, MessageSquare, LayoutGrid, X, ChevronDown, Send
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const WritingWorkspace = () => {
  const [content, setContent] = useState<string>('');
  const [isAiAssistOpen, setIsAiAssistOpen] = useState<boolean>(true);
  const [activeSuggestion, setActiveSuggestion] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState<string>('');
  const [isAutoSaving, setIsAutoSaving] = useState<boolean>(false);
  const autoSaveTimeoutRef = useRef<number | null>(null);
  const lastSaveTimeRef = useRef<number>(0);

  // Sample AI suggestions
  const aiSuggestions = [
    {
      id: 'structure',
      title: 'Structure Suggestion',
      content: 'Consider adding a methodology section here to explain your research approach.',
      type: 'structure'
    },
    {
      id: 'citation',
      title: 'Citation Suggestion',
      content: 'Smith et al. (2022) published relevant findings on this topic.',
      type: 'citation'
    },
    {
      id: 'clarity',
      title: 'Clarity Improvement',
      content: 'This sentence could be clearer. Consider: "The results demonstrate a significant correlation between variables X and Y."',
      type: 'clarity'
    }
  ];

  // Handle text selection
  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection) {
      const text = selection.toString();
      if (text) {
        setSelectedText(text);
      }
    }
  };

  // Handle AI suggestion application
  const applySuggestion = (suggestion: any) => {
    // In a real app, this would insert the suggestion at the current cursor position
    // or replace selected text
    toast.success("Suggestion applied successfully");
    setActiveSuggestion(null);
  };

  // Simulate auto-saving with a rate limit
  const triggerAutoSave = () => {
    // Clear any existing timeout
    if (autoSaveTimeoutRef.current) {
      window.clearTimeout(autoSaveTimeoutRef.current);
    }

    // Only proceed if we're not already saving and it's been at least 5 seconds since the last save
    const now = Date.now();
    if (!isAutoSaving && now - lastSaveTimeRef.current > 5000) {
      setIsAutoSaving(true);
      
      // Set a timeout to simulate saving and update state
      autoSaveTimeoutRef.current = window.setTimeout(() => {
        setIsAutoSaving(false);
        lastSaveTimeRef.current = Date.now();
        // Only show a toast if it's been more than 10 seconds since the last save notification
        if (now - lastSaveTimeRef.current > 10000) {
          toast.success("Document saved automatically", {
            id: "document-saved", // Use a consistent ID to prevent duplicate toasts
          });
        }
        autoSaveTimeoutRef.current = null;
      }, 1500);
    }
  };

  // Handle content change with debounced auto-save
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    
    // Debounced auto-save
    if (!isAutoSaving) {
      // Clear any existing timeout
      if (autoSaveTimeoutRef.current) {
        window.clearTimeout(autoSaveTimeoutRef.current);
      }
      
      // Set a new timeout
      autoSaveTimeoutRef.current = window.setTimeout(() => {
        triggerAutoSave();
      }, 2000);
    }
  };

  // Format buttons for toolbar
  const formatButtons = [
    { icon: <Bold className="h-4 w-4" />, tooltip: 'Bold', command: 'bold' },
    { icon: <Italic className="h-4 w-4" />, tooltip: 'Italic', command: 'italic' },
    { icon: <Underline className="h-4 w-4" />, tooltip: 'Underline', command: 'underline' },
    { icon: <Type className="h-4 w-4" />, tooltip: 'Heading', command: 'heading' },
    { icon: <List className="h-4 w-4" />, tooltip: 'List', command: 'list' },
    { icon: <Quote className="h-4 w-4" />, tooltip: 'Quote', command: 'quote' },
    { icon: <LinkIcon className="h-4 w-4" />, tooltip: 'Link', command: 'link' },
    { icon: <Code className="h-4 w-4" />, tooltip: 'Code', command: 'code' },
    { icon: <Image className="h-4 w-4" />, tooltip: 'Image', command: 'image' },
  ];

  // Alignment buttons
  const alignmentButtons = [
    { icon: <AlignLeft className="h-4 w-4" />, tooltip: 'Align Left', command: 'alignLeft' },
    { icon: <AlignCenter className="h-4 w-4" />, tooltip: 'Align Center', command: 'alignCenter' },
    { icon: <AlignRight className="h-4 w-4" />, tooltip: 'Align Right', command: 'alignRight' },
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
      {/* Top Toolbar */}
      <div className="glass border-b border-gray-200 dark:border-gray-800 p-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => toast.info("Document saved")}>
            <Save className="h-4 w-4" />
          </Button>
          
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
          
          {/* Text formatting options */}
          <div className="flex items-center space-x-1">
            {formatButtons.map((button, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => toast.info(`Applied ${button.tooltip}`)}
              >
                {button.icon}
              </Button>
            ))}
          </div>
          
          <div className="h-4 w-px bg-gray-200 dark:bg-gray-700" />
          
          {/* Text alignment */}
          <div className="flex items-center space-x-1">
            {alignmentButtons.map((button, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={() => toast.info(`Applied ${button.tooltip}`)}
              >
                {button.icon}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {isAutoSaving ? (
            <span className="text-xs text-muted-foreground animate-pulse">Saving...</span>
          ) : (
            <span className="text-xs text-muted-foreground">Saved</span>
          )}
          
          {/* Document actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <File className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => toast.info("New document created")}>
                <File className="h-4 w-4 mr-2" />
                <span>New Document</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("Document saved")}>
                <Save className="h-4 w-4 mr-2" />
                <span>Save</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("Document ready to download")}>
                <Download className="h-4 w-4 mr-2" />
                <span>Export as PDF</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toast.info("Document shared with collaborators")}>
                <Share className="h-4 w-4 mr-2" />
                <span>Share</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={() => setIsAiAssistOpen(!isAiAssistOpen)}>
            <CloudLightning className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => toast.info("Checking document for issues")}>
            <AlertTriangle className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => toast.info("Collaborators view opened")}>
            <Users className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-grow flex">
        {/* Document editor */}
        <div className={`${isAiAssistOpen ? 'w-2/3' : 'w-full'} h-full transition-all duration-300`}>
          <div className="bg-white dark:bg-gray-900 h-full p-6 md:p-8 overflow-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Document Title</div>
                <div className="text-3xl md:text-4xl font-serif font-semibold mb-4 border-b border-dashed border-gray-200 dark:border-gray-800 pb-2">
                  Your Research Paper Title
                </div>
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <Textarea
                  placeholder="Start writing your research paper here..."
                  value={content}
                  onChange={handleContentChange}
                  onMouseUp={handleTextSelect}
                  className="min-h-[calc(100vh-300px)] text-base border-none resize-none focus-visible:ring-0 p-0"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Assistant panel */}
        {isAiAssistOpen && (
          <div className="w-1/3 border-l border-gray-200 dark:border-gray-800 h-full flex flex-col transition-all duration-300 animate-slideDown">
            <Tabs defaultValue="suggestions" className="w-full h-full">
              <TabsList className="w-full justify-start px-2 pt-2 bg-gray-50 dark:bg-gray-900/50">
                <TabsTrigger value="suggestions" className="px-3 py-1.5 text-sm">
                  <CloudLightning className="h-4 w-4 mr-2" />
                  AI Suggestions
                </TabsTrigger>
                <TabsTrigger value="references" className="px-3 py-1.5 text-sm">
                  <Book className="h-4 w-4 mr-2" />
                  References
                </TabsTrigger>
                <TabsTrigger value="chat" className="px-3 py-1.5 text-sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  AI Chat
                </TabsTrigger>
                <TabsTrigger value="outline" className="px-3 py-1.5 text-sm">
                  <LayoutGrid className="h-4 w-4 mr-2" />
                  Outline
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="suggestions" className="flex-grow overflow-auto p-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">AI Writing Suggestions</h3>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Refresh
                    </Button>
                  </div>
                  
                  {aiSuggestions.map((suggestion) => (
                    <div 
                      key={suggestion.id}
                      className={`glass p-4 rounded-lg ${
                        activeSuggestion === suggestion.id ? 'ring-2 ring-primary/50' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {suggestion.type === 'structure' && <LayoutGrid className="h-4 w-4 text-blue-500" />}
                          {suggestion.type === 'citation' && <FileText className="h-4 w-4 text-purple-500" />}
                          {suggestion.type === 'clarity' && <Highlighter className="h-4 w-4 text-amber-500" />}
                          <span className="font-medium text-sm">{suggestion.title}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => {
                            if (activeSuggestion === suggestion.id) {
                              setActiveSuggestion(null);
                            } else {
                              setActiveSuggestion(suggestion.id);
                            }
                          }}
                        >
                          {activeSuggestion === suggestion.id ? (
                            <X className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                      
                      {activeSuggestion === suggestion.id && (
                        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                          <p>{suggestion.content}</p>
                          <div className="mt-3 flex space-x-2">
                            <Button size="sm" onClick={() => applySuggestion(suggestion)}>
                              Apply
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => setActiveSuggestion(null)}>
                              Ignore
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {selectedText && (
                  <div className="mt-6 glass p-4 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Selected Text</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      "{selectedText}"
                    </p>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toast.info("Text copied to clipboard")}
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toast.info("Checking for grammar issues")}
                      >
                        Check Grammar
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => toast.info("Adding citation")}
                      >
                        Add Citation
                      </Button>
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="references" className="flex-grow overflow-auto p-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Citations & References</h3>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Adding new citation")}>
                      Add Citation
                    </Button>
                  </div>
                  
                  <div className="glass p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your document doesn't have any citations yet. Add citations as you write.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="chat" className="flex-grow overflow-auto p-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">AI Research Assistant</h3>
                  </div>
                  
                  <div className="glass p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ask me questions about your research, writing process, or for help finding relevant references.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="relative">
                      <Input
                        placeholder="Ask a question about your research..."
                        className="pr-12"
                      />
                      <Button 
                        className="absolute right-1 top-1 h-8 w-8" 
                        size="icon"
                        onClick={() => toast.info("Sending question to AI assistant")}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="outline" className="flex-grow overflow-auto p-4 bg-gray-50 dark:bg-gray-900/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Document Outline</h3>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Generating outline")}>
                      Generate Outline
                    </Button>
                  </div>
                  
                  <div className="glass p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your document outline will appear here as you write. You can also generate a suggested outline based on your research topic.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default WritingWorkspace;
