import { React } from 'react';

function GISH () {
    const imgSrc = require('../assets/images/gish-blue-1.png').default;
    return (
        <section className="my-5">
            <div>
                <div>
                    <img src={ imgSrc } className="my-2" style={{ width: "20%"}} alt="GISH Logo" />
                    <h2 id="about-gish">GISH</h2>
                    <p>GISH (the Greatest International Scavenger Hunt) is an annual, week-long scavenger hunt where teams compete (or just have a blast) performing a myriad of tasks that challenge creativity and kindess. Each year, GISH partners with a charity, and a portion of every registration fee goes to support that year's charity. This year, 2022, GISH is supporting <a href="https://www.gish.com/gish-2022-registration-partner-nova-ukraine/" target="_blank" rel="noreferrer">Nova Ukraine</a>.</p>
                </div>
            </div>
        </section>
    );
}

export default GISH;