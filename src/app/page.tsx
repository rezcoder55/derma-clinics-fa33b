import { Header } from "@/components/layout/Header";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { Services } from "@/components/sections/Services";
import { LocationHours } from "@/components/sections/LocationHours";
import { QuickBooking } from "@/components/sections/QuickBooking";
import { Footer } from "@/components/layout/Footer";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <QuickBooking />
        <Services />
        <Testimonials />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
