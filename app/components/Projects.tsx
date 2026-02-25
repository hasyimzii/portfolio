"use client";

import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Building2 } from "lucide-react";

import Image from "next/image";

interface Project {
    name: string;
    description: string;
    company: string;
    responsibilities: string[];
    gradient: string;
    image?: string;
}

const projects: Project[] = [
    {
        name: "Proton",
        description: "Pest management service app",
        company: "Ordo Apps",
        responsibilities: [
            "Backend API for web & mobile",
            "Integrate web Features",
            "Enterprise resource management",
            "Schedule management with calendar",
            "Report export in PDF and Excel",
        ],
        gradient: "from-indigo-600 to-cyan-400",
    },
    {
        name: "Accounting App",
        description: "Business accounting app",
        company: "Ordo Apps",
        responsibilities: [
            "Backend API for web",
            "Integrate web Features",
            "Item product management",
            "Report export in PDF",
            "Marketplace integration",
        ],
        gradient: "from-emerald-500 to-teal-400",
    },
    {
        name: "Xymart",
        description: "Product delivery app",
        company: "Ordo Apps",
        responsibilities: [
            "Backend API for web & mobile",
            "Integrate web Features",
            "Minimarket product management",
            "Payment gateway",
            "Driver shipping",
        ],
        gradient: "from-orange-500 to-rose-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="bg-orb absolute -left-48 top-1/4 h-80 w-80 bg-primary opacity-20" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <div className="mb-16">
                        <h2 className="section-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Featured Projects
                        </h2>
                        <p className="max-w-2xl text-lg text-muted">
                            A showcase of my recent work, highlighting my responsibilities and the impact of each project.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <ScrollReveal key={i}>
                            <div className="group card-hover glass h-full rounded-2xl overflow-hidden flex flex-col">
                                {/* Image or CSS Mockup Fallback */}
                                {project.image ? (
                                    <div className="relative h-48 sm:h-56 w-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={`relative h-48 sm:h-56 w-full bg-gradient-to-br ${project.gradient} p-6 overflow-hidden flex-shrink-0`}
                                    >
                                        <div className="absolute inset-0 bg-black/10"></div>
                                        <div className="absolute inset-x-8 -bottom-16 h-56 bg-surface rounded-t-xl shadow-2xl border border-white/10 p-4 transform transition-transform duration-500 group-hover:-translate-y-4 flex flex-col gap-3">
                                            <div className="w-1/2 h-3 bg-muted/20 rounded-full"></div>
                                            <div className="flex gap-2">
                                                <div className="w-1/4 h-16 bg-muted/10 rounded-lg"></div>
                                                <div className="w-3/4 h-16 bg-muted/10 rounded-lg"></div>
                                            </div>
                                            <div className="w-full h-24 bg-muted/10 rounded-lg mt-1"></div>
                                        </div>
                                    </div>
                                )}

                                <div className="flex-1 p-6 flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-foreground">
                                            {project.name}
                                        </h3>
                                        <p className="text-muted mt-1 font-medium">{project.description}</p>

                                        <div className="mt-3 flex items-center gap-2 text-sm text-primary-light bg-primary/10 w-fit px-3 py-1.5 rounded-full">
                                            <Building2 className="w-4 h-4" />
                                            <span className="font-semibold">{project.company}</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-border/50">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">
                                            Responsibilities
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.responsibilities.map((resp, idx) => (
                                                <li key={idx} className="flex-start flex gap-2.5 text-sm">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent flex-none" />
                                                    <span className="text-foreground/80 leading-snug">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
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
