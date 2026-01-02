"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "@phosphor-icons/react";

const COOKIE_CONSENT_KEY = "studytax-cookie-consent";

type ConsentType = "all" | "essential" | null;

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            // Small delay so banner doesn't flash on page load
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (type: ConsentType) => {
        if (type) {
            localStorage.setItem(COOKIE_CONSENT_KEY, type);
        }
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                            <div className="flex items-start gap-4">
                                <div className="hidden sm:flex w-12 h-12 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                                    <Cookie size={24} className="text-primary" weight="fill" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-lg font-semibold mb-2">
                                            Cookie-Einstellungen
                                        </h3>
                                        <button
                                            onClick={() => handleConsent("essential")}
                                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors -mt-1"
                                            aria-label="Schließen"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        Wir verwenden Cookies, um dein Erlebnis zu verbessern.
                                        Essentielle Cookies sind für die Funktion der Website notwendig.
                                        Optionale Cookies helfen uns, die Website zu verbessern.{" "}
                                        <Link
                                            href="/datenschutz"
                                            className="text-primary hover:underline"
                                        >
                                            Mehr erfahren
                                        </Link>
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            onClick={() => handleConsent("all")}
                                            className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                                        >
                                            Alle akzeptieren
                                        </button>
                                        <button
                                            onClick={() => handleConsent("essential")}
                                            className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            Nur essentielle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
