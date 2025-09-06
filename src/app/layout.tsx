import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CodeRithm - Adaptive DSA Practice Platform",
    description: "Master Data Structures and Algorithms with personalized, adaptive learning",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavbarWrapper />
                <main>{children}</main>
            </body>
        </html>
    );
}


