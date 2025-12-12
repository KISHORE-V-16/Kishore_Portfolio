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
  { icon: Github, href: 'https://github.com/kishorev', label: 'GitHub', gradient: 'from-gray-500 to-gray-700' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kishore-v-835047265/', label: 'LinkedIn', gradient: 'from-blue-500 to-blue-600' },
  { icon: Mail, href: 'mailto:tp@nitt.edu', label: 'Email', gradient: 'from-pink-500 to-rose-500' },
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
    <footer className="relative py-12 px-6 border-t border-border overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-2xl font-bold tracking-tight"
            data-testid="link-footer-logo"
          >
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">K</span>
            <span className="text-foreground">ishore</span>
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">.</span>
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                data-testid={`link-footer-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
                className={`p-2.5 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-lg hover:scale-110 transition-transform`}
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
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            at NIT Trichy.
          </p>
        </div>
      </div>
    </footer>
  );
}
