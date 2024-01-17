"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "@/styles/skills.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

const Skills = () => {

  const {ref,inView }= useInView({threshold:.5})
  const {setActiveSection} = useActiveSection()


  useEffect(() => {
    if(inView){
      setActiveSection('skills')
    }
  },[setActiveSection,inView])

  return (
    <section ref={ref} className={styles.container} id="skills">
      <h2>My Skills</h2>
      <motion.div
        initial={{
          opacity: 0,
          x:100
        }}
        whileInView={{
          opacity: 1,
          x:0
        }}
        transition={{
          duration: 1,
        }}
        viewport={{once:true,amount:.5}}
        className={styles.imageGrid}
      >
        <div className={styles.image}>
          <Image src={"/html.png"} alt="html" fill />
          <p className={styles.imageText}>HTML 5</p>
        </div>
        <div className={styles.image}>
          <Image src={"/css.jpg"} alt="css" fill />
          <p className={styles.imageText}>CSS 3</p>
        </div>
        <div className={styles.image}>
          <Image src={"/tailwind.png"} alt="tailwindcss" fill />
          <p className={styles.imageText}>TAILWIND 3</p>
        </div>
        <div className={styles.image}>
          <Image src={"/javascript.jpg"} alt="javascript" fill />
          <p className={styles.imageText}>JAVASCRIPT</p>
        </div>
        <div className={styles.image}>
          <Image src={"/typescript.png"} alt="TYPESCRIPT" fill />
          <p className={styles.imageText}>TYPESCRIPT</p>
        </div>
        <div className={styles.image}>
          <Image src={"/react.jpg"} alt="reactjs" fill />
          <p className={styles.imageText}>REACT JS 18</p>
        </div>
        <div className={styles.image}>
          <Image src={"/next.png"} alt="nextjs" fill />
          <p className={styles.imageText}>NEXT JS 14</p>
        </div>
        <div className={styles.image}>
          <Image src={"/prisma.jpg"} alt="prima" fill />
          <p className={styles.imageText}>PRISMA 5</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
