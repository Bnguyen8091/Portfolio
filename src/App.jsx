import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsTV from './components/ProjectsTV'
import VisualsTV from './components/VisualsTV'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TVBoot from './components/TVBoot'
import TVMascot from './components/TVMascot'
import './App.css'

function App() {
  return (
    <>
      <TVBoot />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsTV />
        <VisualsTV />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <TVMascot />
    </>
  )
}

export default App
