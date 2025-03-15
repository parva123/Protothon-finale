
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", path: "/features" },
        { label: "Pricing", path: "/pricing" },
        { label: "Integrations", path: "/integrations" },
        { label: "Case Studies", path: "/case-studies" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "/docs" },
        { label: "Tutorials", path: "/tutorials" },
        { label: "Webinars", path: "/webinars" },
        { label: "Research Papers", path: "/papers" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/careers" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Terms", path: "/terms" },
        { label: "Privacy", path: "/privacy" },
        { label: "Cookies", path: "/cookies" },
        { label: "Compliance", path: "/compliance" },
      ]
    }
  ];

  const socialLinks = [
    { label: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "#" },
    { label: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, url: "#" },
    { label: "Facebook", icon: <Facebook className="h-5 w-5" />, url: "#" },
    { label: "Instagram", icon: <Instagram className="h-5 w-5" />, url: "#" },
    { label: "GitHub", icon: <Github className="h-5 w-5" />, url: "#" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 font-serif text-xl font-semibold mb-4"
            >
              <span className="text-primary">Research</span>
              <span>Owl</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 mb-6">
              An AI-powered research platform helping students and researchers streamline academic publishing with integrity.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="lg:col-span-1">
              <h3 className="font-medium text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} ResearchOwl. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
