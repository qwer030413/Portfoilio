
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiCalendarTodoFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaNoteSticky } from "react-icons/fa6";

import './Projects.css'
import { useEffect } from 'react';
export default function Projects(props:any){
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 200); // Add staggered delay
            } else {
            entry.target.classList.remove("show");
            }
        });
        });

        const hiddenCards = document.querySelectorAll(".cards");
        hiddenCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);
    return(
        <div className='Projects' id = "section5" ref={props.Propref}>
            <h1>Projects</h1>
            <div className='ProjectsContainer'>
                <ProjectCards color = "WhiteCard" 
                icon = {<FaNoteSticky color='black' size = {30}/>}
                title = "Note Cast"
                description = "Website that converts notes into podcasts using AWS backend"
                used = "AWS | DynamoDB | Polly AI | S3 | Lambda"
                date = "Current"
                link = "https://github.com/qwer030413/NoteCast"
                />
                <ProjectCards color = "PinkCard" 
                icon = {<RiMoneyDollarCircleFill color='black' size = {35}/>}
                title = "Triton Spend (CSES)"
                description = "App designed to help universtiy students manage their finances"
                used = "React Native | AWS | PostgreSQL | Node.Js"
                date = "April 2025"
                link = "https://github.com/CSES-Open-Source/TritonSpend"
                />
                <ProjectCards color = "BlueCard" 
                icon = {<BsFillChatLeftTextFill color='black' size = {30}/>}
                title = "Quick Chat"
                description = "Discord clone that features Real time chatting using Web sockets and Rate limiting"
                used = "React | Node.Js | MySQL | Socket.IO"
                date = "July 2024"
                link = "https://github.com/qwer030413/ChattingApp"
                />
                <ProjectCards color = "GreenCard" 
                icon = {<BsFillCameraVideoFill color='black' size = {30}/>}
                title = "Get Home Safe (HARD Hack)"
                description = "Device that can detect threats in the dark and help users contact help"
                used = "Python | Open CV | Raspberry Pi"
                date = "April 2024"
                link = "https://github.com/deeg-p23/solanaceae"
                />
                <ProjectCards color = "YellowCard" 
                icon = {<RiCalendarTodoFill color='black' size = {30}/>}
                title = "Pomodoro Website"
                description = "Simple Pomodoro that helps users track their time and focus"
                used = "React | Node.Js | MySQL"
                date = "March 2024"
                link = "https://github.com/qwer030413/Pomodoro"
                />
                <ProjectCards color = "RedCard" 
                icon = {<FaPaperPlane color='black' size = {30}/>}
                title = "Jet Fighter Game"
                description = "2D jet fighter game where 2 players can shoot each other down"
                used = "Java | GUI | OOP | Multithreading"
                date = "December 2023"
                link = "https://github.com/qwer030413/CISC191-JetFigherProject"
                />
                
            </div>
        </div>
    );
}