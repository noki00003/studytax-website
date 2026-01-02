"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface LegalPageProps {
    title: string;
    content: string;
    lastUpdated?: string;
}

export function LegalPage({ title, content, lastUpdated }: LegalPageProps) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold mb-8">{title}</h1>

                <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown
                        components={{
                            h1: ({ children }) => (
                                <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
                            ),
                            h2: ({ children }) => (
                                <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl font-medium mt-6 mb-2">{children}</h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className="text-lg font-medium mt-4 mb-2">{children}</h4>
                            ),
                            p: ({ children }) => (
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 mb-4 space-y-1">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-gray-600 dark:text-gray-400">{children}</li>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-semibold text-gray-800 dark:text-gray-200">{children}</strong>
                            ),
                            em: ({ children }) => (
                                <em className="italic">{children}</em>
                            ),
                            hr: () => (
                                <hr className="my-8 border-gray-200 dark:border-gray-700" />
                            ),
                            a: ({ href, children }) => (
                                <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                                    {children}
                                </a>
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>

                {lastUpdated && (
                    <p className="text-sm text-gray-500 mt-8">
                        Stand: {lastUpdated}
                    </p>
                )}

                <div className="mt-12">
                    <Link href="/" className="text-primary hover:underline">
                        ← Zurück zur Startseite
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
