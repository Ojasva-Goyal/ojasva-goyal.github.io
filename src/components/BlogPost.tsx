
import { motion } from 'framer-motion';
import { CalendarDays, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  slug: string;
  index: number;
}

const BlogPost = ({ 
  title, 
  excerpt, 
  date, 
  readTime,
  image,
  tags,
  slug,
  index 
}: BlogPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card group overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${slug}`}>{title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <div className="flex items-center mr-4">
            <CalendarDays className="h-4 w-4 mr-1 opacity-70" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 opacity-70" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
