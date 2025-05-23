
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-title mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ojasva Goyal
              <span className="block text-2xl md:text-3xl font-normal mt-2">
                Data Scientist & <span className="geek-accent">Drone Enthusiast</span>
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Final year undergraduate with a passion for deep learning and autonomous systems.
              Exploring the intersection of AI, robotics and sustainability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/projects" className="flex items-center">
                  <span>View My Work</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
              
              <div className="flex items-center gap-4 ml-auto mr-0 md:ml-0 md:mr-auto lg:ml-auto mt-4 md:mt-0">
                <Button size="icon" variant="ghost" className="rounded-full" asChild>
                  <a href="https://github.com/Ojasva-Goyal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button size="icon" variant="ghost" className="rounded-full" asChild>
                  <a href="https://linkedin.com/in/ojasva-goyal-476422230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button size="icon" variant="ghost" className="rounded-full" asChild>
                  <a href="https://medium.com/@ojasvagoyal9" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                      <path d="M8 9h1l3 3 3-3h1" />
                      <path d="M8 15h8" />
                    </svg>
                  </a>
                </Button>
                
                <Button size="icon" variant="ghost" className="rounded-full" asChild>
                  <a href="mailto:ojasvagoyal9@gmail.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-panel p-6 rounded-2xl w-full aspect-square max-w-md mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-0" />
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="text-xs md:text-sm font-mono mb-2 text-muted-foreground">
                  // Currently working on
                </div>
                
                <div className="glass-panel p-4 mb-4">
                  <div className="font-mono text-xs text-primary opacity-70 mb-1">LATEST PROJECT</div>
                  <h3 className="font-medium mb-2">Autonomous UAV System for Crop Disease Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Using computer vision and deep learning to enable drones to detect and classify different crop diseases.
                  </p>
                </div>
                
                <code className="font-mono text-xs text-muted-foreground">
                  <div className="text-primary">const</div> skills = ['Python', 'TensorFlow', 'Computer Vision', 'Robotics'];
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
