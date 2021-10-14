import React, {useState} from 'react';
import Project from './Project';
import personalProjects from '../assets/personalProjects';
import workProjects from '../assets/workProjects';
import {Animated} from 'react-animated-css'

function Portfolio ({isVisible}) {
    const [projectListPersonal] = useState(personalProjects);
    const [projectListWork] = useState(workProjects);

    return (
        <div className="portfolio">
            <h2 id="portfolio">My Portfolio</h2>
            <h3>Professional Projects</h3>
            <div className="projects row">
                {projectListWork.map((project, index) => (
                    <Animated key={"project" + index} className={'col-12 col-md-6 p-0 m-0'} animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={200 + index * 250} isVisible={isVisible}>
                        <Project project={project} key={project.id} />
                    </Animated>
                ))}
            </div>
            <h3>Personal Projects</h3>
            <div className="projects row">
                {projectListPersonal.map((project, index) => (
                    <Animated key={"project1" + index} className={'col-12 col-md-6 p-0 m-0'} animationIn="fadeInUp" animationInDuration={1000} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={200 + index * 250} isVisible={isVisible}>
                        <Project project={project} key={"1" + project.id} />
                    </Animated>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;