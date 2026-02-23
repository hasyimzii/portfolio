"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
    const highlights = [
        { label: "Years Experience", value: "4+", icon: "📅" },
        { label: "Technologies", value: "15+", icon: "⚡" },
        { label: "GPA", value: "3.89", icon: "🎓" },
    ];

    return (
        <section id="about" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
                        About Me
                    </h2>
                </ScrollReveal>

                <div className="grid gap-10 lg:grid-cols-3">
                    <ScrollReveal className="lg:col-span-2">
                        <div className="glass rounded-2xl p-8">
                            <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
                                I&apos;m a passionate <span className="font-semibold text-foreground">Backend Developer</span> based in Surabaya, Indonesia.
                                With a strong foundation in{" "}
                                <span className="text-primary-light">Laravel (PHP)</span>,{" "}
                                <span className="text-primary-light">Node.js</span>, and{" "}
                                <span className="text-primary-light">Go</span>, I specialize in
                                architecting and implementing scalable backend systems and APIs.
                            </p>
                            <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
                                I&apos;m proficient in OOP, REST API design, database management, Redis,
                                unit testing, logging, payment gateway integration, Git version control,
                                WebSocket, Docker, and Nginx. I take pride in writing clean and maintainable code.
                            </p>
                            <p className="text-base leading-relaxed text-muted sm:text-lg">
                                I hold a Bachelor&apos;s degree in Information Systems from Jember University
                                with a GPA of 3.89/4.00, and I&apos;ve been consistently recognized for my
                                achievements in national IT competitions.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="flex flex-col gap-4">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="card-hover glass rounded-2xl p-6 text-center"
                                >
                                    <span className="mb-2 block text-2xl">{item.icon}</span>
                                    <span className="gradient-text text-3xl font-extrabold">
                                        {item.value}
                                    </span>
                                    <span className="mt-1 block text-sm text-muted">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
