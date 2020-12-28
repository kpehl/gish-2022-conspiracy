import React from 'react';
import Card from 'react-bootstrap/Card';

// function Project (props) {
//     console.log(props)
//     return (
//         <div className="project" id={props.project.id} key={props.project.id}>
//             <h4 className="project-title">{props.project.title}</h4>
//             <img src={props.project.image} alt={props.project.title} />{<br></br>}
//             <p>{props.project.description}</p>
//             <p>{props.project.tools}</p>
//             <a href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</a>{" "}
//             <a href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</a>
//         </div>
//     );
// }

function Project (props) {
    return (
        <Card style={{ width: '45rem' }}>
            <Card.Img variant="top" src={props.project.image} alt={props.project.title} />
            <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>
                    <p>{props.project.description}</p>
                    <p>{props.project.tools}</p>                    
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</Card.Link>
                <Card.Link href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Project;