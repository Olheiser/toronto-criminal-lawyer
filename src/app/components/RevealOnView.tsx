"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Adds `visibleClassName` the first time the wrapper scrolls into view.
 * The hidden starting state lives in CSS behind `@media (scripting: enabled)
 * and (prefers-reduced-motion: no-preference)`, so content is never hidden
 * for no-JS visitors or people who prefer reduced motion.
 */
export default function RevealOnView({
    children,
    className,
    visibleClassName,
}: {
    children: React.ReactNode;
    className: string;
    visibleClassName: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setVisible(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={visible ? `${className} ${visibleClassName}` : className}>
            {children}
        </div>
    );
}
