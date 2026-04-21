import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointerClick } from "lucide-react";

export function QuickBooking() {
  return (
    <section
      id="quick-booking"
      className="py-12 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {/* Phone Banner */}
          <Link
            href="tel:0545771431"
            className="group flex flex-col md:flex-row items-center justify-between gap-8 bg-[#E6DCCF] rounded-[3rem] p-8 md:p-12 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-2xl w-full relative overflow-hidden"
            dir="rtl"
          >
            {/* Text Side (Right) */}
            <div className="flex-1 text-center md:text-right space-y-6 flex flex-col items-center md:items-start z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#4A4A4A] leading-[1.4]">
                احجز استشارتك <br />
                الآن بنقرة واحده <br />
                من خلال الاتصال
              </h3>
              <div
                className="inline-flex items-center justify-center bg-[#4A4A4A] text-white rounded-full px-8 py-3 text-2xl font-bold tracking-wider group-hover:bg-primary group-hover:scale-105 transition-all duration-300 shadow-lg"
                dir="ltr"
              >
                0545771431
              </div>
            </div>

            {/* Image Side (Left) */}
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative drop-shadow-2xl z-10 md:-ml-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="/images/phone-3d.webp"
                alt="اتصال 3D"
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-r from-white/20 to-transparent pointer-events-none"></div>
          </Link>

          {/* WhatsApp Banner */}
          <Link
            href="https://wa.me/966501403186"
            target="_blank"
            className="group flex flex-col md:flex-row items-center justify-between gap-8 bg-[#E6DCCF] rounded-[3rem] p-8 md:p-12 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-2xl w-full relative overflow-hidden"
            dir="rtl"
          >
            {/* Text Side (Right) */}
            <div className="flex-1 text-center md:text-right space-y-6 flex flex-col items-center md:items-start z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#4A4A4A] leading-[1.4]">
                احجز استشارتك <br />
                الآن بنقرة واحده <br />
                من خلال الواتس
              </h3>
              <div
                className="inline-flex items-center justify-center bg-[#4A4A4A] text-white rounded-full px-8 py-3 text-2xl font-bold tracking-wider group-hover:bg-[#25D366] group-hover:scale-105 transition-all duration-300 shadow-lg"
                dir="ltr"
              >
                0501403186
                <MousePointerClick className="w-6 h-6 ml-3 opacity-80" />
              </div>
            </div>

            {/* Image Side (Left) */}
            <div className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative drop-shadow-2xl z-10 md:-ml-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
              <Image
                src="/images/whatsapp-3d.webp"
                alt="واتساب 3D"
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-r from-white/20 to-transparent pointer-events-none"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
