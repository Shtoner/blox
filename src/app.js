import React, {useEffect} from "react";
import "./styles.css";
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, TrackballControls } from '@react-three/drei'
import { DoubleSide, MathUtils } from "three";
import gsap from 'gsap'
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon'
import testVertexShader from './vertex.js'
import testFragmentShader from './fragment.js'
// import { Shaders, Node, GLSL } from "gl-react";


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
        const myMesh = React.useRef()
        let upRotate=0
        let upMove=0
        let sideRotate=0
        let sideMove=0
  
        // const [myMesh, api] = useBox(() => ({gravity:10,type:'Dynamic', mass: 5,friction:0, frictionEquationStiffness: 10,restitution:0, args: [1, 2, 1] }))
        // console.log(myMesh)
        // console.log(api)
        // useFrame(state => {
        //   const t = state.clock.getElapsedTime()
        // //   api.position.set(Math.sin(t * 2) * 5, Math.cos(t * 2) * 5, 3)
        //   api.rotation.set(1+t,0,0)
        // })
            document.addEventListener('keydown', e =>
            {
                if(myMesh.current.position.z===-2 && myMesh.current.position.x===0){gsap.to(myMesh.current.position, {duration:1,y:-20})}
                if(e.key === 'ArrowUp'){
    
                    // const targetRotation = myMesh.current.rotation.clone()
                    // let rx=myMesh.current.rotation.x
                    // myMesh.current.rotation.x=MathUtils.lerp(rx, smoothness,.1) 
                    // console.log(rx)
                upRotate +=90
                upMove-=1
                // const t = state.clock.getElapsedTime()
      
                // api.rotation.set(MathUtils.lerp(0,1,t*5),0,0)
                MathUtils.degToRad(upRotate)
                // console.log(upRotate)
    
                gsap.to(myMesh.current.rotation, { duration: 1,x: -MathUtils.degToRad(upRotate)})
                gsap.to(myMesh.current.position, { duration: 1,z: upMove})
                console.log(myMesh.current.position)
                // console.log(upMove)
    
    
                }
                if(e.key === 'ArrowDown'){
                    myMesh.current.rotation.x -= 1
                    // console.log('reg')
                    upMove+=1
                    upRotate-=90
                    gsap.to(myMesh.current.rotation, { duration: 1,x: -MathUtils.degToRad(upRotate)})
                    gsap.to(myMesh.current.position, { duration: 1,z: upMove})
                    // console.log(upRotate)
                    console.log(upMove)
                    console.log(sideMove)
                    // console.log(sideRotate)
                }
                if(e.key === 'ArrowLeft'){
                    sideRotate+=90
                    sideMove-=1
                    gsap.to(myMesh.current.position,{ duration:1,x:sideMove})

                    if((upMove % 2 == 0)){
                    gsap.to(myMesh.current.rotation,{ duration:1,z:-MathUtils.degToRad(sideRotate)} )
                }
                    else if((upMove % 2 == 1)){
                        gsap.to(myMesh.current.rotation,{ duration:1,y:MathUtils.degToRad(sideRotate)})
                    
                }
                // console.log(upRotate)

                // console.log(sideRotate)
            }
                if(e.key === 'ArrowRight'){
                    sideRotate-=90
                    sideMove+=1
                    if((upMove % 2 == 0)){
                        gsap.to(myMesh.current.rotation,{ duration:1,z:-MathUtils.degToRad(sideRotate)} )
                    }
                        else if((upMove % 2 == 1)){
                            gsap.to(myMesh.current.rotation,{ duration:1,y:MathUtils.degToRad(sideRotate)})
                        
                    }
                    gsap.to(myMesh.current.position,{ duration:1,x:sideMove})
                    // console.log(myMesh)
    
    
                }
            })

       
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

let planeref=React.useRef()
// planeref.current.rotation.x=1

function ye(){
    // console.log(planeref.current.rotation)

}
// const planerotateref = React.useRef()

// const [planerotateref] = usePlane(()=>({position: [0,-5,0],rotation: [-Math.PI / 2, 0, 0]}))




return(   
    <mesh ref={planeref}
    onClick={ye} 
    rotation={[MathUtils.degToRad(90),0,0]}
    position={[0.5,-1.01,0.5]}
    // receiveShadow={true}
    >
        <planeGeometry  args={[10,10]} />
        <shaderMaterial  side={DoubleSide}   vertexShader={testVertexShader} fragmentShader={testFragmentShader}/>
    </mesh>
)}


export default function App() {
  return (

    <div className="App">
        
      <Canvas>

    <PerspectiveCamera makeDefault position={[0,0,3]}/>
    <OrbitControls />
    <Physics>
        <Component/>
        <MyAnimatedBox/>
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
        </Physics>
      </Canvas>
    </div>
  );
}
