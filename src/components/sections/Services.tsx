"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Syringe, Flower2, Droplets, X } from "lucide-react";
import Image from "next/image";

export function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "rtl", dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const baseServices = [
    {
      title: "إزالة الشعر بالليزر",
      description:
        "باستخدام أحدث جهاز ليزر عالمياً (Splendor X) لنتائج فعالة وآمنة على جميع أنواع البشرة.",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      imageText: "صورة جهاز الليزر",
      image: "/images/img-6.webp",
    },
    {
      title: "تجديد ونضارة البشرة",
      description:
        "استعيدي حيوية بشرتك مع جلسات التنظيف العميق، التقشير، والترطيب المكثف باستخدام تقنية Hydra Master المتطورة.",
      icon: <Droplets className="h-8 w-8 text-primary" />,
      imageText: "صورة نضارة البشرة",
      image: "/images/img-5.webp",
    },
    {
      title: "العناية بالبشرة",
      description:
        "جلسات تنظيف عميق، تقشير، وترطيب باستخدام أرقى المنتجات العالمية لإشراقة لا مثيل لها.",
      icon: <Flower2 className="h-8 w-8 text-primary" />,
      imageText: "صورة العناية بالبشرة",
      image: "/images/img-2.webp",
    },
    {
      title: "حقن التجميل",
      description:
        "إجراءات آمنة وفعالة لحقن الفيلر، البوتكس، والميزوثيرابي، بأيدي نخبة من الأطباء المتخصصين.",
      icon: <Syringe className="h-8 w-8 text-primary" />,
      imageText: "صورة حقن التجميل",
      image: "/images/img-3.webp",
    },
  ];

  // Duplicate services to ensure smooth infinite looping on large screens
  const services = [...baseServices, ...baseServices];

  return (
    <section id="services" className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            خدماتنا <span className="text-primary">المتميزة</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            نقدم مجموعة متكاملة من الخدمات التجميلية والعلاجية المصممة خصيصاً
            لتلبية احتياجاتك وإبراز جمالك.
          </p>
        </div>

        <div className="relative group" dir="rtl">
          <div className="overflow-hidden py-4" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] min-w-0 pl-6"
                >
                  <div 
                    className="relative aspect-square rounded-2xl overflow-hidden group/card shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 bg-[#F9F8F6] cursor-pointer"
                    onClick={() => setSelectedImage(service.image)}
                  >
                    {/* Background Image with Soft Filter */}
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover saturate-[.85] sepia-[.15] brightness-[.95] group-hover/card:scale-110 group-hover/card:saturate-100 group-hover/card:sepia-0 transition-all duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Soft Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-80" />

                    {/* Content Overlay - Frosted Badge */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <div className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-lg border border-white/50 translate-y-1 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {service.icon}
                          </div>
                          <h3 className="font-bold text-lg text-foreground">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Image Modal */}
      <div 
        className={`fixed inset-0 z-9999 flex items-center justify-center transition-all duration-500 ease-out ${
          selectedImage ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        />
        
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          onClick={() => setSelectedImage(null)}
        >
          <X className="h-8 w-8" />
        </button>

        {/* Image Container */}
        <div 
          className={`relative w-[95vw] h-[95vh] md:w-[85vw] md:h-[85vh] transition-transform duration-500 ease-out ${
            selectedImage ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
          }`}
        >
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="صورة الخدمة"
              fill
              className="object-contain"
              sizes="100vw"
            />
          )}
        </div>
      </div>
    </section>
  );
}
