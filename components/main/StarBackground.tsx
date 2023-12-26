'use client'
import React, {useState, Suspense, useRef} from 'react';
import {Canvas, GroupProps, useFrame} from "@react-three/fiber";
import {Points, PointMaterial, Preload} from "@react-three/drei";
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm'

const StarBackground = (props: any) => {

    const ref:any = useRef<GroupProps>(null)

    const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x -= delta /10;
        ref.current.rotation.y -= delta /10;
    })


    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
              ref={ref}
              positions={sphere}
              stride={3}
              frustumCulled {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttention={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{position: [0, 0, 1]}}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarCanvas;