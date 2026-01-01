import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"

const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sathyavarthan Balachandar - Data Engineer",
  description:
    "Portfolio of Sathyavarthan Balachandar, Data Engineer with 3+ years of experience in building data pipelines, warehouses, and analytics solutions.",
  generator: "v0.app",
  icons: {
      icon: "/favicon.jpg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
