import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dream Light Welfare Society - Registered NGO | Uttarakhand Government",
  description: "Dream Light Welfare Society is a registered nonprofit organization under Uttarakhand Government (Reg: TRSOC067080525216401) dedicated to charitable work, women empowerment, child development, education, healthcare, and rural development across India.",
  keywords: [
    "Dream Light Welfare Society",
    "Uttarakhand NGO",
    "registered nonprofit",
    "charitable organization",
    "women empowerment",
    "child development",
    "rural development",
    "education initiative",
    "healthcare support",
    "environmental programs",
    "social welfare",
    "Khatima NGO",
    "Udham Singh Nagar",
    "government registered society",
    "training programs",
    "youth development"
  ],
  authors: [{ name: "Dream Light Welfare Society" }],
  creator: "Dream Light Welfare Society",
  publisher: "Dream Light Welfare Society",
  openGraph: {
    title: "Dream Light Welfare Society - Registered NGO Uttarakhand",
    description: "Official registered NGO under Uttarakhand Government working for women empowerment, child development, education, and rural development.",
    type: "website",
    locale: "en_US",
    siteName: "Dream Light Welfare Society",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Light Welfare Society - Registered NGO",
    description: "Government registered society working for social welfare, women empowerment, and community development in Uttarakhand.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {children}
            <Toaster position="top-right" richColors />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
