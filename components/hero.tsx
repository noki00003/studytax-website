"use client";

import { motion } from "framer-motion";
import { AppleLogo, GooglePlayLogo, Sparkle, GraduationCap, Robot, CurrencyEur } from "@phosphor-icons/react";
import { AnimatedText } from "./animated-text";
import { TiltCard } from "./tilt-card";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Animated badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 relative overflow-hidden group cursor-default"
                    >
                        {/* Animated gradient border */}
                        <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_100%] animate-gradient-shift" />
                        <span className="absolute inset-[1.5px] rounded-full bg-background/95 backdrop-blur-xl" />

                        <span className="relative flex items-center gap-2 z-10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            <span className="text-sm font-medium text-foreground">Jetzt verfügbar für iOS & Android</span>
                            <Sparkle size={16} weight="fill" className="text-accent animate-bounce-subtle" />
                        </span>
                    </motion.div>

                    {/* Animated headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <AnimatedText
                            text="Deine Steuererklärung."
                            className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
                            delay={0.2}
                        />
                        <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                            className="relative inline-block"
                        >
                            <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-2xl rounded-full animate-glow-pulse" />
                            <span className="relative text-gradient-animated">Einfach gemacht.</span>
                        </motion.span>
                    </h1>

                    {/* Subheadline with staggered animation */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Die smarte Steuer-App für Studenten und Azubis. Bank verbinden, Belege scannen, direkt ans Finanzamt senden.
                    </motion.p>

                    {/* CTA Buttons with glow effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="https://apps.apple.com/app/studytax/idXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold overflow-hidden"
                        >
                            {/* Animated gradient background */}
                            <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-[length:200%_100%] group-hover:animate-gradient-shift" />
                            {/* Glow effect */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl" />
                            <span className="relative flex items-center gap-3 text-white dark:text-black">
                                <AppleLogo size={28} weight="fill" />
                                <span className="text-left">
                                    <span className="block text-xs opacity-80">Laden im</span>
                                    <span className="block text-lg leading-none">App Store</span>
                                </span>
                            </span>
                        </motion.a>

                        <motion.a
                            href="https://play.google.com/store/apps/details?id=de.studytax.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold overflow-hidden"
                        >
                            {/* Animated border */}
                            <span className="absolute inset-0 rounded-2xl p-[1.5px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 bg-[length:200%_100%] group-hover:animate-gradient-shift" />
                            <span className="absolute inset-[1.5px] rounded-[14px] bg-gray-50 dark:bg-gray-900" />
                            <span className="relative flex items-center gap-3 text-gray-900 dark:text-white">
                                <GooglePlayLogo size={28} weight="duotone" className="text-primary" />
                                <span className="text-left">
                                    <span className="block text-xs opacity-80">JETZT BEI</span>
                                    <span className="block text-lg leading-none">Google Play</span>
                                </span>
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Phone Mockups with 3D tilt */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 50 }}
                    className="mt-24 relative mx-auto max-w-5xl"
                >
                    {/* Glow behind phones */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[600px] h-[400px] bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-[100px] rounded-full animate-glow-pulse" />
                    </div>

                    <div className="relative flex items-center justify-center gap-4 md:gap-0">
                        {/* Left Phone - Dashboard */}
                        <TiltCard className="relative z-10" rotationIntensity={15}>
                            <div className="w-64 md:w-80 h-[520px] md:h-[660px] relative">
                                {/* Phone frame */}
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl shadow-black/50">
                                    {/* Screen with real screenshot */}
                                    <div className="h-full w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                                        <Image
                                            src="/screenshot-dashboard.png"
                                            alt="StudyTax Dashboard"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </TiltCard>

                        {/* Right Phone - Chat - Hidden on mobile */}
                        <TiltCard className="relative z-0 -ml-20 mt-20 hidden md:block" rotationIntensity={12}>
                            <div className="w-80 h-[660px] relative">
                                {/* Phone frame */}
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-xl shadow-black/50">
                                    {/* Screen with real screenshot */}
                                    <div className="h-full w-full rounded-[2.5rem] overflow-hidden relative">
                                        <Image
                                            src="/screenshot-chat.png"
                                            alt="StudyTax KI-Chat"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </div>

                    {/* Floating badges around phones */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -left-4 md:left-12 top-1/4 glass-card px-4 py-2 rounded-xl hidden sm:flex items-center gap-2"
                    >
                        <GraduationCap size={24} weight="duotone" className="text-primary" />
                        <span className="text-sm font-medium">Für Studenten</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-4 md:right-12 top-1/3 glass-card px-4 py-2 rounded-xl hidden sm:flex items-center gap-2"
                    >
                        <Robot size={24} weight="duotone" className="text-accent" />
                        <span className="text-sm font-medium">KI-gestützt</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [-5, 15, -5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-1/4 -bottom-4 glass-card px-4 py-2 rounded-xl hidden sm:flex items-center gap-2"
                    >
                        <CurrencyEur size={24} weight="duotone" className="text-secondary" />
                        <span className="text-sm font-medium">Geld zurück</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
