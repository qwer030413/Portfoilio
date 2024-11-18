import { ReactElement } from 'react';
import {motion } from "framer-motion";
import './Tabs.css'
export default function Tabs(props:any): ReactElement{
    // const [tabs, setTabs] = useState(1);
    // function updateTabs(id: number, tab: any)
    // {
    //     setTabs(id);   
    //     tab.current?.scrollIntoView({behavior: 'smooth'})
    // }
    let minitabs = [
        { 
            label:"Home",
            id: 1,
            tabRef: props.homeRef
        },
        { 
            label:"About Me",
            id: 2,
            tabRef: props.aboutMeRef
        },
        {
            label:"Experience",
            id: 3,
            tabRef: props.ExperiencesRef
        },
        {
            label:"Skills",
            id: 4,
            tabRef: props.SkillRef
        },
        {
            label:"Projects",
            id: 5,
            tabRef: props.ProjectRef
        },
         
    ];
    
    return(
        <div className={'minicontainer'} >
            
            <div className='minitab'>
                
                {minitabs.map((tab) =>(
                    <div
                    key={tab.id}
                    onClick={()=>props.updateTabs(tab.id, tab.tabRef)}
                    className={`hi${
                        props.tabs === tab.id? "":"minitabbtn"
                    } `}>
                        {props.tabs === tab.id && (
                            <motion.div 
                            layoutId='index' 
                            className="indicator" 
                            onClick={() => {tab.tabRef.current?.scrollIntoView({behavior: 'smooth'})}}
                            transition={{duration:0.5, type: "spring", stiffness: 100, damping: 18}}
                            />
                        )}
                        <span className='highlight' onClick={() => {tab.tabRef.current?.scrollIntoView({behavior: 'smooth'})}}>{tab.label}</span>
                        

                    </div>
                ))}
            </div>
        </div>
    );
}

// export {totalHistorySec}