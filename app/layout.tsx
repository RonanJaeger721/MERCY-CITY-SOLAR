import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business } from "@/lib/business";
import { GlassNavbar, SiteFooter } from "@/components/ui";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
export const metadata: Metadata = {
  metadataBase: new URL(business.origin),
  title: {
    default: "Mercy City Solar & Boreholes | Reliable Water. Smarter Energy.",
    template: "%s | Mercy City Solar & Boreholes",
  },
  description:
    "Groundwater surveys, borehole drilling, solar pump installation and technical survey services. Mercy City Solar & Boreholes, Tynwald South, Zimbabwe.",
  openGraph: {
    type: "website",
    locale: "en_ZW",
    siteName: business.name,
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/images/logo.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <GlassNavbar />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: business.name,
              url: business.origin,
              logo: `${business.origin}/images/logo.png`,
              telephone: `+${business.whatsapp}`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tynwald South",
                addressCountry: "ZW",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
