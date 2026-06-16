import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hyderabad Persian Cats | HPC",
  description: "Playful, affectionate, and perfectly groomed Persian kittens for your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-dark">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
