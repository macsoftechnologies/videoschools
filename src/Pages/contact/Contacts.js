import React from "react";
import './Contacts.css';

function Contacts() {
    return (
        <>
            <section className="container">
                <div className="contact-header">
                    <div className="headertext">
                        <h1>Customer support</h1>
                    </div>
                    <div className="row conSide">
                        <div className="col">
                            <h2>Got a question</h2>
                            <p>Looking for advice, tips, or answers to a questions related to the skills we teach?</p>
                            <p>
                                First, check to see if we have a tutorial answering your question on our <b>YouTube Channel</b> or <b>Blog</b>. We create videos that answer some the most frequently asked questions from students like you, and post them there.</p>
                        </div>
                        <div className="col">
                            <h2>Get in Touch with Us</h2>
                            <p>If you have other issues or non-course questions, shoot us an email at support@videoschool.com with any other inquiries. We usually get back within 1-3 business days.</p>
                            <p>We look forward to hearing from you!</p>
                            <p>Cheers,</p>
                            <p>Phil</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts;