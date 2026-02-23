"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface Props {
    children: ReactNode;
    className?: string;
    animation?: string;
}

export default function ScrollReveal({
    children,
    className = "",
    animation = "animate-fade-in-up",
}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} ${visible ? animation : "opacity-0 translate-y-8"}`}
            style={{ transition: "opacity 0.6s, transform 0.6s" }}
        >
            {children}
        </div>
    );
}
