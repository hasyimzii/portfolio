"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "glass shadow-lg shadow-black/20"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-lg font-bold tracking-tight transition-colors hover:text-primary-light"
                >
                    <span className="gradient-text">&lt;H /&gt;</span>
                </a>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="nav-link text-sm font-medium tracking-wide"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop nav controls */}
                <div className="hidden items-center gap-4 md:flex">
                    <ThemeToggle />
                    {/* Resume button (desktop) */}
                    <a
                        href="https://drive.google.com/file/d/1vnc44KAr2aNTi5k0ITYVmGtbb2CZwiRl/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary-light transition-all hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    id="mobile-menu-toggle"
                    className="flex flex-col gap-1.5 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-500 md:hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="glass mx-4 mb-4 rounded-2xl px-6 py-4">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="nav-link block text-sm font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="flex items-center justify-between border-t border-border pt-4 mt-2">
                            <span className="text-sm font-medium text-muted">Appearance</span>
                            <ThemeToggle />
                        </li>
                        <li className="mt-2 text-center">
                            <a
                                href="https://drive.google.com/file/d/1vnc44KAr2aNTi5k0ITYVmGtbb2CZwiRl/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex w-full items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary-light"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
