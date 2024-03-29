import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, Suspense } from "react";

const BasicParticles = () => {
  // This reference gives us direct access to our points
  const points = useRef();

  // You can see that, like our mesh, points also takes a geometry and a material,
  // but a specific material => pointsMaterial
  return (
    <points ref={points}>
      <sphereGeometry args={[1, 48, 48]} />
      <pointsMaterial color="#5786F5" size={0.015} sizeAttenuation />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <Canvas camera={{ position: [1.5, 1.5, 1.5] }}>
      <ambientLight intensity={0.5} />
      <BasicParticles />
      <OrbitControls autoRotate />
    </Canvas>
  );
};

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas>
//         <Suspense fallback={null}>
//           <BasicParticles />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

export default StarsCanvas;
