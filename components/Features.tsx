export default function Features() {
    return (
        <section id="features" className="py-32 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Us?</h2>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        We provide the tools and expertise you need to succeed.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">🚀</div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Fast Deployment</h3>
                        <p className="text-secondary leading-relaxed">
                            Automate your CI/CD pipelines to deploy code in minutes, not days.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">🛡️</div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Secure Infrastructure</h3>
                        <p className="text-secondary leading-relaxed">
                            Built-in security practices to protect your data and applications.
                        </p>
                    </div>
                    <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                        <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">📈</div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">Scalable Architecture</h3>
                        <p className="text-secondary leading-relaxed">
                            Design systems that grow with your business needs effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
