
import { motion } from 'framer-motion';
import { ExternalLink, Github, BookOpen, Code, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  publicationUrl?: string;
  delay?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  tags,
  githubUrl,
  liveUrl,
  publicationUrl,
  delay = 0 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="cyber-glow overflow-hidden group"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black/50 to-transparent h-16 pointer-events-none"></div>
        <div className="absolute top-2 right-2 bg-black/70 text-xs font-mono text-primary px-2 py-1 rounded border border-primary/30 z-20">
          <div className="flex items-center">
            <Terminal className="h-3 w-3 mr-1 text-primary" />
            <span>project_{delay + 1}</span>
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
      
      <div className="p-6 backdrop-blur-sm dark:bg-black/40 light:bg-white/90">
        <h3 className="text-xl font-bold mb-2 terminal-text">{title}</h3>
        <p className="text-muted-foreground mb-4 font-mono text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-3">
          {githubUrl && (
            <Button size="sm" variant="outline" asChild className="cyber-button">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground">
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            </Button>
          )}
          
          {publicationUrl && (
            <Button size="sm" variant="secondary" asChild className="cyber-button">
              <a href={publicationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Publication</span>
              </a>
            </Button>
          )}
          
          {liveUrl && (
            <Button size="sm" variant="default" asChild className="cyber-button">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-foreground">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
