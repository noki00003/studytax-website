"use client";

import { motion } from "framer-motion";
import { AppleLogo, GooglePlayLogo, Sparkle } from "@phosphor-icons/react";

export function CTA() {
    return (
        <section id="download" className="py-24 relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent">
                {/* Animated blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-aurora" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl animate-aurora-slow" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Animated sparkles */}
                    <div className="flex justify-center gap-2 mb-6">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                            >
                                <Sparkle size={20} weight="fill" className="text-white/80" />
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Bereit für deine{" "}
                        <span className="relative inline-block">
                            <span className="absolute -inset-1 bg-white/20 blur-xl rounded-lg" />
                            <span className="relative">Steuererstattung?</span>
                        </span>
                    </h2>

                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        Lade StudyTax jetzt kostenlos herunter und starte mit deiner Steuererklärung.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-semibold shadow-2xl overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        <AppleLogo size={28} weight="fill" className="relative z-10" />
                        <span className="relative z-10 text-left">
                            <span className="block text-xs opacity-80">Laden im</span>
                            <span className="block text-lg leading-none">App Store</span>
                        </span>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold overflow-hidden"
                    >
                        {/* Animated border */}
                        <span className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-r from-white/50 via-white/80 to-white/50 bg-[length:200%_100%] group-hover:animate-gradient-shift" />
                        <span className="absolute inset-[1.5px] rounded-[14px] bg-primary-dark/80 backdrop-blur-sm" />

                        <GooglePlayLogo size={28} weight="duotone" className="relative z-10 text-white" />
                        <span className="relative z-10 text-white text-left">
                            <span className="block text-xs opacity-80">JETZT BEI</span>
                            <span className="block text-lg leading-none">Google Play</span>
                        </span>
                    </motion.button>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-8 text-sm text-white/60 flex items-center justify-center gap-3"
                >
                    <span>Kostenlos downloaden</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>Für iOS und Android</span>
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    <span>DSGVO-konform</span>
                </motion.p>
            </div>
        </section>
    );
}
