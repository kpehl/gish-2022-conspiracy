import React from 'react';

function Footer () {
    return (
        <footer>
            <div className="copyright">
                <p>Copyright &copy; Kathleen Pehl, {(new Date().getFullYear())}</p>
                {/* <p><span className="icon"><i className="fab fa-linkedin"></i></span>{" "}<a href="https://www.linkedin.com/in/kathleen-pehl-77bb1710" target="_blank" rel="noreferrer">LinkedIn Profile</a>{" "}
                    <span className="icon"><i className="fab fa-github"></i></span>{" "}<a href="https://github.com/kpehl" target="_blank" rel="noreferrer">GitHub Profile</a>{" "}
                    <span className="icon"><i className="fab fa-stack-overflow"></i></span>{" "}<a href="https://stackoverflow.com/users/13924519/kpehl" target="_blank" rel="noreferrer">Stack Overflow Profile</a>
                </p> */}
            </div>
        </footer>
    )
}

export default Footer;