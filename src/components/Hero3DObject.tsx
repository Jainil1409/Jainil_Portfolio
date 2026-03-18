'use client';

import { Canvas } from '@react-three/fiber';
import { Float, PresentationControls, MeshDistortMaterial } from '@react-three/drei';

export default function Hero3DObject() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#ec4899" />
        
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0.13, 0.1, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <Float
            speed={4} 
            rotationIntensity={2} 
            floatIntensity={2}
          >
            {/* Main icosahedron (diamond-like shape) */}
            <mesh>
              <icosahedronGeometry args={[1.5, 0]} />
              <MeshDistortMaterial
                color="#8b5cf6"
                envMapIntensity={1}
                clearcoat={0.8}
                clearcoatRoughness={0}
                metalness={0.8}
                roughness={0.2}
                distort={0.4}
                speed={2}
              />
            </mesh>
            
            {/* Outer wireframe */}
            <mesh scale={[1.2, 1.2, 1.2]}>
              <icosahedronGeometry args={[1.5, 0]} />
              <meshBasicMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
            </mesh>
          </Float>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
