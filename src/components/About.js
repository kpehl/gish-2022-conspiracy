import { React } from 'react';
// Two other ways of importing the image
// import profilePicture from '../assets/images/profile-picture.jpg';
// import Images from '../assets/Images';
import { Animated } from 'react-animated-css';

function About ({isVisible}) {
    const liquidCat1 = require('../assets/images/liquid-cat-1.jpg').default;
    const liquidCat2 = require('../assets/images/liquid-cat-2.jpg').default;
    const liquidCat3 = require('../assets/images/liquid-cat-3.jpg').default;
    const selfPropelled1 = require('../assets/images/self-propelled-1.gif').default;
    const selfPropelled2 = require('../assets/images/self-propelled-2.gif').default;
    return (
        <section className="my-5">
            <div>
                <div>
                    <h2 id="about">About Cats</h2>
                    <p>Cats only pretend to have bones. They are in fact a sentient (occasionally malicious) liquid! Observing cats for any period of time makes this abundantly clear. In 2017, Marc-Antoin Fardin, a researcher of rheology at Université Paris Diderot - USPC, took home the Ig Nobel Prize for his work on the fluid nature of cats(<a href="https://theconversation.com/answering-the-question-that-won-me-the-ig-nobel-prize-are-cats-liquid-86589" target="_blank" rel="noreferrer">Reference Article, The Conversation</a>), and yet, still!, the world has not awakened to these duplicitous fuzzy creatures.</p>
                    <p>Veterinarians have tried to prove that cats are in fact solid, and have bones like other mammals. Indeed x-ray examinations seem to show skeletal structure, but this is a lie! Cats modify their internal structure to create the appearance and function of bones whenever they are required, but it is crystal clear that they cannot possibly actually have skeletons.</p>
                </div>
            </div>
            <div>
                <Animated animationIn="bounceInRight" animationInDuration={1750} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={1250} isVisible={isVisible}>
                    <div>
                        <h2>Liquid State of Matter</h2>
                        <p>Liquids are defined traditionally as materials that adapt their shape to fill a container. There are myriad examples of images and videos to be found on the internet showing cats taking on the shape of their chosen container.</p>
                        <ul>
                            <li>
                                <img src={ liquidCat1 } style={{ width: "20%"}} alt="Liquid Cat Case 1" /><br />
                                <span><a href="https://www.reddit.com/r/funny/comments/6jgadx/my_friends_cat_climbed_into_a_plastic_flower/" target="_blank" rel="noreferrer">citizen_collective</a></span>
                            </li>
                            <li>
                                <img src={ liquidCat2 } style={{ width: "20%"}} alt="Liquid Cat Case 2" /><br />
                                <span><a href="https://www.reddit.com/r/cats/comments/82gxl6/update_feline_continues_to_seek_fully_liquid_state/" target="_blank" rel="noreferrer">cakes1todough1</a></span>
                            </li>
                            <li>
                                <img src={ liquidCat3 } style={{ width: "20%"}} alt="Liquid Cat Case 3" />
                            </li>
                        </ul>
                    </div>
                </Animated>
                <Animated animationIn="bounceInRight" animationInDuration={1750} animationOutDuration={1000} animationOut="fadeOut" animationInDelay={1250} isVisible={isVisible}>
                    <div>
                        <h2>Self-Propelled</h2>
                        <p>As sentient beings, cats do not just fill a stationary container, they also flow under and around objects at will!</p>
                        <ul>
                            <li>
                                <img src={ selfPropelled1 } style={{ width: "20%"}} alt="Self Propelled Liquid Cat Case 1" />
                            </li>
                            <li>
                                <img src={ selfPropelled2 } style={{ width: "20%"}} alt="Self Propelled Liquid Cat Case 2" />
                            </li>
                            <li>Another one still</li>
                        </ul>
                    </div>
                </Animated>                
            </div>
        </section>
    );
}

export default About;