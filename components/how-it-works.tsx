"use client";

import { motion } from "framer-motion";
import { Bank, Scan, ChatCircleDots, PaperPlaneTilt } from "@phosphor-icons/react";

const steps = [
    {
        number: "01",
        title: "Bank verbinden",
        description: "Verbinde dein Bankkonto sicher per FinTS und beantworte ein paar smarte Fragen zur Kategorisierung.",
        icon: Bank,
        gradient: "from-primary to-accent",
    },
    {
        number: "02",
        title: "Belege scannen",
        description: "Fotografiere deine Belege mit der Kamera oder lade PDFs hoch. Die KI erkennt alle Infos.",
        icon: Scan,
        gradient: "from-indigo-500 to-violet-500",
    },
    {
        number: "03",
        title: "Fragen beantworten",
        description: "Beantworte einfache Fragen zu deiner Situation. Der KI-Assistent steht dir jederzeit zur Seite.",
        icon: ChatCircleDots,
        gradient: "from-teal-500 to-emerald-500",
    },
    {
        number: "04",
        title: "Absenden & Geld zurück",
        description: "Prüfe deine Steuererstattung in Echtzeit und sende die Erklärung mit einem Klick per ELSTER.",
        icon: PaperPlaneTilt,
        gradient: "from-secondary to-accent",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 dot-pattern opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        In 4 einfachen Schritten zur{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg" />
                            <span className="relative text-gradient">Steuererstattung</span>
                        </span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative pt-4 sm:pt-8 text-center group"
                        >
                            {/* Line from center to right edge (connects to next step) */}
                            {(index === 0 || index === 2) && (
                                <div className="absolute top-[54px] sm:top-[72px] left-[50%] right-0 h-[2px] bg-border" />
                            )}
                            {index === 1 && (
                                <div className="absolute top-[54px] sm:top-[72px] left-[50%] right-0 h-[2px] bg-border hidden lg:block" />
                            )}
                            {/* Line from left edge to center (connects from previous step) */}
                            {(index === 1 || index === 3) && (
                                <div className="absolute top-[54px] sm:top-[72px] left-0 right-[50%] h-[2px] bg-border" />
                            )}
                            {index === 2 && (
                                <div className="absolute top-[54px] sm:top-[72px] left-0 right-[50%] h-[2px] bg-border hidden lg:block" />
                            )}

                            {/* Number circle with glow */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="relative mx-auto w-20 h-20 sm:w-28 sm:h-28 mb-4 sm:mb-8 z-10"
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                                {/* Circle background */}
                                <div className="absolute inset-0 rounded-full bg-background border-2 border-border shadow-2xl" />

                                {/* Animated gradient border on hover */}
                                <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary group-hover:via-accent group-hover:to-secondary transition-all duration-500 opacity-0 group-hover:opacity-100">
                                    <div className="w-full h-full rounded-full bg-background" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <step.icon
                                        size={24}
                                        weight="duotone"
                                        className="text-primary mb-1 sm:hidden"
                                    />
                                    <step.icon
                                        size={32}
                                        weight="duotone"
                                        className="text-primary mb-1 hidden sm:block"
                                    />
                                    <span className="text-sm sm:text-lg font-bold text-muted-foreground">{step.number}</span>
                                </div>
                            </motion.div>

                            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-xs sm:text-base text-muted-foreground max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
