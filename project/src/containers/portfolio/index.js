import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHedaer from "../../components/pageHeaderContent";


const Portfolio=()=>{
    return(
        <section id="portfolio" className="portfolio">
        <PageHedaer 
        headerText="My portfolio"
        icon={<BsInfoCircleFill size={40}/>}
        />
       </section>
    )

}

export default Portfolio;