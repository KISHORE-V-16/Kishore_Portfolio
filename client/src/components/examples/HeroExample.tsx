import Hero from '../portfolio/Hero';

export default function HeroExample() {
  return (
    <div className="relative min-h-[50vh]">
      <Hero reducedMotion={false} />
    </div>
  );
}
