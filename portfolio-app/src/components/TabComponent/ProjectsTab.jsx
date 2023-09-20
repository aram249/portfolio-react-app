import React from 'react';
import '../../styles/Portfolio.css'

const ProjectsTab = (props) => {
    const projects = props.projects;

    return (
        <div className='portfolio--section--container'>
            <>        
                {projects.map((value, index) =>(
                    <div className="portfolio--section--card" key={index}>
                        <div className='portfolio--section--img'>
                            <img src={value.img} alt='placeholder'/>
                        </div>
                        <div className='portfolio--section--car--content'>
                            <div>
                                <h3 className='portfolio--section-title'>
                                    {value.projectName}
                                </h3>
                                <p className='text-md'>
                                    {value.description}
                                </p>
                            </div>
                            <p className='text-sm-portfolio--link'>
                            {/* link will go here to link to github */}
                            </p>
                        </div>
                    </div>
                ))}
            </>
        </div>
    )
}

export default ProjectsTab;