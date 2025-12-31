export default function Features() {
    return (
        <section id="features" className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <p className="section-subtitle">
                        We provide the tools and expertise you need to succeed.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🚀</div>
                        <h3 className="feature-title">Fast Deployment</h3>
                        <p className="feature-text">
                            Automate your CI/CD pipelines to deploy code in minutes, not days.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">🛡️</div>
                        <h3 className="feature-title">Secure Infrastructure</h3>
                        <p className="feature-text">
                            Built-in security practices to protect your data and applications.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <h3 className="feature-title">Scalable Architecture</h3>
                        <p className="feature-text">
                            Design systems that grow with your business needs effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
