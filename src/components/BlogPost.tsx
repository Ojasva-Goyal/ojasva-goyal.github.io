
import { motion } from 'framer-motion';
import { CalendarDays, Clock, Code, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
  index: number;
  liveUrl?: string; // Add optional liveUrl prop
}

const BlogPost = ({ 
  title, 
  excerpt, 
  date, 
  readTime,
  image,
  tags,
  slug,
  index,
  liveUrl
}: BlogPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="cyber-glow group overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/50 to-transparent h-16 pointer-events-none"></div>
        <div className="absolute top-2 right-2 bg-black/70 text-xs font-mono text-primary px-2 py-1 rounded border border-primary/30 z-20">
          <div className="flex items-center">
            <Code className="h-3 w-3 mr-1 text-primary" />
            <span>img_{index + 1}.jpg</span>
          </div>
        </div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop";
          }}
        />
      </div>
      
      <div className="p-6 backdrop-blur-sm dark:bg-black/30 light:bg-white/80">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors terminal-text">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2 font-mono text-sm">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground font-mono">
            <div className="flex items-center mr-4">
              <CalendarDays className="h-4 w-4 mr-1 opacity-70 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 opacity-70 text-primary" />
              <span>{readTime}</span>
            </div>
          </div>
          
          {liveUrl && (
            <Button 
              size="sm" 
              variant="outline"
              asChild
              className="gap-1.5"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4" />
                Read
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
