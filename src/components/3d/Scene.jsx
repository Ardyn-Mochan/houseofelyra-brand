import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, ScrollControls } from '@react-three/drei';
import Bottle from './Bottle';
import ScrollSection from '../ScrollSection';
import FluidBackground from './FluidBackground';

const Scene = () => {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#d4af37" />

                <FluidBackground />
                <Environment preset="city" />

                <ScrollControls pages={5} damping={0.2}>
                    <Float
                        speed={2}
                        rotationIntensity={0.5}
                        floatIntensity={0.5}
                        floatingRange={[-0.1, 0.1]}
                    >
                        <Bottle position={[0, -0.5, 0]} scale={1.2} />
                    </Float>

                    {/* HTML Content Overlay */}
                    <ScrollSection />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default Scene;
