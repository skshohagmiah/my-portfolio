"use client";
import React, { useEffect } from "react";
import styles from "@/styles/about.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

const About = () => {
  const {ref,inView }= useInView({threshold:.5})
  const {setActiveSection} = useActiveSection()


  useEffect(() => {
    if(inView){
      setActiveSection('about')
    }
  },[setActiveSection,inView])

  return (
    <section ref={ref} className={styles.container} id="about">
      <div>
        <h2>About Me</h2>
        <motion.p
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true,amount:.5}}
          transition={{
            duration: 1,
          }}
        >
          Hi, I&apos;m Shohag Miah, a regular guy from Gazipur, Bangladesh, with
          a not-so-regular journey into the tech world. Picture this: at 14, I
          started working in a beverage company, tackling grown-up
          responsibilities. But my heart was set on something else—computers.
        </motion.p>
      </div>
      <div>
        <h3>Background Story:</h3>
        <motion.p
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true,amount:.5 }}
          transition={{
            duration: 1,
          }}
        >
          Fast forward to 2018, I scraped together cash to buy my first laptop.
          It was a game-changer. After my regular job, I spent late nights
          diving into digital marketing, learning English, and exploring the
          tech universe.
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount:.5 }}
          transition={{
            duration: 1,
          }}
        >
          Come 2021, I took the plunge into programming and web development. No
          fancy degrees, just me, Google, and determination. I picked up HTML,
          CSS, and later, fancy stuff like Tailwind CSS, TypeScript, React.js,
          Next.js, and Prisma.
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount:.5 }}
          transition={{
            duration: 1,
          }}
        >
          Two years in, and React and Next.js are my go-to buddies for creating
          websites. No classrooms, just a guy with a laptop, turning challenges
          into triumphs, one line of code at a time
        </motion.p>
        <h3>Philosophy:</h3>
        <motion.p
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true,amount:.5 }}
          transition={{
            duration: 1,
          }}
        >
          Coding, to me, is like painting. I use hard work and learning as my
          brushes, and technology is my canvas. I don&apos;`t just make
          websites; I create digital experiences that make people smile.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
