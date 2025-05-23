
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Extract unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));
  
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
              <p className="section-title">MY WORK</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Projects & Research
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore my portfolio of projects spanning machine learning, computer vision, and drone technology. Each project represents a unique challenge and innovative solution.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Projects Section */}
        <Section 
          title="Featured Projects" 
          subtitle="SELECTED WORK"
        >
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
              className="rounded-full"
            >
              All Projects
            </Button>
            
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={filter === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                delay={index}
              />
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found with this filter.</p>
              <Button 
                variant="outline" 
                onClick={() => setFilter('all')}
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </Section>
        
        {/* Research Projects Section */}
        <Section 
          title="Research Projects" 
          subtitle="ACADEMIC WORK"
          className="bg-secondary/50"
        >
          <div className="glass-panel p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Deep Learning for Autonomous Drones</h3>
                <p className="text-muted-foreground mb-6">
                  A comprehensive research project focused on developing and implementing deep learning algorithms for autonomous drone navigation in complex environments. This research explores computer vision techniques, reinforcement learning, and sensor fusion.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>Custom CNN architecture for aerial object detection</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>Reinforcement learning for collision avoidance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>ROS integration for real-world testing</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Aerial Data Collection & Analysis</h3>
                <p className="text-muted-foreground mb-6">
                  A collaborative research initiative to create an efficient pipeline for collecting, processing, and analyzing aerial imagery data for environmental monitoring and agricultural applications using drone technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>Automated flight path planning for optimal coverage</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>Image stitching and orthomosaic generation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <p>Machine learning for vegetation health analysis</p>
                  </div>
                </div>
              </motion.div>
            </div>
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
              <a href="https://medium.com/@ojasvagoyal9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Medium
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

export default Projects;
