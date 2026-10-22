import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nirajsingh.dev"),
  title: "Niraj Kumar Singh — Developer Portfolio",
  description:
    "Portfolio of Niraj Kumar Singh, B.Tech CSE student (Class of 2027) at SRM IST Delhi-NCR. Building full-stack web applications and practical AI systems.",
  keywords: [
    "Niraj Kumar Singh",
    "Full-Stack Developer",
    "AI Systems",
    "Revenue Recovery Intelligence",
    "DesignReview",
    "Xeno CRM",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "SRM IST",
  ],
  authors: [{ name: "Niraj Kumar Singh", url: "https://github.com/niraj2908" }],
  creator: "Niraj Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nirajsingh.dev",
    title: "Niraj Kumar Singh — Developer Portfolio",
    description:
      "B.Tech CSE student at SRM IST Delhi-NCR. Building full-stack web applications and practical AI systems.",
    siteName: "Niraj Kumar Singh Portfolio",
    images: [
      {
        url: "/assets/niraj-photo.jpg",
        width: 540,
        height: 960,
        alt: "Niraj Kumar Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Kumar Singh — Developer Portfolio",
    description:
      "Full-stack applications and practical AI systems. Class of 2027, SRM IST Delhi-NCR.",
    images: ["/assets/niraj-photo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#090909] text-[#F3EFE6] selection:bg-[#D7192D] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
