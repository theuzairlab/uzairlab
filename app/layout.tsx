import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Uzair Ullah — Full-Stack Engineer & Product Builder",
  description:
    "Full-stack engineer specializing in AI-powered SaaS, automation systems, and end-to-end product development. Based in Islamabad, available worldwide.",
  keywords: [
    "full stack developer",
    "AI engineer",
    "SaaS development",
    "Next.js",
    "LangGraph",
    "Islamabad",
  ],
  openGraph: {
    title: "Uzair Ullah — I build products that ship.",
    description:
      "Full-stack engineer + product builder. ClipsGen AI, WrenchEx, TechTivAI.",
    url: "https://uzairlab.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
