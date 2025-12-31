
import HeroSVG from "./HeroSVG";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Accelerate Your Software Delivery</h1>
                    <p className="hero-subtitle">
                        Streamline your development lifecycle with our cutting-edge DevOps
                        solutions. Automate, scale, and innovate faster than ever.
                    </p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            Book a Demo
                        </a>
                        <a href="#features" className="btn btn-secondary">
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <HeroSVG />
                </div>
            </div>
        </section>
    );
}
