"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  text: string;
  author: string;
  date: string;
  image: string;
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "rtl", align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <div className="relative group" dir="rtl">
      <div className="overflow-hidden py-8" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 md:pl-6"
            >
              <div className="relative h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group/card">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover saturate-[.8] brightness-[.7] group-hover/card:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/40" />
                </div>

                {/* Content Box */}
                <div className="absolute inset-x-4 bottom-4 flex flex-col justify-end p-2">
                  <div className="bg-white/95 backdrop-blur-md rounded-[2rem] p-8 relative pt-12 shadow-inner border border-white/50 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                    {/* Quote Icon Cutout */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white border-4 border-accent/30 flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform duration-500">
                      <Quote className="h-8 w-8 text-primary opacity-40 rotate-180" />
                    </div>

                    <div className="text-center space-y-4">
                      <div className="flex justify-center gap-0.5 text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-foreground/90 font-medium leading-relaxed italic text-sm md:text-base">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <div className="pt-4 border-t border-primary/10">
                        <h4 className="font-bold text-primary text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-bold">
                          {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
