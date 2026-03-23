"use client";

import Link from "next/link";
import { InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import { Logo } from "./logo";

export function Footer() {
    return (
        <footer className="relative border-t border-white/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center mb-4 text-white">
                            <Logo className="h-16 w-auto" />
                        </Link>
                        <p className="text-sm text-white/70">
                            Die smarte Steuer-App für Studenten und Azubis.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Produkt</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="/preise" className="hover:text-white transition-colors">Preise</Link></li>
                            <li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
                            <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} StudyTax. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://instagram.com/studytax.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                        >
                            <InstagramLogo size={20} weight="fill" />
                        </a>
                        <a
                            href="https://tiktok.com/@studytax.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                        >
                            <TiktokLogo size={20} weight="fill" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
