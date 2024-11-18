

import './SkillIcon.css'
import {motion} from 'framer-motion'
export default function SkillIcon(props:any){
    return(
        <motion.div 
        className='SIcon'
        whileHover={{scale: 1.2, transition: { duration: 0.1, type: "spring", stiffness: 400, damping: 10}}}
        >
            {props.icon}
            <text>{props.text}</text>
        </motion.div>
    );
}