import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Trophy, Award } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'First Rank - Class 10',
    description: 'Secured first rank among 500 students in Class 10 board examinations',
  },
  {
    icon: Award,
    title: 'Spell Bee Competition',
    description: 'Cleared international level with Merit Plus Certification',
  },
  {
    icon: GraduationCap,
    title: 'NIT Trichy',
    description: 'B.Tech Computer Science with 8.30 CGPA',
  },
];

const highlights = [
  'Built 5+ production web applications',
  'Interned at ThoughtSpot (Fortune 500)',
  'Achieved 90% cost monitoring automation',
  'Reduced provisioning time by 95%',
  'Led 500+ user tech symposium projects',
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6" data-testid="section-about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-about">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Computer Science student at NIT Trichy with a strong foundation in full-stack development,
            AI integration, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Who I Am</h3>
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

            <div className="flex flex-wrap gap-2">
              {highlights.map((item, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-[#0066FF]/30 text-[#0066FF]"
                  data-testid={`badge-highlight-${index}`}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Achievements</h3>
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-5 hover-elevate active-elevate-2 cursor-default"
                data-testid={`card-achievement-${index}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0066FF]/10 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-[#0066FF]" />
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
