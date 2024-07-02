'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const colors = ['#7CB9E8', '#72A0C1', '#00308F', '#00FFFF', '#89CFF0'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const QuantumCubeModel: React.FC = () => {
  const { scene, animations } = useGLTF('/assets/3D/cubes_without_sphere.glb'); // Updated path to your GLB file
  const { actions } = useAnimations(animations, scene);
  const meshRefs = useRef<THREE.Mesh[]>([]);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const [completedLoops, setCompletedLoops] = useState(0);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Create an AnimationMixer and play all animations
      const mixer = new THREE.AnimationMixer(scene);
      mixerRef.current = mixer;

      const totalAnimations = Object.values(actions).length;
      let loopCounter = 0;

      // Set up event listener for when animations finish
      const onAnimationLoop = () => {
        loopCounter++;
        if (loopCounter === totalAnimations) {
          setCompletedLoops((prev) => prev + 1);
          loopCounter = 0; // Reset the counter for the next cycle
        }
      };

      Object.values(actions).forEach((clipAction) => {
        const action = mixer.clipAction(clipAction.getClip());
        action.reset().play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
      });

      mixer.addEventListener('finished', onAnimationLoop);

      // Store references to meshes
      scene.traverse((object) => {
        if (object.isMesh) {
          meshRefs.current.push(object);
        }
      });
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current = null;
      }
    };
  }, [actions, scene]);

  useEffect(() => {
    if (completedLoops > 0) {
      // Restart all animations
      Object.values(actions).forEach((clipAction) => {
        const action = mixerRef.current?.clipAction(clipAction.getClip());
        action?.reset().play();
      });

      // Change colors
      meshRefs.current.forEach((mesh) => {
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.color.set(getRandomColor());
      });
    }
  }, [completedLoops, actions]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <primitive object={scene} />;
};

useGLTF.preload('/assets/3D/cubes_without_sphere.glb'); // Preload the updated GLB file

const QuantumCube: React.FC = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }} gl={{ alpha: true }} camera={{ position: [15, 0, 8] }}> {/* Updated camera position */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.5} />
      <QuantumCubeModel />
      <OrbitControls zoomSpeed={0.6} />
    </Canvas>
  );
};

export default QuantumCube;
