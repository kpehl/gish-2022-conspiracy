import React from 'react';

function Header(props) {
    return (
        <header>
            <h2><a href = "/">Home</a></h2>
            {props.children}
        </header>
    );
}

export default Header;