
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WritingWorkspace from '@/components/WritingWorkspace';

const Writing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20 md:pt-20 pb-0 flex flex-col">
        <WritingWorkspace />
      </main>
      
      <Footer />
    </div>
  );
};

export default Writing;
