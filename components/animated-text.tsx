"use client";

import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    type?: "words" | "chars";
    once?: boolean;
}

const containerVariants: Variants = {
    hidden: {},
    visible: (custom: number) => ({
        transition: {
            staggerChildren: 0.03,
            delayChildren: custom || 0,
        },
    }),
};

const wordVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.02,
        },
    },
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
};

export function AnimatedText({
    text,
    className = "",
    delay = 0,
    type = "words",
    once = true,
}: AnimatedTextProps) {
    const words = text.split(" ");

    if (type === "chars") {
        const chars = text.split("");
        return (
            <motion.span
                className={`inline-block ${className}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
                custom={delay}
            >
                {chars.map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={charVariants}
                        style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            custom={delay}
        >
            {words.map((word, wordIndex) => (
                <motion.span key={wordIndex} className="inline-block mr-[0.25em]" variants={wordVariants}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span key={charIndex} className="inline-block" variants={charVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </motion.span>
    );
}

interface GlowTextProps {
    text: string;
    className?: string;
}

export function GlowText({ text, className = "" }: GlowTextProps) {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-50 animate-glow-pulse" />
            <span className="relative text-gradient-animated">{text}</span>
        </span>
    );
}

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export function TypewriterText({ text, className = "", delay = 0, speed = 0.05 }: TypewriterTextProps) {
    const chars = text.split("");

    return (
        <motion.span className={className}>
            {chars.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: delay + index * speed,
                        duration: 0,
                    }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                className="inline-block w-[3px] h-[1em] bg-primary ml-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [1, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 0.8,
                    delay: delay + chars.length * speed,
                }}
            />
        </motion.span>
    );
}
