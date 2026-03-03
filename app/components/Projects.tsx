"use client";

import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Building2 } from "lucide-react";

import Image from "next/image";

interface Project {
    name: string;
    description: string;
    company: string;
    tech: "Laravel" | "Node.js" | "Go";
    features: string[];
    image?: string;
}
const projects: Project[] = [
    {
        name: "Lassie Manna",
        description: "Marketplace membership app",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Marketplace transaction sync",
            "Membership tier & point bonus",
            "Reward catalog & claim",
        ],
        image: "/projects/lassie-manna.png",
    },
    {
        name: "Cek Selingkuh",
        description: "AI whatsapp cheating analyzer",
        company: "Ordo Apps",
        tech: "Node.js",
        features: [
            "AI analyzer for whatsapp chat",
            "Review using sentiment analysis",
            "Payment gateway integration",
        ],
        image: "/projects/cek-selingkuh.png",
    },
    {
        name: "Navcomm",
        description: "Vessel management service app",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Vessel management",
            "Document management & export PDF",
            "Live group chat",
        ],
        image: "/projects/navcomm.png",
    },
    {
        name: "Fuomo",
        description: "Digital product marketplace",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Digital product management",
            "Creator wishlists & support tipping",
            "Payment gateway integration",
        ],
        image: "/projects/fuomo.png",
    },
    {
        name: "Xymart",
        description: "Product market & delivery app",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Minimarket product management",
            "Driver delivery service",
            "Payment gateway integration",
        ],
        image: "/projects/xymart.png",
    },
    {
        name: "Accounting App",
        description: "Business accounting app",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Marketplace transaction sync",
            "Warehouse item management",
            "Reporting & export PDF Excel",
        ],
        image: "/projects/accounting-app.png",
    },
    {
        name: "Proton",
        description: "Pest management service app",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Resource management",
            "Schedule management calendar",
            "Reporting & export PDF Excel",
        ],
        image: "/projects/proton.png",
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
                                    <div className="relative aspect-[375/193] w-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={`${project.name} screenshot`}
                                            width={375}
                                            height={193}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={`relative aspect-[375/193] w-full bg-gradient-to-br from-indigo-600 to-cyan-400 p-6 overflow-hidden flex-shrink-0`}
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

                                        <div className="mt-3 flex items-center gap-3">
                                            <div className="flex items-center gap-2 text-sm text-primary-light bg-primary/10 w-fit px-3 py-1.5 rounded-full border border-primary/10">
                                                <Building2 className="w-4 h-4" />
                                                <span className="font-semibold">{project.company}</span>
                                            </div>
                                            <div className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border shadow-sm ${project.tech === 'Laravel' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                                project.tech === 'Go' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                    'bg-green-500/10 text-green-500 border-green-500/20'
                                                }`}>
                                                {project.tech}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-border/50">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">
                                            Features
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.features.map((feat, idx) => (
                                                <li key={idx} className="flex-start flex gap-2.5 text-sm">
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent flex-none" />
                                                    <span className="text-foreground/80 leading-snug">{feat}</span>
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
