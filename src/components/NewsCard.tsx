
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsCardProps {
  title: string;
  date: string;
  source: string;
  description: string;
  link?: string;
  delay?: number;
}

const NewsCard = ({ 
  title, 
  date, 
  source,
  description,
  link,
  delay = 0 
}: NewsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="glass-panel p-6 overflow-hidden"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="flex items-center text-sm text-muted-foreground mb-4">
        <Calendar className="h-4 w-4 mr-1" />
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{source}</span>
      </div>
      
      <p className="text-muted-foreground mb-4">{description}</p>
      
      {link && (
        <div className="flex justify-end">
          <Button size="sm" variant="outline" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <span>Read More</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      )}
    </motion.div>
  );
};

export default NewsCard;
