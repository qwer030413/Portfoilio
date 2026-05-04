import "./Aboutme.css";
import { HiLightBulb } from "react-icons/hi";
import selfie from '../../Images/profilepicture.jpg';
import { motion } from 'framer-motion';

function AboutMe({ Propref }: { Propref: React.RefObject<HTMLDivElement> }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <motion.section 
      className='AboutMe' 
      ref={Propref} 
      id="section2"
      initial="hidden"
      whileInView="visible"
      // viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    > 
      <div className="AboutContainer">
        <motion.div className="ImageWrapper" variants={itemVariants}>
          <img className="Picture" src={selfie} alt="Seojin (Chris) Park" />
          <div className="ImageGlow" />
        </motion.div>

        <motion.div className="Description" variants={itemVariants}>
          <div className="AboutHeader">
            <div className="TitleArea">
              <h1>About Me</h1>
              <div className="TitleUnderline" />
            </div>
            <HiLightBulb className="HeaderIcon" size={45} />
          </div>

          <div className="TextContent">
            <motion.p variants={itemVariants}>
              Hi there! My name is <strong>Seojin Park</strong>, but most people call me <strong>Chris</strong>. 
              I am a Junior at <strong>UC San Diego</strong> studying Computer Science, currently 
              seeking internship opportunities where I can contribute and grow.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I'm a highly extroverted developer who thrives in collaborative environments. 
              I’m always excited to tackle new challenges and learn from the people around me.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              When I'm not debugging or programming, you'll likely find me on a hiking trail, 
              at the beach, or rock climbing. I love playing chess and video games
            </motion.p>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

export default AboutMe;