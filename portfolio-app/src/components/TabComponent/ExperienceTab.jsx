import React from 'react';
import '../../styles/Card.css'

const ExperienceTab = (props) => {
    const experience = props.experience;
    console.log("line 6");
    console.log(experience);


    return (
        <section className='card--section' id='MyPortfolio'>
            <div className='card--section--container'>     
                {experience.map((value, index) =>(
                    <div className="card--section--card" key={index}>
                        <div className='card--section--card--content'>
                            <div>
                                <h3 className='card--section-title'>
                                    {value.title}
                                </h3>
                                <h4 className='text-md'>
                                    {value.company}
                                </h4>
                                <h4 className='text-md'>
                                    {value.startDate} - {value.endDate}
                                </h4>
                                <p className='text-md'>
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> 
        </section>
    )
}

export default ExperienceTab;