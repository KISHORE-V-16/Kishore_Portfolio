import { useState, useEffect } from 'react';
import ThreeBackground from '@/components/portfolio/ThreeBackground';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Portfolio() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(isDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header
        reducedMotion={reducedMotion}
        onToggleMotion={toggleReducedMotion}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <main className='overflow-y-hidden'>
        <div className="relative">
          <ThreeBackground reducedMotion={reducedMotion} />
          <Hero reducedMotion={reducedMotion} />
        </div>

        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer reducedMotion={reducedMotion} />
    </div>
  );
}
