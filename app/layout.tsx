import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Vinay Nain | Full Stack Developer & UI/UX Designer",
    template: "%s | Vinay Nain Portfolio"
  },
  description: "Full-stack developer specializing in Next.js, React, and TypeScript. Building high-performance web applications with seamless user experiences and modern design.",
  keywords: ["Full Stack Developer", "Frontend Developer", "React Developer", "Next.js", "TypeScript", "UI/UX Designer", "Web Development", "Vinay Nain"],
  authors: [{ name: "Vinay Nain" }],
  creator: "Vinay Nain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinaynain.vercel.app",
    title: "Vinay Nain | Full Stack Developer & UI/UX Designer",
    description: "Full-stack developer specializing in Next.js, React, and TypeScript. Building high-performance web applications.",
    siteName: "Vinay Nain Portfolio",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Vinay Nain Portfolio"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Sidebar/> */}
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}