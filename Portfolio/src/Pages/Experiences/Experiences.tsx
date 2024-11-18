import './Experiences.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork } from "react-icons/md";

import 'react-vertical-timeline-component/style.min.css';

function Experiences(props:any) {
    let timeLine = [
        {
            id : 1,
            title: "Software Engineer Intern @ Falkor",
            Used: "React Native | Django | REST APIs | Python | Typescript",
            date : "July 2024 - August 2024",
            location : "San Diego, California (Remote)",
            description1: "• Integrated 50+ Django REST APIs from backend to collect data and ensured fast runtime with clean code",
            description2: "• Implemented real-time Chatting feature using Web Sockets and Consumers such as connect and receive",
            icon: <MdWork />
        },
        {
            id : 2,
            title: "Firmware Test Engineer Intern @ Sun Tech",
            Used: "JIRA | Git | Firmware",
            date : "June 2021 - August 2021",
            location : "San Diego, California",
            description1: "• Worked as a test engineer and ran 600+ tests on company devices and products",
            description2: "• Constantly wrote JIRA tickets when errors were found and updated firmware when the error was fixed",
            icon: <MdWork />
        },
        {
            id : 3,
            title: "Machine Learning Internship",
            Used: "Jupiter Notebook | SKlearn | Pandas | Beautiful Soup",
            date : "October 2020 - August 2021",
            location : "Carlsbad, California (Remote)",
            description1: "• Created a basic recommender system with a team of ML students using SKLearn",
            description2: "• Utilized Pandas and Jupyter Notebook to perform data analysis and clean data with Beautiful Soap",
            icon: <MdWork />
        }
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
