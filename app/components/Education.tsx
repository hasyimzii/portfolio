"use client";

import ScrollReveal from "./ScrollReveal";

export default function Education() {
    const awards = [
        "🥇 1st place — Business IT Category, ISIC Faculty Competition (2021)",
        "🥉 3rd place — Business IT Category, IT Convert National Competition (2021)",
        "🥇 1st place — Smart City Category, IT Convert National Competition (2020)",
        "🥉 3rd place — Smart City Category, ISIC Faculty Competition (2020)",
    ];

    const organizations = [
        "Head of Media and Technology Division — Information System Organization (2021)",
        "Research Division — Software Engineering Laboratory (2021)",
    ];

    return (
        <section id="education" className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-14 text-3xl font-bold tracking-tight sm:text-4xl">
                        Education
                    </h2>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="card-hover glass rounded-2xl p-6 sm:p-8">
                        {/* Accent */}
                        <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-accent via-primary to-transparent" />

                        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">
                                    Bachelor&apos;s Degree — Information System
                                </h3>
                                <p className="text-base font-medium text-primary-light">
                                    Jember University
                                </p>
                            </div>
                            <div className="text-left sm:text-right">
                                <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-light">
                                    GPA: 3.89 / 4.00
                                </span>
                                <p className="mt-1 text-sm text-muted">Aug 2019 — Jul 2023</p>
                                <p className="text-sm text-muted">Jember, Indonesia</p>
                            </div>
                        </div>

                        {/* Organizations */}
                        <div className="mb-6">
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                                Organizations
                            </h4>
                            <div className="space-y-2">
                                {organizations.map((org, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                                        <svg className="mt-1.5 h-3 w-3 flex-shrink-0 text-primary-light" fill="currentColor" viewBox="0 0 8 8">
                                            <circle cx="4" cy="4" r="3" />
                                        </svg>
                                        {org}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Awards */}
                        <div>
                            <h4 className="mb-3 text-sm font-semibold tracking-wide text-foreground/80 uppercase">
                                Awards & Achievements
                            </h4>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {awards.map((award, i) => (
                                    <div
                                        key={i}
                                        className="rounded-xl border border-border bg-surface/50 p-4 text-sm text-muted transition-all hover:border-primary/30 hover:bg-primary/5"
                                    >
                                        {award}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
