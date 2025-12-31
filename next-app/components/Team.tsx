export default function Team() {
    const teamMembers = [
        {
            name: "Darom Sovannareach",
            role: "Lead DevOps Engineer",
            bio: "Expert in AWS and cloud architecture with 5+ years of experience.",
            image: "/assets/images/sovannareach.jpg",
        },
        {
            name: "Kheang Sokuntheary",
            role: "Security & Infrastructure Specialist",
            bio: "Ensuring your infrastructure is secure by design and compliant with standards.",
            image: "/assets/images/sokuntheary.png",
        },
        {
            name: "Noun Phireak",
            role: "Security & Infrastructure Specialist",
            bio: "Design and implement security controls to protect your infrastructure.",
            image: "/assets/images/phireak.png",
        },
        {
            name: "Heng Hongsea",
            role: "Network and Infrastructure Specialist",
            bio: "Implement and maintain network infrastructure to ensure optimal performance.",
            image: "/assets/images/hongsea.png",
        },
        {
            name: "Yin Soknara",
            role: "Automation Architect",
            bio: "Design and implement automation solutions to improve efficiency and reduce errors.",
            image: "/assets/images/nara.png",
        },
        {
            name: "Phorn Sreyteng",
            role: "DevOps Engineer",
            bio: "Design and implement automation solutions to improve efficiency and reduce errors.",
            image: "/assets/images/sreyteng.png",
        },
    ];

    return (
        <section id="team" className="py-32 bg-secondary/30">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-xl text-secondary">The experts behind your success.</p>
                </div>

                {/* CEO Section */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="p-10 rounded-3xl bg-card border border-border/50 text-center">
                        <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                            <img
                                src="/assets/images/chhaypor.jpeg"
                                alt="Lim Chhaypor"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Lim Chhaypor</h3>
                        <p className="text-primary font-semibold text-lg mb-6">CEO</p>
                        <p className="text-secondary leading-relaxed max-w-2xl mx-auto">
                            Lim Chhaypor is the founder and CEO of IGDISCO. With over 10 years
                            of experience in the tech industry, Lim brings a wealth of
                            knowledge and expertise to the table. He is passionate about
                            helping businesses succeed and is committed to providing top-notch
                            solutions to meet their needs.
                        </p>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center group h-full">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-colors">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                            <p className="text-secondary text-sm leading-relaxed flex-1">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
