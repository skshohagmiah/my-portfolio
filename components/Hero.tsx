"use client";
import React, { useEffect } from "react";
import styles from "@/styles/hero.module.css";
import Image from "next/image";
import { GrProjects } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";
import Link from "next/link";

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("home");
    }
  }, [setActiveSection, inView]);

  return (
    <section ref={ref} className={styles.container} id="home">
      <motion.div
        className={styles.intro}
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p className={styles.text}>
          Hi There,
          <span className={styles.name}>I am Shohag Miah.</span>
          <br />I am a{" "}
          <span className={styles.job}>Front End Web Developer</span>
          <br />I have been working with{" "}
          <span className={styles.library}>Reactjs</span> and{" "}
          <span className={styles.library}>Nextjs</span> <br />
          for 2 years.
          <br />I really love to design and develop web applications.
        </p>
        <div className={styles.buttons}>
          <button>
            <Link href="#projects">
              See My Projects
              <GrProjects />
            </Link>
          </button>
          <button>
            <Link href={"#contact"}>
              {" "}
              Contact Me <FaWpforms />
            </Link>
          </button>
        </div>

        <div className={styles.icons}>
          <a href="https://github.com/skshohagmiah" target="_blank">
            <FaGithubSquare className={styles.icon} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100030517564888" target="_blank">
            <FaSquareFacebook className={styles.icon} />
          </a>
          <a>
            <FaLinkedin className={styles.icon} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className={styles.image}
      >
        <Image src="/shohag.png" alt="image" fill />
      </motion.div>
    </section>
  );
};

export default Hero;
