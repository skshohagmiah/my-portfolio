'use client'
import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.css'
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'
import { useActiveSection } from '@/context/ActiveSectionContext'

const Navbar = () => {

    const {activeSection} = useActiveSection()

  return (
    <motion.header className={styles.container} 
    initial={{
        y:'-10',
        opacity:'0'
    }}
    animate={{
        y:'0',
        opacity:'1'
    }}
    transition={{
        duration:1
    }}
    >
        <ul>
            <li className={`${activeSection === 'home' && styles.active}`}>
                <Link href={'#home'}>Home</Link>
            </li>
            <li className={`${activeSection === 'about' && styles.active}`}>
                <Link href={'#about'}>About</Link>
            </li>
            <li className={`${activeSection === 'skills' && styles.active}`}>
                <Link href={'#skills'}>Skills</Link>
            </li>
            <li className={`${activeSection === 'projects' && styles.active}`}>
                <Link href={'#projects'}>Projects</Link>
            </li>
            <li className={`${activeSection === 'contact' && styles.active}`}>
                <Link href={'#contact'}>Contact</Link>
            </li>
        </ul>
    </motion.header>
  )
}

export default Navbar