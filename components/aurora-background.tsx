"use client";

import { useEffect, useState } from "react";

export function AuroraBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <div className="mesh-gradient-bg" aria-hidden="true" />;
}
