
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* Download Resume & Google Scholar Section */}
        <div className="container mx-auto px-4 md:px-8 py-6 flex justify-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="flex items-center gap-2" asChild>
              <a href="https://github.com/Ojasva-Goyal/ojasva-portfolio/raw/main/resume.pdf" download>
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="flex items-center gap-2" asChild>
              <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer">
                <Bookmark className="h-4 w-4" />
                <span>Google Scholar</span>
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="py-12 px-4 md:px-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="font-mono text-sm">&copy; {new Date().getFullYear()} Ojasva Goyal. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/Ojasva-Goyal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ojasva-goyal-476422230/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://medium.com/@ojasvagoyal9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Medium
              </a>
              <a href="https://x.com/goyal_ojasva/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
