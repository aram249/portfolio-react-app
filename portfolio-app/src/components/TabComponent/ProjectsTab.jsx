import React from 'react';


const ProjectsTab = (props) => {
    const projects = props.projects;

    return (
        <div className='projects'>
            <>        
                {projects.map((value, index) =>(
                    <div className="card" key={index}>
                            <h2 className='title'>
                                {value.projectName}
                            </h2>
                            <p className='description'>
                                {value.description}
                            </p>
                    </div>
                ))}
            </>
        </div>
    )
}

export default ProjectsTab;