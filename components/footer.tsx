"use client";

import Link from "next/link";
import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center mb-4">
                            <Logo className="h-16 w-auto" />
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Die smarte Steuer-App für Studenten und Azubis.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Produkt</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/preise" className="hover:text-primary transition-colors">Preise</Link></li>
                            <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><Link href="/impressum" className="hover:text-primary transition-colors">Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link></li>
                            <li><Link href="/agb" className="hover:text-primary transition-colors">AGB</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2025 StudyTax. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/studytax.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                        >
                            <InstagramLogo size={20} weight="fill" />
                        </a>
                        <a
                            href="https://tiktok.com/@studytax.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                        >
                            <TiktokLogo size={20} weight="fill" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
