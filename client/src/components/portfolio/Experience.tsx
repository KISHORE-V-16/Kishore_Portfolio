import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Users, Award } from 'lucide-react';

// todo: remove mock functionality
const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Software Engineering Intern',
    organization: 'ThoughtSpot',
    period: 'May 2025 - Jul 2025',
    description: 'Developed ThoughtSpot Cost Monitor using OpenCost and Prometheus. Automated cost tracking across 6 Kubernetes clusters on AWS and GCP.',
    achievements: [
      'Achieved 100% infrastructure cost visibility',
      'Reduced manual monitoring effort by 90%',
      'Implemented Karpenter reducing provisioning from 5-10 min to 30-40 sec',
    ],
    icon: Briefcase,
    color: '#0066FF',
  },
  {
    id: 2,
    type: 'leadership',
    title: 'Manager, Quality Assurance',
    organization: 'Pragyan, NIT Trichy',
    period: 'Oct 2023 - May 2025',
    description: 'International Techno-Managerial Organization. Organized events with emphasis on safety and quality.',
    achievements: [
      'Manager during Pragyan 2024',
      'Coordinated guest lectures and events',
      'Maintained documentation and worked with auditors',
    ],
    icon: Users,
    color: '#00A3FF',
  },
  {
    id: 3,
    type: 'leadership',
    title: 'Coordinator, Computer Support Group',
    organization: 'Vortex, NIT Trichy',
    period: 'Oct 2023 - May 2025',
    description: 'Annual National-level Technological Symposium of the CSE department.',
    achievements: [
      'Led website development for Vortex\'24',
      'Worked closely with development teams',
      'Built accommodation booking system',
    ],
    icon: Award,
    color: '#1a1a2e',
  },
  {
    id: 4,
    type: 'education',
    title: 'B.Tech Computer Science & Engineering',
    organization: 'NIT Tiruchirappalli',
    period: '2022 - Present',
    description: 'Bachelor of Technology in Computer Science with focus on full-stack development and AI.',
    achievements: ['CGPA: 8.30'],
    icon: GraduationCap,
    color: '#0066FF',
  },
  {
    id: 5,
    type: 'education',
    title: 'Class XII (CBSE)',
    organization: 'Velammal Bodhi Campus, Ponneri',
    period: '2022',
    description: 'Higher Secondary Education with focus on Science and Mathematics.',
    achievements: ['Percentage: 88.6%'],
    icon: GraduationCap,
    color: '#00A3FF',
  },
  {
    id: 6,
    type: 'education',
    title: 'Class X (CBSE)',
    organization: 'GT Vidhya Mandir, Vadamadurai',
    period: '2020',
    description: 'Secondary Education. Secured first rank among 500 students.',
    achievements: ['Percentage: 89%', 'First Rank in School'],
    icon: GraduationCap,
    color: '#1a1a2e',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" data-testid="section-experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-experience">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-experience-title">
            Career Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-experience-subtitle">
            A timeline of professional experiences, leadership roles, and academic achievements.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066FF] via-[#00A3FF] to-muted" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-20" data-testid={`timeline-item-${exp.id}`}>
                <div
                  className="absolute left-5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center"
                  style={{ backgroundColor: exp.color }}
                >
                  <exp.icon className="w-3 h-3 text-white" />
                </div>

                <Card className="p-6 hover-elevate active-elevate-2" data-testid={`card-experience-${exp.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground" data-testid={`text-exp-title-${exp.id}`}>
                        {exp.title}
                      </h3>
                      <p className="text-sm text-[#0066FF]">{exp.organization}</p>
                    </div>
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-exp-desc-${exp.id}`}>
                    {exp.description}
                  </p>

                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        data-testid={`text-exp-achievement-${exp.id}-${i}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
