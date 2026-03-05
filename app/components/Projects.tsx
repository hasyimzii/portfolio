"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { CheckCircle2, Building2, ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

interface Project {
    name: string;
    description: string;
    company: string;
    tech: "Laravel" | "Node.js" | "Go";
    features: string[];
    images?: string[];
}
const projects: Project[] = [
    {
        name: "Cosmetic Membership System",
        description: "Membership system for cosmetic products on marketplace",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Marketplace transaction sync",
            "Membership tier & point bonus",
            "Reward catalog & claim",
        ],
        images: [
            "/projects/cosmetic-membership-1.png",
            "/projects/cosmetic-membership-2.png",
            "/projects/cosmetic-membership-3.png",
        ],
    },
    {
        name: "Housing Management System",
        description: "Operational & financial management for housing business",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Housing unit management",
            "Cashier sales operation",
            "Financial reporting",
        ],
        images: [
            "/projects/housing-management-1.png",
            "/projects/housing-management-2.png",
            "/projects/housing-management-3.png",
        ],
    },
    {
        name: "Digital Product Marketplace",
        description: "Marketplace & donation system for digital product creators",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Digital product management",
            "Creator wishlists & tipping",
            "Payment gateway integration",
        ],
        images: [
            "/projects/digital-product-1.png",
            "/projects/digital-product-2.png",
            "/projects/digital-product-3.png",
        ],
    },
    {
        name: "Vessel Service Management App",
        description: "Management, schedule, & report app for vessel service",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Vessel service management",
            "Document management & export PDF",
            "Live group chat",
        ],
        images: [
            "/projects/vessel-service-1.png",
            "/projects/vessel-service-2.png",
            "/projects/vessel-service-3.png",
        ],
    },
    {
        name: "Product Marketplace & Delivery App",
        description: "Marketplace for minimarket products with delivery service",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Minimarket product management",
            "Driver delivery service",
            "Payment gateway integration",
        ],
        images: [
            "/projects/product-marketplace-1.png",
            "/projects/product-marketplace-2.png",
            "/projects/product-marketplace-3.png",
        ],
    },
    {
        name: "Pest Service Management App",
        description: "Management, schedule, & report app for pest control service",
        company: "Ordo Apps",
        tech: "Laravel",
        features: [
            "Resource management",
            "Schedule management calendar",
            "Reporting & export PDF Excel",
        ],
        images: [
            "/projects/pest-service-1.png",
            "/projects/pest-service-2.png",
            "/projects/pest-service-3.png",
        ],
    },
];

const ProjectCarousel = ({ images, name }: { images: string[], name: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length, currentIndex]);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative aspect-[375/193] w-full overflow-hidden flex-shrink-0 group/carousel bg-surface-light">
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 delay-300"
                        }`}
                >
                    <a href={img} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <Image
                            src={img}
                            alt={`${name} screenshot ${idx + 1}`}
                            width={375}
                            height={193}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </a>
                </div>
            ))}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevImage}
                        aria-label="Previous image"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                aria-label={`Go to slide ${idx + 1}`}
                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary scale-110' : 'bg-white/60 hover:bg-white/90'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

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
                                {project.images ? (
                                    <ProjectCarousel
                                        images={project.images}
                                        name={project.name}
                                    />
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
                                        <h3 className="text-xl font-bold text-foreground leading-tight">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-muted mt-1.5 font-medium leading-relaxed">{project.description}</p>

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
