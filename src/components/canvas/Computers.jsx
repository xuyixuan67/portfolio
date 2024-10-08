import React, { Suspense, useCallback, useContext, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ThemeContext from "../../ThemeContext";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const {theme, toggleTheme} = useContext(ThemeContext);
  const isDarkTheme = () =>{
    return theme === 'dark' ? true : false;
  }

  return (
    <mesh>
      <hemisphereLight intensity={isDarkTheme()? 3 : 7} 
       groundColor={isDarkTheme() ? 'black' : 'white'} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={isDarkTheme()? 4: 2} 
        position={[0.2, 0, 1]}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [0, -2.3, -0.5] : [0.5, -3, 0]}
        rotation={[-0.01, -0.3, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;