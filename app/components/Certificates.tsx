"use client";

import ScrollReveal from "./ScrollReveal";

interface Certificate {
    title: string;
    issuer: string;
    description: string;
    icon: string;
}

const certificates: Certificate[] = [
    {
        title: "Pemrograman Go-Lang: Pemula sampai Mahir",
        issuer: "Udemy",
        description:
            "Go Fundamentals, Standard Library, Modules, Unit Test, Goroutines, Context, Database, RESTful API, Dependency Injection, Logging, Generics Type, Database Migration, Validation, Go Fiber Framework, GORM, and Go Redis.",
        icon: "🐹",
    },
    {
        title: "Database Redis: Pemula sampai Mahir",
        issuer: "Udemy",
        description:
            "Redis Fundamentals, Redis Data Structure (list, set, stream, etc.), and Redis PubSub.",
        icon: "🔴",
    },
    {
        title: "Docker: Pemula sampai Mahir",
        issuer: "Udemy",
        description:
            "Docker Fundamentals, Dockerfile, and Docker Compose.",
        icon: "🐳",
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="relative py-24 sm:py-32">
            <div className="bg-orb absolute top-1/2 -left-48 h-80 w-80 bg-primary" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-14 text-3xl font-bold tracking-tight sm:text-4xl">
                        Certificates
                    </h2>
                </ScrollReveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, i) => (
                        <ScrollReveal key={i}>
                            <div className="card-hover glass flex h-full flex-col rounded-2xl p-6">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                                        {cert.icon}
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wide text-accent-light uppercase">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                                <h3 className="mb-3 text-base font-bold leading-snug text-foreground">
                                    {cert.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted">
                                    {cert.description}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
