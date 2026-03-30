"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Connection({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const lineRef = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  const material = useMemo(
    () => new THREE.LineBasicMaterial({ color: "#b8b0a3" }),
    []
  );

  return <primitive object={new THREE.Line(geometry, material)} ref={lineRef} />;
}

function MoleculeGroup() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x += delta * 0.08;
  });

  const nodes = useMemo(
    () => [
      { position: [0, 0, 0] as [number, number, number], color: "#2f6b45", scale: 1.2 },
      { position: [1.6, 0.8, 0] as [number, number, number], color: "#c9a35f", scale: 0.8 },
      { position: [-1.5, 0.9, 0.2] as [number, number, number], color: "#7aa37f", scale: 0.75 },
      { position: [1.2, -1.2, -0.2] as [number, number, number], color: "#7aa37f", scale: 0.7 },
      { position: [-1.3, -1.1, 0] as [number, number, number], color: "#c9a35f", scale: 0.85 },
    ],
    []
  );

  const connections: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ];

  return (
    <group ref={groupRef}>
      {connections.map(([a, b], index) => (
        <Connection
          key={index}
          start={nodes[a].position}
          end={nodes[b].position}
        />
      ))}

      {nodes.map((node, index) => (
        <mesh
          key={index}
          position={node.position}
          scale={node.scale}
        >
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial
            color={node.color}
            roughness={0.35}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ChemistryScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <pointLight position={[-3, -2, 3]} intensity={0.8} />
        <MoleculeGroup />
      </Canvas>
    </div>
  );
}