export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Assessment",
            description: "We analyze your current infrastructure, workflows, and pain points to understand your needs."
        },
        {
            number: "02",
            title: "Strategy",
            description: "We design a tailored roadmap and architecture that aligns with your business goals."
        },
        {
            number: "03",
            title: "Implementation",
            description: "Our engineers build, automate, and migrate your systems using best practices."
        },
        {
            number: "04",
            title: "Support",
            description: "We provide ongoing monitoring, optimization, and support to ensure sustained success."
        }
    ];

    return (
        <section className="py-32">
            <div className="container">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h2>
                    <p className="text-secondary text-xl max-w-2xl">
                        A streamlined workflow designed for transparency and speed.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-x-8 gap-y-16 relative">
                    {/* Subtle connecting line */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-border/50 -z-10" />

                    {steps.map((step) => (
                        <div key={step.number} className="relative pt-6">
                            {/* Dot on the line */}
                            <div className="hidden md:block absolute top-[2.25rem] left-0 w-3 h-3 rounded-full bg-primary ring-4 ring-bg-color" />

                            <div className="text-6xl font-bold text-primary/10 mb-6 font-mono">
                                {step.number}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-primary">{step.title}</h3>
                            <p className="text-secondary leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
