import './buttons.css'
import {motion} from "framer-motion";


function DefaultButton(props: any) {
  return (
    <a href={props.link} target="_blank">
      <motion.button
      className={`DButton ${props.color}`}
      whileHover = {{y:-10}}
      style={{color:'white'}}
      // onClick = {props.click}
      
      >
        {props.icon}
        <text className='DButtonText'>{props.text}</text>
      </motion.button>    
    </a>

        
  )
}

export default DefaultButton