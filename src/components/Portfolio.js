import React from 'react';
import Project from './Project';

function Portfolio () {
    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            <div className="project">
                <Project />
            </div>
        </div>
    );
}

export default Portfolio;