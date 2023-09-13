import React from 'react';
import '../../styles/AboutTab.css'


const AboutTab = (props) => {
    const aboutMe = props.aboutMe;

    return (
        <section className='about--section'>
            <div className='about--section--content--box'>
                <div className='about--section--content'>
                    <p className='section--title'> Hey, I'm Aaron Christopher Ramirez</p>
                    <h1 className='about--section--title'>
                        <span className='about--section-title--color'>
                            Software</span>{" "}
                            <br/>
                            Developer
                    </h1>
                    <p className='about--section-description'>
                    I'm a Data Analyst currently working at Benefitfocus.
                    <br/>
                    I have a passion for software development.
                    </p>
                </div>
            </div>
            <div className='about--section-img'>
                <img src=".\image.jpg" alt="About Section"/>
            </div>

        </section>
    )
}

export default AboutTab;