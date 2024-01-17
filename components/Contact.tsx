"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/contact.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/context/ActiveSectionContext";

const Contact = () => {

    const [thanks, setThanks] = useState('')
    const [count, setCount] = useState(0)

    const {ref,inView }= useInView({threshold:.5})
    const {setActiveSection} = useActiveSection()
  
  
    useEffect(() => {
      if(inView){
        setActiveSection('contact')
      }
    },[setActiveSection,inView])

    useEffect(() => {
        const text = 'thanks a lot for visiting my portfolio';
        const intervalId = setInterval(() => {
          if (count < text.length) {
            setCount((prev) => prev + 1);
            setThanks((prev) => prev + text.charAt(count));
          } else {
            setThanks('')
            setCount(0)
          }
        }, 200);
        return () => clearInterval(intervalId);
      }, [count]);
      

  return (
    <section ref={ref} className={styles.container} id="contact">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{once:true,amount:.5}}
        className={styles.contactText}
      >
        <h2 className={styles.desktopContact}>Contact Me</h2>
        <address>
          <h4>My home address is:</h4>
          <p>banglabazer, gazipur, dhaka, bangledesh.</p>
          <h4>My mailing address is:</h4>
          <p>shohagmiah2100@gmail.com</p>
          <h4>My phone contact number:</h4>
          <p>+8801865905625</p>
        </address>
        <p className={styles.thanks}>{thanks}</p>
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{once:true,amount:.5}}
        className={styles.contactForm}
      >
        <h2 className={styles.mobileContact}>Contact Me</h2>
        <p>great vision without great people is irrelevant So</p>
        <h3>Let`s work together</h3>
        <form action="">
          <input type="text" placeholder="Enter Your Name" required/>
          <input type="email" placeholder="Enter Your Email" required/>
          <textarea rows={10} cols={30} placeholder="Write Your Message" required>
          </textarea>
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
