import { Star, MapPin } from "lucide-react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const testimonials = [
  {
    text: "تجربتي مع عيادات د.ديرما كانت رائعة جداً، خاصة في إزالة الشعر بالليزر. الطاقم جداً محترف والنتائج ظهرت من أول جلسة. أنصح بهم بشدة!",
    author: "سارة العتيبي",
    date: "منذ أسبوع",
    image: "/images/img-2.webp",
  },
  {
    text: "عملت فيلر وبوتوكس عند دكتورة متميزة في عيادات د.ديرما. النتيجة طبيعية جداً وأعطتني ثقة كبيرة بنفسي. شكراً لكم.",
    author: "ليلى الحربي",
    date: "منذ 3 أيام",
    image: "/images/img-3.webp",
  },
  {
    text: "أفضل عيادة تجميل في الرياض بلا منازع. الدقة في المواعيد والاحترافية في العمل تجعلني أعود دائماً. الليزر عندهم (Splendor X) جداً مريح.",
    author: "نورة القحطاني",
    date: "منذ أسبوعين",
    image: "/images/img-6.webp",
  },
  {
    text: "المكان نظيف جداً والتعامل راقي. عملت جلسة تنظيف بشرة هيدرافيشيل وكانت النتيجة مبهرة. شكراً للفريق الطبي المتميز.",
    author: "محمد الشمري",
    date: "منذ شهر",
    image: "/images/img-5.webp",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Google Maps Rating Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="bg-primary/10 p-4 rounded-full mb-2">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <div className="text-6xl font-black text-primary mb-2">4.8</div>
          <div className="flex gap-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            تقييمنا في قوقل ماب
          </h2>
          <p className="text-muted-foreground">
            تقييمنا في قوقل ماب 4.8 من 5 بناءً على مئات المراجعات
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16 relative">
          <h3 className="text-4xl md:text-5xl font-black text-primary relative inline-block">
            آراء عملائنا
            <div className="absolute -bottom-4 left-0 right-0 h-1.5 bg-primary/20 rounded-full" />
          </h3>
        </div>

        {/* Carousel Component (Client Side) */}
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
