export default function Services() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive solutions tailored to your business.
                    </p>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <h3 className="service-title">Cloud Migration</h3>
                        <p className="service-text">
                            Seamlessly move your infrastructure to the cloud with zero
                            downtime.
                        </p>
                        <a href="#" className="service-link">
                            Learn more &rarr;
                        </a>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Infrastructure as Code</h3>
                        <p className="service-text">
                            Manage your infrastructure using code for consistency and speed.
                        </p>
                        <a href="#" className="service-link">
                            Learn more &rarr;
                        </a>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Monitoring & Logging</h3>
                        <p className="service-text">
                            Gain real-time insights into your system's performance and health.
                        </p>
                        <a href="#" className="service-link">
                            Learn more &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
