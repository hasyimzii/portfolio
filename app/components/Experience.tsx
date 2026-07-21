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
        title: "Software Engineer",
        company: "CV Alkas Triyasa Adhimukti (Atria)",
        type: "Contract",
        period: "Jul 2026 — Present",
        location: "Surabaya, Indonesia",
        points: [
            "Developed and optimized enterprise-grade backend systems using ASP.NET and Node.js to support critical port logistics and supply chain management applications.",
            "Engineered robust APIs and integration modules to streamline port operations, including cargo tracking, vessel scheduling, or inventory management systems.",
            "Optimized database performance by fine-tuning complex SQL queries, stored procedures, and indexing strategies in both Oracle and PostgreSQL environments to minimize system latency.",
            "Collaborated with cross-functional teams to translate complex maritime and logistics business logic into clean, scalable, and maintainable code.",
        ],
    },
    {
        title: "Backend Developer",
        company: "PT ORDO Teknologi Karya (Ordo Apps)",
        type: "Full-time",
        period: "Dec 2023 — Jun 2026",
        location: "Surabaya, Indonesia",
        points: [
            "Architected and deployed scalable backend systems and RESTful APIs using Laravel and Node.js, successfully powering 10+ web applications with high availability.",
            "Engineered robust data pipelines and third-party integrations (Payment Gateways, Marketplace APIs, WhatsApp/Email Tokens), optimizing Excel/PDF exports up to 10,000+ rows without timeouts.",
            "Designed and implemented asynchronous background job architectures and Redis-backed queues to handle high-frequency system updates and real-time alerts.",
            "Optimized MySQL database performance and server response times, reducing API latency through complex query optimization, indexing, and strategic caching while proactively troubleshooting production bottlenecks.",
        ],
    },
    {
        title: "Backend Developer",
        company: "CV Berdaya Maju Bersama (Kode Koding)",
        type: "Internship",
        period: "Feb 2022 — Aug 2022",
        location: "Jember, Indonesia",
        points: [
            "Assisted in developing reactive features, dynamic tables, and optimized Excel/PDF import-export functionalities for 2 web application projects using Laravel and Livewire.",
            "Implemented secure authentication mechanisms by integrating Laravel Passport for Single Sign-On (SSO), significantly improving user access management and API security.",
            "Collaborated within an Agile team environment and under senior mentorship to optimize MySQL database queries, perform code reviews, and ensure clean code standards.",
        ],
    },
    {
        title: "Web Developer",
        company: "Pasar Virtual UNEJ",
        type: "Freelance",
        period: "Aug 2021 — Dec 2021",
        location: "Jember, Indonesia",
        points: [
            "Engineered and deployed a robust backend infrastructure using Laravel and MySQL for a university marketplace, implementing jQuery/AJAX for dynamic, real-time product listings.",
            "Implemented secure Role-Based Access Control utilizing the Spatie package, safeguarding sensitive user data within MySQL database and streamlining multi-role workflows.",
            "Collaborated remotely within cross-functional teams, participating in regular alignments to successfully deliver a fully functional and scalable platform on schedule.",
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
