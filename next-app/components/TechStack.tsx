import { Code2, Database, Globe, Layers, Server, Shield } from "lucide-react";

export default function TechStack() {
    const technologies = [
        { name: "AWS", icon: <Globe className="w-8 h-8" /> },
        { name: "Docker", icon: <Layers className="w-8 h-8" /> },
        { name: "Kubernetes", icon: <Server className="w-8 h-8" /> },
        { name: "Terraform", icon: <Code2 className="w-8 h-8" /> },
        { name: "PostgreSQL", icon: <Database className="w-8 h-8" /> },
        { name: "Security", icon: <Shield className="w-8 h-8" /> },
    ];

    return (
        <section className="py-20 border-b border-border/40">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <p className="text-secondary font-medium whitespace-nowrap">
                        Trusted by modern engineering teams
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-12 w-full">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className="group relative flex items-center justify-center"
                            >
                                {/* Tooltip */}
                                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    {tech.name}
                                </span>
                                <div className="text-secondary/40 group-hover:text-primary transition-colors duration-500 transform group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                {/* Accessibility */}
                                <span className="sr-only">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
