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
        <div className="col-sm-6 mt-3">
            <Card className="w-100 h-100">
                <Card.Img variant="top" src={props.project.image} alt={props.project.title} />
                <Card.Body>
                    <Card.Title>{props.project.title}</Card.Title>
                    <Card.Text>
                        {props.project.description}                 
                    </Card.Text>
                    <Card.Text>
                        {props.project.tools}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</Card.Link>
                    <Card.Link href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default Project;