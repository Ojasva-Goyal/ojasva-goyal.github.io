
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface HonorCardProps {
  title: string;
  organization: string;
  date: string;
  description: string;
  delay?: number;
}

const HonorCard = ({ 
  title,
  organization,
  date,
  description,
  delay = 0 
}: HonorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Award className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      <div>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
            {date}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-1">{organization}</p>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default HonorCard;
