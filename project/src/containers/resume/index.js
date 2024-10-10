import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHedaer from "../../components/pageHeaderContent";


const Resume=()=>{
    return(
        <section id="resume" className="resume">

        <PageHedaer 
        headerText="My resume"
        icon={<BsInfoCircleFill size={40}/>}
        />
       </section>
    )

}

export default Resume;