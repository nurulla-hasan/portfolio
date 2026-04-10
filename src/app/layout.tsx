import type { Metadata } from "next";
import { Comic_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import SocialSidebar from "@/components/layout/social-sidebar";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Nurulla Hasan | Frontend-Focused MERN Stack Developer",
  description: "Premium cinematic developer portfolio for Nurulla Hasan, focused on modern, scalable, and clean web experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        comicNeue.variable,
        poppins.variable,
        "font-sans",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SocialSidebar />
        </ThemeProvider>
      </body>
    </html>
  )
}
