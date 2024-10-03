<<<<<<< HEAD
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";
function App() {
  return (
    <Canvas>
      <PerspectiveCamera position={[3, 3, 3]} near={5} far={8} />
      <OrthographicCamera
        makeDefault
        position={[1, 1, 1]}
        left={-2 * (window.innerWidth / window.innerHeight)}
        right={2 * (window.innerWidth / window.innerHeight)}
        top={2}
        bottom={-2}
        near={-5}
      />
      <OrbitControls />

      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
=======
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <group position={[-2, -2, 0]} scale={[2, 2, 2]} rotation-y={Math.PI / 4}>
        <mesh position={[-1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position={[1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
>>>>>>> dbb23ca6cd52591a7bb5bdbfe36082ad20b11cc2
    </Canvas>
  );
}

export default App;
