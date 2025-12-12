import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

interface HeroProps {
  reducedMotion: boolean;
}

export default function Hero({ reducedMotion }: HeroProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-pink-500/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 backdrop-blur-sm ${
            !reducedMotion ? 'animate-fade-in' : ''
          }`}
        >
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Full-Stack Developer | NIT Trichy
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.1s' }}
          data-testid="text-hero-name"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Kishore V
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 rounded-full" />
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.2s' }}
          data-testid="text-hero-tagline"
        >
          B.Tech Computer Science student passionate about building innovative web applications
          with{' '}
          <span className="text-violet-400 font-medium">AI integration</span>,{' '}
          <span className="text-cyan-400 font-medium">real-time communication</span>, and{' '}
          <span className="text-blue-400 font-medium">cloud technologies</span>.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-12 ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white px-8 shadow-lg shadow-violet-500/25"
            onClick={() => scrollToSection('#projects')}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10 backdrop-blur-sm"
            onClick={() => scrollToSection('#contact')}
            data-testid="button-contact"
          >
            Get in Touch
          </Button>
        </div>

        <div
          className={`flex items-center justify-center gap-4 ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://github.com/kishorev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 hover:from-violet-500/30 hover:to-purple-500/30 transition-all text-violet-400 hover:text-violet-300 hover:scale-110"
            aria-label="GitHub"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kishore-v-835047265/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all text-cyan-400 hover:text-cyan-300 hover:scale-110"
            aria-label="LinkedIn"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:tp@nitt.edu"
            className="p-3 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30 transition-all text-pink-400 hover:text-pink-300 hover:scale-110"
            aria-label="Email"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 hover:from-violet-500/30 hover:to-cyan-500/30 transition-all text-violet-400 hover:text-violet-300 ${
          !reducedMotion ? 'animate-bounce' : ''
        }`}
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
