import type { Metadata, Viewport } from "next";
import "./globals.css";
import { mona, serif } from "@/lib/schriften";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const metadata: Metadata = {
    title: "StudyTax: Steuererklärung fürs Studium",
    description:
        "Mit der App StudyTax machst du deine Steuererklärung als Studentin oder Student selbst auf dem iPhone und gibst sie direkt an dein Finanzamt ab.",
    applicationName: "StudyTax",
    icons: {
        icon: [
            { url: "/favicon.png", type: "image/png", sizes: "192x192" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: "#faf9f5",
    colorScheme: "light",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className={`${mona.variable} ${serif.variable}`} suppressHydrationWarning>
            <head>
                {/* Vor dem ersten Bild: Mit JavaScript blenden Abschnitte beim Reinscrollen ein, ohne sind sie sofort da. */}
                <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
            </head>
            <body>
                <SiteHeader />
                {children}
                <SiteFooter />
            </body>
        </html>
    );
}
