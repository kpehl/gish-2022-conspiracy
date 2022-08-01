import React from 'react';

function Footer () {
    return (
        <footer>
            <div className="copyright">
                <p>Copyright &copy; Team Waywyrd, GISH 2022 Hunt {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}

export default Footer;