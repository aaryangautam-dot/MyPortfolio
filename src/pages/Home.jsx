import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutSecton } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectSection } from '../components/ProjectSection'
import { ContactSection } from '../components/ContactSection'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/*Theme Toggle */}
      <ThemeToggle/>
      {/*BAckground Effect */}
      <StarBackground/>
      {/*Navbar */}
      <Navbar/>
      {/*Main Content */}
      <main>
        <HeroSection/>
        <AboutSecton/>
        <SkillsSection/>
        <ProjectSection/>
        <ContactSection/>
      </main>
      {/*Footer */}
    </div>
  )
}

export default Home
