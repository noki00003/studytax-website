"use client";

import { motion } from "framer-motion";
import {
    Robot,
    Bank,
    Scan,
    PaperPlaneTilt,
    CalendarDots,
    Lightning,
    ShieldCheck,
    ChartLineUp,
} from "@phosphor-icons/react";

export function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Alles, was du für deine{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg" />
                            <span className="relative text-gradient">Steuererklärung</span>
                        </span>{" "}
                        brauchst
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Moderne Tools für maximale Rückerstattung.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[140px]">

                    {/* KI-Assistent - Large card spanning 2 cols, 2 rows */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-primary to-accent p-6 relative overflow-hidden group cursor-default"
                    >
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                            <Robot size={120} weight="duotone" className="text-white" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <Robot size={36} weight="duotone" className="text-white/90 mb-3" />
                            <h3 className="text-xl font-bold text-white mb-2">KI-Steuerassistent</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Frag alles zum Steuerrecht – rund um die Uhr. Verständliche Antworten zu Werbungskosten, Sonderausgaben und mehr.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bank - Medium card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="col-span-2 row-span-1 rounded-3xl bg-card border border-border p-5 relative overflow-hidden group hover:border-teal-500/50 transition-colors"
                    >
                        <div className="flex items-center gap-4 h-full">
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 shrink-0">
                                <Bank size={24} weight="duotone" className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">3.000+ Banken</h3>
                                <p className="text-muted-foreground text-sm">Sicher verbinden per FinTS</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scan - Small accent card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-500 p-5 flex flex-col items-center justify-center text-center group"
                    >
                        <Scan size={32} weight="duotone" className="text-white mb-2" />
                        <span className="text-white font-semibold text-sm">Belege scannen</span>
                    </motion.div>

                    {/* ELSTER - Small card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="col-span-1 row-span-1 rounded-3xl bg-card border border-border p-5 flex flex-col items-center justify-center text-center group hover:border-amber-500/50 transition-colors"
                    >
                        <PaperPlaneTilt size={28} weight="duotone" className="text-amber-500 mb-2" />
                        <span className="font-semibold text-sm">ELSTER</span>
                    </motion.div>

                    {/* Jahre - Wide card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="col-span-2 row-span-1 rounded-3xl bg-card border border-border p-5 relative overflow-hidden group hover:border-violet-500/50 transition-colors"
                    >
                        <div className="flex items-center gap-4 h-full">
                            <div className="p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shrink-0">
                                <CalendarDots size={24} weight="duotone" className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">2021 – 2025</h3>
                                <p className="text-muted-foreground text-sm">Alle Steuerjahre in einer App</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats card - Tall */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-secondary/80 to-secondary p-6 relative overflow-hidden group"
                    >
                        <div className="absolute -bottom-4 -right-4 opacity-10">
                            <ChartLineUp size={140} weight="duotone" className="text-white" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col">
                            <ChartLineUp size={32} weight="duotone" className="text-white/90 mb-3" />
                            <h3 className="text-lg font-bold text-white mb-2">Echtzeit-Erstattung</h3>
                            <p className="text-white/70 text-sm mb-4">Sieh live, wie sich deine Rückerstattung verändert.</p>
                            <div className="mt-auto">
                                <div className="text-4xl font-bold text-white">Ø 1.063€</div>
                                <div className="text-white/60 text-sm">durchschnittliche Erstattung</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Speed badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-5 flex flex-col items-center justify-center text-center"
                    >
                        <Lightning size={28} weight="fill" className="text-white mb-1" />
                        <span className="text-white font-bold text-lg">15 Min</span>
                        <span className="text-white/80 text-xs">im Schnitt fertig</span>
                    </motion.div>

                    {/* Security badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="col-span-1 row-span-1 rounded-3xl bg-card border border-border p-5 flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
                    >
                        <ShieldCheck size={28} weight="duotone" className="text-primary mb-1" />
                        <span className="font-bold text-sm">DSGVO</span>
                        <span className="text-muted-foreground text-xs">konform</span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
