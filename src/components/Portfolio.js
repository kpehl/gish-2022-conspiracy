import React, {useState} from 'react';
import Project from './Project';
import projects from '../assets/projects.json';
import {Animated} from 'react-animated-css'

function Portfolio ({isVisible}) {
    // console.log(projects);
    const [projectList] = useState(projects);
    // console.log(projectList);
    return (
        <div className="portfolio">
            <h2 id="portfolio">My Portfolio</h2>
            <div className="projects row">
                {projectList.map((project, index) => (
                    <Animated key={"project" + index} className={'col-12 col-md-6 p-0 m-0'} animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={200 + index * 250} isVisible={isVisible}>
                        <Project project={project} key={project.id} />
                    </Animated>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;