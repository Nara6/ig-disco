"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "What specific cloud platforms do you work with?",
            answer: "We specialize in AWS, Azure, and Google Cloud Platform (GCP). We also have extensive experience with hybrid and multi-cloud environments."
        },
        {
            question: "Do you offer post-implementation support?",
            answer: "Yes, we offer various support tiers including 24/7 monitoring, incident response, and regular infrastructure audits to ensure your systems remain healthy."
        },
        {
            question: "How long does a typical migration project take?",
            answer: "Timelines vary depending on complexity. A simple lift-and-shift might take 2-4 weeks, while a complete refactoring and modernization project can take 3-6 months. We provide detailed timelines during the strategy phase."
        },
        {
            question: "Can you help with security compliance?",
            answer: "Absolutely. We build infrastructure with security-first principles and can help you meet compliance standards such as SOC2, HIPAA, and GDPR."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32">
            <div className="container max-w-4xl">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Questions</h2>
                </div>

                <div className="border-t border-border">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-border group"
                        >
                            <button
                                className="flex items-center justify-between w-full py-8 text-left"
                                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                            >
                                <span className="text-xl md:text-2xl font-medium text-primary group-hover:text-accent transition-colors duration-300 pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${index === openIndex ? "rotate-45" : "rotate-0"}`}>
                                    <div className="w-8 h-8 rounded-full border border-secondary/30 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                                        <span className="text-2xl font-light leading-none relative top-[-2px]">+</span>
                                    </div>
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${index === openIndex ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="text-lg text-secondary leading-relaxed max-w-2xl">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
