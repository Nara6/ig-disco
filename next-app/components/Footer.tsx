import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary/5 pt-20 pb-10 border-t border-border">
            <div className="container">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1">
                        <Link href="#" className="text-2xl font-bold text-primary mb-4 block">
                            IGDisco
                        </Link>
                        <p className="text-secondary leading-relaxed">
                            Empowering teams to build better software, faster.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="font-bold text-lg mb-6">Company</h4>
                            <ul className="space-y-4">
                                {["About", "Careers", "Blog"].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Resources</h4>
                            <ul className="space-y-4">
                                {["Documentation", "Support", "Community"].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {["Privacy Policy", "Terms of Service"].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-secondary hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border text-center text-secondary">
                    <p>&copy; 2025 IGDisco. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
