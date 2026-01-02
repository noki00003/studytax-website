"use client";

import { motion } from "framer-motion";
import {
    FileMagnifyingGlass,
    Calculator,
    FolderOpen,
    ChartPie,
    DeviceMobileCamera,
    ChatTeardrop,
} from "@phosphor-icons/react";

const moreFeatures = [
    {
        title: "Dokumenten-Scanner",
        description: "Automatische Erkennung von Lohnsteuerbescheinigungen",
        icon: FileMagnifyingGlass,
        color: "text-primary",
    },
    {
        title: "Echtzeit-Rechner",
        description: "Sieh sofort, wie viel Geld du zurückbekommst",
        icon: Calculator,
        color: "text-teal-500",
    },
    {
        title: "Belege organisieren",
        description: "Alle Dokumente an einem Ort",
        icon: FolderOpen,
        color: "text-amber-500",
    },
    {
        title: "Transparente Berechnung",
        description: "Verstehe, wie deine Erstattung entsteht",
        icon: ChartPie,
        color: "text-violet-500",
    },
    {
        title: "Auf allen Geräten",
        description: "Verfügbar für iOS und Android",
        icon: DeviceMobileCamera,
        color: "text-fuchsia-500",
    },
    {
        title: "Keine Vorkenntnisse nötig",
        description: "Verständliche Fragen statt Steuer-Deutsch",
        icon: ChatTeardrop,
        color: "text-orange-500",
    },
];

export function MoreFeatures() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Und noch mehr
                    </h2>
                    <p className="text-muted-foreground">
                        Alles, was deine Steuererklärung einfacher macht.
                    </p>
                </motion.div>

                {/* Two-column feature list */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                    {moreFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="flex items-center gap-4 group"
                        >
                            <div className={`${feature.color} transition-transform group-hover:scale-110`}>
                                <feature.icon size={28} weight="duotone" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
