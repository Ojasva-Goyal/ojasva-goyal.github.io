
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { experiences } from '@/lib/data';
import { CalendarDays, Building, Clock, Award } from 'lucide-react';

const Experience = () => {
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
              <p className="section-title">MY JOURNEY</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Experience
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                My career journey spans research, internships, and academic projects, all focused on advancing AI and drone technology. Each experience has contributed to my growth as a data scientist and innovator.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Experience Timeline Section */}
        <Section 
          title="Work Experience" 
          subtitle="PROFESSIONAL TIMELINE"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-border -ml-0.5 md:ml-0" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}
              >
                <div className={`flex items-center ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <div className={`hidden md:block w-1/2 ${
                    index % 2 === 0 ? 'pr-12' : 'order-last pl-12'
                  }`}>
                    <div className={`glass-panel p-6 shadow-lg ${
                      index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                    }`}>
                      <div className="mb-2">
                        <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                        <Building className="h-3 w-3 opacity-70" />
                        <span>{exp.company}</span>
                      </div>
                      
                      <p className="mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-4 w-4 bg-primary rounded-full"></div>
                    <div className="h-8 w-8 bg-primary/20 absolute rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Date */}
                  <div className={`pl-16 md:w-1/2 ${
                    index % 2 === 0 ? 'md:order-first md:pr-12 md:pl-0' : 'md:pl-12'
                  }`}>
                    <div className="mb-2 md:hidden">
                      <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      <h4 className="font-medium">{exp.date}</h4>
                    </div>
                    
                    <div className="md:hidden">
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                        <Building className="h-3 w-3 opacity-70" />
                        <span>{exp.company}</span>
                      </div>
                      
                      <p className="mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
        
        {/* Achievements Section */}
        <Section 
          title="Key Achievements" 
          subtitle="MILESTONES & RECOGNITION"
          className="bg-secondary/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-6 text-center"
            >
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Nucleus: The Tech Show Winner</h3>
              <p className="text-muted-foreground">
                First place in the startup category in Nucleus: The Tech Show with a drone-based solution for disaster management.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-6 text-center"
            >
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Research Publication</h3>
              <p className="text-muted-foreground">
                Co-authored research papers on deep-learning for wheat rust detection, published in a peer-reviewed journals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 text-center"
            >
              <Award className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovator of the Year, 2024-2025</h3>
              <p className="text-muted-foreground">
                Received the Innovator of the Year Award by BITSAA & CEL(Centre of Entreprenuership & Leadership) for my deep-tech startup and innovation in the DL framework.
              </p>
            </motion.div>
          </div>
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

export default Experience;
