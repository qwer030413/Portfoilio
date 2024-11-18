import './welcome.css' 
import DefaultButton from '../../components/buttons/DefaultButton'
import Anitext from '../../components/AnimationText/AnimationText'
import { FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import {motion} from 'framer-motion';
import Resume from '../../Resume.pdf'
function Welcome(props:any) {
  const MainAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const subAnimation = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <> 
      <motion.div 
      className='Welcome' 
      ref = {props.homeRef}  
      id = "section1"
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.3, once:false }}
      variants={MainAnimation}
      >
        <div>
            <motion.div className='Hello' variants={subAnimation}>
              <Anitext text = "Hello World!" class = "header"/>
              <text className='WelcomeText'>👋</text>
            </motion.div>
          <Anitext text = "I'm Seojin/Chris Park" class = "header"/>
          <motion.div className='Options' variants={subAnimation}>
              <DefaultButton text = "LinkedIn" color = "Blue" icon = {<FaLinkedin size={22}/>} link = 'https://www.linkedin.com/in/seojin-park-332aaa213/'/>
              <DefaultButton text = "GitHub" color = "Black"  icon = {<FiGithub size={22}/>} link = 'https://github.com/qwer030413'/>
              <DefaultButton text = "Instagram" color = "Yellow" icon = {<FaInstagram size={22}/>} link = 'https://www.instagram.com/chrispark03_/'/>
              <DefaultButton text = "Email" color = "Green" icon = {<IoMailOutline size={22}/>} link = "mailto:comosjay@gmail.com?subject=(Subject)&body=Hi%20Chris!" />

              <DefaultButton text = "Resume" color = "Red" icon = {<IoDocumentTextOutline size={22}/>} link = {Resume}/>
          </motion.div>
        </div>
      </motion.div>
        
    </>
  )
}

export default Welcome