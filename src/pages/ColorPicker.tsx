import { Paper } from '@mui/material';
import { Suspense, useState } from 'react'
import { SketchPicker } from 'react-color';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { styled } from '@mui/material/styles';
interface ColorResult {
  hex: string;
}
type customColor = { customColors: { mesh: string}}
type GLTFResult = GLTF & {
  nodes:{
    LOD3spShape: THREE.Mesh
  };
  materials:{
    ['blinn3-fx']: THREE.MeshStandardMaterial
  }
}

const PaperCustom = styled(Paper)(
  ({ theme }) => ({
        width: '100%', 
        height: "75vh",
        position:'relative',
        margin:'auto',
        [theme.breakpoints.down('lg')]: {
          width: '70vw',
        },
    }
  ))

export function Model(props: customColor) {
  const { nodes, materials } = useGLTF('/Duck.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group scale={0.012}>
        <PerspectiveCamera makeDefault={false} far={10000} near={1} fov={37.85} position={[400.11, 463.26, -431.08]} rotation={[-2.31, 0.57, 2.61]} />
        <mesh geometry={nodes.LOD3spShape.geometry} material={materials['blinn3-fx']} material-color={props.customColors.mesh}/>
      </group>
    </group>
  )
}
const ColorPicker = () => {
  const [background, setBackground] = useState('#fff')

  const changeColor = (color:ColorResult) => {
    setBackground(color.hex)
  }

  return (
    <PaperCustom>
      <Canvas flat linear>
        <Suspense fallback={null}>
          <ambientLight />
          <spotLight intensity={0.9}
            angle={0.1}
            penumbra={1}
            position={[550, 500, 500]}
            castShadow />
          <Model customColors={{ mesh: background}} />
          <OrbitControls enablePan={true} enableRotate={true} enableZoom={false}/>
        </Suspense>
      </Canvas>
      <SketchPicker color={background} onChangeComplete={changeColor}/>
    </PaperCustom> 
  )
}

export default ColorPicker