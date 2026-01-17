import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, Cloud, Wrench, Terminal, Cpu, Globe, Layout, 
  GitBranch, Command, Server, HardDrive, Box, Wifi, Layers 
} from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code,
    gradient: 'from-violet-500 to-purple-600',
    bgGlow: 'bg-violet-500/20',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'C++', level: 95 },
      { name: 'C', level: 90 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: Wrench,
    gradient: 'from-cyan-400 to-blue-500',
    bgGlow: 'bg-cyan-500/20',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 95 },
      { name: 'Next.js', level: 80 },
      { name: 'Redux', level: 85 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: Database,
    gradient: 'from-emerald-400 to-teal-500',
    bgGlow: 'bg-emerald-500/20',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'Firebase', level: 95 },
      { name: 'Firestore', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-orange-400 to-pink-500',
    bgGlow: 'bg-orange-500/20',
    skills: [
      { name: 'Kubernetes', level: 95 },
      { name: 'AWS', level: 90 },
      { name: 'GCP', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Prometheus', level: 75 },
    ],
  },
];

const otherTools = [
  { name: 'Git', gradient: 'from-orange-500 to-red-500' },
  { name: 'WebRTC', gradient: 'from-green-500 to-emerald-500' },
  { name: 'Socket.io', gradient: 'from-slate-500 to-gray-600' },
  { name: 'REST APIs', gradient: 'from-blue-500 to-indigo-500' },
  { name: 'Figma', gradient: 'from-purple-500 to-violet-500' },
  { name: 'Stripe', gradient: 'from-indigo-500 to-purple-500' },
  { name: 'OpenCost', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'Karpenter', gradient: 'from-amber-500 to-orange-500' },
  { name: 'AI/ML', gradient: 'from-violet-500 to-fuchsia-500' },
];

// --- HELPER FOR FLOATING BACKGROUND ICONS ---
function FloatingItem({ children, className, delay = '0s' }: { children: React.ReactNode, className: string, delay?: string }) {
    return (
      <div className={`absolute ${className} animate-float`} style={{ animationDelay: delay }}>
         {children}
      </div>
    );
}

// --- DISTRIBUTED TECH ICONS BACKGROUND ---
function SkillsBackgroundIcons() {
    const strokeW = 2.0;
    const baseClasses = "text-zinc-800/30"; 

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            
            {/* Header Area */}
            <FloatingItem className="top-[5%] left-[10%] -rotate-12" delay="0s">
                <Terminal className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[8%] right-[15%] rotate-12" delay="1s">
                <Cpu className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Middle Section (Left) */}
            <FloatingItem className="top-[30%] left-[5%] rotate-6" delay="2s">
                <Layout className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[40%] left-[2%] -rotate-6" delay="2.5s">
                <GitBranch className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Middle Section (Right) */}
            <FloatingItem className="top-[35%] right-[5%] rotate-12" delay="3s">
                <Server className={`w-28 h-28 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[45%] right-[2%] -rotate-12" delay="3.5s">
                <Database className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Bottom Area */}
            <FloatingItem className="top-[70%] left-[8%] rotate-45" delay="4s">
                <Box className={`w-20 h-20 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
            <FloatingItem className="top-[75%] right-[5%] -rotate-6" delay="4.5s">
                <Wifi className={`w-24 h-24 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
             <FloatingItem className="top-[94%] left-[45%] rotate-12" delay="5s">
                <Command className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

        </div>
    );
}

interface SkillBarProps {
  name: string;
  level: number;
  gradient: string;
  index: number;
  isVisible: boolean;
}

function SkillBar({ name, level, gradient, index, isVisible }: SkillBarProps) {
  return (
    <div className="space-y-2" data-testid={`skill-bar-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-zinc-500 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
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
    // --- MAIN BACKGROUND: PURE BLACK ---
    <section ref={ref} id="skills" className="relative py-24 px-6 overflow-hidden bg-zinc-950" data-testid="section-skills">
      
      {/* --- ADDED: DISTRIBUTED BACKGROUND ICONS --- */}
      <SkillsBackgroundIcons />

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
            <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Badge className="relative bg-black text-white px-6 py-2 rounded-full border border-white/10 text-sm tracking-wide uppercase">
                        <Layers className="w-4 h-4 mr-2 text-violet-400" />
                        Skills
                    </Badge>
                </div>
            </div>

          <h2 className={`mt-8 text-3xl md:text-5xl font-bold tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-skills-title">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          
          <p className={`mt-4 text-zinc-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-skills-subtitle">
            Proficiency in modern web technologies, cloud platforms, and development tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={category.id}
              // UPDATED CARD: Black Theme
              className={`relative overflow-hidden p-6 cursor-pointer transition-all duration-500 bg-[#0F0F10] border-zinc-800 ${
                activeCategory === category.id ? 'ring-2 ring-offset-2 ring-offset-black' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${catIndex * 100}ms`,
                '--tw-ring-color': category.id === 'languages' ? '#8B5CF6' : 
                                   category.id === 'frameworks' ? '#06B6D4' :
                                   category.id === 'databases' ? '#10B981' : '#F97316'
              } as React.CSSProperties}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              data-testid={`card-skill-category-${category.id}`}
            >
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${category.bgGlow} rounded-full blur-3xl opacity-20`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-[0.03]`} />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      gradient={category.gradient}
                      index={index}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className={`text-lg font-semibold text-white mb-6 flex items-center justify-center gap-2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Wrench className="w-4 h-4 text-white" />
            </span>
            Other Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {otherTools.map((tool, index) => (
              <div
                key={tool.name}
                // Wrapper handles Entry Animation (Fade Up)
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50 + 400}ms` }}
              >
                {/* Badge handles Float Animation */}
                <Badge
                  className={`text-sm py-2 px-4 bg-gradient-to-r ${tool.gradient} text-white border-0 shadow-lg cursor-default animate-float hover:scale-110 transition-transform duration-300`}
                  style={{ 
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${6 + (index % 3)}s` 
                  }}
                  data-testid={`badge-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tool.name}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt { animation: tilt 10s infinite linear; }
      `}</style>
    </section>
  );
}