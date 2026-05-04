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
  const clickedTabRef = useRef<number | null>(null);
  const clickTimeoutRef = useRef<number | null>(null);
  const [tabs, setTabs] = useState(1);
  document.title = "Chris(Seojin) Park";
  function updateTabs(id: number, tab: any)
  {
      clickedTabRef.current = id;
      setTabs(id);
      tab.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }

      clickTimeoutRef.current = window.setTimeout(() => {
        clickedTabRef.current = null;
      }, 900);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (clickedTabRef.current !== null) {
        setTabs(clickedTabRef.current);
        return;
      }

      const sectionRefs = [
        { id: 1, ref: homeRef },
        { id: 2, ref: aboutMeRef },
        { id: 3, ref: ExperiencesRef },
        { id: 4, ref: SkillRef },
        { id: 5, ref: ProjectRef },
      ];

      const scrollElement = document.scrollingElement ?? document.documentElement;
      const isAtBottom =
        window.innerHeight + window.scrollY >= scrollElement.scrollHeight - 2;

      if (isAtBottom) {
        setTabs(5);
        return;
      }

      const viewportTop = 88;
      const viewportBottom = window.innerHeight;
      let activeTab = 1;
      let largestVisibleArea = 0;

      sectionRefs.forEach(({ id, ref }) => {
        const section = ref.current;

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        const visibleArea = Math.max(
          0,
          Math.min(rect.bottom, viewportBottom) - Math.max(rect.top, viewportTop),
        );

        if (visibleArea > largestVisibleArea) {
          largestVisibleArea = visibleArea;
          activeTab = id;
        }
      });

      setTabs(activeTab);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);
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
