import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`inline-block mb-6 px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 ${
            !reducedMotion ? 'animate-fade-in' : ''
          }`}
        >
          <span className="text-sm font-medium text-[#0066FF]">
            Full-Stack Developer | NIT Trichy
          </span>
        </div>

        <h1
          className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.1s' }}
          data-testid="text-hero-name"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">
            Kishore V
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
          with AI integration, real-time communication, and cloud technologies.
        </p>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-12 ${
            !reducedMotion ? 'animate-fade-in-up' : ''
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <Button
            size="lg"
            className="bg-[#0066FF] hover:bg-[#0055DD] text-white px-8"
            onClick={() => scrollToSection('#projects')}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-[#0066FF]/30 hover:border-[#0066FF] hover:bg-[#0066FF]/10"
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
            className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
            data-testid="link-github"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/kishore-v-835047265/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
            data-testid="link-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:tp@nitt.edu"
            className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Email"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('#about')}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground ${
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
