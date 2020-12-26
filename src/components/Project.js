import React from 'react';

function Project (props) {
    console.log(props)
    return (
        <div className="project" id={props.project.id} key={props.project.id}>
            <h4 className="project-title">{props.project.title}</h4>
            <img src={props.project.image} alt={props.project.title} />{<br></br>}
            <p>{props.project.description}</p>
            <p>{props.project.tools}</p>
            <a href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</a>{" "}
            <a href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</a>
        </div>
    );
}

export default Project;