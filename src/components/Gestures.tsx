import React from 'react'
import {motion,MotionConfig} from 'framer-motion'

 import '../App.css'

export default function Gestures() {
  return (
    <div style={{
        display:"grid",
        placeItems:"center",
    height:"100vh",
    gap:"0.1vh"
    }}
    >  

<MotionConfig

transition={{
    duration:1,
    ease:"easeInOut"
 }}
>
    <motion.button
     className='example-button'
     whileHover={{scale:1.05}}
     whileTap={{scale :0.95,rotate:"2.5deg"}}
     


>
Click Me
   </motion.button>
    <motion.button
     className='example-button'
     whileHover={{scale:1.05}}
     whileTap={{scale :0.95,rotate:"2.5deg"}}
style={{backgroundColor:"black"}}
     transition={{
        duration:0.125,
        ease:"easeInOut"
     }}


>
Click Me
   </motion.button>
</MotionConfig>
    </div>
  )
}
