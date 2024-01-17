'use client';
import React from 'react'
import {motion} from 'framer-motion'

const Seperator = () => {
  return (
    <div style={{width:'100%',display:'flex', alignItems:"center",
    justifyContent:'center',}}>
        <motion.div
        initial={{
          width:0,
          opacity:0
        }}
        whileInView={{
          width:'70%',
          opacity:1
        }}
        transition={{
          duration:2
        }}
        viewport={{once:true,amount:1}}
        style={{height:".2rem", width:'60%', marginBottom:'1rem', borderRadius:'1rem',  background:'linear-gradient(purple,rebeccapurple)'}}/>
    </div>
  )
}

export default Seperator