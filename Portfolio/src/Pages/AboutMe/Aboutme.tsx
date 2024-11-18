import "./Aboutme.css"
import { HiLightBulb } from "react-icons/hi";
import selfie from '../../Images/profilepicture.jpg';
import {motion} from 'framer-motion'
function AboutMe(props:any) {
  const sideAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 }, 
    },
  };
  const subAnimation = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" }, 
    },
  };
  return (
    <>
      <motion.div 
      className='AboutMe' 
      ref = {props.Propref} 
      id = "section2"
      initial = "hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sideAnimation}
      
      > 
        <div className="AboutContainer">
            <motion.img className="Picture" src={selfie} variants={subAnimation}/>
            <motion.div className="Description" variants={subAnimation}>
              <div className="AboutHeader">
                <h1>About Me</h1>
                <div className="Line"></div>
                <HiLightBulb size={55} color="white"/>
              </div>
              <div className="horLine"/>
              <motion.text className="descriptionText" variants={subAnimation}>
                  Hi there! My name is Seojin Park, but most people call me Chris. I am a Junior in UC San Diego studying computer science, and I am actively looking for internships!
              </motion.text>
              <motion.text className="descriptionText" variants={subAnimation}>
                  I'm a really extroverted person, and I am always excited to learn new things with new people.
              </motion.text>
              <motion.text className="descriptionText" variants={subAnimation}>
                  Outside of academics and coding, I enjoy playing chess and video games. I also love hiking, rock climbing, and going to the beach.
              </motion.text>
            </motion.div>
        </div>
      </motion.div>
        
    </>
  )
}

export default AboutMe
