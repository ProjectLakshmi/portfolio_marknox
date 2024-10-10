import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHedaer from "../../components/pageHeaderContent";


const Contact=()=>{
    return(
        <section id="contact" className="conatct">
        <PageHedaer 
        headerText="My conatct"
        icon={<BsInfoCircleFill size={40}/>}
        />
       </section>
    )

}
export default Contact;