"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AppleLogo, Sparkle, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { AnimatedText } from "./animated-text";
import Image from "next/image";
import { useState, useCallback } from "react";

const screenshots = [
    { src: "/screenshot-chat.png", alt: "KI-Chat" },
    { src: "/screenshot-dashboard.png", alt: "Erstattung" },
    { src: "/screenshot-bank.png", alt: "Bank verbinden" },
    { src: "/screenshot-scan.png", alt: "Belege scannen" },
    { src: "/screenshot-belege.png", alt: "Belege verwalten" },
];

export function Hero() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const go = useCallback((dir: number) => {
        setDirection(dir);
        setCurrent((prev) => (prev + dir + screenshots.length) % screenshots.length);
    }, []);

    const getIndex = (offset: number) =>
        (current + offset + screenshots.length) % screenshots.length;

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
                        <span className="absolute inset-0 rounded-full p-[1.5px] bg-gradient-to-r from-[#D97757] via-[#30A46C] to-[#D97757] bg-[length:200%_100%] animate-gradient-shift" />
                        <span className="absolute inset-[1.5px] rounded-full bg-background/95 backdrop-blur-xl" />
                        <span className="relative flex items-center gap-2 z-10">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            <span className="text-sm font-medium text-foreground">Jetzt verfügbar für iOS</span>
                            <Sparkle size={16} weight="fill" className="text-accent animate-bounce-subtle" />
                        </span>
                    </motion.div>

                    {/* Animated headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <AnimatedText
                            text="Deine Steuererklärung."
                            className="text-gray-900 dark:text-white"
                            delay={0.2}
                        />
                        <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                            className="relative inline-block"
                        >
                            <span className="absolute -inset-2 bg-gradient-to-r from-[#D97757]/20 via-[#E5956F]/20 to-[#30A46C]/20 blur-2xl rounded-full animate-glow-pulse" />
                            <span className="relative text-gradient-animated">Einfach gemacht.</span>
                        </motion.span>
                    </h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Die smarte Steuer-App für Studenten und Azubis. Bank verbinden, Belege scannen, direkt ans Finanzamt senden.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="https://apps.apple.com/de/app/studytax/id6757154261"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#141413] via-[#2A2320] to-[#141413] dark:from-[#D97757] dark:via-[#E5956F] dark:to-[#D97757] bg-[length:200%_100%] group-hover:animate-gradient-shift" />
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#D97757]/20 via-[#30A46C]/20 to-[#D97757]/20 blur-xl" />
                            <span className="relative flex items-center gap-3 text-white">
                                <AppleLogo size={28} weight="fill" />
                                <span className="text-left">
                                    <span className="block text-xs opacity-80">Laden im</span>
                                    <span className="block text-lg leading-none">App Store</span>
                                </span>
                            </span>
                        </motion.a>
                    </motion.div>
                </div>

                {/* 3D Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 50 }}
                    className="mt-24 relative mx-auto max-w-5xl"
                >
                    {/* Glow behind carousel */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[600px] h-[400px] bg-gradient-to-r from-[#D97757]/20 via-[#30A46C]/15 to-[#D97757]/20 blur-[100px] rounded-full animate-glow-pulse" />
                    </div>

                    <motion.div
                        className="relative flex items-center justify-center touch-pan-y"
                        style={{ perspective: "1200px" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={(_, info) => {
                            if (info.offset.x > 50) go(-1);
                            else if (info.offset.x < -50) go(1);
                        }}
                    >
                        {/* Left arrow */}
                        <button
                            onClick={() => go(-1)}
                            className="absolute left-0 sm:left-4 z-30 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background transition-colors"
                        >
                            <CaretLeft size={24} weight="bold" className="text-foreground" />
                        </button>

                        {/* Carousel container */}
                        <div className="relative w-[240px] sm:w-[300px] md:w-[360px] h-[520px] sm:h-[650px] md:h-[780px]">
                            {screenshots.map((shot, idx) => {
                                // Compute shortest offset on the circular ring
                                let offset = idx - current;
                                const half = screenshots.length / 2;
                                if (offset > half) offset -= screenshots.length;
                                if (offset < -half) offset += screenshots.length;

                                const absOffset = Math.abs(offset);
                                const visible = absOffset <= 1;

                                return (
                                    <motion.div
                                        key={idx}
                                        animate={{
                                            x: `${offset * 70}%`,
                                            scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7,
                                            z: absOffset === 0 ? 0 : absOffset === 1 ? -150 : -300,
                                            opacity: 1,
                                            rotateY: offset * -10,
                                        }}
                                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                        className="absolute inset-0"
                                        style={{
                                            zIndex: 10 - absOffset,
                                            transformStyle: "preserve-3d",
                                            pointerEvents: visible ? "auto" : "none",
                                        }}
                                    >
                                        <div className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/30 relative">
                                            {/* Darkening overlay for non-center slides */}
                                            {absOffset > 0 && (
                                                <div
                                                    className="absolute inset-0 z-10 rounded-[2rem] sm:rounded-[2.5rem] bg-black/[0.4] dark:bg-black/[0.4]"
                                                    style={{ opacity: absOffset === 1 ? 0.3 : 0.7 }}
                                                />
                                            )}
                                            <Image
                                                src={shot.src}
                                                alt={shot.alt}
                                                fill
                                                className="object-cover"
                                                priority={idx < 3}
                                                sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 360px"
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right arrow */}
                        <button
                            onClick={() => go(1)}
                            className="absolute right-0 sm:right-4 z-30 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background transition-colors"
                        >
                            <CaretRight size={24} weight="bold" className="text-foreground" />
                        </button>
                    </motion.div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {screenshots.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > current ? 1 : -1);
                                    setCurrent(i);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    i === current
                                        ? "w-6 bg-foreground dark:bg-white"
                                        : "bg-foreground/20 hover:bg-foreground/40"
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
