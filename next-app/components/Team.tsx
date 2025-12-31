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
            bio: "Design and implement automation solutions to improve efficiency and reduce",
            image: "/assets/images/sreyteng.png",
        },
    ];

    return (
        <section id="team" className="team">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Meet Our Team</h2>
                    <p className="section-subtitle">The experts behind your success.</p>
                </div>
                <div className="ceo-grid">
                    <div className="ceo-card">
                        <div className="ceo-image-placeholder">
                            <img
                                src="/assets/images/chhaypor.jpeg"
                                alt="Lim Chhaypor"
                                className="ceo-image"
                            />
                        </div>
                        <h3 className="ceo-name">Lim Chhaypor</h3>
                        <p className="ceo-role">CEO</p>
                        <p className="ceo-bio">
                            {" "}
                            Lim Chhaypor is the founder and CEO of IGDISCO. With over 10 years
                            of experience in the tech industry, Lim brings a wealth of
                            knowledge and expertise to the table. He is passionate about
                            helping businesses succeed and is committed to providing top-notch
                            solutions to meet their needs.
                        </p>
                    </div>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-image-placeholder">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="team-image"
                                />
                            </div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p className="team-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
