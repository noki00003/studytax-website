"use client";

import { motion } from "framer-motion";
import { Scan, ChatCircleDots, PaperPlaneTilt } from "@phosphor-icons/react";

const steps = [
    {
        number: "01",
        title: "Lohnsteuerbescheinigung scannen",
        description: "Scanne deine Lohnsteuerbescheinigung mit der Kamera. Die KI liest alle Daten automatisch aus.",
        icon: Scan,
        gradient: "from-blue-500 via-cyan-400 to-blue-600",
    },
    {
        number: "02",
        title: "KI-Chat durchlaufen",
        description: "Beantworte einfache Fragen im Chat. Die KI führt dich Schritt für Schritt durch deine Steuererklärung.",
        icon: ChatCircleDots,
        gradient: "from-violet-500 via-purple-400 to-indigo-500",
    },
    {
        number: "03",
        title: "Absenden & Geld zurück",
        description: "Prüfe deine Steuererstattung in Echtzeit und sende die Erklärung mit einem Klick per ELSTER.",
        icon: PaperPlaneTilt,
        gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        In 3 einfachen Schritten zur{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg" />
                            <span className="relative text-gradient">Steuererstattung</span>
                        </span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="flex flex-col gap-8 md:gap-0 md:grid md:grid-cols-3 relative">
                    {/* Connecting line — desktop only */}
                    <div className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-[2px]">
                        <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-emerald-500/30" />
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group"
                        >
                            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-0">
                                {/* Number + Icon orb */}
                                <div className="relative flex-shrink-0">
                                    {/* Glow */}
                                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-40 blur-2xl transition-all duration-700 scale-150`} />

                                    {/* Outer ring */}
                                    <motion.div
                                        whileHover={{ scale: 1.08 }}
                                        className="relative w-[64px] h-[64px] md:w-[120px] md:h-[120px] md:mb-10"
                                    >
                                        {/* Gradient ring */}
                                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} p-[2px]`}>
                                            <div className="w-full h-full rounded-full bg-background" />
                                        </div>

                                        {/* Inner content */}
                                        <div className="absolute inset-[4px] md:inset-[6px] rounded-full bg-gradient-to-br from-white/80 to-white/40 dark:from-white/[0.08] dark:to-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center gap-0.5 md:gap-1">
                                            <step.icon size={20} weight="duotone" className="text-foreground md:!hidden" />
                                            <step.icon size={32} weight="duotone" className="text-foreground hidden md:!block" />
                                            <span className={`text-[9px] md:text-xs font-bold tracking-wider md:tracking-widest bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                                                {step.number}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Text content */}
                                <div className="flex-1 md:text-center">
                                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs md:mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
