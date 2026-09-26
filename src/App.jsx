import Sidebar from './components/Sidebar';
import LastUpdated from './components/LastUpdated';
import ResumeLink from './components/ResumeLink';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Hobbies from './components/sections/Hobbies';
import FuturePlans from './components/sections/FuturePlans';
import Contact from './components/sections/Contact';
import { useActiveSection } from './hooks/useActiveSection';
import './App.css';

export default function App() {
  const { contentRef, active, updateActive, scrollToSection } = useActiveSection();

  return (
    <div className="app">
      <LastUpdated />
      <ResumeLink />
      <div className="page">
        <Sidebar active={active} onNavigate={scrollToSection} />
        <div ref={contentRef} onScroll={updateActive} className="content-scroll">
          <div className="content-inner">
            <About />
            <Education />
            <Projects />
            <Skills />
            <Experience />
            <Hobbies />
            <FuturePlans />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
