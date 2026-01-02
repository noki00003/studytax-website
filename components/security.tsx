"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    LockKey,
    HardDrives,
    SealCheck,
    Bank,
    CheckCircle,
} from "@phosphor-icons/react";

const trustBadges = [
    { icon: ShieldCheck, label: "DSGVO-konform" },
    { icon: HardDrives, label: "Server in Deutschland" },
    { icon: SealCheck, label: "ELSTER-Schnittstelle" },
    { icon: Bank, label: "FinTS-Banking" },
    { icon: LockKey, label: "256-Bit Verschlüsselung" },
];

const securityPoints = [
    "Alle Daten werden mit modernster Verschlüsselung übertragen und gespeichert",
    "Deine Daten liegen auf Servern in Deutschland und unterliegen deutschem Datenschutzrecht",
    "Du hast jederzeit Recht auf Auskunft und Löschung deiner Daten",
    "Bankverbindungen laufen über den sicheren FinTS-Standard – wie beim Online-Banking",
];

export function Security() {
    return (
        <section id="security" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Sicher und{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-xl rounded-lg" />
                            <span className="relative bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent">DSGVO-konform</span>
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Deine Daten sind bei uns in sicheren Händen.
                    </p>
                </motion.div>

                {/* Trust Badges - Horizontal scrolling on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
                >
                    {trustBadges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20"
                        >
                            <badge.icon size={18} weight="duotone" className="text-teal-600 dark:text-teal-400" />
                            <span className="text-sm font-medium">{badge.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Security Details - Simple checklist */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="space-y-4">
                        {securityPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle size={22} weight="fill" className="text-teal-500 mt-0.5 shrink-0" />
                                <span className="text-muted-foreground">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
