
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { blogPosts } from '@/lib/data';
import BlogPost from '@/components/BlogPost';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('all');
  
  // Extract unique tags
  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];
  
  // Filter blog posts based on search query and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = activeTag === 'all' || post.tags.includes(activeTag);
    
    return matchesSearch && matchesTag;
  });
  
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
              <p className="section-title">MY INSIGHTS</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog & Articles
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sharing my thoughts, experiences, and technical insights on artificial intelligence, drone technology, and data science.
              </p>
              
              <div className="max-w-md mx-auto relative">
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <Section 
          title="Latest Articles" 
          subtitle="READ & LEARN"
        >
          {/* Tags filter */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            <Button
              variant={activeTag === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTag('all')}
              className="rounded-full"
            >
              All Topics
            </Button>
            
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={activeTag === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveTag(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {/* Blog posts grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                tags={post.tags}
                slug={post.slug}
                index={index}
              />
            ))}
          </motion.div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
              <div className="flex gap-4 justify-center mt-4">
                {searchQuery && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchQuery('')}
                  >
                    Clear Search
                  </Button>
                )}
                {activeTag !== 'all' && (
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveTag('all')}
                  >
                    Show All Topics
                  </Button>
                )}
              </div>
            </div>
          )}
        </Section>
        
        {/* Newsletter Section */}
        <section className="py-24 px-4 md:px-8 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/10 rotate-12 transform translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-panel p-8 text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with my latest articles, projects, and insights on AI, drone technology, and data science.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow"
                />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </section>
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Blog;
