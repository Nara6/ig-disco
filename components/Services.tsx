export default function Services() {
    const services = [
        {
            title: "Cloud Migration",
            description: "Seamlessly move your infrastructure to the cloud with zero downtime."
        },
        {
            title: "Infrastructure as Code",
            description: "Manage your infrastructure using code for consistency and speed."
        },
        {
            title: "Monitoring & Logging",
            description: "Gain real-time insights into your system's performance and health."
        }
    ];

    return (
        <section id="services" className="py-32">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/30 transition-all duration-300 group">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-secondary leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <a href="#" className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
