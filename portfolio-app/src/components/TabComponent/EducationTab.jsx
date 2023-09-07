import React from 'react';

const EducationTab = (props) => {
    const education = props.education;

    console.log(education);
    return (
        <div className='education'>
            <>        
                {education.map((value, index) =>(
                    <div className="card" key={index}>
                            <h6 className='title'>
                                {value.school}
                            </h6>
                            <h6 className='description'>
                                {value.degree} in {value.fieldOfStudy}
                            </h6>
                            <h6 className='description'>
                                {value.startDate} - {value.endDate}
                            </h6>
                    </div>
                ))}
            </>
        </div>
    )
}

export default EducationTab;