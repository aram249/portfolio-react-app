import React from 'react';
import '../../styles/Portfolio.css'

const ProjectsTab = (props) => {
    const projects = props.projects;

    return (
        <section className='portfolio--section' id='MyPortfolio'>
            <div className='portfolio--container-box'>
                <div className='portfolio--container'>
                    <p className='sub--title'>Recent Projects</p>
                    <h2 className='section--heading'>My Portfolio</h2>
                </div>
            </div>
            <div className='portfolio--section--container'>     
                {projects.map((value, index) =>(
                    <div className="portfolio--section--card" key={index}>
                        <div className='portfolio--section--card--content'>
                            <div>
                                <h3 className='portfolio--section-title'>
                                    {value.projectName}
                                </h3>
                                <p className='text-md'>
                                    {value.description}
                                </p>
                            </div>
                            <p className='text-sm-portfolio--link'>
                            Github link
                            </p>
                        </div>
                    </div>
                ))}
            </div> 
        </section>
        
    )
}

export default ProjectsTab;