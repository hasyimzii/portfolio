"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    const [copied, setCopied] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
    };

    const contacts = [
        {
            label: "Email",
            value: "imhasyimari@gmail.com",
            href: "mailto:imhasyimari@gmail.com",
            copyable: true,
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            label: "Phone",
            value: "+62 896 8777 3569",
            href: "tel:+6289687773569",
            copyable: true,
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            label: "Location",
            value: "Surabaya, Indonesia",
            href: "https://maps.google.com/?q=Surabaya,+Indonesia",
            icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/hasyimzii",
            href: "https://linkedin.com/in/hasyimzii",
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            label: "GitHub",
            value: "github.com/hasyimzii",
            href: "https://github.com/hasyimzii",
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            ),
        },
        {
            label: "GitLab",
            value: "gitlab.com/imhasyimari",
            href: "https://gitlab.com/imhasyimari",
            icon: (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.452.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.443a.92.92 0 00.33-1.024" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="bg-orb absolute -right-48 bottom-0 h-80 w-80 bg-accent/10" />

            <div className="relative mx-auto max-w-6xl px-6">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <h2 className="section-heading mx-auto mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            Get In Touch
                        </h2>
                        <p className="mx-auto mt-8 max-w-lg text-base text-muted sm:text-lg">
                            I&apos;m always open to discussing new projects, opportunities, or
                            partnerships. Feel free to reach out!
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {contacts.map((contact, i) => (
                        <ScrollReveal key={i}>
                            <div className="group relative">
                                <a
                                    href={contact.href}
                                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="card-hover glass flex items-center gap-4 rounded-2xl p-5 no-underline transition-all"
                                >
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-light transition-colors group-hover:bg-primary/20">
                                        {contact.icon}
                                    </div>
                                    <div className="min-w-0 flex-grow">
                                        <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                                            {contact.label}
                                        </p>
                                        <p className="truncate text-sm font-medium text-foreground">
                                            {contact.value}
                                        </p>
                                    </div>
                                </a>

                                {contact.copyable && (
                                    <button
                                        onClick={() => handleCopy(contact.value, contact.label)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted opacity-0 transition-opacity hover:bg-white/10 hover:text-foreground group-hover:opacity-100"
                                        title={`Copy ${contact.label}`}
                                    >
                                        {copied === contact.label ? (
                                            <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                            </svg>
                                        )}
                                    </button>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
