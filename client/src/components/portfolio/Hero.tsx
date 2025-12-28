import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, BrainCircuit, Zap, Cloud, Code2, Cpu, Terminal, Database, Globe, Server, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  reducedMotion: boolean;
}

// --- BRAND ICONS ---

// LeetCode: Official Orange (Untouched)
function LeetCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path 
        d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.151a1.378 1.378 0 0 0-.149-1.992l-3.564-2.882a5.747 5.747 0 0 0-2.729-1.132 5.27 5.27 0 0 0-2.615.371l-.893-.893a1.372 1.372 0 0 0 1.927-.03l4.58-5.023a1.37 1.37 0 0 0 .38-1.213A1.37 1.37 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" 
        fill="#FFA116" 
      />
    </svg>
  );
}

// Codeforces: Official Tri-Color Bars (Untouched)
function CodeforcesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3z" fill="#FFD700"/>
      <path d="M13.5 4.5A1.5 1.5 0 0 1 15 6v13.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5V6a1.5 1.5 0 0 1 1.5-1.5h3z" fill="#1F8ACB"/>
      <path d="M22.5 13.5A1.5 1.5 0 0 1 24 15v4.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 18 19.5V15a1.5 1.5 0 0 1 1.5-1.5h3z" fill="#B40000"/>
    </svg>
  );
}

// CodeChef: Thick White "CC", Spaced Out, No Square
function CodeChefIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#FFFFFF" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
       {/* Left C - Enlarged and moved */}
       <path d="M10 6C6 6 4 9 4 12C4 15 6 18 10 18" />
       {/* Right C - Enlarged and moved */}
       <path d="M20 6C16 6 14 9 14 12C14 15 16 18 20 18" />
    </svg>
  );
}

// --- PLASMA KV LOGO ---
function PlasmaKVLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 perspective-1000 animate-float-logo">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-violet-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-pink-500/10 rounded-full blur-[80px] animate-pulse -z-10" />

      <svg 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[550px] drop-shadow-[0_0_50px_rgba(167,139,250,0.5)]"
      >
        <defs>
          <linearGradient id="plasma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>

          <linearGradient id="energy-pulse" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
             <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
             <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="grad-ring-subtle" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>

           <filter id="plasma-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.7">
            <circle cx="150" cy="150" r="130" stroke="url(#grad-ring-subtle)" strokeWidth="1" strokeDasharray="150 300" className="animate-spin-slow" style={{ transformOrigin: '150px 150px' }} />
            <circle cx="150" cy="150" r="100" stroke="url(#grad-ring-subtle)" strokeWidth="2" strokeDasharray="50 150" strokeLinecap="round" className="animate-spin-reverse" style={{ transformOrigin: '150px 150px' }} />
             <circle cx="280" cy="150" r="2" fill="#06b6d4" className="animate-spin-slow" style={{ transformOrigin: '150px 150px' }}/>
             <circle cx="50" cy="150" r="2" fill="#ec4899" className="animate-spin-reverse" style={{ transformOrigin: '150px 150px' }}/>
        </g>

        <g filter="url(#plasma-glow)" strokeLinecap="round" strokeLinejoin="round">
            <defs>
                <path id="k-path" d="M 80 80 L 80 220 M 80 150 L 130 80 M 80 150 L 130 220" />
                <path id="v-path" d="M 160 80 L 195 220 L 230 80" />
            </defs>
            <g stroke="url(#plasma-grad)" strokeWidth="16" opacity="0.9">
                <use href="#k-path" className="animate-draw" />
                <use href="#v-path" className="animate-draw" style={{ animationDelay: '0.5s' }} />
            </g>
            <g stroke="url(#energy-pulse)" strokeWidth="8" style={{ mixBlendMode: 'overlay' }}>
                 <use href="#k-path" className="animate-energy-flow" />
                 <use href="#v-path" className="animate-energy-flow" style={{ animationDelay: '1s' }} />
            </g>
        </g>
      </svg>
    </div>
  );
}

export default function Hero({ reducedMotion }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2; 
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden py-20 lg:py-0 perspective-1000 bg-black"
      data-testid="section-hero"
    >
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none transition-transform duration-100 ease-out origin-center" 
        style={{ 
          transform: !reducedMotion 
            ? `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg) scale(1.1)` 
            : 'none' 
        }}
      />
      
      <FloatingGlassIcon icon={Code2} color="violet" position="top-[15%] left-[5%]" delay="0s" rotate="-12deg" />
      <FloatingGlassIcon icon={Terminal} color="blue" position="bottom-[15%] left-[5%]" delay="3s" rotate="6deg" size="sm" />
      <FloatingGlassIcon icon={Cpu} color="cyan" position="top-[20%] right-[10%]" delay="2s" rotate="12deg" />
      <FloatingGlassIcon icon={Database} color="pink" position="bottom-[25%] right-[5%]" delay="1s" rotate="6deg" />
      <FloatingGlassIcon icon={Globe} color="violet" position="top-[10%] right-[30%]" delay="4s" rotate="-8deg" size="sm" />
      <FloatingGlassIcon icon={Server} color="pink" position="bottom-[10%] right-[25%]" delay="1.5s" rotate="-3deg" size="sm" />
      <FloatingGlassIcon icon={Layers} color="cyan" position="top-[45%] right-[2%]" delay="2.5s" rotate="15deg" size="sm" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="flex flex-col items-center lg:items-start order-2 lg:order-1 text-center lg:text-left z-20">
           
          <div className="relative inline-flex group mb-8">
                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <Badge className="relative bg-black text-white px-6 py-2 rounded-full border border-white/10 text-sm tracking-wide uppercase">
                    <Sparkles className="w-4 h-4 mr-2 text-violet-400 animate-pulse" />
                    Available for New Projects
                </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground/80 block mb-2 text-4xl md:text-5xl">Hi, I'm</span>
            <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-extrabold drop-shadow-sm">
              Kishore V
            </span>
          </h1>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
            <TechPill icon={BrainCircuit} text="AI Integration" color="violet" />
            <TechPill icon={Zap} text="Real-time Systems" color="cyan" />
            <TechPill icon={Cloud} text="Cloud Architecture" color="blue" />
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-8 h-12 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all hover:scale-105"
              onClick={() => scrollToSection('#projects')}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-violet-500/30 hover:border-violet-500 bg-background/50 hover:bg-violet-500/10 backdrop-blur-sm transition-all hover:scale-105"
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <SocialLink href="https://github.com/KISHORE-V-16" icon={Github} color="violet" />
            <SocialLink href="https://www.linkedin.com/in/kishore-v-835047265/" icon={Linkedin} color="cyan" />
            <SocialLink href="mailto:kishore16a03@gmail.com" icon={Mail} color="pink" />
            
            <div className="hidden sm:block w-px h-8 bg-white/10 mx-2" />

            <SocialLink href="https://leetcode.com/u/KISHORE__V/" icon={LeetCodeIcon} color="amber" />
            <SocialLink href="https://codeforces.com/profile/kishore__V" icon={CodeforcesIcon} color="blue" />
            {/* BROWN THEME with WHITE "CC" spaced out */}
            <SocialLink href="https://www.codechef.com/users/kishore_v_26" icon={CodeChefIcon} color="brown" />
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end h-[400px] lg:h-[600px] w-full relative z-10 pointer-events-none lg:pointer-events-auto">
            <PlasmaKVLogo />
        </div>
      </div>

       <button
        onClick={() => scrollToSection('#about')}
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 p-3 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-muted-foreground hover:text-white animate-bounce z-20`}
      >
        <ArrowDown className="w-5 h-5" />
      </button>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { animation: gradient 6s ease infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(var(--rot)); }
          50% { transform: translate(0, -15px) rotate(var(--rot)); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-logo { animation: float-logo 6s ease-in-out infinite; }

        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }

        @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .animate-spin-reverse { animation: spin-reverse 40s linear infinite; }

        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt { animation: tilt 10s infinite linear; }

        .animate-draw {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: drawLinesFast 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes drawLinesFast {
          to { stroke-dashoffset: 0; }
        }

        .animate-energy-flow {
          stroke-dasharray: 100 800; /* Short dash, long gap */
          stroke-dashoffset: 900;
          animation: energyFlow 3s linear infinite;
        }
        @keyframes energyFlow {
          to { stroke-dashoffset: -900; }
        }

      `}</style>
    </section>
  );
}

function TechPill({ icon: Icon, text, color }: { icon: any, text: string, color: 'violet' | 'cyan' | 'blue' }) {
    const colors = {
        violet: "from-violet-500/10 to-purple-500/10 border-violet-500/20 text-violet-300 shadow-violet-500/10",
        cyan: "from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-300 shadow-cyan-500/10",
        blue: "from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-300 shadow-blue-500/10",
    }
    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br ${colors[color]} border backdrop-blur-md shadow-lg transition-all hover:scale-105 hover:-translate-y-1 cursor-default`}>
        <Icon className="w-4 h-4" />
        <span className="font-medium text-sm">{text}</span>
      </div>
    );
}

function SocialLink({ href, icon: Icon, color }: { href: string, icon: any, color: 'violet' | 'cyan' | 'pink' | 'amber' | 'blue' | 'rose' | 'orange' | 'brown' }) {
    const colors = {
        violet: "from-violet-500/20 to-purple-500/20 text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
        cyan:   "from-cyan-500/20 to-blue-500/20 text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
        pink:   "from-pink-500/20 to-rose-500/20 text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
        amber:  "from-amber-500/20 to-orange-500/20 text-amber-400 hover:border-amber-500/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
        blue:   "from-blue-500/20 to-indigo-500/20 text-blue-400 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        rose:   "from-rose-500/20 to-red-500/20 text-rose-400 hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]",
        orange: "from-orange-500/20 to-amber-600/20 text-orange-400 hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]",
        brown:  "from-amber-950 to-orange-950 border-orange-900/50 text-amber-100 hover:border-orange-700 hover:shadow-[0_0_15px_rgba(139,69,19,0.5)]"
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full bg-gradient-to-br border border-transparent ${colors[color]} transition-all hover:scale-110 shadow-lg`}
      >
        <Icon className="w-5 h-5" />
      </a>
    );
}

function FloatingGlassIcon({ icon: Icon, color, position, delay, rotate, scale = 1, size = 'md' }: { 
  icon: any, 
  color: 'violet' | 'cyan' | 'pink' | 'blue', 
  position: string, 
  delay: string, 
  rotate: string, 
  scale?: number, 
  size?: 'sm' | 'md' 
}) {
  const colors = {
    violet: "text-violet-400 bg-violet-500/5 border-violet-500/10",
    cyan: "text-cyan-400 bg-cyan-500/5 border-cyan-500/10",
    pink: "text-pink-400 bg-pink-500/5 border-pink-500/10",
    blue: "text-blue-400 bg-blue-500/5 border-blue-500/10",
  }

  const padding = size === 'sm' ? "p-2 rounded-xl" : "p-3 rounded-2xl";

  return (
    <div 
      className={`absolute ${position} hidden lg:flex items-center justify-center ${padding} border backdrop-blur-sm shadow-xl animate-float-slow opacity-60 hover:opacity-100 transition-opacity duration-500 z-0 ${colors[color]}`}
      style={{ 
        animationDelay: delay, 
        transform: `rotate(${rotate}) scale(${scale})`,
        '--rot': rotate 
      } as React.CSSProperties}
    >
      <Icon className={size === 'sm' ? "w-5 h-5" : "w-8 h-8"} />
    </div>
  )
}