import ThreeBackground from '../portfolio/ThreeBackground';

export default function ThreeBackgroundExample() {
  return (
    <div className="relative h-96 w-full bg-background">
      <ThreeBackground reducedMotion={false} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-foreground font-semibold">3D Background Demo</p>
      </div>
    </div>
  );
}
