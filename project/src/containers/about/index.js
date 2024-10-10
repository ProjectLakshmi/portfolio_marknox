import React from "react";
import PageHedaer from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from "react-simple-animate";
import './style.scss';

const PersonalDetails = [
    {
        label: 'Name',
        value: 'Lakshmi'
    },
    {
        label: 'Address',
        value: 'Palwal,Haryana'
    },
    {
        label: 'Email',
        value: 'lakshmi83970@gmail.com'
    }
];

const About = () => {
    const jobsummary = "Highly skilled web developer with [X] years of experience in designing, developing, and maintaining responsive websites and web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React.js and Angular, as well as back-end development using Node.js and databases like MongoDB and MySQL. Adept at translating client requirements into scalable solutions, optimizing performance, and ensuring cross-browser compatibility. Strong focus on UI/UX design, with a passion for delivering efficient, user-centered digital experiences."
    return (
        <section id="about" className="about">

            <PageHedaer
                headerText="About me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about_content">
                <div className="about__content__personalwrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                       
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3>Web developer</h3>
                        <p>{jobsummary}</p>

                        <h3 className="personalHeaderClass">Personal Information</h3>
                        <ul>
                            {
                                PersonalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceswrapper"></div>

            </div>
        </section>
    )

}

export default About;