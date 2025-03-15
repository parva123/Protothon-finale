
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, Book, Edit, PieChart, AlertTriangle,
  FileText, CheckSquare, Target, Users, MessageSquare, 
  Video, LayoutDashboard, Bell, User, LogOut, Settings, 
  Menu, X, ChevronDown, ChevronRight, DollarSign, Bot
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check scroll position to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current route is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Navigation structure
  const navigationItems = [
    {
      label: "Research Tools",
      icon: <Book className="h-4 w-4 mr-2" />,
      items: [
        { label: "AI Literature Search", icon: <Search className="h-4 w-4 mr-2" />, path: "/search" },
        { label: "AI Writing Assistant", icon: <Edit className="h-4 w-4 mr-2" />, path: "/writing" },
        { label: "Research Gap Finder", icon: <PieChart className="h-4 w-4 mr-2" />, path: "/gaps" },
        { label: "Plagiarism Detector", icon: <AlertTriangle className="h-4 w-4 mr-2" />, path: "/plagiarism" },
      ]
    },
    {
      label: "Publishing & Compliance",
      icon: <FileText className="h-4 w-4 mr-2" />,
      items: [
        { label: "Journal Finder", icon: <Search className="h-4 w-4 mr-2" />, path: "/journals" },
        { label: "Formatting & Compliance Check", icon: <CheckSquare className="h-4 w-4 mr-2" />, path: "/compliance" },
        { label: "Journal Acceptance Predictor", icon: <Target className="h-4 w-4 mr-2" />, path: "/predictor" },
      ]
    },
    {
      label: "Collaboration & Community",
      icon: <Users className="h-4 w-4 mr-2" />,
      items: [
        { label: "Research Community", icon: <Users className="h-4 w-4 mr-2" />, path: "/community" },
        { label: "Discussion Forum", icon: <MessageSquare className="h-4 w-4 mr-2" />, path: "/community?tab=forum" },
        { label: "Mentor Matching", icon: <Users className="h-4 w-4 mr-2" />, path: "/community?tab=mentors" },
        { label: "Live Webinars", icon: <Video className="h-4 w-4 mr-2" />, path: "/community?tab=webinars" },
      ]
    },
  ];

  // Quick links
  const quickLinks = [
    { label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4 mr-2" />, path: "/dashboard" },
    { label: "Notifications", icon: <Bell className="h-4 w-4 mr-2" />, path: "/notifications" },
    { label: "Pricing", icon: <DollarSign className="h-4 w-4 mr-2" />, path: "/pricing" },
  ];

  // User profile menu
  const userMenuItems = [
    { label: "Profile", icon: <User className="h-4 w-4 mr-2" />, path: "/profile" },
    { label: "Settings", icon: <Settings className="h-4 w-4 mr-2" />, path: "/settings" },
    { label: "Logout", icon: <LogOut className="h-4 w-4 mr-2" />, onClick: () => console.log("Logout clicked") },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 font-serif text-xl md:text-2xl font-semibold"
          >
            <span className="text-primary">Nexus</span>
            <span>AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Main navigation dropdowns */}
            {navigationItems.map((category, idx) => (
              <DropdownMenu key={idx}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center px-3 py-2 text-sm">
                    {category.icon}
                    <span>{category.label}</span>
                    <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={8}
                  className="w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md animate-slideDown"
                >
                  <DropdownMenuLabel>{category.label}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {category.items.map((item, itemIdx) => (
                    <DropdownMenuItem key={itemIdx} asChild>
                      <Link 
                        to={item.path} 
                        className={`flex items-center cursor-pointer w-full ${isActive(item.path) ? 'text-primary' : ''}`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}

            {/* Quick links */}
            {quickLinks.map((link, idx) => (
              <Button 
                key={idx} 
                variant={isActive(link.path) ? "secondary" : "ghost"} 
                asChild 
                className="flex items-center px-3 py-2 text-sm"
              >
                <Link to={link.path}>
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </Button>
            ))}

            {/* Search button */}
            <Button variant="ghost" size="icon" asChild>
              <Link to="/search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>

            {/* User profile dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-56 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md animate-slideDown"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item, idx) => (
                  <DropdownMenuItem 
                    key={idx} 
                    asChild={!item.onClick}
                    onClick={item.onClick}
                  >
                    {item.onClick ? (
                      <div className="flex items-center w-full cursor-pointer">
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    ) : (
                      <Link to={item.path} className="flex items-center w-full">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md animate-slideDown">
          <div className="container mx-auto px-4 py-3 space-y-3">
            {/* Main navigation */}
            {navigationItems.map((category, idx) => (
              <div key={idx} className="space-y-1">
                <div className="font-medium text-sm flex items-center py-2">
                  {category.icon}
                  <span>{category.label}</span>
                </div>
                <div className="pl-5 space-y-1 border-l-2 border-primary/20">
                  {category.items.map((item, itemIdx) => (
                    <Link 
                      key={itemIdx} 
                      to={item.path} 
                      className={`flex items-center py-2 text-sm ${isActive(item.path) ? 'text-primary font-medium' : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Quick links */}
            <div className="space-y-1 pt-2">
              <div className="font-medium text-sm py-2">Quick Links</div>
              <div className="pl-5 space-y-1 border-l-2 border-primary/20">
                {quickLinks.map((link, idx) => (
                  <Link 
                    key={idx} 
                    to={link.path} 
                    className={`flex items-center py-2 text-sm ${isActive(link.path) ? 'text-primary font-medium' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* User profile links */}
            <div className="space-y-1 pt-2">
              <div className="font-medium text-sm py-2">Account</div>
              <div className="pl-5 space-y-1 border-l-2 border-primary/20">
                {userMenuItems.map((item, idx) => (
                  <div key={idx}>
                    {item.onClick ? (
                      <button 
                        className="flex items-center py-2 text-sm w-full text-left"
                        onClick={() => {
                          item.onClick();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link 
                        to={item.path} 
                        className={`flex items-center py-2 text-sm ${isActive(item.path) ? 'text-primary font-medium' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
