"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [roleIndex, setRoleIndex] = useState(0);
    const roles = ["Backend Developer", "Laravel Expert", "Node.js Developer", "Go Developer"];

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [roles.length]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const children = section.querySelectorAll("[data-animate]");
        children.forEach((child, i) => {
            (child as HTMLElement).style.animationDelay = `${i * 0.15}s`;
            child.classList.add("animate-fade-in-up");
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Background effects */}
            <div className="hero-gradient pointer-events-none absolute inset-0" />
            <div className="bg-orb absolute -top-32 -left-32 h-96 w-96 bg-primary" />
            <div className="bg-orb absolute -right-32 -bottom-32 h-80 w-80 bg-accent" />

            {/* Grid pattern overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-24 md:flex-row md:gap-16 md:pt-0">
                {/* Text content */}
                <div className="flex-1 text-center md:text-left">
                    <div
                        data-animate
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light opacity-0"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-light" />
                        </span>
                        Available for opportunities
                    </div>

                    <h1
                        data-animate
                        className="mb-4 text-4xl leading-tight font-extrabold tracking-tight opacity-0 sm:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Hasyim</span>
                    </h1>

                    <div data-animate className="opacity-0 mb-3">
                        <p className="inline-block font-mono text-lg font-semibold tracking-wide text-primary-light sm:text-xl border-r-3 border-primary animate-typing whitespace-nowrap overflow-hidden" key={roleIndex}>
                            {roles[roleIndex]}
                        </p>
                    </div>

                    <p
                        data-animate
                        className="mb-8 max-w-lg text-base leading-relaxed text-muted opacity-0 sm:text-lg"
                    >
                        Experienced in building scalable backend systems using{" "}
                        <span className="font-medium text-foreground">Laravel</span>,{" "}
                        <span className="font-medium text-foreground">Node.js</span>, and{" "}
                        <span className="font-medium text-foreground">Go</span>.
                        Crafting clean, maintainable, and performant code.
                    </p>

                    <div
                        data-animate
                        className="flex flex-col items-center gap-4 opacity-0 sm:flex-row md:items-start"
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            Get In Touch
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#experience"
                            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium text-muted transition-all hover:border-primary/40 hover:text-foreground hover:bg-surface/50"
                        >
                            View My Work
                        </a>
                    </div>

                    {/* Social links */}
                    <div
                        data-animate
                        className="mt-8 flex items-center justify-center gap-4 opacity-0 md:justify-start"
                    >
                        <a
                            href="https://linkedin.com/in/hasyimzii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                            aria-label="LinkedIn"
                        >
                            <svg className="h-4 w-4 text-muted transition-colors group-hover:text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://github.com/hasyimzii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                            aria-label="GitHub"
                        >
                            <svg className="h-4 w-4 text-muted transition-colors group-hover:text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a
                            href="https://gitlab.com/imhasyimari"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                            aria-label="GitLab"
                        >
                            <svg className="h-4 w-4 text-muted transition-colors group-hover:text-primary-light" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.452.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.443a.92.92 0 00.33-1.024" />
                            </svg>
                        </a>
                        <a
                            href="mailto:imhasyimari@gmail.com"
                            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary/40 hover:bg-primary/10"
                            aria-label="Email"
                        >
                            <svg className="h-4 w-4 text-muted transition-colors group-hover:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Photo */}
                <div
                    data-animate
                    className="relative flex-shrink-0 opacity-0"
                >
                    <div className="animate-pulse-glow relative h-64 w-64 overflow-hidden rounded-full border-2 border-primary/30 sm:h-80 sm:w-80">
                        <Image
                            src="/images/me.png"
                            alt="Muhammad Hasyim Asy'ari"
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 256px, 320px"
                            priority
                        />
                    </div>
                    {/* Decorative ring */}
                    <div className="animate-float pointer-events-none absolute -inset-4 rounded-full border border-dashed border-primary/20" />
                    <div className="pointer-events-none absolute -inset-8 rounded-full border border-dashed border-accent/10" />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a href="#about" aria-label="Scroll down">
                    <svg className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
