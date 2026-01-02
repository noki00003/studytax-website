"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Books,
    HouseLine,
    PiggyBank,
    ShieldCheck
} from "@phosphor-icons/react";
import { TiltCard } from "./tilt-card";

const targets = [
    {
        title: "Werbungskosten Studium",
        description: "Fachliteratur, Laptop, Fahrtkosten zur Uni – wir helfen dir, alle Ausgaben geltend zu machen.",
        icon: GraduationCap,
        gradient: "from-primary to-accent",
        glowColor: "rgba(34, 85, 209, 0.15)",
    },
    {
        title: "Nebenjobs & Minijobs",
        description: "Arbeitest du neben dem Studium? Wir berücksichtigen alle Einkommensarten und Freibeträge.",
        icon: Briefcase,
        gradient: "from-amber-500 to-orange-400",
        glowColor: "rgba(245, 158, 11, 0.15)",
    },
    {
        title: "Erststudium vs. Zweitstudium",
        description: "Bachelor oder Master? Wir kennen den Unterschied und optimieren deine Steuererstattung entsprechend.",
        icon: Books,
        gradient: "from-indigo-500 to-violet-400",
        glowColor: "rgba(99, 102, 241, 0.15)",
    },
    {
        title: "Homeoffice-Pauschale",
        description: "Nutze die Homeoffice-Pauschale für deine Studien- oder Arbeitstage zu Hause.",
        icon: HouseLine,
        gradient: "from-teal-500 to-cyan-400",
        glowColor: "rgba(20, 184, 166, 0.15)",
    },
    {
        title: "BAföG & Stipendien",
        description: "BAföG ist steuerfrei – aber wir helfen dir bei allen anderen Einkommensarten.",
        icon: PiggyBank,
        gradient: "from-violet-500 to-fuchsia-400",
        glowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
        title: "Versicherungen & Vorsorge",
        description: "Krankenversicherung, Haftpflicht, Riester-Rente – alle Sonderausgaben werden berücksichtigt.",
        icon: ShieldCheck,
        gradient: "from-indigo-500 to-blue-400",
        glowColor: "rgba(99, 102, 241, 0.15)",
    },
];

export function TargetGroup() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Speziell für{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 blur-xl rounded-lg" />
                            <span className="relative text-gradient">Studenten, Azubis</span>
                        </span>{" "}
                        und Berufseinsteiger
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        StudyTax kennt deine steuerliche Situation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TiltCard className="h-full" rotationIntensity={6} scale={1.02}>
                                <div
                                    className="h-full p-8 rounded-3xl relative overflow-hidden group"
                                    style={{
                                        background: `linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)`,
                                    }}
                                >
                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-border via-transparent to-border opacity-100" />

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                                        style={{ background: target.glowColor }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${target.gradient} flex items-center justify-center mb-6 shadow-lg relative overflow-hidden`}
                                        >
                                            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                                            <target.icon size={28} weight="duotone" className="text-white relative z-10" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {target.title}
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {target.description}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
