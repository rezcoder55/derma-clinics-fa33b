"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // easeOutExpo for a really smooth slow down at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "rtl" },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const features = [
    "أحدث أجهزة الليزر (Splendor X)",
    "خبراء متخصصون في العناية بالبشرة",
    "بيئة طبية آمنة ومعقمة",
    "حلول مخصصة لكل بشرة",
    "استشارات مجانية للتقييم",
    "متابعة دورية للنتائج",
  ];

  return (
    <section className="relative overflow-hidden bg-primary/5 py-5">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-accent/50 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="relative group" dir="rtl">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {/* SLIDE 1: HERO */}
              <div className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 py-4">
                <div className="grid gap-8 lg:grid-cols-2 items-center h-full min-h-[400px] lg:min-h-[450px]">
                  <div className="flex flex-col justify-center space-y-6 text-center lg:text-right">
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-primary ml-2 animate-pulse"></span>
                        عيادات طبية رائدة في الرياض
                      </div>
                      <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl xl:text-5xl/none">
                        الجمال والعناية <br className="hidden sm:block" />
                        <span className="text-primary">بين يديك</span>
                      </h1>
                      <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-lg leading-relaxed">
                        مجمع طبي متخصص بمجال التجميل والعناية بالبشرة وليزر
                        ازالة الشعر ، نوفر لكم كادر طبي متميز ومتخصص مع أحدث
                        اجهزة التجميل وليزر ازالة الشعر . نسعي ان تكون عيادات
                        دكتور ديرما هي وجهتك الاولي للجما
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link
                        href="#quick-booking"
                        className={buttonVariants({
                          size: "lg",
                          className:
                            "rounded-full px-8 font-semibold shadow-lg transition-transform hover:scale-105 group/btn h-12 bg-primary text-primary-foreground hover:bg-primary/90",
                        })}
                      >
                        احجزي موعدك الآن
                        <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover/btn:-translate-x-1" />
                      </Link>
                    </div>

                    <div className="flex items-center justify-center lg:justify-start gap-6 pt-2">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-foreground">
                          <AnimatedCounter end={10} suffix="k+" />
                        </span>
                        <span className="text-xs text-muted-foreground">
                          عميل سعيد
                        </span>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-foreground">
                          <AnimatedCounter end={15} />
                        </span>
                        <span className="text-xs text-muted-foreground">
                          خبير تجميل
                        </span>
                      </div>
                      <div className="h-8 w-px bg-border"></div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-foreground">
                          <AnimatedCounter end={100} suffix="%" />
                        </span>
                        <span className="text-xs text-muted-foreground">
                          رضا العملاء
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative mx-auto flex w-full max-w-[450px] items-center justify-center lg:max-w-none h-full">
                    <div className="relative aspect-video lg:aspect-4/3 w-full overflow-hidden rounded-3xl bg-secondary shadow-xl border border-border/50">
                      {/* Image Placeholder */}
                      <Image
                        src="/images/img-1.webp"
                        alt="صورة تجميلية عالية الجودة"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -left-6 top-1/4 rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl border border-white/20 hidden md:flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          أحدث التقنيات
                        </p>
                        <p className="text-xs text-muted-foreground">
                          أجهزة معتمدة عالمياً
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLIDE 2: ABOUT */}
              <div className="flex-[0_0_100%] min-w-0 px-2 sm:px-4 py-4">
                <div className="grid gap-8 lg:grid-cols-2 items-center h-full min-h-[400px] lg:min-h-[450px]">
                  <div className="flex flex-col justify-center space-y-6 text-center lg:text-right order-1">
                    <div className="space-y-4">
                      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-2 shadow-sm">
                        رحلتك نحو الجمال تبدأ هنا
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground leading-tight">
                        عن عيادات <br className="hidden sm:block" />
                        <span className="text-primary">توجه الطبية</span>
                      </h2>
                      <p className="text-muted-foreground md:text-lg leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                        نلتزم في عيادات توجه الطبية بتقديم أحدث التقنيات في مجال
                        الليزر والعناية بالبشرة، تحت إشراف طاقم طبي وخبراء تجميل
                        ذوي كفاءة عالية لضمان أفضل النتائج بأعلى معايير السلامة.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-right">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-border/50 shadow-sm"
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span className="text-foreground font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative mx-auto flex w-full max-w-[450px] items-center justify-center lg:max-w-none h-full order-2">
                    <div className="relative aspect-video lg:aspect-4/3 w-full overflow-hidden rounded-3xl bg-secondary shadow-xl border border-border/50">
                      {/* Image Placeholder */}
                      <Image
                        src="/images/img-4.webp"
                        alt="صورة العيادة من الداخل"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute bottom-6 right-6 left-6 rounded-2xl bg-white/95 backdrop-blur-md p-6 shadow-xl text-center border border-white/20">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        رؤيتنا
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        تقديم خدمات التجميل والعناية بالبشرة بمعايير عالمية تليق
                        بكِ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[0, 1].map((index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
