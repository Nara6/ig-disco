"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        alert("Form submitted successfully!");

        // Reset success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <section id="contact" className="py-32">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Meeting</h2>
                    <p className="text-xl text-secondary">
                        Let&apos;s discuss how we can help your business grow.
                    </p>
                </div>
                <div className="p-8 md:p-12 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/50">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="meeting-type" className="block text-sm font-semibold mb-2">Meeting Type</label>
                                <select
                                    id="meeting-type"
                                    name="meeting-type"
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                >
                                    <option value="online">Online Meeting (Zoom/Meet)</option>
                                    <option value="in-person">In-Person Meeting</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-semibold mb-2">Preferred Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Sending..." : "Schedule Meeting"}
                        </button>
                        {isSuccess && (
                            <p className="text-center text-green-500 font-semibold">
                                Message sent successfully!
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
