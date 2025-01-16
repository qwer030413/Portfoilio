import './App.css'
// import Welcome from './Pages/Welcome/welcome'
import AboutMe from './Pages/AboutMe/Aboutme'
import { useEffect, useRef, useState } from 'react'
import Welcome from './Pages/Welcome/welcome'
import Tabs from './components/Tab/Tabs'
import Experiences from './Pages/Experiences/Experiences'
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects'
function App() {
  const containerRef = useRef<HTMLDivElement| null>(null)
  const homeRef = useRef<HTMLDivElement| null>(null);
  const aboutMeRef = useRef<HTMLDivElement| null>(null);
  const ExperiencesRef = useRef<HTMLDivElement| null>(null);
  const SkillRef = useRef<HTMLDivElement| null>(null);
  const ProjectRef = useRef<HTMLDivElement| null>(null);
  const [tabs, setTabs] = useState(1);
  document.title = "Chris(Seojin) Park";
  function updateTabs(id: number, tab: any)
  {
      setTabs(id);   
      //{behavior: 'smooth'} inside scrollIntoView
      tab.current?.scrollIntoView()
  }
  useEffect(() => {
        const container = containerRef.current;
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
            if(container){
              const tab2Boundary = (container.querySelector('#section1') as HTMLElement)?.offsetTop || 0;
              const tab3Boundary = (container.querySelector('#section2') as HTMLElement)?.offsetTop || 0;
              const tab4Boundary = (container.querySelector('#section3') as HTMLElement)?.offsetTop || 0;
              const tab5Boundary = (container.querySelector('#section4') as HTMLElement)?.offsetTop || 0;
              const tab6Boundary = (container.querySelector('#section5') as HTMLElement)?.offsetTop || 0;
              if (scrollY < tab2Boundary + 500) {
                setTabs(1); 
              } 
              else if (scrollY < tab3Boundary + 500) {
                setTabs(2); 
              }
              else if (scrollY < tab4Boundary + 500){
                setTabs(3);
              }
              else if (scrollY < tab5Boundary + 400){
                setTabs(4);
              }
              else if (scrollY < tab6Boundary){
                setTabs(5);
              }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    },[]);
  return (
        <div className='Home' ref = {containerRef}>
          <Tabs homeRef = {homeRef} aboutMeRef = {aboutMeRef} ExperiencesRef = {ExperiencesRef} SkillRef = {SkillRef} ProjectRef = {ProjectRef} tabs = {tabs} updateTabs = {updateTabs}/>
          <Welcome homeRef = {homeRef}/>
          <AboutMe Propref = {aboutMeRef}/>
          <Experiences Propref = {ExperiencesRef}/>
          <Skills Propref = {SkillRef} />
          <Projects Propref = {ProjectRef}/>
        </div>
      
        
    
  )
}

export default App
