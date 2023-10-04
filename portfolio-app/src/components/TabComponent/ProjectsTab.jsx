import React from 'react';
import '../../styles/Card.css'

const ProjectsTab = (portfolio) => {
    const projects = portfolio.props;


    return (
        <section className='card--section' id='Portfolio'>
            <div className='card--section--container'>     
                {projects.map((value, index) =>(
                    <div className="card--section--card" key={index}>
                        <div className='card--section--card--content'>
                            <div>
                                <h3 className='card--section-title'>
                                    {value.projectName}
                                </h3>
                                <p className='text-md'>
                                    {
                                        value.description.map((value, index) =>(
                                            <li className='text' key={index}>
                                                {value}
                                            </li>
                                        ))
                                    }
                                </p>
                            </div>
                            <p className='text-sm-card--link' >
                                <a href = {value.link}>
                                {value.title}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div> 
        </section>
        
    )
}



export default ProjectsTab;