import React from 'react';
import '../../styles/Card.css'

const EducationTab = (props) => {
    console.log("line 5");
    console.log(props);

    const education = props.props;
    
    return (
        <section className='card--section' id='Education'>
            <div className='card--section--container'>
                {education.map((value, index) =>(
                    <div className="card--section--card" key={index}>
                        <div className='card--section--card--content'>
                            <div>
                                <h3 className='card--section-title'>
                                    {value.school}
                                </h3>
                                <h4 className='text-md'>
                                    {value.degree} in {value.fieldOfStudy}
                                </h4>
                                <h4 className='text-md'>
                                    {value.startDate} - {value.endDate}
                                </h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        
    )
}

export default EducationTab;