import { LegacyRef} from 'react';
import './Experiences.css';
import ExperienceCard from './ExperienceCard'
const timeline = [
  {
    id: 9,
    title: "Software Engineer Intern",
    company: "Live Nation Entertainment",
    used: ["Python", "PySpark", "Databricks", "Pandas", "LLMs", "Data Science"],
    date: "Sep 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Developed and refined LLM-based pipelines to classify genres for 60,000+ artists",
      "Cleaned and transformed 100,000+ records using pandas, PySpark, and SQL in Databricks to support ML models",
    ],
  },
  {
    id: 8,
    title: "Software Engineer Intern – ML",
    company: "TransCore",
    used: ["Python", "Open Webui", "Fast API", "Ollama", "LLMs", "Fine Tuning"],
    date: "Jun 2025 – Sep 2025",
    location: "Remote",
    bullets: [
      "Developed specialized AI agents using LLMs fine-tuned with Ollama, integrated with Open WebUI to manage model interactions",
      "Created prompt-based tools in Python to enable tool calling for tasks like data look-up and support for internal systems",
    ],
  },
  {
    id: 7,
    title: "Software Developer – ServiceNow",
    company: "UCSD ITS",
    used: ["JavaScript", "ServiceNow", "Jira", "BitBucket"],
    date: "May 2025 – Jun 2025",
    location: "La Jolla, CA",
    bullets: [
      "Contributed to the design and debugging of IT systems using ServiceNow and Jira, following Agile Development",
      "Wrote and maintained custom scripts in JavaScript and created Record Producers, Catalog Items, and Flows",
    ],
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Argus West Investigations",
    used: ["Python", "Django", "REST APIs", "PostgreSQL"],
    date: "Jan 2025 – April 2025",
    location: "El Cajon, CA",
    bullets: [
      "Streamlined REST API endpoints, implemented CRUD functionality, and managed database model migrations using Django",
      "Collaborated in refactoring backend code and wrote Unit Tests to improve maintainability and reduce execution time",
    ],
  },
  {
    id: 5,
    title: "Software Engineer – AI Trainer",
    company: "Alignerr",
    used: ["Data Annotation", "LLMs"],
    date: "Oct 2024 – March 2025",
    location: "Remote",
    bullets: [
      "Annotated and labeled 300+ datasets, ensuring high-quality training data to boost AI model accuracy",
      "Reviewed, analyzed, and debugged 200+ AI-generated code snippets, providing corrective feedback to refine AI tools",
    ],
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    company: "CSES @ UC San Diego",
    used: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    date: "Sep 2024 – May 2025",
    location: "La Jolla, CA",
    bullets: [
      "Integrated Google Authentication for secure user login and Node.js APIs to handle transactions and data processing",
      "Used AWS for backend services and managed PostgreSQL as the database, ensuring scalability and efficient data storage",
    ],
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Falkor",
    used: ["React Native", "Django", "REST APIs", "Python", "TypeScript"],
    date: "Jul 2024 – Aug 2024",
    location: "San Diego, CA",
    bullets: [
      "Designed 50+ reusable React Native components for a full-stack social media application, enhancing UI consistency",
      "Implemented lazy loading, pagination, and optimized API calls, reducing frontend load time by 30%",
    ],
  },
  {
    id: 2,
    title: "Software Test Engineer Intern",
    company: "Sun Tech",
    used: ["JIRA", "Git", "Firmware"],
    date: "Jun 2021 – Aug 2021",
    location: "Carlsbad, CA",
    bullets: [
      "Conducted 600+ firmware tests on company products, automating Unit and Integration testing for reliability",
      "Identified and documented software and hardware defects using Jira, facilitating efficient issue tracking and resolution",
    ],
  },
  {
    id: 1,
    title: "Machine Learning Intern",
    company: "STEM Away",
    used: ["Jupyter Notebook", "Sklearn", "Pandas", "BeautifulSoup"],
    date: "Oct 2020 – Aug 2021",
    location: "Remote",
    bullets: [
      "Built a recommendation system using Pandas and Jupyter Notebook, applying data analysis to personalize user suggestions",
      "Scraped, cleaned, and structured web data using BeautifulSoup, enhancing dataset quality for ML experiments",
    ],
  },
];
 
 
function Experiences(props: { Propref: LegacyRef<HTMLElement> | undefined; }) {
  return (
    <section className="exp-section" ref={props.Propref} id="section3">
        <h1 style={{color:'white', fontWeight: '100'}}>My Experiences</h1>
 
      <div className="exp-list">
        {timeline.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i}/>
        ))}
      </div>
    </section>
  );
}
 
export default Experiences;