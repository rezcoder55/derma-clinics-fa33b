import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "عيادات توجه الطبية | ليزر وتجميل وعناية بالبشرة",
    template: "%s | عيادات توجه الطبية",
  },
  description:
    "اكتشف الجمال مع عيادات توجه الطبية في الرياض. مجمع طبي رائد متخصص في إزالة الشعر بالليزر، حقن التجميل، نضارة البشرة، والعناية المتكاملة بأيدي أمهر الأطباء.",
  keywords: [
    "ليزر الرياض",
    "عيادات تجميل",
    "إزالة الشعر بالليزر",
    "تجميل الرياض",
    "عناية بالبشرة",
    "عيادة توجه",
    "بوتكس وفيلر",
  ],
  authors: [{ name: "عيادات توجه الطبية" }],
  creator: "عيادات توجه الطبية",
  publisher: "عيادات توجه الطبية",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://derma-clinics.netlify.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "عيادات توجه الطبية | ليزر وتجميل وعناية بالبشرة",
    description:
      "أفضل خدمات الليزر والعناية بالبشرة في الرياض تحت إشراف نخبة من الأطباء المتخصصين.",
    url: "https://derma-clinics.netlify.app",
    siteName: "عيادات توجه الطبية",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/logo.svg", // Ideally a specific OG image, but logo is a start
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "عيادات توجه الطبية | ليزر وتجميل وعناية بالبشرة",
    description: "أفضل خدمات الليزر والعناية بالبشرة في الرياض.",
    images: ["/logo.svg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${tajawal.variable} font-tajawal h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "عيادات د.ديرما",
              alternateName: "Dr. Derma Clinic",
              image: "https://derma-clinics.netlify.app/logo.svg",
              "@id": "https://derma-clinics.netlify.app",
              url: "https://derma-clinics.netlify.app",
              telephone: "0545771431",
              address: {
                "@type": "PostalAddress",
                streetAddress: "شارع الطائف",
                addressLocality: "ظهرة لبن",
                addressRegion: "الرياض",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.653564,
                longitude: 46.573066,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "10:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "15:00",
                  closes: "21:00",
                },
              ],
            }),
          }}
        />
        <LoadingScreen />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
