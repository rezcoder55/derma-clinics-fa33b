import { MapPin, Clock } from "lucide-react";

export function LocationHours() {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                زورونا في <span className="text-primary">فرعنا</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                نسعد باستقبالكم في عياداتنا المجهزة بأحدث التقنيات لنوفر لكم
                تجربة فريدة في عالم الجمال.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    الموقع
                  </h3>
                  <p className="text-muted-foreground">
                    الرياض، ظهرة لبن، شارع الطائف
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                <div className="bg-white p-3 rounded-xl shadow-sm text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    أوقات العمل
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm text-muted-foreground border-b border-border pb-2">
                      <span>السبت - الخميس</span>
                      <span className="font-medium text-foreground">
                        10:00 صباحاً - 10:00 مساءً
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground pt-1">
                      <span>الجمعة</span>
                      <span className="font-medium text-foreground">
                        3:00 عصراً - 9:00 مساءً
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-muted shadow-xl border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.753303102377!2d46.57306667537339!3d24.653564278486047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1f0046c4e3a7%3A0xb805fd47ea30943b!2z2LnZitin2K_Yp9iqINiq2YjYrNmHINin2YTYt9io2YrYqSAo2KrYrNmF2YrZhCAtINi52YbYp9mK2Kkg2KjYp9mE2KjZitix2KkgLSDZhNmK2LLYsdmKINin2LLYp9mE2Kkg2KfZhNi02LnYsSkg4oat!5e0!3m2!1sar!2seg!4v1714170353457!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع عيادات د.ديرما على الخرائط"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
