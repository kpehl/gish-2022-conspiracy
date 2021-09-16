import React from 'react'
import profilePicture from '../assets/profile-picture.jpg';
import {Animated} from 'react-animated-css';

function About ({isVisible}) {
    return (
        <section className="my-5">
            <div>
                <div>
                    <h2 id="about">About me</h2>
                    <img src={profilePicture} className="my-2" style={{ width: "20%"}} alt="Kathleen next to a tree" />
                    <p>My name is Kathleen Pehl, and I am a full stack web developer. I created my first basic HTML web page in 1999 
                        while studying engineering at the University of Colorado at Boulder, and ever since I have been tinkering with web design. I 
                        spent close to two decades working as an aerospace engineer, primarily in systems design, and did some coding in MATLAB, Visual Basic, 
                        Python, and C++ to help with various tasks and projects. I am currently versed in JavaScript (ES5 and ES6), jQuery, Web APIs and AJAX, 
                        Node/Node.js and several common npm packages, Express.js, MySQL, SQLite3, and object relational mapping with Sequelize, MongoDB and Mongoose, php, 
                        axios, GraphQL, Laravel, MVC frameworks, React, Redux, Vue, Amazon Web Services, HTML, CSS, handlebars templating, CSS frameworks such as Bootstrap and Bulma, 
                        using Object Oriented Design, Functional Programming, and Test Driven Design methodologies, responsive and mobile first design, and designing for accessibility. 
                        I look forward to bringing my coding skills, systems level thinking, and work ethic to your projects!</p>
                </div>
            </div>
            <div>
                <Animated animationIn="bounceInRight" animationInDuration={1750} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={1250} isVisible={isVisible}>
                    <div>
                        <h2> Programming Languages &amp; Tools</h2>
                        <p>
                            <span className = "icon" title = 'HTML 5' data-tooltip = "HTML 5"><i className="fab fa-html5"></i></span>{" "}
                            <span className = "icon" title = 'CSS' data-tooltip = 'CSS'><i className="fab fa-css3"></i></span>{" "}
                            <span className = "icon" title = 'JavaScript' data-tooltip = 'JavaScript'><i className="fab fa-js"></i></span>{" "}
                            <span className = "icon" title = 'Node.js' data-tooltip = 'Node.js'><i className="fab fa-node-js"></i></span>{" "}
                            <span className = "icon" title = 'php' data-tooltip = 'php'><i className="fab fa-php"></i></span>{" "}
                            <span className = "icon" title = "Laravel" data-tooltip = 'Laravel'><i className="fab fa-laravel"></i></span>{" "}
                            <span className = "icon" title = 'npm' data-tooltip = 'npm'><i className="fab fa-npm"></i></span>{" "}
                            <span className = "icon" title = 'Express.js' data-tooltip = 'Express.js' style={{fontFamily: "helvetica neue,open sans,sans-serif"}}>ex</span>{" "}
                            <span className = "icon" title = 'SQL' data-tooltip = 'SQL'><i className="fas fa-database"></i></span>{" "}
                            <span className = "icon" title = 'React' data-tooltip = 'React'><i className="fab fa-react"></i></span>{" "}
                            <span className = "icon" title = 'Vue' data-tooltip = 'Vue'><i className="fab fa-vuejs"></i></span>{" "}
                            <span className = "icon" title = 'Python' data-tooltip = 'Python'><i className="fab fa-python"></i></span>{" "}
                            <span className = "icon" title = 'AWS' data-tooltip = 'Amazon Web Services'><i className="fab fa-aws"></i></span>{" "}
                            <span className = "icon" title = 'GitHub' data-tooltip = 'GitHub'><i className="fab fa-github-square"></i></span>
                        </p>
                        <h2>Work Flow</h2>
                        <ul>
                            <li>GitHub Projects and Issues / Atlassian Gitflow</li>
                            <li>Agile</li>
                            <li>Jira</li>
                    <li>Microsoft Project</li>
                        </ul>
                    </div>
                </Animated>
            </div>
        </section>
    );
}

export default About;