import React, {useState} from 'react';
import Project from './Project';
import projects from '../assets/projects.json';

function Portfolio () {
    console.log(projects);
    const [projectList, setProjectList] = useState(projects);
    console.log(projectList);
    return (
        <div className="portfolio">
            <h2 id="portfolio">My Portfolio</h2>
            <div className="projects">
                {projectList.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;