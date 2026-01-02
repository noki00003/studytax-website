import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuroraBackground } from "@/components/aurora-background";
import { FloatingElements } from "@/components/floating-elements";
import { CookieBanner } from "@/components/cookie-banner";

export const metadata: Metadata = {
  title: "StudyTax - Steuererklärung für Studenten",
  description: "Die smarte Steuer-App für Studenten und Azubis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuroraBackground />
          <FloatingElements />
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
