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

const targets = [
    {
        title: "Werbungskosten Studium",
        description: "Fachliteratur, Laptop, Fahrtkosten zur Uni – wir helfen dir, alle Ausgaben geltend zu machen.",
        icon: GraduationCap,
        gradient: "from-blue-500 via-cyan-400 to-blue-600",
    },
    {
        title: "Nebenjobs & Minijobs",
        description: "Arbeitest du neben dem Studium? Wir berücksichtigen alle Einkommensarten und Freibeträge.",
        icon: Briefcase,
        gradient: "from-amber-400 via-orange-500 to-rose-500",
    },
    {
        title: "Erststudium vs. Zweitstudium",
        description: "Bachelor oder Master? Wir kennen den Unterschied und optimieren deine Steuererstattung entsprechend.",
        icon: Books,
        gradient: "from-violet-500 via-purple-500 to-indigo-500",
    },
    {
        title: "Homeoffice-Pauschale",
        description: "Nutze die Homeoffice-Pauschale für deine Studien- oder Arbeitstage zu Hause.",
        icon: HouseLine,
        gradient: "from-teal-400 via-emerald-500 to-cyan-500",
    },
    {
        title: "BAföG & Stipendien",
        description: "BAföG ist steuerfrei – aber wir helfen dir bei allen anderen Einkommensarten.",
        icon: PiggyBank,
        gradient: "from-pink-500 via-rose-400 to-fuchsia-500",
    },
    {
        title: "Versicherungen & Vorsorge",
        description: "Krankenversicherung, Haftpflicht – alle Sonderausgaben werden berücksichtigt.",
        icon: ShieldCheck,
        gradient: "from-emerald-400 via-teal-500 to-blue-500",
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
                            <span className="relative text-gradient">Studenten & Azubis</span>
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        StudyTax kennt deine steuerliche Situation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {targets.map((target, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Gradient border container */}
                            <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${target.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-white/20 dark:border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                                {/* Subtle gradient glow on hover */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${target.gradient} opacity-0 group-hover:opacity-[0.12] blur-3xl transition-opacity duration-700`} />
                                <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br ${target.gradient} opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700`} />

                                {/* Icon with gradient background */}
                                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${target.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                    <target.icon size={26} weight="duotone" className="text-white" />
                                </div>

                                <h3 className="text-lg font-bold mb-3 text-foreground">
                                    {target.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {target.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
