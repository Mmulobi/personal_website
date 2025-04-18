import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function Box() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#4338ca"
          roughness={0}
          metalness={0.8}
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="h-[60vh] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Box />
      </Canvas>
    </div>
  );
} 