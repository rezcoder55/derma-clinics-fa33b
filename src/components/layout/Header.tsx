"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const emptySubscribe = () => () => {};

function MobileDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen && isClient) {
      document.body.style.overflow = "hidden";
    } else if (isClient) {
      document.body.style.overflow = "";
    }
    return () => {
      if (isClient) {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen, isClient]);

  if (!isClient) return null;

  const navLinks = [
    { name: "عن العيادة", href: "#about" },
    { name: "الخدمات", href: "#services" },
    { name: "الموقع", href: "#location" },
  ];

  return createPortal(
    <>
      {/* Backdrop - separate from drawer */}
      <div
        className={`fixed inset-0 z-9998 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        dir="rtl"
        className={`fixed top-0 right-0 z-9999 h-full w-[80%] max-w-[320px] md:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex h-full flex-col bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.12)] overflow-hidden">
          {/* Purple accent top bar */}
          <div className="h-1 w-full bg-linear-to-l from-primary via-primary/70 to-transparent" />

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/" onClick={onClose} className="block">
              <Image
                src="/logo.svg"
                alt="عيادات توجه الطبية"
                width={120}
                height={34}
                className="object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
              aria-label="إغلاق القائمة"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-5 h-px bg-gray-200" />

          {/* Nav Links */}
          <nav className="flex-1 px-5 py-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-[17px] font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Contact */}
          <div className="mx-5 mb-3 rounded-2xl bg-gray-50 p-4">
            <p className="mb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">
              تواصل معنا
            </p>
            <div className="space-y-2">
              <a
                href="tel:0545771431"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span dir="ltr">0545771431</span>
              </a>
              <a
                href="https://wa.me/966501403186"
                target="_blank"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <span dir="ltr">0501403186</span>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-5 pb-6">
            <Link
              href="#quick-booking"
              onClick={onClose}
              className={buttonVariants({
                className:
                  "w-full rounded-full h-12 text-base font-bold shadow-md",
              })}
            >
              احجز موعدك الآن
            </Link>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="عيادات توجه الطبية Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              عن العيادة
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              الخدمات
            </Link>
            <Link
              href="#location"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              الموقع
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#quick-booking"
              className={buttonVariants({
                className:
                  "hidden md:inline-flex rounded-full px-6 font-medium shadow-sm transition-all hover:scale-105",
              })}
            >
              احجز الآن
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">فتح القائمة</span>
              <Menu className="h-6 w-6 text-foreground" />
            </Button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
