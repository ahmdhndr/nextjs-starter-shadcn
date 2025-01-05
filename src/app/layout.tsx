import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

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
    <html lang="en">
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} h-full w-full antialiased`}
      >
        <div className="flex h-screen w-screen flex-col justify-between">
          <main className="container flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
