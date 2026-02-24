"use client";

import ScrollReveal from "./ScrollReveal";

interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    type: string;
}

const projects: Project[] = [
    {
        title: "Pasar Virtual UNEJ",
        description: "A robust online marketplace for the university community. Features include role-based access control, dynamic content updates, and seamless backend-frontend integration.",
        tags: ["Laravel", "jQuery", "Spatie", "MySQL"],
        type: "Marketplace",
    },
    {
        title: "Data Management & Visualization Systems",
        description: "Comprehensive systems for ORDO Apps featuring dynamic tables, chart visualizations, and high-performance import/export features for Excel and PDF reports.",
        tags: ["Node.js", "Laravel", "Chart.js", "ExcelJS"],
        type: "Enterprise",
    },
    {
        title: "Secure Single Sign-On (SSO)",
        description: "Centralized authentication system using Laravel Passport, providing secure and efficient user access management across multiple platforms.",
        tags: ["Laravel Passport", "OAuth2", "Security"],
        type: "Authentication",
    },
    {
        title: "Real-time Notification Service",
        description: "Architected background job systems and WebSocket-based real-time notifications for critical system alerts and user updates.",
        tags: ["Go", "Redis", "WebSocket", "Queues"],
        type: "Infra",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="bg-orb absolute -left-48 top-1/2 h-80 w-80 bg-primary/20" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-14 text-3xl font-bold tracking-tight sm:text-4xl">
                        Key Projects & Systems
                    </h2>
                </ScrollReveal>

                <div className="grid gap-8 sm:grid-cols-2">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i}>
                            <div className="card-hover glass flex h-full flex-col overflow-hidden rounded-2xl border border-border/50">
                                <div className="p-6 sm:p-8">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-widest text-primary-light">
                                            {project.type}
                                        </span>
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-muted transition-colors hover:text-primary-light">
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary-light">
                                        {project.title}
                                    </h3>
                                    <p className="mb-6 flex-grow text-sm leading-relaxed text-muted sm:text-base">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-lg bg-foreground/5 px-2.5 py-1 text-xs font-medium text-muted border border-border/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
