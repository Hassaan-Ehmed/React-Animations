import React from 'react'
import '../App.css'
import { motion ,useAnimationControls} from 'framer-motion'
export default function AnimationControls() {

    const controls  = useAnimationControls();



    const handleFlip=()=>{
        controls.start("flip");
    }
  return (
    <div style={{
        display:"grid",
        placeItems:"center",
        height:"100vh",
        gap:"1vw"

}}>
      

<button className='example-button'  onClick={handleFlip}>Flip!</button>

<motion.div 
style={{
    width:150,
    height:150,
    backgroundColor:"black"

}}

variants={{
    initial:{
        rotate:"0deg"
    },
    flip:{
        rotate:"360deg"
    }

}}
animate={controls}
initial="initial"
></motion.div>
    </div>
  )
}
