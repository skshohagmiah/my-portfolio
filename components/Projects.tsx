"use client";
import React, { useEffect } from "react";
import styles from "@/styles/projects.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("projects");
    }
  }, [setActiveSection, inView]);

  return (
    <section ref={ref} className={styles.container} id="projects">
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.frame}
        >
          <Image src={"/team.png"} alt="teamharbor" fill />
          <div className={styles.projectText}>
            <h3>Teamharbor</h3>
            <h4>Project management application</h4>
            <a href="https://teamharbor.vercel.app/" target="_blank">
              Live link
            </a>
            <a
              href="https://github.com/skshohagmiah/teamharbor?tab=readme-ov-file"
              target="_blank"
            >
              Github link
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.frame}
        >
          <Image src="/stayhub.png" alt="stayhub" fill />
          <div className={styles.projectText}>
            <h3>Stayhub</h3>
            <h4>Property reservation application</h4>
            <a href="https://stayhub-rose.vercel.app/" target="_blank">
              Live link
            </a>
            <a href="https://github.com/skshohagmiah/stayhub" target="_blank">
              Github link
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.frame}
        >
          <Image src={"/food.png"} alt="foodfrenzy" fill />
          <div className={styles.projectText}>
            <h3>FoodFrenzy</h3>
            <h4>Food delivery service application</h4>
            <a href="https://food-frenzy-eight.vercel.app/" target="_blank">
              Live link
            </a>
            <a
              href="https://github.com/skshohagmiah/food-frenzy"
              target="_blank"
            >
              Github link
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.frame}
        >
          <Image src="/wetube.png" alt="wetube" fill />
          <div className={styles.projectText}>
            <h3>WeTube</h3>
            <h4>Video sharing application</h4>
            <a href="https://vidshare-gules.vercel.app/" target="_blank">
              Live link
            </a>
            <a href="https://github.com/skshohagmiah/wetube" target="_blank">
              Github link
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
