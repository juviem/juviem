import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Juviem Tech - AI Innovation & Technology Solutions",
    template: "%s | Juviem Tech",
  },
  description: "Juviem Tech specializes in cutting-edge AI innovation and technology solutions. Led by Naseem Ansari, we deliver innovative artificial intelligence solutions for the future.",
  keywords: ["AI Innovation", "Artificial Intelligence", "Technology Solutions", "Juviem Tech", "Naseem Ansari", "AI Development", "Machine Learning", "Tech Innovation"],
  authors: [{ name: "Naseem Ansari", url: "https://www.linkedin.com/in/naseem-ansari-25474b269/" }],
  creator: "Naseem Ansari",
  publisher: "Juviem Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://juviem.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Juviem Tech - AI Innovation & Technology Solutions",
    description: "Cutting-edge AI innovation and technology solutions for the future.",
    url: "https://juviem.tech",
    siteName: "Juviem Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juviem Tech - AI Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juviem Tech - AI Innovation & Technology Solutions",
    description: "Cutting-edge AI innovation and technology solutions for the future.",
    images: ["/og-image.jpg"],
    creator: "@juviemai",
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f5f5f4" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
