import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/modules/Navbar";
import { AnimatePresence } from "framer-motion";
import { ShootingStars } from "@/components/ui/shooting-starts";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Sanjiv Chaudhary | Portfolio",
  description: "Sanjiv Chaudhary Portfolio",
};
export type IconProps = React.HTMLAttributes<SVGElement>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
 
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-screen bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <AnimatePresence mode="wait">
          <main className="pt-24 relative z-10">
            <div className="max-w-5xl mx-auto px-4">
              <Navbar />
              {children}
            </div>
          </main>
          <ShootingStars />
        </AnimatePresence>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
