import { useState } from 'react';
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
import { ExternalLink, Github, Video, ShoppingCart, Search, Globe, BarChart3, X } from 'lucide-react';

// todo: remove mock functionality
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
    color: '#0066FF',
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
    color: '#00A3FF',
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
    color: '#1a1a2e',
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
    color: '#0066FF',
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
    color: '#00A3FF',
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
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${project.color}15` }}
              >
                <project.icon className="w-6 h-6" style={{ color: project.color }} />
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
            <Button size="sm" className="bg-[#0066FF] hover:bg-[#0055DD]" data-testid={`modal-demo-${project.id}`}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30" data-testid="section-projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-projects">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A selection of projects showcasing expertise in full-stack development,
            AI integration, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 cursor-pointer hover-elevate active-elevate-2 group"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${project.id}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${project.color}15` }}
                >
                  <project.icon className="w-6 h-6" style={{ color: project.color }} />
                </div>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {project.date}
                </Badge>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`text-project-title-${project.id}`}>
                {project.title}
              </h3>
              <p className="text-sm text-[#0066FF] mb-3">{project.subtitle}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2" data-testid={`text-project-desc-${project.id}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.tech.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.tech.length - 3}
                  </Badge>
                )}
              </div>
            </Card>
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
