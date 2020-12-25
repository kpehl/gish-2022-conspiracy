import React from 'react';

function Project (props) {
    console.log(props)
    return (
        <div className="project" id={props.project.id} key={props.project.id}>
            <h3 className="project-title">{props.project.title}</h3>
            <img src={props.project.image} alt={props.project.title} />
            <a href={props.project.gitLink} target="_blank">GitHub Repository</a>
            <a href={props.project.deployedLink}>Deployed Application</a>
        </div>
    );
}

export default Project;