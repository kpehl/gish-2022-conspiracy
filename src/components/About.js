import React from 'react'
import profilePicture from '../assets/profile-picture.jpg';

function About () {
    return (
        <section className="my-5">
            <div>
                <h2 id="about">About me</h2>
                <img src={profilePicture} className="my-2" style={{ width: "20%"}} alt="Kathleen next to a tree" />
                <p>My name is Kathleen Pehl, and I am a full stack web developer. I created my first basic HTML web page in 1999 
                    while studying engineering at the University of Colorado at Boulder, and ever since I have been tinkering with web design. I 
                    spent close to two decades working as an aerospace engineer, primarily in systems design, and did some coding in MATLAB, Visual Basic, 
                    Python, and C++ to help with various tasks and projects. I am currently versed in JavaScript (ES5 and ES6), jQuery, Web APIs and AJAX, 
                    Node and several common npm packages, Express.js, MySQL, SQLite3, and object relational mapping with Sequelize, MongoDB and Mongoose, 
                    MVC frameworks, React, HTML, CSS, handlebars templating, CSS frameworks such as Bootstrap and Bulma, using Object Oriented Design and 
                    Test Driven Design methodologies, responsive and mobile first design, and designing for accessibility. I look forward to bringing my 
                    coding skills, systems level thinking, and work ethic to your projects!</p>
            </div>
            <div>
                <h2> Programming Languages &amp; Tools</h2>
                    <p>
                        <span class = "icon" title = 'HTML 5' data-tooltip = "HTML 5"><i class="fab fa-html5"></i></span>{" "}
                        <span class = "icon" title = 'CSS' data-tooltip = 'CSS'><i class="fab fa-css3"></i></span>{" "}
                        <span class = "icon" title = 'JavaScript' data-tooltip = 'JavaScript'><i class="fab fa-js"></i></span>{" "}
                        <span class = "icon" title = 'Node.js' data-tooltip = 'Node.js'><i class="fab fa-node-js"></i></span>{" "}
                        <span class = "icon" title = 'npm' data-tooltip = 'npm'><i class="fab fa-npm"></i></span>{" "}
                        <span class = "icon" title = 'Express.js' data-tooltip = 'Express.js' style={{fontSize: "25px", fontFamily: "helvetica neue,open sans,sans-serif"}}>ex</span>{" "}
                        <span class = "icon" title = 'SQL' data-tooltip = 'SQL'><img width="20px" height="20px" src = "https://image.flaticon.com/icons/png/512/29/29165.png" alt =""/></span>{" "}
                        <span hidden class = "icon" title = 'React' data-tooltip = 'React'><i class="fab fa-react"></i></span>
                    </p>
                    <h2>Work Flow</h2>
                    <p>
                        <ul>
                            <li>GitHub Projects and Issues / Atlassian Gitflow</li>
                            <li>Agile</li>
                            <li>Microsoft Project</li>
                        </ul>
                    </p>
            </div>
        </section>
    );
}

export default About;