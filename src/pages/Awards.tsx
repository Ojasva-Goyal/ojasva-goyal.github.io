
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { honors } from '@/lib/data';
import HonorCard from '@/components/HonorCard';

const Awards = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="section-title">RECOGNITION</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Honors & Awards
              </h1>
              
              <p className="text-lg text-muted-foreground">
                A showcase of academic achievements, research recognitions, and competition awards throughout my academic journey.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Awards Section */}
        <Section 
          title="Achievements" 
          subtitle="HONORS & AWARDS"
          className="bg-secondary/50"
        >
          <div className="space-y-8">
            {honors.map((honor, index) => (
              <HonorCard
                key={honor.id}
                title={honor.title}
                organization={honor.organization}
                date={honor.date}
                description={honor.description}
                delay={index}
              />
            ))}
          </div>
        </Section>
      </main>
      
      <footer className="py-12 px-4 md:px-8 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="font-mono text-sm">&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Awards;
