"use client";

import { FormEvent } from "react";

export default function Contact() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        alert("Form submitted!");
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Schedule a Meeting</h2>
                    <p className="section-subtitle">
                        Let's discuss how we can help your business grow.
                    </p>
                </div>
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="meeting-type">Meeting Type</label>
                                <select id="meeting-type" name="meeting-type">
                                    <option value="online">Online Meeting (Zoom/Meet)</option>
                                    <option value="in-person">In-Person Meeting</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Preferred Date</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Schedule Meeting
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
