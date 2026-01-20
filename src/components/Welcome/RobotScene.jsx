import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

const RobotModel = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      const firstAnimation = Object.values(actions)[0];
      firstAnimation?.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return <primitive
            ref={group}
            object={scene}
            scale={0.9}
            position={[0, -1, 0]}
          />  ;
};

const RobotScene = () => {
  return (
    <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          position: window.innerWidth < 600 ? [0, 1.4, 3.8] : [1.0, 1.8, 4.5],
          fov: window.innerWidth < 600 ? 55 : 45
        }}
      >
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} />
      <RobotModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default RobotScene;
