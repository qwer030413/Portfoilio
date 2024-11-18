import './ProjectCards.css'
import { FaArrowRight } from "react-icons/fa6";
import {motion} from 'framer-motion'
import { useState } from 'react';

export default function ProjectCards(props: any){
    const [cardHover, setCardHover] = useState(false)
    return(
        <a href={props.link} target="_blank" className = "cards">
            <motion.div className = {`ProjectCards ${props.color}`}
                whileHover={{scale: 1.05, transition: { duration: 0.1 }}}
                onMouseEnter={()=> setCardHover(true)}
                onMouseLeave={()=> setCardHover(false)}
                >
                    <div className='cardHeader'>
                        {props.icon}
                        <div className='date'>
                            {props.date}
                        </div>
                    </div>
                    <text className='title'>{props.title}</text>
                    <text className='description'>{props.description}</text>
                    <span className='line'/>
                    <div className='cardHeader'>
                        <text className='description'>{props.used}</text>
                        <div className={`githubButton ${cardHover? "arrowMove":"arrowBack"}`} >
                            <FaArrowRight size={20} color='white'/>
                        </div>
                    </div>
                </motion.div>
        </a>
    );
}