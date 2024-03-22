import React, { useState } from 'react'
import '../App.css'
import {motion, AnimatePresence} from 'framer-motion'

export default function BasicsOfMotion() {

    const [isVisiable,setIsVisiable] = useState(true);

  return (
    <div style={{
        display:"grid",
        placeItems:"center",
        height:"100vh",
        gap:"1vw"
    }}
    
    >
      
<motion.button layout className='example-button' onClick={()=>setIsVisiable(!isVisiable)}>Show/Hide</motion.button>

<AnimatePresence mode='popLayout'>
    {isVisiable && <motion.div

initial={{
    rotate:"0deg",
    scale:0,
    y:0
}}

animate={{
    rotate:"180deg",
    scale:1,
    y:[0,100,-100,-100,0]
}}

transition={{
    duration:1,
    // type:"spring"
    ease:"backInOut",
    times:[0,0.25,0.5,0.85,1]

}}

exit={{
    scale:0,
    rotate:"0deg",
    y:0
}}

style={{
height:100,
width:100,
backgroundColor:"black"
}}


>


</motion.div>}
</AnimatePresence>

    </div>
  )
}
