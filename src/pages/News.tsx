
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { news } from '@/lib/data';
import NewsCard from '@/components/NewsCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter news based on search query
  const filteredNews = news.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-title">UPDATES & ANNOUNCEMENTS</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Latest News
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stay updated with the latest news, achievements, and announcements about my research and professional journey.
              </p>
              
              <div className="max-w-md mx-auto relative">
                <Input
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* News Section */}
        <Section 
          title="Recent News & Updates" 
          subtitle="WHAT'S HAPPENING"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNews.map((item, index) => (
              <NewsCard
                key={item.id}
                title={item.title}
                date={item.date}
                source={item.source}
                description={item.description}
                link={item.link}
                delay={index}
              />
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No news items found matching your search.</p>
              {searchQuery && (
                <button 
                  className="mt-4 text-primary hover:underline"
                  onClick={() => setSearchQuery('')}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </Section>
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
              {/* <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Google Scholar
              </a> */}
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

export default News;
