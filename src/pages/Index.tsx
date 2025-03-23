
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { projects, blogPosts } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import BlogPost from '@/components/BlogPost';

const Index = () => {
  // Display only the first 3 projects and blog posts on the home page
  const featuredProjects = projects.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);
  
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        
        {/* Featured Projects Section */}
        <Section 
          title="Featured Projects" 
          subtitle="WHAT I'VE BUILT"
          id="projects"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/projects" className="flex items-center gap-2">
                <span>View All Projects</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
        
        {/* Skills Overview Section */}
        <Section 
          title="My Tech Stack" 
          subtitle="SKILLS & EXPERTISE"
          className="bg-secondary/50"
          id="skills"
        >
          <div className="glass-panel p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Machine Learning & AI</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Deep Learning Models (CNN, RNN, Transformers)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Computer Vision & Image Processing</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Reinforcement Learning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>TensorFlow & PyTorch</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Drone Technology</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Autonomous Navigation Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Flight Controller Programming</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Sensor Fusion & SLAM</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                    <span>Path Planning Algorithms</span>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/about" className="flex items-center gap-2">
                  <span>View Full Skill Set</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
        
        {/* Blog Posts */}
        <Section 
          title="Latest Articles" 
          subtitle="FROM MY BLOG"
          id="blog"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <BlogPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
                tags={post.tags}
                slug={post.slug}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/blog" className="flex items-center gap-2">
                <span>Read All Articles</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision.
              </p>
              
              <Button size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>
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
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
