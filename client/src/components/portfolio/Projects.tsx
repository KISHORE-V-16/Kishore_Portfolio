import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ExternalLink, Github, Video, ShoppingCart, Search, Globe, BarChart3, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'VidHive',
    subtitle: 'AI-Powered Video Conferencing',
    description: 'Full-stack video conference application with WebRTC, AI-powered avatars, and real-time emotion detection.',
    problem: 'Traditional video conferencing lacks intelligent features for enhanced user engagement and accessibility.',
    approach: 'Implemented WebRTC peer-to-peer architecture for ultra-low latency, integrated AI avatars for user representation, and added real-time emotion detection for sentiment analysis.',
    results: 'Delivered seamless video communication with simultaneous AI processing, enabling enhanced real-time interactions.',
    icon: Video,
    tech: ['React', 'Node.js', 'WebRTC', 'AI/ML', 'Socket.io'],
    gradient: 'from-violet-500 to-purple-600',
    accentColor: '#8B5CF6',
    date: 'Jan 2025',
  },
  {
    id: 2,
    title: 'Max-Gpt-AI',
    subtitle: 'Multi-Search AI Platform',
    description: 'Full-stack web application with multiple AI features including image/text search, text-to-voice, and plagiarism detection.',
    problem: 'Users need multiple tools for different AI tasks, leading to fragmented workflows.',
    approach: 'Built unified platform with multi-search engine using React, Node.js, and MongoDB. Implemented multithreading for simultaneous AI processing.',
    results: 'Created comprehensive AI platform supporting multiple concurrent features with session-based authentication for multi-user access.',
    icon: Search,
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Multithreading'],
    gradient: 'from-cyan-400 to-blue-500',
    accentColor: '#06B6D4',
    date: 'May 2024',
  },
  {
    id: 3,
    title: 'E-Commerce Application',
    subtitle: 'AI-Enhanced Shopping Platform',
    description: 'Full-stack e-commerce website with AI chatbots, voice commands, ML-powered search, and Stripe payments.',
    problem: 'E-commerce platforms often lack intelligent customer support and modern search capabilities.',
    approach: 'Integrated AI chatbot with voice control, implemented ML object detection for product search, added Stripe payments with Twilio SMS notifications.',
    results: 'Built comprehensive shopping platform with Redux state management, Google sign-in, and OTP authentication.',
    icon: ShoppingCart,
    tech: ['React', 'Express', 'Firebase', 'Stripe', 'Redux', 'Twilio', 'ML'],
    gradient: 'from-emerald-400 to-teal-500',
    accentColor: '#10B981',
    date: 'Feb 2024',
  },
  {
    id: 4,
    title: 'Vortex Tech Symposium',
    subtitle: 'Event Management Website',
    description: 'Frontend development for NIT Trichy\'s annual tech symposium website used by 500+ students.',
    problem: 'Tech symposium needed a modern, user-friendly platform for event management and accommodation booking.',
    approach: 'Built responsive pages using React and Mantine UI, created accommodation booking system with intuitive UX.',
    results: 'Successfully served 500+ students during the symposium, streamlined event registration and accommodation processes.',
    icon: Globe,
    tech: ['React', 'Mantine UI', 'JavaScript'],
    gradient: 'from-orange-400 to-pink-500',
    accentColor: '#F97316',
    date: 'Oct 2023',
  },
  {
    id: 5,
    title: 'ThoughtSpot Cost Monitor',
    subtitle: 'Infrastructure Cost Optimization',
    description: 'Automated cost tracking system using OpenCost and Prometheus for Kubernetes clusters on AWS and GCP.',
    problem: 'Manual cost monitoring across multiple cloud clusters was time-consuming and lacked visibility.',
    approach: 'Developed monitoring system with OpenCost and Prometheus, implemented Karpenter for intelligent node scaling.',
    results: 'Achieved 100% infrastructure cost visibility, reduced manual monitoring by 90%, cut provisioning time from 5-10 minutes to 30-40 seconds.',
    icon: BarChart3,
    tech: ['Kubernetes', 'AWS', 'GCP', 'Prometheus', 'OpenCost', 'Karpenter'],
    gradient: 'from-blue-500 to-indigo-600',
    accentColor: '#3B82F6',
    date: 'May-Jul 2025',
  },
];

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl" data-testid={`modal-title-${project.id}`}>
                  {project.title}
                </DialogTitle>
                <DialogDescription>{project.subtitle}</DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Problem</h4>
            <p className="text-muted-foreground text-sm" data-testid={`modal-problem-${project.id}`}>
              {project.problem}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Approach</h4>
            <p className="text-muted-foreground text-sm" data-testid={`modal-approach-${project.id}`}>
              {project.approach}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Results</h4>
            <p className="text-muted-foreground text-sm" data-testid={`modal-results-${project.id}`}>
              {project.results}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs"
                  data-testid={`modal-tech-${project.id}-${index}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <Button variant="outline" size="sm" data-testid={`modal-github-${project.id}`}>
              <Github className="w-4 h-4 mr-2" />
              View Code
            </Button>
            <Button 
              size="sm" 
              className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
              data-testid={`modal-demo-${project.id}`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ZigZagItemProps {
  project: typeof projects[0];
  index: number;
  isLeft: boolean;
  onClick: () => void;
}

function ZigZagItem({ project, index, isLeft, onClick }: ZigZagItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 mb-16 last:mb-0`}
      data-testid={`zigzag-item-${project.id}`}
    >
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <div 
          className={`w-6 h-6 rounded-full bg-gradient-to-br ${project.gradient} shadow-lg shadow-${project.accentColor}/30`}
        />
      </div>

      <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <Card
          className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
          onClick={onClick}
          data-testid={`card-project-${project.id}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
          
          <div className="relative p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <project.icon className="w-7 h-7 text-white" />
              </div>
              <Badge 
                className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs`}
              >
                {project.date}
              </Badge>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-1" data-testid={`text-project-title-${project.id}`}>
              {project.title}
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: project.accentColor }}>
              {project.subtitle}
            </p>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-project-desc-${project.id}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: project.accentColor }}>
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </Card>
      </div>

      <div className="hidden md:block w-[calc(50%-3rem)]" />
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 overflow-hidden" data-testid="section-projects">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-500/5 to-background" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-gradient-to-r from-violet-500 to-cyan-500 text-white border-0" data-testid="badge-projects">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            <span className="text-foreground">Featured </span>
            <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-projects-subtitle">
            A journey through innovative projects showcasing full-stack development,
            AI integration, and cloud technologies.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
            <div className="h-full w-full bg-gradient-to-b from-violet-500 via-cyan-400 to-blue-500 rounded-full" />
          </div>

          {projects.map((project, index) => (
            <ZigZagItem
              key={project.id}
              project={project}
              index={index}
              isLeft={index % 2 === 0}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
