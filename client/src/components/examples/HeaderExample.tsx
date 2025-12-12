import { useState } from 'react';
import Header from '../portfolio/Header';

export default function HeaderExample() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="relative h-32 w-full">
      <Header
        reducedMotion={reducedMotion}
        onToggleMotion={() => setReducedMotion(!reducedMotion)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}
