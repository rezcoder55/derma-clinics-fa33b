import { Sparkles, Syringe, Flower2, Droplets } from "lucide-react";
import { ServicesCarousel } from "./ServicesCarousel";

const baseServices = [
  {
    title: "إزالة الشعر بالليزر",
    description:
      "باستخدام أحدث جهاز ليزر عالمياً (Splendor X) لنتائج فعالة وآمنة على جميع أنواع البشرة.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    image: "/images/img-6.webp",
  },
  {
    title: "تجديد ونضارة البشرة",
    description:
      "استعيدي حيوية بشرتك مع جلسات التنظيف العميق، التقشير، والترطيب المكثف باستخدام تقنية Hydra Master المتطورة.",
    icon: <Droplets className="h-8 w-8 text-primary" />,
    image: "/images/img-5.webp",
  },
  {
    title: "العناية بالبشرة",
    description:
      "جلسات تنظيف عميق، تقشير، وترطيب باستخدام أرقى المنتجات العالمية لإشراقة لا مثيل لها.",
    icon: <Flower2 className="h-8 w-8 text-primary" />,
    image: "/images/img-2.webp",
  },
  {
    title: "حقن التجميل",
    description:
      "إجراءات آمنة وفعالة لحقن الفيلر، البوتكس، والميزوثيرابي، بأيدي نخبة من الأطباء المتخصصين.",
    icon: <Syringe className="h-8 w-8 text-primary" />,
    image: "/images/img-3.webp",
  },
];

const services = [...baseServices, ...baseServices];

export function Services() {
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

        {/* Carousel Component (Client Side) */}
        <ServicesCarousel services={services} />
      </div>
    </section>
  );
}
