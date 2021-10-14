import React from 'react';
import Card from 'react-bootstrap/Card';
// let imgSrcPlaceholder =  'https://via.placeholder.com/150' 


function Project (props) {

    return (
        <div className="m-3">
            <Card className="w-100 h-100">
                <Card.Img src={ props.project.image } alt={props.project.title} />
                <Card.ImgOverlay>
                    <Card.Body>
                        <Card.Title>{props.project.title}</Card.Title>
                        <Card.Text>
                            {props.project.description}                 
                        </Card.Text>
                        <Card.Text>
                            {props.project.tools}
                        </Card.Text>
                    </Card.Body>
                    { ( props.project.gitLink || props.project.deployedLink ) &&
                        <Card.Footer>
                            { props.project.gitLink &&
                                <Card.Link href={props.project.gitLink} target="_blank" rel="noreferrer">GitHub Repository</Card.Link>
                            }
                            { props.project.deployedLink &&                            
                                <Card.Link href={props.project.deployedLink} target="_blank" rel="noreferrer">Deployed Application</Card.Link>
                            }
                        </Card.Footer>
                    }
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Project;