import React, { Suspense, useContext, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import ThemeContext from "../../ThemeContext";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDarkTheme = () => {
    return theme === 'dark' ? true : false;
  }

  const colors = ["#AAFF99", "#FFC4D6", "#B3E5FF","#80AAFF", "#D19FEf","#FFFFB3", "#FFCC99"];
  const getRandomPastelColor = () =>{
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={2}>
      <ambientLight intensity={4.5} />
      <directionalLight position={[1, 0, 0.01]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={useMemo(getRandomPastelColor,[])}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;