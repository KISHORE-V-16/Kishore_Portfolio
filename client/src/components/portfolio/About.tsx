import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Trophy, Award, Zap, Code, Cloud, Brain } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'First Rank - Class 10',
    description: 'Secured first rank among 500 students in Class 10 board examinations',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Spell Bee Competition',
    description: 'Cleared international level with Merit Plus Certification',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: GraduationCap,
    title: 'NIT Trichy',
    description: 'B.Tech Computer Science with 8.30 CGPA',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

const highlights = [
  { text: 'Built 5+ production web apps', icon: Code, color: 'text-violet-400' },
  { text: 'ThoughtSpot Intern (Fortune 500)', icon: Zap, color: 'text-cyan-400' },
  { text: '90% cost monitoring automation', icon: Cloud, color: 'text-emerald-400' },
  { text: '95% faster provisioning', icon: Brain, color: 'text-pink-400' },
];

export default function About() {
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
    <section ref={ref} id="about" className="relative py-24 px-6 overflow-hidden" data-testid="section-about">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-500/5 to-background" />
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0" data-testid="badge-about">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            <span className="text-foreground">Passionate </span>
            <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-about-subtitle">
            Computer Science student at NIT Trichy with a strong foundation in full-stack development,
            AI integration, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </span>
              Who I Am
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-about-bio-1">
                I'm a B.Tech Computer Science student at the National Institute of Technology,
                Tiruchirappalli, with a passion for building innovative web applications that
                solve real-world problems.
              </p>
              <p data-testid="text-about-bio-2">
                During my internship at ThoughtSpot, I developed a comprehensive cost monitoring
                system using OpenCost and Prometheus, achieving 100% infrastructure cost visibility
                across 6 Kubernetes clusters on AWS and GCP.
              </p>
              <p data-testid="text-about-bio-3">
                My expertise spans full-stack development with React and Node.js, AI/ML integration,
                real-time communication systems, and cloud infrastructure optimization.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 p-3 rounded-xl bg-muted/50 border border-muted transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  data-testid={`badge-highlight-${index}`}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2 mb-6">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </span>
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden p-5 group transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`card-achievement-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
