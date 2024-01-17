
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Seperator from '@/components/Seperator'

export default function Home() {
  return (
    <div>
      <Hero />
      <Seperator />
      <About />
      <Seperator />
      <Skills />
      <Seperator />
      <Projects />
      <Seperator />
      <Contact />
    </div>
  )
}
