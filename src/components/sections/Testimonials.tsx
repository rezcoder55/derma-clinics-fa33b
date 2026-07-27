import { Star, MapPin } from "lucide-react";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

const testimonials = [
  {
    text: "انصح بيها العيادة ❤️",
    author: "Mariam Mortada",
    date: "منذ يوم",
    image: "/images/img-2.webp",
  },
  {
    text: "تجربة رائعة جداً في العيادة! كل الشكر لموظفة الاستقبال على حسن التعامل والاحترافية في التنظيم. وأخص بالشكر في قسم الليزر نور على روحها الجميلة، وهدوئها، واهتمامها بأدق التفاصيل، مما جعل الجلسة مريحة جداً. أنصح بالتعامل معهم وبشدة.",
    author: "amal belhaj",
    date: "منذ يومين",
    image: "/images/img-3.webp",
  },
  {
    text: "عيادة نظيفه وتعاملهم رائع اخص بالشكر رشا🌷 سويت جلسة ليزر عندهم والمواعيد دقيقه عالوقت دخلت النيرس دقيقة وتسوي بذمه وضمير 💯",
    author: "Raghad",
    date: "منذ 4 أيام",
    image: "/images/img-6.webp",
  },
  {
    text: "عيادة جميلة بداية من الاستقبال رشا وليزر مع تيري نورة دقيقة وشاطرة وتنظيف بشرة مع رحاب أخلاق عسل وشغل نظيف شكرا ❤️",
    author: "A T",
    date: "منذ أسبوع",
    image: "/images/img-5.webp",
  },
  {
    text: "شكرا للدكتوره الجلديه والله شغلها ممتاز سويت معها بوتكس تعرق وحبيت النتيجة",
    author: "Abdallah Fathy",
    date: "منذ شهر",
    image: "/images/img-1.webp",
  },
  {
    text: "تعامل رائع من الاستقبال ودكتورة التنظيف",
    author: "ع العزيز",
    date: "منذ شهر",
    image: "/images/img-4.webp",
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
