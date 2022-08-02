import React from 'react';

function Footer () {
    const waywyrdLogo = require('../assets/images/waywyrd-logo.webp').default;
    return (
        <footer>
            <div className="copyright">
                <p>Copyright &copy; {(new Date().getFullYear())}, Team Waywyrd <img src={ waywyrdLogo } style={{maxHeight: '30px' }} alt="Team Waywyrd Logo" /></p>
            </div>
        </footer>
    )
}

export default Footer;