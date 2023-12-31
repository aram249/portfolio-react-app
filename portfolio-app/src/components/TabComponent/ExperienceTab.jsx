import React from 'react';
import '../../styles/Card.css'

const ExperienceTab = (props) => {
    const experience = props.props;

    return (
        <section className='card--section' id='Experience'>
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
                                    {
                                        value.description.map((val, index) =>(
                                            <li className='text' key={index}>
                                                {val}
                                            </li>
                                        ))
                                    }
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