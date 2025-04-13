
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Download, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
              <p className="section-title">GET IN TOUCH</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Me
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Have a question or want to work together? I'd love to hear from you! Feel free to reach out using the form below or through any of my social platforms.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <Section 
          title="Let's Connect" 
          subtitle="REACH OUT"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-6">
                  I'm always interested in hearing about new projects, opportunities, or just connecting with fellow enthusiasts in AI, drone technology, and data science.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:ojasvagoyal9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        ojasvagoyal9@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        INDIA
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        Available upon request
                      </p>
                    </div>
                  </div> */}
                </div>
                
                <div className="flex flex-wrap gap-4 mt-8 mb-8">
                  <Button className="flex items-center gap-2" asChild>
                    <a href="Ojasva-Goyal/ojasva-portfolio/resume.pdf" download>
                      <Download className="h-4 w-4" />
                      <span>Download Resume</span>
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer">
                      <Bookmark className="h-4 w-4" />
                      <span>Google Scholar</span>
                    </a>
                  </Button>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect on Social Media</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Ojasva-Goyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    
                    <a
                      href="https://linkedin.com/in/ojasva-goyal-476422230/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Section>
        
        {/* Call to Action */}
        <section className="py-24 px-4 md:px-8 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/10 rotate-12 transform translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open to Opportunities</h2>
              <p className="text-lg text-muted-foreground mb-0 max-w-lg mx-auto">
                I'm always open to discussing interesting projects and collaborations.
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
              {/* <a href="https://scholar.google.com/citations?user=PC6cUHYAAAAJ&hl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Google Scholar
              </a> */}
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

export default Contact;
