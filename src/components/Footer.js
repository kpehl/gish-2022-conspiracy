import React from 'react';

function Footer () {
    return (
        <footer>
            <div className="copyright">
                <p>Copyright &copy; {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}

export default Footer;