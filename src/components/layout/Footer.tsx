import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary/5 pt-16 pb-8 border-t border-border/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="عيادات توجه الطبية Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              عيادات توجه الطبية، وجهتكم الأولى للجمال والعناية في الرياض. نقدم
              أرقى الخدمات بأحدث التقنيات.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  عن العيادة
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  الخدمات
                </Link>
              </li>
              <li>
                <Link
                  href="#location"
                  className="hover:text-primary transition-colors"
                >
                  الموقع
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">الخدمات</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  إزالة الشعر بالليزر
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  العناية بالبشرة
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  خدمات التجميل
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">تواصل معنا</h4>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/tawajuh_clinic?igsh=ZGVyOHF1eDY2OTVn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 hover:bg-primary hover:text-white transition-all"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.864a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://snapchat.com/t/n2jrYQyN"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 hover:bg-primary hover:text-white transition-all"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.183 17.587c-.89.47-2.072.766-3.418.766-3.824 0-6.495-2.227-6.495-5.597 0-3.328 2.656-5.578 6.476-5.578 1.344 0 2.508.297 3.398.766L16.276 9.68c-.765-.39-1.742-.64-2.836-.64-2.508 0-4.32 1.484-4.32 3.687 0 2.227 1.812 3.71 4.344 3.71 1.094 0 2.07-.25 2.836-.64l.883 1.79z" />
                </svg>
                <span className="sr-only">Snapchat</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@tawajjuhclinic?_r=1&_t=ZS-94MthOTC4YC"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-primary shadow-sm hover:scale-110 hover:bg-primary hover:text-white transition-all"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.82 5.36-1.5 1.59-3.8 2.19-5.91 1.83-2.13-.36-4-1.66-4.99-3.56-1-1.92-1.04-4.28-.1-6.24.96-1.99 2.87-3.39 5.04-3.79.46-.09.93-.13 1.4-.15v4.06c-.63.03-1.28.16-1.83.51-.73.46-1.18 1.28-1.24 2.14-.06.84.34 1.7 1.01 2.18.66.48 1.55.59 2.33.36.78-.22 1.42-.8 1.71-1.55.28-.73.28-1.58.28-2.35v-13.6h-2.7z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} عيادات توجه الطبية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              الشروط والأحكام
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
