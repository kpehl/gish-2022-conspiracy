import { React } from 'react';
import { Animated } from 'react-animated-css';

function Evidence ({isVisible}) {
    const liquidCat1 = require('../assets/images/liquid-cat-1.jpg').default;
    const liquidCat2 = require('../assets/images/liquid-cat-2.jpg').default;
    const liquidCat3 = require('../assets/images/liquid-cat-3.jpg').default;
    const selfPropelled1 = require('../assets/images/self-propelled-1.gif').default;
    const selfPropelled2 = require('../assets/images/self-propelled-2.gif').default;
    return (
        <section className="my-5">
            <div className="center">
                <Animated animationIn="slideInRight" animationInDuration={1750} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={250} isVisible={isVisible}>
                    <div>
                        <h2>Liquid State of Matter</h2>
                        <p>Liquids are defined traditionally as materials that adapt their shape to fill a container. There are myriad examples of images and videos to be found on the internet showing cats taking on the shape of their chosen container.</p>
                        <ul>
                            <li>
                                <img src={ liquidCat1 } style={{ maxWidth: '50%'}} alt="Liquid Cat Case 1" /><br />
                                <span className='small'><a href="https://www.reddit.com/r/funny/comments/6jgadx/my_friends_cat_climbed_into_a_plastic_flower/" target="_blank" rel="noreferrer">citizen_collective</a></span>
                            </li>
                            <hr />
                            <li>
                                <img src={ liquidCat2 } style={{ maxWidth: '50%'}} alt="Liquid Cat Case 2" /><br />
                                <span className='small'><a href="https://www.reddit.com/r/cats/comments/82gxl6/update_feline_continues_to_seek_fully_liquid_state/" target="_blank" rel="noreferrer">cakes1todough1</a></span>
                            </li>
                            <hr />
                            <li>
                                <img src={ liquidCat3 } style={{ maxWidth: '50%'}} alt="Liquid Cat Case 3" />
                            </li>
                        </ul>
                    </div>
                </Animated>
                <hr />
                <Animated animationIn="slideInLeft" animationInDuration={1750} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={1250} isVisible={isVisible}>
                    <div>
                        <h2>Self-Propelled</h2>
                        <p>As sentient beings, cats do not just fill a stationary container, they also flow under and around objects at will!</p>
                        <ul>
                            <li>
                                <img src={ selfPropelled1 } style={{ maxWidth: "50%"}} alt="Self Propelled Liquid Cat Case 1" />
                            </li>
                            <hr />
                            <li>
                                <img src={ selfPropelled2 } style={{ maxWidth: "50%"}} alt="Self Propelled Liquid Cat Case 2" />
                            </li>
                        </ul>
                    </div>
                </Animated>                
            </div>
        </section>
    );
}

export default Evidence;