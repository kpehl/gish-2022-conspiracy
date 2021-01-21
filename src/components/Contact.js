// Contact Form Component
import React, {useState} from 'react';
import {validateEmail} from '../utils/helpers';
import { contact } from '../utils/helpers'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: ''});
    const { name, email, subject, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    function handleChange(event) {
        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if(!isValid) {
                setErrorMessage('Enter a valid email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`A ${event.target.name} is required.`);
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
        <section id="contact" className="contact">
            <div className="container">
            <h1>Contact me</h1>
            <div className="contact-info row">
                <div className = "contact-column col-lg-5 d-flex align-items-stretch">
                    <div className = "info">
                        <div className="contact-info-item">
                            <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                            <p>Location: Fleming Island, Florida 32003</p>
                        </div>
                        <div className="contact-info-item">
                            <span className="icon"><i className="fas fa-mobile-alt"></i></span>{" "} <p><a href="tel:+14259536252">(425) 953-6252</a></p>
                        </div>
                        <div className="contact-info-item">
                            <span className="icon"><i className="far fa-envelope"></i></span>{" "}<p><a href="mailto:kathleen.pehl@gmail.com">kathleen.pehl@gmail.com</a></p>
                        </div>
                        <div className="contact-info-item">
                            <span className="icon"><i className="fab fa-linkedin"></i></span>{" "}<p><a href="https://www.linkedin.com/in/kathleen-pehl-77bb1710" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
                        </div>
                        <div className="contact-info-item">
                            <span className="icon"><i className="fab fa-github"></i></span>{" "}<p><a href="https://github.com/kpehl"  target="_blank" rel="noreferrer">GitHub Profile</a></p>
                        </div>
                    </div>
                </div>
                <div className="contact-column col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form className="php-email-form" /*onSubmit={handleSubmit}*/ action="https://formspree.io/f/mbjpwyva" method="post">
                        <div className="row">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                onBlur={handleChange}
                                className="form-control"
                                id="name"
                                />
                                <div className="validate"></div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Your Email</label>
                                <input
                                type="email"
                                name="email"
                                defaultValue={email}
                                onBlur={handleChange}
                                className="form-control"
                                id="email"
                                />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                            <label htmlFor="name">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                defaultValue={subject}
                                onBlur={handleChange}
                                className="form-control"
                                id="subject"
                            />
                            <div className="validate"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group">
                            <label htmlFor="name">Message</label>
                            <textarea
                                className="form-control"
                                name="message"
                                defaultValue={message}
                                onBlur={handleChange}
                                rows="10"
                            ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            {errorMessage && (
                                <div>
                                    <p className="error-text">
                                    <strong>{errorMessage}</strong>
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="row">
                            <div>
                                <button type='submit'>Submit Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;