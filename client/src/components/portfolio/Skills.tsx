import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code,
    gradient: 'from-violet-500 to-purple-600',
    bgGlow: 'bg-violet-500/20',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 75 },
      { name: 'Python', level: 70 },
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
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
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
      { name: 'Firebase', level: 88 },
      { name: 'Firestore', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    gradient: 'from-orange-400 to-pink-500',
    bgGlow: 'bg-orange-500/20',
    skills: [
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 82 },
      { name: 'GCP', level: 80 },
      { name: 'Docker', level: 78 },
      { name: 'Prometheus', level: 75 },
    ],
  },
];

const otherTools = [
  { name: 'Git', gradient: 'from-orange-500 to-red-500' },
  { name: 'WebRTC', gradient: 'from-green-500 to-emerald-500' },
  { name: 'Socket.io', gradient: 'from-slate-500 to-gray-600' },
  { name: 'REST APIs', gradient: 'from-blue-500 to-indigo-500' },
  { name: 'GraphQL', gradient: 'from-pink-500 to-rose-500' },
  { name: 'Figma', gradient: 'from-purple-500 to-violet-500' },
  { name: 'Stripe', gradient: 'from-indigo-500 to-purple-500' },
  { name: 'Twilio', gradient: 'from-red-500 to-pink-500' },
  { name: 'OpenCost', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'Karpenter', gradient: 'from-amber-500 to-orange-500' },
  { name: 'AI/ML', gradient: 'from-violet-500 to-fuchsia-500' },
  { name: 'VS Code', gradient: 'from-blue-400 to-blue-600' },
];

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
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
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
    <section ref={ref} id="skills" className="relative py-24 px-6 overflow-hidden" data-testid="section-skills">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-emerald-500/5 to-background" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0" data-testid="badge-skills">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
            <span className="text-foreground">Technical </span>
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-skills-subtitle">
            Proficiency in modern web technologies, cloud platforms, and development tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={category.id}
              className={`relative overflow-hidden p-6 cursor-pointer transition-all duration-500 ${
                activeCategory === category.id ? 'ring-2 ring-offset-2 ring-offset-background' : ''
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
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${category.bgGlow} rounded-full blur-3xl opacity-50`} />
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5`} />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{category.title}</h3>
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
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-white" />
            </span>
            Other Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherTools.map((tool, index) => (
              <Badge
                key={tool.name}
                className={`text-sm py-2 px-4 bg-gradient-to-r ${tool.gradient} text-white border-0 shadow-lg transition-all duration-300 hover:scale-105 cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50 + 400}ms` }}
                data-testid={`badge-tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tool.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
