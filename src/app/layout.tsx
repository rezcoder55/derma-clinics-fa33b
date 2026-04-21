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
  title: "عيادات توجه الطبية | ليزر وعناية بالبشرة",
  description: "عيادات توجه الطبية في الرياض، مجمع طبي متخصص بمجال التجميل والعناية بالبشرة وإزالة الشعر بالليزر تحت إشراف نخبة من الأطباء.",
  icons: {
    icon: "/logo.svg",
  },
};

import { ScrollToTop } from "@/components/layout/ScrollToTop";

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
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
