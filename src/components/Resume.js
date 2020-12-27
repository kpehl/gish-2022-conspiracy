import React from 'react';

function Resume () {
    return (
        <div className="resume">
            <object width="100%" height="1000" border="0" data="/KathleenPehlResume.pdf#view=fitB&toolbar=0" type="application/pdf" aria-label="embedded resume">This browser does not support PDFs. <a href="/KathleenPehlResume.pdf"><span className="icon"><i className="fas fa-download"></i></span>Download my resume here.</a></object>
            {<br></br>}<a href="/KathleenPehlResume.pdf"><span className="icon"><i className="fas fa-download"></i></span>Download my resume here.</a>
        </div>
    )
}

export default Resume;