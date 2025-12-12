import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/kishorev', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kishore-v-835047265/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:tp@nitt.edu', label: 'Email' },
];

interface FooterProps {
  reducedMotion: boolean;
}

export default function Footer({ reducedMotion }: FooterProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-bold tracking-tight text-foreground"
            data-testid="link-footer-logo"
          >
            <span className="text-[#0066FF]">K</span>ishore
            <span className="text-[#00A3FF]">.</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`link-footer-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label={link.label}
                data-testid={`link-footer-social-${link.label.toLowerCase()}`}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1" data-testid="text-copyright">
            {currentYear} Kishore V. Made with
            <Heart className="w-3 h-3 text-[#0066FF] fill-[#0066FF]" />
            at NIT Trichy.
          </p>
        </div>
      </div>
    </footer>
  );
}
