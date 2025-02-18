import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";

import 'react-vertical-timeline-component/style.min.css';

function Experiences(props:any) {
    let timeLine = [
        {
            id : 1,
            title: "Software Engineer Intern @ Argus West Investigations",
            Used: "Python | Django | REST APIs | PostgreSQL",
            date : "January 2025 - Present",
            location : "El Cajon, California",
            description1: "- Streamlined REST API endpoints and database migrations using Django to support the SPEAR project, improving backend efficiency and scalability",
            description2: "- Collaborated in debugging and refactoring backend code to improve maintainability and reduce execution time",
            icon: <MdWork />
        },
        {
            id : 2,
            title: "Software Engineer - AI Trainer @ Alignerr",
            Used: "Data Annocations | Large Language Models (LLM)",
            date : "October 2024 - Present",
            location : "(Remote)",
            description1: "- Annotated and labeled 100+ datasets, ensuring high-quality training data to boost AI model accuracy",
            description2: "- Reviewed, analyzed, and debugged 200+ AI-generated code snippets, identifying logical errors and providing corrective feedback to refine AI-driven development tools",
            icon: <MdWork />
        },
        {
            id : 3,
            title: "Full-Stack Developer @ CSES",
            Used: "React Native | Node.js | PostgreSQL | AWS",
            date : "September 2024 - Present",
            location : "University of California, San Diego",
            description1: "- Developed 15+ pages and components for a React Native mobile app Triton Spend, an app to help UCSD students track their finances and spending habits",
            description2: "- Integrated Node.js APIs to handle transactions and data processing, ensuring seamless backend communication",
            icon: <MdWork />
        },
        {
            id : 4,
            title: "Software Engineer Intern @ Falkor",
            Used: "React Native | Django | REST APIs | Python | Typescript",
            date : "July 2024 - August 2024",
            location : "San Diego, California (Remote)",
            description1: "- Designed and Crafted 20+ reusable React Native components for a full-stack social media application, enhancing UI consistency and user engagement",
            description2: "- Integrated over 100+ Django REST APIs, ensuring low-latency data retrieval and seamless client-server communication",
            icon: <MdWork />
        },
        {
            id : 5,
            title: "Software Test Engineer Intern @ Sun Tech",
                Used: "JIRA | Git | Firmware",
                date : "June 2021 - August 2021",
            location : "Carlsbad, California",
            description1: "- Conducted 600+ firmware tests on company products on company products, ensuring software reliability and functionality",
            description2: "- Identified and documented software and hardware defects using JIRA, facilitating efficient issue tracking and resolution",
            icon: <MdWork />
        },
        {
            id : 6,
            title: "Machine Learning Intern @ STEM Away",
            Used: "Jupiter Notebook | SKlearn | Pandas | Beautiful Soup",
            date : "October 2020 - August 2021",
            location : "Carlsbad, California (Remote)",
            description1: "- Built a basic recommendation system using Pandas and Jupyter Notebook, applying data analysis techniques to personalize user suggestions",
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
