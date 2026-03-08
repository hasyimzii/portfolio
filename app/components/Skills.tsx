"use client";

import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
    name: string;
    icon: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Languages & Frameworks",
        icon: "💻",
        skills: [
            "PHP",
            "Laravel",
            "Livewire",
            "Node.js",
            "jQuery",
            "Next.js",
            "Go",
            "Go Fiber",
        ],
    },
    {
        name: "Web & APIs",
        icon: "⚙️",
        skills: [
            "REST API",
            "OOP",
            "WebSocket",
            "Queue",
            "Payment Gateway",
            "Dependency Injection",
        ],
    },
    {
        name: "Database & Cache",
        icon: "🗄️",
        skills: [
            "MySQL",
            "PostgreSQL",
            "SQLite",
            "Redis",
        ],
    },
    {
        name: "DevOps & Tools",
        icon: "🚀",
        skills: [
            "Docker",
            "Nginx",
            "GitHub",
            "GitLab",
        ],
    },
    {
        name: "Testing & Quality",
        icon: "✅",
        skills: [
            "Unit Testing",
            "Logging",
            "Validation",
        ],
    },
    {
        name: "Data & Reporting",
        icon: "📊",
        skills: [
            "Excel Import/Export",
            "PDF Generation",
            "Chart Visualization",
            "Dynamic Tables",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 sm:py-32">
            <div className="bg-orb absolute -right-48 top-1/3 h-80 w-80 bg-accent" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <h2 className="section-heading mb-14 text-3xl font-bold tracking-tight sm:text-4xl">
                        Skills & Technologies
                    </h2>
                </ScrollReveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((cat, i) => (
                        <ScrollReveal key={i}>
                            <div className="card-hover glass rounded-2xl p-6 h-full">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="text-2xl">{cat.icon}</span>
                                    <h3 className="text-lg font-bold text-foreground">
                                        {cat.name}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span key={skill} className="skill-badge">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
