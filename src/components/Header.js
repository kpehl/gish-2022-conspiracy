import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h2>Cats Are Liquid!</h2>
            {props.children}
            <div className="hero"></div>
        </header>
    );
}

export default Header;