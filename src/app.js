import React, {useEffect} from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, TrackballControls } from '@react-three/drei'
import { DoubleSide } from "three";
function MyAnimatedBox(){
    // useFrame(({ clock }) => {
        // const a = clock.getElapsedTime()
        // myMesh.current.rotation.x = clock.getElapsedTime() 
        // myMesh.current.rotation.y = a *.2
        // myMesh.current.position.x = Math.sin(a)
        // console.log(myMesh.current.position.x)
        // function onKeyPressed(e) {
        //     myMesh.current.position.x += 1
            
        //   }
        // document.addEventListener('keydown', e =>
        // {
        //     if(e.key == 'ArrowUp'){
        //         myMesh.current.position.y += .4

        //     }
            
        // })

    //   })

    //   function OnKeyPressed() {
    //     document.addEventListener('keydown', e =>
    //     {
    //         myMesh.current.position.y += 1
            
    //     })
        // if(document.addEventListener('keydown',OnKeyPressed)){

        // }
        // // console.log(e.keyCode);
        // return () => {
        //     document.removeEventListener('keydown', OnKeyPressed);
        // }}

        document.addEventListener('keydown', e =>
        {
            if(e.key === 'ArrowUp'){
                myMesh.current.rotation.x += 1
                console.log('regi')
            }
            if(e.key === 'ArrowDown'){
                myMesh.current.rotation.x -= 1
                console.log('reg')
            }
            if(e.key === 'ArrowLeft'){
                myMesh.current.rotation.y += 1.6
                console.log(myMesh.current.rotation.y)
            }
            if(e.key === 'ArrowRight'){
                myMesh.current.rotation.y -= 1.7
                // console.log(myMesh)


            }
        })
    const myMesh = React.useRef()
    return(
        <mesh ref={myMesh}
        position={[0, 0, -1]}
        >
            <boxGeometry args={[1,2,1]}/>
            <meshPhongMaterial color='royalblue'/>
        {/* </mesh>
        <planeBufferGeometry/>
        <meshPhongMaterial/>
        <mesh> */}

        </mesh>
    )
}
function Component(){

const planeref=React.useRef()
function ye(){
    console.log(planeref.current.position)
}

// planeref.current.position.x+=2
return(       
    <mesh ref={planeref}
    onClick={ye} 
    rotation={[1.2,0,0]}
    position={[0,-1.4,0]}
    >
        <planeGeometry  args={[3,2]}  />
        <meshPhongMaterial color={'red'} side={DoubleSide}/>
    </mesh>
)}


export default function App() {
  return (

    <div className="App">
        
      <Canvas>

    <PerspectiveCamera makeDefault position={[0,0,3]}/>
    <OrbitControls />
        <Component/>
        <MyAnimatedBox/>
       <mesh  
    rotation={[1.2,0,0]}
    position={[0,-1.4,0]}>
        <planeGeometry args={[2,4]}  />
        <meshPhongMaterial color={'red'} side={DoubleSide}/>
        </mesh>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}
