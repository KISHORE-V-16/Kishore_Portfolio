import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, OrbitControls, Torus, Box } from '@react-three/drei';
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

function AnimatedTorus({ position, color, speed }: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.8}
        />
      </Torus>
    </Float>
  );
}

function AnimatedBox({ position, color, speed }: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.25;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.1;
    }
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Box>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particleCount = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const col = new Float32Array(particleCount * 3);
    const colorPalette = [
      new THREE.Color('#8B5CF6'),
      new THREE.Color('#06B6D4'),
      new THREE.Color('#3B82F6'),
      new THREE.Color('#EC4899'),
    ];
    
    for (let i = 0; i < particleCount; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
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
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[10, 5, -8]} intensity={0.6} color="#06B6D4" />
      
      {!reducedMotion && (
        <>
          <AnimatedSphere position={[-4, 2, -6]} color="#8B5CF6" size={1.8} speed={1.2} distort={0.4} />
          <AnimatedSphere position={[5, -1, -10]} color="#06B6D4" size={2.2} speed={0.8} distort={0.3} />
          <AnimatedSphere position={[0, 4, -12]} color="#3B82F6" size={2.8} speed={0.6} distort={0.5} />
          <AnimatedSphere position={[-6, -2, -8]} color="#EC4899" size={1.2} speed={1.5} distort={0.6} />
          <AnimatedSphere position={[7, 3, -14]} color="#10B981" size={2} speed={1} distort={0.35} />
          
          <AnimatedTorus position={[-3, -3, -7]} color="#8B5CF6" speed={1.2} />
          <AnimatedTorus position={[4, 2, -9]} color="#06B6D4" speed={0.9} />
          
          <AnimatedBox position={[3, -2, -6]} color="#F97316" speed={1.3} />
          <AnimatedBox position={[-5, 1, -10]} color="#3B82F6" speed={1.1} />
          
          <ParticleField />
        </>
      )}
      
      {reducedMotion && (
        <>
          <Sphere args={[1.8, 64, 64]} position={[-4, 2, -6]}>
            <meshStandardMaterial color="#8B5CF6" metalness={0.8} roughness={0.2} />
          </Sphere>
          <Sphere args={[2.2, 64, 64]} position={[5, -1, -10]}>
            <meshStandardMaterial color="#06B6D4" metalness={0.8} roughness={0.2} />
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
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene reducedMotion={prefersReducedMotion} />
        {!prefersReducedMotion && <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />}
      </Canvas>
    </div>
  );
}
