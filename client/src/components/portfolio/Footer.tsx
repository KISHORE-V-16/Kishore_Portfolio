import { Github, Linkedin, Mail, Heart, Command, Terminal } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/KISHORE-V-16', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kishore-v-835047265/', label: 'LinkedIn', gradient: 'from-blue-600 to-indigo-600' },
  { icon: Mail, href: 'mailto:kishore16a03@gmail.com', label: 'Email', gradient: 'from-pink-600 to-rose-600' },
];

interface FooterProps {
  reducedMotion: boolean;
}

// --- HELPER FOR FLOATING BACKGROUND ICONS ---
function FloatingItem({ children, className, delay = '0s' }: { children: React.ReactNode, className: string, delay?: string }) {
    return (
      <div className={`absolute ${className} animate-float`} style={{ animationDelay: delay }}>
         {children}
      </div>
    );
}

// --- DISTRIBUTED FOOTER ICONS BACKGROUND ---
function FooterBackgroundIcons() {
    const strokeW = 2.0;
    const baseClasses = "text-zinc-800/30"; 

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Left Side */}
            <FloatingItem className="top-[20%] left-[5%] -rotate-12" delay="0s">
                <Command className={`w-16 h-16 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>

            {/* Right Side */}
            <FloatingItem className="top-[30%] right-[5%] -rotate-6" delay="1s">
                <Terminal className={`w-14 h-14 ${baseClasses}`} strokeWidth={strokeW} />
            </FloatingItem>
        </div>
    );
}

// --- MINIATURE KV LOGO FOR FOOTER SIGNATURE ---
function FooterSignatureLogo() {
  return (
    <div className="relative w-6 h-6 inline-flex items-center justify-center group ml-1 align-middle">
      <svg 
        viewBox="0 0 300 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_5px_rgba(139,92,246,0.3)] transition-transform duration-300 group-hover:scale-125"
      >
        <defs>
          <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="20%" stopColor="#8b5cf6" />   {/* Violet-500 */}
          <stop offset="100%" stopColor="#06b6d4" /> 
          </linearGradient>
        </defs>
        <g stroke="url(#footer-logo-grad)" strokeWidth="35" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 70 70 L 70 230 M 70 150 L 130 70 M 70 150 L 130 230" />
            <path d="M 170 70 L 205 230 L 240 70" />
        </g>
      </svg>
    </div>
  );
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
    // --- MAIN BACKGROUND: PURE BLACK ---
    <footer className="relative py-12 px-6 border-t border-zinc-800 overflow-hidden bg-black" data-testid="footer">
      
      {/* --- ADDED: MINIMAL BACKGROUND ICONS --- */}
      <FooterBackgroundIcons />
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-2xl font-bold tracking-tight group"
            data-testid="link-footer-logo"
          >
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">K</span>
            <span className="text-white group-hover:text-zinc-300 transition-colors">ishore</span>
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">.V</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-zinc-400 hover:text-white transition-colors relative group font-medium"
                data-testid={`link-footer-${link.label.toLowerCase()}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-lg hover:scale-110 transition-transform hover:shadow-zinc-800/50`}
                aria-label={link.label}
                data-testid={`link-footer-social-${link.label.toLowerCase()}`}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-500 flex items-center justify-center gap-1.5" data-testid="text-copyright">
            &#169;{currentYear} Kishore V. All rights reserved. Made with
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 animate-pulse" />
            by 
            {/* UPDATED: KV Icon Signature */}
            <FooterSignatureLogo />
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}