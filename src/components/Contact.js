// Contact Form Component
import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [event.target.name]: event.target.value });
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <div className="contact-info">
                <div className = "contact-column">
                    <div className="contact-info-item">
                        <h5>Location:</h5>
                        <p>Fleming Island, FL 32003</p>
                    </div>
                    <div className="contact-info-item">
                        <span className="icon"><i className="fas fa-mobile-alt"></i></span>{" "} <a href="tel:+14259536252">(425) 953-6252</a>
                    </div>
                    <div className="contact-info-item">
                        <span className="icon"><i className="far fa-envelope"></i></span>{" "}<a href="mailto:kathleen.pehl@gmail.com">kathleen.pehl@gmail.com</a>
                    </div>
                    <div className="contact-info-item">
                        <span className="icon"><i className="fab fa-linkedin"></i></span>{" "}<a href="https://www.linkedin.com/in/kathleen-pehl-77bb1710" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                    </div>
                    <div className="contact-info-item">
                        <span className="icon"><i className="fab fa-github"></i></span>{" "}<a href="https://github.com/kpehl"  target="_blank" rel="noreferrer">GitHub Profile</a>
                    </div>
                </div>
                <div className="contact-column">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject:</label>
                            <input type="text" name="subject" defaultValue={subject} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;