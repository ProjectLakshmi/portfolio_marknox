import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHedaer from "../../components/pageHeaderContent";


const Skills=()=>{
    return(
        <section id="skills" className="skills">

        <PageHedaer 
        headerText="My skills"
        icon={<BsInfoCircleFill size={40}/>}
        />
       </section>
    )

}

export default Skills;