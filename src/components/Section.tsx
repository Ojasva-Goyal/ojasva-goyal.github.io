
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
}

const Section = ({ title, subtitle, children, className = '', id, divider = false }: SectionProps) => {
  return (
    <section 
      id={id}
      className={`py-20 px-4 md:px-8 lg:px-12 ${className}`}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          {subtitle && <p className="section-title">{subtitle}</p>}
          <h2 className="section-heading">{title}</h2>
          {divider && <hr className="w-24 h-1 bg-primary mt-6 mb-0 border-0" />}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
