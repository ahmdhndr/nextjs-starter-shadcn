import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basic Next.js Starter",
  description: "Basic Next.js Starter with Shadcn UI initiated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${geistMono.variable}`}>
      <body className="h-full w-full antialiased">
        <div className="flex h-screen w-screen flex-col justify-between">
          <main className="grow">{children}</main>
          <footer className="flex h-14 items-center justify-center border-t font-mono">
            &copy; {new Date().getFullYear()}
            <span className="ml-1">
              <Link
                href={"https://achmadhendarsyah.vercel.app/"}
                target="_blank"
              >
                <Button variant={"link"} className="cursor-pointer p-0">
                  Achmad Hendarsyah
                </Button>
              </Link>
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
