import React from 'react';
import '../../styles/Card.css'

const EducationTab = (props) => {
    const education = props.education;

    console.log(education);
    return (
        <section className='education--section' id='Education'>
            <div className='education--section--container'>
                {education.map((value, index) =>(
                    <div className="education--section--card" key={index}>
                        <div className='education--section--card--content'>
                            <div>
                                <h3 className='education--section-title'>
                                    {value.school}
                                </h3>
                                <p className='text-md'>
                                    {value.degree} in {value.fieldOfStudy}
                                </p>
                                <p className='text-md'>
                                    {value.startDate} - {value.endDate}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        
    )
}

export default EducationTab;