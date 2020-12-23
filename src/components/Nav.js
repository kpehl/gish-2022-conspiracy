import React from 'react';

function Nav() {
    return (
        <header>
            <h2><a href = "/">Home</a></h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">About me</a>
                    </li>
                    <li className="mx-2">
                        Projects
                    </li>
                    <li className="mx-2">
                        Contact me
                    </li>
                    <li className="mx-2">
                        Resume
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;