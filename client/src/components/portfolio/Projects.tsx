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
import { 
  ExternalLink, Github, Video, ShoppingCart, Search, Globe, BarChart3, ArrowRight, Layers,
  Code2, Terminal, Cpu, GitBranch, Cloud, Database, Server, Command, Hash, Braces, Laptop, CreditCard, Lock
} from 'lucide-react';

// --- DATA STRUCTURE UPDATE ---
// Added 'isConfidential' and 'githubUrl' columns to control visibility per project
const projects = [
  {
    id: 1,
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
    isConfidential: true, // Hides the button
    githubUrl: null,
  },
  {
    id: 2,
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
    isConfidential: false,
    githubUrl: 'https://github.com/KISHORE-V-16/VidHive', // Replace with actual repo URL
  },
  {
    id: 3,
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
    isConfidential: false,
    githubUrl: 'https://github.com/KISHORE-V-16/MAX_GPT_AI', // Replace with actual repo URL
  },
  {
    id: 4,
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
    isConfidential: false,
    githubUrl: 'https://github.com/KISHORE-V-16/Amazon_Ai_New', // Replace with actual repo URL
  },
  {
    id: 5,
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
    isConfidential: false,
    githubUrl: 'https://github.com/vortex-csg-nitt/vortex24-frontend', // Replace with actual repo URL
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-zinc-800 bg-[#09090b] backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-lg`}
              >
                <project.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-white" data-testid={`modal-title-${project.id}`}>
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-zinc-400 mt-1">{project.subtitle}</DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">The Challenge</h4>
            <p className="text-zinc-400 text-sm leading-relaxed" data-testid={`modal-problem-${project.id}`}>
              {project.problem}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">Approach</h4>
                <p className="text-zinc-400 text-sm leading-relaxed" data-testid={`modal-approach-${project.id}`}>
                {project.approach}
                </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider">Results</h4>
                <p className="text-zinc-400 text-sm leading-relaxed" data-testid={`modal-results-${project.id}`}>
                {project.results}
                </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs border-zinc-700 bg-zinc-800 text-zinc-300"
                  data-testid={`modal-tech-${project.id}-${index}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* --- UPDATED FOOTER LOGIC --- */}
          {/* Checks 'isConfidential' to decide whether to show the button or the lock message */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
            {project.isConfidential ? (
                // Confidential Message
                <div className="flex items-center gap-2 text-zinc-500 text-sm bg-zinc-900/50 px-3 py-2 rounded-lg border border-zinc-800 w-full">
                    <Lock className="w-4 h-4 text-orange-500" />
                    <span className="font-medium text-zinc-400">Source code is confidential (Company Policy)</span>
                </div>
            ) : (
                // View Code Button - Dynamically uses project.githubUrl
                <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800" 
                    data-testid={`modal-github-${project.id}`}
                    onClick={() => {
                        if (project.githubUrl) {
                            window.open(project.githubUrl, '_blank');
                        }
                    }}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// --- CURVED CONNECTOR COMPONENT ---
function NeuralCurve({ isLeft, accentColor }: { isLeft: boolean; accentColor: string }) {
  return (
    <div className={`hidden md:block absolute top-10 w-1/2 h-20 pointer-events-none z-0 ${isLeft ? 'right-1/2' : 'left-1/2'}`}>
      <svg className="w-full h-full overflow-visible">
        <path
          d={isLeft 
            ? "M 100% 10 C 50% 10, 50% 50, 0 50" 
            : "M 0 10 C 50% 10, 50% 50, 100% 50" 
          }
          fill="none"
          stroke={accentColor}
          strokeWidth="2"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
          className="animate-pulse"
        />
        <circle 
            cx={isLeft ? "0" : "100%"} 
            cy="50" 
            r="3" 
            fill={accentColor} 
            className="animate-ping" 
            style={{ animationDuration: '3s' }}
        />
      </svg>
    </div>
  );
}

// --- HELPER FOR FLOATING ICONS ---
function FloatingItem({ children, className, delay = '0s' }: { children: React.ReactNode, className: string, delay?: string }) {
    return (
      <div className={`absolute ${className} animate-float`} style={{ animationDelay: delay }}>
         {children}
      </div>
    );
}

// --- DISTRIBUTED BACKGROUND: THICKER & FLOATING ---
function DistributedBackgroundIcons() {
    const strokeW = 2.0;
    const baseClasses = "text-zinc-800/40"; 

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Header Area */}
            <FloatingItem className="top-[2%] left-[5%] -rotate-12" delay="0s">
                <Code2 className={`w-32 h-32 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[4%] right-[5%] rotate-12" delay="1s">
                <Terminal className={`w-28 h-28 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[8%] left-[20%] rotate-6" delay="0.5s">
                <Braces className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Near Projects */}
            <FloatingItem className="top-[18%] right-[10%] -rotate-6" delay="2s">
                <Cloud className={`w-48 h-48 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[22%] right-[25%] rotate-12" delay="2.5s">
                <Server className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[35%] left-[8%] rotate-12" delay="3s">
                <Video className={`w-40 h-40 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[38%] left-[22%] -rotate-6" delay="3.5s">
                <Cpu className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[52%] right-[12%] -rotate-12" delay="4s">
                <Database className={`w-44 h-44 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[55%] right-[28%] rotate-6" delay="4.5s">
                <Search className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[70%] left-[10%] rotate-12" delay="5s">
                <ShoppingCart className={`w-40 h-40 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[73%] left-[25%] -rotate-12" delay="5.5s">
                <CreditCard className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[85%] right-[8%] -rotate-6" delay="6s">
                <Globe className={`w-48 h-48 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[88%] right-[22%] rotate-45" delay="6.5s">
                <GitBranch className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Scattered Extras */}
            <FloatingItem className="top-[30%] right-[5%]" delay="1.5s">
                <Command className={`w-12 h-12 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[60%] left-[5%]" delay="4.2s">
                <Hash className={`w-14 h-14 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
             <FloatingItem className="top-[45%] left-[45%] -z-10" delay="3.8s">
                <Laptop className={`w-32 h-32 text-zinc-800/30`} strokeWidth={strokeW} />
            </FloatingItem>
        </div>
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12 mb-32 last:mb-0`}
      data-testid={`zigzag-item-${project.id}`}
    >
      {/* CENTRAL SPINE NODE */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-start z-10 pointer-events-none">
        <div className={`
           w-4 h-4 rounded-full bg-black border-2 border-zinc-700 mt-10
           transition-all duration-700
           ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
        `}>
           <div className={`w-full h-full rounded-full bg-gradient-to-br ${project.gradient}`} />
        </div>
      </div>

      {/* CURVED CONNECTOR */}
      <NeuralCurve isLeft={isLeft} accentColor={project.accentColor} />

      {/* THE CARD */}
      <div className={`w-full md:w-[calc(50%-3rem)] pl-10 md:pl-0 ${isLeft ? 'md:pr-4' : 'md:pl-4'}`}>
        <Card
          className={`
            relative overflow-hidden cursor-pointer group 
            bg-[#0F0F10] border border-zinc-800 shadow-2xl
            transition-all duration-700 
            hover:bg-[#141415] hover:-translate-y-2 hover:border-zinc-700 hover:shadow-black/50
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
          style={{ transitionDelay: `${index * 150}ms` }}
          onClick={onClick}
          data-testid={`card-project-${project.id}`}
        >
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
          
          <div className="relative p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${project.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}
              >
                <project.icon className="w-7 h-7 text-white" />
              </div>
              
              <Badge 
                className={`text-white border-0 text-xs font-mono px-3 py-1`}
                style={{ 
                    backgroundColor: `${project.accentColor}15`, 
                    color: project.accentColor, 
                    border: `1px solid ${project.accentColor}30` 
                }}
              >
                {project.date}
              </Badge>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all" data-testid={`text-project-title-${project.id}`}>
              {project.title}
            </h3>
            
            <p className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: project.accentColor }}>
              {project.subtitle}
            </p>
            
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed" data-testid={`text-project-desc-${project.id}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.slice(0, 4).map((tech, idx) => (
                <Badge 
                    key={idx} 
                    className="text-xs font-medium transition-transform hover:scale-105"
                    style={{ 
                        backgroundColor: `${project.accentColor}15`, 
                        color: project.accentColor,                 
                        border: `1px solid ${project.accentColor}30`
                    }}
                >
                  {tech}
                </Badge>
              ))}
              {project.tech.length > 4 && (
                <Badge 
                    className="text-xs bg-zinc-900 text-zinc-500 hover:bg-zinc-800 border-zinc-800"
                >
                  +{project.tech.length - 4}
                </Badge>
              )}
            </div>

            <div className="flex items-center text-sm font-medium transition-transform group-hover:translate-x-1" style={{ color: project.accentColor }}>
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="relative py-32 px-6 overflow-hidden bg-zinc-950" data-testid="section-projects">
      
      <DistributedBackgroundIcons />

      <div className="relative max-w-6xl mx-auto z-10">
        
        <div className="text-center mb-32 relative z-10">
            <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Badge className="relative bg-black text-white px-6 py-2 rounded-full border border-white/10 text-sm tracking-wide uppercase">
                        <Layers className="w-4 h-4 mr-2 text-violet-400" />
                        Selected Works
                    </Badge>
                </div>
            </div>
          
          <h2 className={`mt-8 text-4xl md:text-5xl font-bold tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
                Projects
            </span>
          </h2>
          
          <p className={`mt-4 text-zinc-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-projects-subtitle">
            A journey through innovative projects showcasing full-stack development,
            AI integration, and cloud technologies.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-600 to-transparent z-0 opacity-80" />

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

      <style>{`
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt { animation: tilt 10s infinite linear; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}