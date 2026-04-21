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
              src="https://maps.google.com/maps?q=24.7190687,46.5233872+(عيادات%20توجه%20الطبية)&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
