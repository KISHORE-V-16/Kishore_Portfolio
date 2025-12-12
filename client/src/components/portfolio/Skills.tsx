import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

// todo: remove mock functionality
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code,
    color: '#0066FF',
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
    color: '#00A3FF',
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
    color: '#1a1a2e',
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
    color: '#0066FF',
    skills: [
      { name: 'Kubernetes', level: 85 },
      { name: 'AWS', level: 82 },
      { name: 'GCP', level: 80 },
      { name: 'Docker', level: 78 },
      { name: 'Prometheus', level: 75 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

function SkillBar({ name, level, color, index }: SkillBarProps) {
  return (
    <div className="space-y-2" data-testid={`skill-bar-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            backgroundColor: color,
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-muted/30" data-testid="section-skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-skills">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Proficiency in modern web technologies, cloud platforms, and development tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.id}
              className={`p-6 cursor-pointer transition-all ${
                activeCategory === category.id ? 'ring-2 ring-[#0066FF]' : ''
              }`}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              data-testid={`card-skill-category-${category.id}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="w-5 h-5" style={{ color: category.color }} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={category.color}
                    index={index}
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Other Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Git',
              'WebRTC',
              'Socket.io',
              'REST APIs',
              'GraphQL',
              'Figma',
              'VS Code',
              'Stripe',
              'Twilio',
              'OpenCost',
              'Karpenter',
              'AI/ML',
            ].map((tool) => (
              <Badge
                key={tool}
                variant="outline"
                className="text-sm py-2 px-4 border-[#0066FF]/30 hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-colors cursor-default"
                data-testid={`badge-tool-${tool.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
