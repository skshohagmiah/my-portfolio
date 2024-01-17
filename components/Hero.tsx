'use client'
import React, { useEffect } from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import { GrProjects } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

const Hero = () => {

  const {ref,inView }= useInView({threshold:.5})
  const {setActiveSection} = useActiveSection()


  useEffect(() => {
    if(inView){
      setActiveSection('home')
    }
  },[setActiveSection,inView])


  return (
    <section ref={ref} className={styles.container} id="home">
      <motion.div className={styles.intro}
      initial={{
        opacity:0,
        x:-200,
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        duration:1
      }}
      >
        <p className={styles.text}>
          Hi There,
          <span className={styles.name}>I am Shohag Miah.</span>
          <br />I am a{" "}
          <span className={styles.job}>Front End Web Developer</span>
          <br />
          I have been working with <span className={styles.library}>Reactjs</span> and <span className={styles.library}>Nextjs</span> <br />for 2 years.
          <br />I really love to design and develop web applications.
        </p>
        <div className={styles.buttons}>
          <button>
            See My Projects <GrProjects />
          </button>
          <button>
            Contact Me <FaWpforms />
          </button>
        </div>

      <div className={styles.icons}>
        <a>
          <FaGithubSquare className={styles.icon}/>
        </a>
        <a>
          <FaSquareFacebook className={styles.icon} />
        </a>
        <a>
          <FaLinkedin className={styles.icon}/>
        </a>
      </div>
      </motion.div>

      <motion.div
      initial={{
        x:200,
        opacity:0
      }}
      animate={{
        x:0,
        opacity:1
      }}
      transition={{
        duration:1
      }}
      className={styles.image}>
        <Image src="/shohag.png" alt="image" fill />
      </motion.div>

    </section>
  );
};

export default Hero;
