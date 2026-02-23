"use client";

import ScrollReveal from "./ScrollReveal";

interface ExperienceItem {
    title: string;
    company: string;
    type: string;
    period: string;
    location: string;
    points: string[];
}

const experiences: ExperienceItem[] = [
    {
        title: "Backend Developer",
        company: "PT ORDO Teknologi Karya (ORDO Apps)",
        type: "Full-time",
        period: "Dec 2023 — Present",
        location: "Surabaya, Indonesia",
        points: [
            "Architecting and implementing scalable backend systems and APIs using Laravel or NodeJS, ensuring seamless integration with dynamic web applications.",
            "Developing real-time frontend-backend interactions with jQuery, enabling dynamic content updates and smooth user experience.",
            "Integrating third-party services such as payment gateways, marketplace APIs, and communication tools (e.g., Email, WhatsApp) to extend platform functionality.",
            "Creating comprehensive data management systems, including dynamic tables, chart visualizations, and import/export features for Excel and PDF reports.",
            "Designing and implementing background job systems and real-time notifications for critical alerts and system updates.",
            "Optimizing system performance by fine-tuning API speed, enhancing scalability, and troubleshooting technical issues to ensure platform reliability.",
        ],
    },
    {
        title: "Backend Developer",
        company: "CV Berdaya Maju Bersama (Kode Koding)",
        type: "Internship",
        period: "Feb 2022 — Aug 2022",
        location: "Jember, Indonesia",
        points: [
            "Contributed to the design and development of backend architectures and APIs using Laravel Livewire to support dynamic web applications.",
            "Implemented data visualization features like dynamic tables and charting, and built import/export functionalities for Excel and PDF formats.",
            "Integrated Laravel Passport for secure Single Sign-On (SSO) authentication, improving user access management.",
            "Collaborated closely with senior developers to optimize backend performance, ensuring high-quality code and efficient data processing.",
        ],
    },
    {
        title: "Backend Developer",
        company: "Pasar Virtual UNEJ",
        type: "Freelance",
        period: "Aug 2021 — Dec 2021",
        location: "Jember, Indonesia",
        points: [
            "Developed and deployed backend systems using Laravel, enabling a robust online marketplace for the university community.",
            "Ensured smooth integration between backend and frontend using jQuery, facilitating dynamic content updates in real time.",
            "Implemented role-based access control with the Spatie package, securing user data and enhancing the platform's overall user experience.",
            "Worked remotely with cross-functional teams to deliver a fully functional, user-friendly platform for university students and faculty.",
        ],
    },
    {
        title: "Backend Developer",
        company: "Independent Project",
        type: "Freelance",
        period: "Sep 2020 — Nov 2020",
        location: "Jember, Indonesia",
        points: [
            "Developed and deployed backend systems using Laravel, creating scalable backend architectures and database structures to support diverse web applications.",
            "Enhanced the integration between frontend and backend systems using jQuery, enabling dynamic content updates and improving user experience.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative py-24 sm:py-32">
            {/* Subtle bg accent */}
            <div className="bg-orb absolute top-1/4 -left-48 h-80 w-80 bg-primary" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-14 text-3xl font-bold tracking-tight sm:text-4xl">
                        Professional Experience
                    </h2>
                </ScrollReveal>

                <div className="space-y-10">
                    {experiences.map((exp, i) => (
                        <ScrollReveal key={i}>
                            <div className="card-hover glass group relative rounded-2xl p-6 sm:p-8">
                                {/* Accent line */}
                                <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-primary via-accent to-transparent" />

                                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {exp.title}
                                        </h3>
                                        <p className="text-base font-medium text-primary-light">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="text-left sm:text-right">
                                        <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary-light">
                                            {exp.type}
                                        </span>
                                        <p className="mt-1 text-sm text-muted">{exp.period}</p>
                                        <p className="text-sm text-muted">{exp.location}</p>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.points.map((point, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base">
                                            <svg
                                                className="mt-1.5 h-3 w-3 flex-shrink-0 text-accent"
                                                fill="currentColor"
                                                viewBox="0 0 8 8"
                                            >
                                                <circle cx="4" cy="4" r="3" />
                                            </svg>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
