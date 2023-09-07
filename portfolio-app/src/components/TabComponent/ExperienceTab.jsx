import React from 'react';

const ExperienceTab = (props) => {
    const experience = props.experience;
    console.log("line 6");
    console.log(experience);


    return (
        
            <div>
                <>        
                    {experience.map((value, index) =>(
                    <div className="card" key={index}>
                            <h2 className='title'>
                                {value.title}
                            </h2>
                            <h1 className='header'>
                                {value.company}
                            </h1>
                            <p className='description'>
                                {value.description}
                            </p>
                    </div>
                    ))}
                </>
            </div>
        
    )
}

export default ExperienceTab;