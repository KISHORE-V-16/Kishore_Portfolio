import { useRef, useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Users, Award, Building2, Sparkles, Rocket, Star } from 'lucide-react';

const academics = [
  {
    id: 1,
    degree: 'B.Tech Computer Science & Engineering',
    institution: 'NIT Tiruchirappalli',
    period: '2022 - Present',
    grade: 'CGPA: 8.30',
    icon: GraduationCap,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    degree: 'Class XII (CBSE)',
    institution: 'Velammal Bodhi Campus, Ponneri',
    period: '2022',
    grade: '88.6%',
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    degree: 'Class X (CBSE)',
    institution: 'GT Vidhya Mandir, Vadamadurai',
    period: '2020',
    grade: '89% - First Rank',
    icon: Star,
    gradient: 'from-amber-500 to-orange-500',
  },
];

const internship = {
  id: 1,
  title: 'Software Engineering Intern',
  company: 'ThoughtSpot',
  period: 'May 2025 - Jul 2025',
  description: 'Developed ThoughtSpot Cost Monitor using OpenCost and Prometheus for automated cost tracking across 6 Kubernetes clusters on AWS and GCP.',
  achievements: [
    { metric: '100%', label: 'Infrastructure Visibility' },
    { metric: '90%', label: 'Reduced Manual Effort' },
    { metric: '95%', label: 'Faster Provisioning' },
  ],
  tech: ['Kubernetes', 'AWS', 'GCP', 'Prometheus', 'OpenCost', 'Karpenter'],
  gradient: 'from-cyan-400 via-blue-500 to-violet-600',
};

const leadership = [
  {
    id: 1,
    title: 'Manager, Quality Assurance',
    organization: 'Pragyan, NIT Trichy',
    type: 'International Techno-Managerial Organization',
    period: 'Oct 2023 - May 2025',
    description: 'Organized events with emphasis on safety and quality. Coordinated guest lectures and maintained documentation.',
    icon: Users,
    gradient: 'from-emerald-400 to-teal-500',
    pattern: 'hexagon',
  },
  {
    id: 2,
    title: 'Coordinator, Computer Support Group',
    organization: 'Vortex, NIT Trichy',
    type: 'Annual National-level Tech Symposium',
    period: 'Oct 2023 - May 2025',
    description: 'Led website development for Vortex\'24. Built accommodation booking system serving 500+ students.',
    icon: Rocket,
    gradient: 'from-orange-400 to-rose-500',
    pattern: 'circle',
  },
];

function FloatingCard({ academic, index }: { academic: typeof academics[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const floatDelay = index * 0.5;

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animation: isVisible ? `float 4s ease-in-out ${floatDelay}s infinite` : 'none'
      }}
      data-testid={`academic-card-${academic.id}`}
    >
      <Card className="relative overflow-hidden p-6 group hover-elevate">
        <div className={`absolute inset-0 bg-gradient-to-br ${academic.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${academic.gradient} opacity-10 rounded-full blur-2xl`} />
        
        <div className="relative">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${academic.gradient} flex items-center justify-center mb-4 shadow-lg`}>
            <academic.icon className="w-6 h-6 text-white" />
          </div>
          
          <h3 className="font-bold text-foreground text-lg mb-1">{academic.degree}</h3>
          <p className="text-sm text-muted-foreground mb-2">{academic.institution}</p>
          
          <div className="flex items-center justify-between gap-2 mt-4">
            <Badge variant="secondary" className="text-xs">{academic.period}</Badge>
            <Badge className={`bg-gradient-to-r ${academic.gradient} text-white border-0 text-xs font-bold`}>
              {academic.grade}
            </Badge>
          </div>
        </div>
      </Card>
    </div>
  );
}

function InternshipSpotlight() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      data-testid="internship-spotlight"
    >
      <Card className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${internship.gradient} opacity-10`} />
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600" />
        
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-violet-500 to-purple-600 opacity-20 rounded-full blur-3xl" />

        <div className="relative p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-xl shadow-blue-500/25">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Featured Experience</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                {internship.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {internship.company}
                  </span>
                </div>
                <Badge variant="outline" className="text-xs">{internship.period}</Badge>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            {internship.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {internship.achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/50 to-muted p-4 text-center"
                data-testid={`internship-metric-${idx}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  idx === 0 ? 'from-cyan-500/10' : idx === 1 ? 'from-blue-500/10' : 'from-violet-500/10'
                } to-transparent`} />
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${
                    idx === 0 ? 'from-cyan-400 to-blue-500' : 
                    idx === 1 ? 'from-blue-500 to-violet-500' : 
                    'from-violet-500 to-purple-500'
                  } bg-clip-text text-transparent`}>
                    {achievement.metric}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{achievement.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {internship.tech.map((tech, idx) => (
              <Badge 
                key={idx} 
                variant="secondary" 
                className="text-sm py-1.5 px-3"
                data-testid={`internship-tech-${idx}`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function LeadershipHexGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 gap-6"
      data-testid="leadership-grid"
    >
      {leadership.map((role, index) => (
        <Card
          key={role.id}
          className={`relative overflow-hidden group transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${index === 0 ? '-translate-x-10' : 'translate-x-10'}`
          }`}
          style={{ transitionDelay: `${index * 200}ms` }}
          data-testid={`leadership-card-${role.id}`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
          
          {role.pattern === 'hexagon' && (
            <>
              <div className="absolute -top-8 -right-8 w-24 h-24 border-2 border-emerald-500/20 rotate-45" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-emerald-500/30 rotate-45" />
            </>
          )}
          {role.pattern === 'circle' && (
            <>
              <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-orange-500/20 rounded-full" />
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-orange-500/30 rounded-full" />
            </>
          )}

          <div className="relative p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                <role.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-lg mb-0.5">{role.title}</h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`}>
                  {role.organization}
                </p>
              </div>
            </div>

            <Badge variant="outline" className="text-xs mb-3">{role.type}</Badge>
            
            <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
            
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">{role.period}</Badge>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 overflow-hidden" data-testid="section-experience">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-500/5 to-background" />
      
      <div className="absolute top-40 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-0" data-testid="badge-experience">
            Career
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid="text-experience-title">
            <span className="text-foreground">My </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg" data-testid="text-experience-subtitle">
            Academic excellence, impactful internships, and leadership experiences
            that shaped my professional path.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Academic Background</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {academics.map((academic, index) => (
              <FloatingCard key={academic.id} academic={academic} index={index} />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Professional Experience</h3>
          </div>
          
          <InternshipSpotlight />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Leadership Roles</h3>
          </div>
          
          <LeadershipHexGrid />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
