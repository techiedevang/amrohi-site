import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BuildingGeometry() {
  const ref = useRef();

  // Generate particle positions for a stylized 3D building
  const positions = useMemo(() => {
    const points = [];
    const count = 15000;
    
    const addBox = (w, h, d, yOffset) => {
      const boxPoints = count / 3;
      for (let i = 0; i < boxPoints; i++) {
        const x = (Math.random() - 0.5) * w;
        const y = (Math.random() - 0.5) * h + yOffset;
        const z = (Math.random() - 0.5) * d;
        
        // Concentrate points on the edges/wireframe for a blueprint look
        if (Math.random() > 0.4) {
          const edge = Math.floor(Math.random() * 3);
          if (edge === 0) points.push(x > 0 ? w/2 : -w/2, y, z);
          else if (edge === 1) points.push(x, y > yOffset ? yOffset + h/2 : yOffset - h/2, z);
          else points.push(x, y, z > 0 ? d/2 : -d/2);
        } else {
          points.push(x, y, z); // fill
        }
      }
    };

    // Construct the building layers
    addBox(6, 1, 6, -3);    // Base podium
    addBox(3, 7, 3, 1);     // Main tower
    addBox(1.5, 2, 1.5, 5.5); // Top crown

    return new Float32Array(points);
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Smoothly rotate based on pointer (mouse)
      const targetRotationY = (state.pointer.x * Math.PI) / 4;
      const targetRotationX = (state.pointer.y * Math.PI) / 8;
      
      // Auto-rotation + mouse influence
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        targetRotationY + state.clock.elapsedTime * 0.05,
        0.05
      );
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        targetRotationX,
        0.05
      );
    }
  });

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#A9854B"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function ParticleBuilding() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 18], fov: 45 }}>
        {/* Adjusted fog to ensure building is visible */}
        <fog attach="fog" args={['#e5e1d5', 12, 30]} />
        <BuildingGeometry />
      </Canvas>
    </div>
  );
}
