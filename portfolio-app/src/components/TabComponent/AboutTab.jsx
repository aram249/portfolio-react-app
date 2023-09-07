import React from 'react';
import Card from '../Card.jsx'
import '../../styles/Card.css'
import CardData from '../CardData.jsx';

const AboutTab = (props) => {
    const aboutMe = props.aboutMe;

    return (
        <div className='about'>
            <div className='about-card'>        
                {aboutMe.map((value, index) =>(
                    <div className="card" key={index}>
                            <h2 className='title'>
                                {value.title}
                            </h2>
                            <p className='description'>
                                {value.description}
                            </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutTab;