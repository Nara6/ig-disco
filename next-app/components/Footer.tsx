import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link href="#" className="logo">
                        IGDisco
                    </Link>
                    <p className="footer-text">
                        Empowering teams to build better software, faster.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4 className="footer-heading">Company</h4>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Resources</h4>
                        <ul>
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Community</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Legal</h4>
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2025 IGDisco. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
