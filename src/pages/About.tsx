
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { skills, education } from '@/lib/data';
import { Download, BookOpen, Award, Code, Bookmark, Terminal, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="matrix-bg absolute inset-0 opacity-5"></div>
          </div>
          
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="section-title">ABOUT ME</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
                  <span className="geek-accent">Exploring</span> the Intersection of AI, Robotics & Sustainability
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  <span className="text-primary font-mono">{'>'}</span> I'm a final year undergraduate student pursing my bachelors in Civil and Data Science with a focus on artificial intelligence and drone technology. My passion lies in developing innovative solutions at the intersection of deep learning and autonomous systems.
                </p>
                
                <p className="text-lg text-muted-foreground mb-8">
                  <span className="text-primary font-mono">{'>'}</span> With a strong foundation in data science and machine learning, I'm excited to begin my journey as a Data Scientist upon graduation. I love tackling complex problems and creating technology that can make a positive impact.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="flex items-center gap-2 glass-panel bg-primary hover:bg-primary/80" asChild>
                    <a href="https://github.com/Ojasva-Goyal/ojasva-portfolio/raw/main/resume.pdf" download>
                      <Download className="h-4 w-4" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-2 glass-panel border-primary/30" asChild>
                    <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer">
                      <Bookmark className="h-4 w-4" />
                      <span>Google Scholar</span>
                    </a>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-panel p-6 rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-0" />
                  
                  <div className="relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="glass-panel p-4 flex flex-col items-center text-center border border-primary/20">
                        <BookOpen className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-bold mb-1 terminal-text">Education</h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          B.E. in Civil Engineering + Minor in Data Science
                        </p>
                      </div>
                      
                      <div className="glass-panel p-4 flex flex-col items-center text-center border border-primary/20">
                        <Award className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-bold mb-1 terminal-text">Experience</h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          Research & Industry Internships
                        </p>
                      </div>
                      
                      <div className="glass-panel p-4 flex flex-col items-center text-center border border-primary/20">
                        <Code className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-bold mb-1 terminal-text">Projects</h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          AI & Drone-based Solutions
                        </p>
                      </div>
                      
                      <div className="glass-panel p-4 flex flex-col items-center text-center border border-primary/20">
                        <Terminal className="h-8 w-8 text-primary mb-2" />
                        <h3 className="text-xl font-bold mb-1 terminal-text">Tech Stack</h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          Python, TensorFlow, PyTorch
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <Section 
          title="Technical Skills" 
          subtitle="MY EXPERTISE"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 border border-primary/20"
              >
                <h3 className="text-xl font-bold mb-4 terminal-text flex items-center">
                  <Cpu className="mr-2 h-5 w-5 text-primary" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="tag font-mono bg-black/10 border-primary/30">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
        
        {/* Education Section */}
        <Section 
          title="Education & Certifications" 
          subtitle="ACADEMIC BACKGROUND"
          className="bg-secondary/50"
        >
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-6 border border-primary/20"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold terminal-text">{edu.degree}</h3>
                    <p className="text-muted-foreground font-mono">{edu.institution}</p>
                  </div>
                  <div className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono border border-primary/20">
                    {edu.date}
                  </div>
                </div>
                
                <p className="mb-4 font-mono text-sm">{edu.description}</p>
                
                {edu.achievements && (
                  <div>
                    <h4 className="font-medium mb-2 terminal-text flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />Achievements:
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start font-mono text-sm">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
        
        {/* Interests Section */}
        <Section 
          title="Research Interests" 
          subtitle="AREAS OF FOCUS"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-6 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 terminal-text">Deep Learning for Drones</h3>
              <p className="text-muted-foreground mb-4 font-mono text-sm">
                $ cat research_focus.txt<br/>
                My primary research focuses on developing deep learning models for enhancing drone capabilities, including obstacle avoidance, object tracking, and scene understanding from aerial perspectives.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag font-mono bg-black/10 border-primary/30">Neural Networks</span>
                <span className="tag font-mono bg-black/10 border-primary/30">Computer Vision</span>
                <span className="tag font-mono bg-black/10 border-primary/30">Reinforcement Learning</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-panel p-6 border border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 terminal-text">Autonomous Navigation</h3>
              <p className="text-muted-foreground mb-4 font-mono text-sm">
                $ cat navigation_systems.txt<br/>
                I'm passionate about creating autonomous navigation systems that allow drones to operate in GPS-denied environments using visual cues, sensor fusion, and SLAM techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag font-mono bg-black/10 border-primary/30">Visual SLAM</span>
                <span className="tag font-mono bg-black/10 border-primary/30">Path Planning</span>
                <span className="tag font-mono bg-black/10 border-primary/30">Sensor Fusion</span>
              </div>
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
              <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
