import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, size, speed, distort }: { 
  position: [number, number, number]; 
  color: string; 
  size: number; 
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particleCount = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#0066FF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00A3FF" />
      
      {!reducedMotion && (
        <>
          <AnimatedSphere position={[-3, 2, -5]} color="#0066FF" size={1.5} speed={1.5} distort={0.4} />
          <AnimatedSphere position={[4, -1, -8]} color="#00A3FF" size={2} speed={1} distort={0.3} />
          <AnimatedSphere position={[0, 3, -10]} color="#1a1a2e" size={2.5} speed={0.8} distort={0.5} />
          <AnimatedSphere position={[-5, -2, -6]} color="#0066FF" size={1} speed={2} distort={0.6} />
          <AnimatedSphere position={[6, 2, -12]} color="#00A3FF" size={1.8} speed={1.2} distort={0.35} />
          <ParticleField />
        </>
      )}
      
      {reducedMotion && (
        <>
          <Sphere args={[1.5, 64, 64]} position={[-3, 2, -5]}>
            <meshStandardMaterial color="#0066FF" metalness={0.8} roughness={0.2} />
          </Sphere>
          <Sphere args={[2, 64, 64]} position={[4, -1, -8]}>
            <meshStandardMaterial color="#00A3FF" metalness={0.8} roughness={0.2} />
          </Sphere>
        </>
      )}
    </>
  );
}

interface ThreeBackgroundProps {
  reducedMotion?: boolean;
}

export default function ThreeBackground({ reducedMotion = false }: ThreeBackgroundProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(reducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(reducedMotion || mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(reducedMotion || e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [reducedMotion]);

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene reducedMotion={prefersReducedMotion} />
        {!prefersReducedMotion && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />}
      </Canvas>
    </div>
  );
}
