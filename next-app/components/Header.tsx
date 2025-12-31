"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <Link href="#" className="logo">
                    <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
                </Link>

                <nav className={`nav ${isMobileMenuOpen ? "active" : ""}`}>
                    <ul className="nav-list">
                        <li>
                            <a href="#features" className="nav-link" onClick={closeMobileMenu}>
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="nav-link" onClick={closeMobileMenu}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="nav-link" onClick={closeMobileMenu}>
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>


                <div className="header-actions">
                    <ThemeToggle />
                    <a href="#contact" className="btn btn-primary">
                        Get Started
                    </a>
                    <button
                        className="mobile-menu-btn"
                        aria-label="Toggle menu"
                        onClick={toggleMobileMenu}
                    >
                        <span
                            style={{
                                transform: isMobileMenuOpen
                                    ? "rotate(45deg) translate(5px, 5px)"
                                    : "none",
                            }}
                        ></span>
                        <span style={{ opacity: isMobileMenuOpen ? "0" : "1" }}></span>
                        <span
                            style={{
                                transform: isMobileMenuOpen
                                    ? "rotate(-45deg) translate(5px, -5px)"
                                    : "none",
                            }}
                        ></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
