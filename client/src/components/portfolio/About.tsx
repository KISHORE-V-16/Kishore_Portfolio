import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Crown, Zap, Code, Cloud, Brain, Sparkles, Star, Lightbulb, Terminal, Cpu, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'First Rank - Class 10',
    description: 'Secured first rank among 500 students in Class 10 board examinations',
    gradient: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
  },
  {
    icon: Medal,
    title: 'Spell Bee Competition',
    description: 'Cleared international level with Merit Plus Certification',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
  },
];

const highlights = [
  { text: 'Built 5+ production web apps', icon: Code, color: 'text-violet-300', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { text: 'ThoughtSpot Intern', icon: Zap, color: 'text-cyan-300', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { text: '90% cost monitoring automation', icon: Cloud, color: 'text-emerald-300', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { text: '95% faster provisioning', icon: Brain, color: 'text-pink-300', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
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
    // --- BACKGROUND: Slightly lighter than pure black (Zinc 950) ---
    <section ref={ref} id="about" className="relative py-32 px-6 overflow-hidden bg-zinc-950" data-testid="section-about">
      
      {/* --- BACKGROUND ICONS --- */}
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none overflow-hidden select-none z-0">
          <Terminal className="absolute top-[10%] left-[10%] md:left-[25%] w-24 h-24 text-zinc-800/30 -rotate-12" strokeWidth={3} />
          <Cpu className="absolute top-[45%] left-[2%] md:left-[15%] w-16 h-16 text-zinc-800/30 rotate-6" strokeWidth={3} />
          <Code2 className="absolute top-[12%] right-[10%] md:right-[20%] w-24 h-24 text-zinc-800/30 rotate-12" strokeWidth={3} />
          <Lightbulb className="absolute top-[45%] right-[2%] md:right-[15%] w-16 h-16 text-zinc-800/30 -rotate-6" strokeWidth={3} />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20 relative z-10">
          <div className={`inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-flex group">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Badge className="relative bg-zinc-950 text-white px-6 py-2 rounded-full border border-white/10 text-sm tracking-wide uppercase">
                    <Sparkles className="w-4 h-4 mr-2 text-violet-400 animate-pulse" />
                    About The Developer
                </Badge>
            </div>
          </div>
          
          <h2 className={`mt-8 text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-zinc-200 mb-2">Driven by</span>
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              Innovation & Code
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* --- LEFT COLUMN: THE NARRATIVE --- */}
          <div className="md:col-span-7 space-y-8">
            <div className={`relative group p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-2xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-6 relative z-10">
                <div className="p-2.5 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/20">
                    <Code className="w-6 h-6" />
                </div>
                The Narrative
              </h3>
              
              {/* --- UPDATED NARRATIVE CONTENT (SHRUNK & PROFESSIONAL) --- */}
              <div className="space-y-6 text-lg text-zinc-400 leading-relaxed relative z-10">
                <p>
                  I am a Computer Science student at <span className="text-white font-medium border-b border-violet-500/30">NIT Trichy</span>, engineering scalable web solutions using <span className="text-cyan-300 font-medium">React, Node.js, and Express</span> backed by robust <span className="text-white font-medium">C/C++</span> fundamentals.
                </p>
                <p>
                  I specialize in deploying production-ready systems with <span className="text-white font-medium">Docker, Kubernetes, AWS, and GCP</span>, ensuring performance and reliability. Beyond code, I stay creative through painting and badminton, always ready for the next impactful challenge.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.03] hover:shadow-lg ${item.bg} ${item.border} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: ACHIEVEMENTS --- */}
          <div className="md:col-span-5 flex flex-col gap-6 relative">
            
            <h3 className={`text-3xl font-bold text-white flex items-center gap-4 mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 relative z-10">
                <Crown className="w-5 h-5 text-white" />
              </span>
              Key Achievements
            </h3>

            <div className={`
                absolute left-5 top-12 bottom-8 w-px 
                bg-gradient-to-b from-amber-500/50 via-white/10 to-transparent 
                hidden md:block 
                transition-all duration-1000 
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `} />

            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`relative ml-0 md:ml-12 overflow-hidden border border-white/5 bg-zinc-950/40 backdrop-blur-xl transition-all duration-500 group hover:-translate-y-1 hover:bg-white/5 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${500 + index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-6 flex gap-5 items-start">
                  <div className={`relative flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${achievement.glow}`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1 group-hover:text-white transition-colors">
                        {achievement.title}
                    </h4>
                    <p className="text-sm text-zinc-400 group-hover:text-white/70 transition-colors">
                        {achievement.description}
                    </p>
                  </div>

                  <Star className="absolute top-4 right-4 w-3 h-3 text-white/10 group-hover:text-white/40 transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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