// CarView.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const CarView = () => {
  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 50 }}
      style={{ height: '50vh', width: '50%' }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial color="red" />
      </Box>
      {/* Add your 3D car model here */}
    </Canvas>
  );
};

export default CarView;
