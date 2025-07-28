import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";

import 'react-vertical-timeline-component/style.min.css';

function Experiences(props:any) {
    let timeLine = [
        {
            id : 1,
            title: "Software Engineer Intern - ML @ TransCore",
            Used: "Python | Open Webui | Fast API | Ollama | LLMs | Fine Tuning",
            date : "June 2025 - Present",
            location : "Remote",
            description1: "- Developing specialized AI agents using LLMs fine-tuned with Ollama, integrated with Open WebUI to manage model interactions, and incorporated domain-specific knowledge bases for tolling system challenges",
            description2: "- Created prompt-based tools in Python to enable tool calling for tasks like data look-up and support for internal systems",
            icon: <MdWork />
        },
        {
            id : 2,
            title: "Software Developer - Service Now @ UCSD ITS",
            Used: "JavaScript | Service Now | Jira | BitBucket",
            date : "May 2025 - June 2025",
            location : "La Jolla, CA",
            description1: "- Contributed to the design and debugging of IT systems using ServiceNow and Jira, following Agile Development",
            description2: "- Wrote and maintained custom scripts in JavaScript and created Record Producers, Catalog Items, and Flows",
            icon: <MdWork />
        },
        {
            id : 3,
            title: "Software Engineer Intern @ Argus West Investigations",
            Used: "Python | Django | REST APIs | PostgreSQL",
            date : "January 2025 - Present",
            location : "El Cajon, California",
            description1: "- Streamlined REST API endpoints, implemented CRUD functionality, and managed database model migrations using Django to create a Case Management System (CMS), improving backend efficiency and scalability",
            description2: "- Collaborated in refactoring in backend code and wrote Unit Tests to improve maintainability and reduce execution time",
            icon: <MdWork />
        },
        {
            id : 4,
            title: "Software Engineer - AI Trainer @ Alignerr",
            Used: "Data Annocations | Large Language Models (LLM)",
            date : "October 2024 - Present",
            location : "(Remote)",
            description1: "- Annotated and labeled 300+ datasets, ensuring high-quality training data to boost AI model accuracy",
            description2: "- Reviewed, analyzed, and debugged 200+ AI-generated code snippets, identifying logical errors and providing corrective feedback to refine AI-driven development tools",
            icon: <MdWork />
        },
        {
            id : 5,
            title: "Full-Stack Developer @ CSES",
            Used: "React Native | Node.js | PostgreSQL | AWS",
            date : "September 2024 - Present",
            location : "University of California, San Diego",
            description1: "- Integrated Google Authentication for secure user login and Node.js APIs to handle transactions and data processing",
            description2: "- Used AWS for backend services and managed PostgreSQL as the database, ensuring scalability and efficient data storage",
            icon: <MdWork />
        },
        {
            id : 6,
            title: "Software Engineer Intern @ Falkor",
            Used: "React Native | Django | REST APIs | Python | Typescript",
            date : "July 2024 - August 2024",
            location : "San Diego, California (Remote)",
            description1: "- Designed over 50+ reusable React Native components for a full-stack social media application, enhancing UI consistency and user engagement",
            description2: "- Implemented lazy loading, pagination, and optimized API calls, reduced load time on frontend by 30%",
            icon: <MdWork />
        },
        {
            id : 7,
            title: "Software Test Engineer Intern @ Sun Tech",
                Used: "JIRA | Git | Firmware",
                date : "June 2021 - August 2021",
            location : "Carlsbad, California",
            description1: "- Conducted 600+ firmware tests on company products, automating Unit and Integration testing for reliability",
            description2: "- Identified and documented software and hardware defects using Jira, facilitating efficient issue tracking and resolution",
            icon: <MdWork />
        },
        {
            id : 8,
            title: "Machine Learning Intern @ STEM Away",
            Used: "Jupiter Notebook | SKlearn | Pandas | Beautiful Soup",
            date : "October 2020 - August 2021",
            location : "Carlsbad, California (Remote)",
            description1: "- Built a basic recommendation system using Pandas and Jupyter Notebook, applying data analysis techniques to personalize user suggestions and improve user engagement",
            description2: "- Scraped, cleaned, and structured web data using BeautifulSoup, enhancing dataset quality for machine learning experiments",
            icon: <MdWork />
        },
        
    ]
    return (
        <div className='ExperiencesContainer' ref = {props.Propref} id = "section3">
            <h1>My Experiences</h1>
            <VerticalTimeline className = "VT">
                {timeLine.map(Exp => {
                    return(
                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        key = {Exp.id}
                        date = {Exp.date}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', padding:'10px' }}
                        icon = {Exp.icon}
                        contentStyle={{ background: 'rgb(40, 40, 50)', color: '#fff'}}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        
                        >
                            <h3 className="WorkTitle">{Exp.title}</h3>
                            <h4 className='Location'>{Exp.location}</h4>
                            <h5 className='Used'>{Exp.Used}</h5>
                            <p className='des'>{Exp.description1}</p>
                            <p className='des'>{Exp.description2}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>

        </div>
      
        
    
    )
}

export default Experiences
