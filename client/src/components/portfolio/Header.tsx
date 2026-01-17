import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Eye, EyeOff } from 'lucide-react';

interface HeaderProps {
  reducedMotion: boolean;
  onToggleMotion: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  /** URL to the profile image to show in the header. If not provided, a placeholder will be used. */
  profileImageUrl?: string;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ reducedMotion, onToggleMotion, profileImageUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProfileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const placeholder = '/favicon.png';
  const imgSrc = profileImageUrl ?? placeholder;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-zinc-950/80 backdrop-blur-lg border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsProfileOpen(true)}
            className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066FF]"
            aria-label="Open profile image"
            title="Open profile image"
            data-testid="button-open-profile"
          >
            <img
              src={imgSrc}
              alt="Profile"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </button>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-bold tracking-tight group"
            data-testid="link-footer-logo"
          >
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">K</span>
            <span className="text-white group-hover:text-zinc-300 transition-colors">ishore</span>
            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">.V</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0066FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleMotion}
            className="text-zinc-400 hover:text-white hover:bg-white/10"
            aria-label={reducedMotion ? 'Enable animations' : 'Reduce motion'}
            data-testid="button-toggle-motion"
          >
            {reducedMotion ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-zinc-400 hover:text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 py-4"
          data-testid="nav-mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="block px-6 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Profile modal (full-screen) */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsProfileOpen(false)}
        >
          <style>{`@keyframes profileModalIn { from { transform: scale(0.96); opacity: 0 } to { transform: scale(1); opacity: 1 } }
          .profile-modal-enter { animation: profileModalIn 220ms cubic-bezier(.2,.9,.2,1) both; }
          .profile-image-zoom { transition: transform 220ms ease; }
          .profile-image-zoom:hover { transform: scale(1.03); }
          `}</style>

          <div className="absolute inset-0 bg-black/80" />

          <div
            className="relative max-w-[95vw] max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl profile-modal-enter"
            onClick={(e) => e.stopPropagation()} // prevent overlay click from closing when clicking the image container
          >
            <button
              onClick={() => setIsProfileOpen(false)}
              className="absolute top-3 right-3 z-10 rounded-full p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all focus:outline-none"
              aria-label="Close profile"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            <img
              src={imgSrc}
              alt="Full profile"
              className="block max-w-full max-h-[80vh] object-contain bg-black profile-image-zoom"
              draggable={false}
            />
          </div>
        </div>
      )}
    </header>
  );
}