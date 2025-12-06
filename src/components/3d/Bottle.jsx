import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const Bottle = (props) => {
    const group = useRef();
    const scroll = useScroll();

    useFrame((state, delta) => {
        // The scroll.offset is between 0 and 1
        const offset = scroll.offset;

        // Rotate 360 degrees (2 * PI) over the course of the scroll
        // Also add a gentle continuous rotation
        group.current.rotation.y = (offset * Math.PI * 2) + (state.clock.elapsedTime * 0.1);

        // Slight tilt based on scroll speed could be cool, but keeping it simple for now
        group.current.rotation.x = Math.sin(offset * Math.PI) * 0.2;
    });

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Bottle Body - Visceral Glass */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1, 1, 3, 32]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={1.5}
                    thickness={0.8}
                    chromaticAberration={0.06}
                    anisotropy={0.2}
                    distortion={0.2}
                    distortionScale={0.3}
                    temporalDistortion={0.2}
                    color="#ffffff"
                    bg="#0a0a0a"
                    roughness={0.05}
                    metalness={0.1}
                    transmission={1}
                    clearcoat={1}
                    attenuationDistance={0.5}
                    attenuationColor="#ffffff"
                />
            </mesh>

            {/* Liquid inside - Moving Fluid */}
            <mesh position={[0, -0.3, 0]}>
                <cylinderGeometry args={[0.85, 0.85, 2.3, 32]} />
                <meshPhysicalMaterial
                    color="#d4af37"
                    transparent
                    opacity={0.8}
                    roughness={0.1}
                    metalness={0.2}
                    transmission={0.5}
                    thickness={1}
                />
            </mesh>

            {/* Bottle Neck */}
            <mesh position={[0, 1.75, 0]}>
                <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
            </mesh>

            {/* Bottle Cap */}
            <mesh position={[0, 2.25, 0]}>
                <boxGeometry args={[0.8, 0.5, 0.8]} />
                <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
            </mesh>

            {/* Gold Ring Detail */}
            <mesh position={[0, 1.5, 0]}>
                <torusGeometry args={[1.02, 0.05, 16, 100]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.1} />
            </mesh>
        </group>
    );
};

export default Bottle;
