"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Instagram, Linkedin, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { navbarText } from "@/constants/navbar-translations";
import { useLanguage } from "@/hooks/use-language";
import { useAnalytics } from "@/hooks/use-posthog";
import Image from "next/image";
import { AnimatePresence, MotionDiv, MotionHeader } from "./ui/motion-client";

interface NavbarProps {
  variant?: "light" | "dark";
}

const Navbar = ({ variant = "light" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { language } = useLanguage();
  const { trackButtonClick } = useAnalytics();
  const t = navbarText[language as keyof typeof navbarText];

  const textColor = variant === "dark" ? "text-black" : "text-white";
  const borderColor = variant === "dark" ? "border-black" : "border-white";
  const iconColor = variant === "dark" ? "text-black" : "text-white";

  return (
    <MotionHeader
      className={`absolute top-0 left-0 right-0 z-50 ${
        variant === "dark" ? "pb-4" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href={`/${language}/#home`}
          className="flex items-center space-x-2"
        >
          <Image
            priority
            quality={100}
            src="/assets/branding/fndrs-logo.webp"
            alt="FNDRS logo"
            width={35}
            height={25}
            className={`h-4 w-auto object-cover ${
              variant === "dark" ? "invert" : ""
            }`}
          />
          <span className={`pl-2 border-l ${borderColor} ${textColor}`}>
            Agency
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {t.nav.map(({ href, label }) => (
            <Link
              key={href}
              href={`/${language}/${href}`}
              className="group inline-block"
            >
              <span
                className={`relative inline-block text-sm font-semibold ${textColor} transition-colors duration-200`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 block h-[4px] w-full ${
                    variant === "dark" ? "bg-black" : "bg-white"
                  } transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`}
                />
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="primary"
            onClick={() => {
              trackButtonClick("contact_cta", "navbar");
              router.push(`/${language}/contact`);
            }}
          >
            {t.cta}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${iconColor}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
          }
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            key="mobile-menu"
            className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 shadow-2xl rounded-b-3xl md:hidden z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {t.nav.map(({ href, label }) => (
                  <MotionDiv
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link
                      href={`/${language}/${href}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-base font-medium text-black hover:text-zinc-600 transition-colors"
                    >
                      {label}
                    </Link>
                  </MotionDiv>
                ))}
              </div>

              <MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, delay: 0.05 }}
              >
                <Button
                  className="w-full bg-white text-black"
                  onClick={() => {
                    setIsOpen(false);
                    router.push(`/${language}/contact`);
                  }}
                >
                  {t.mobileCTA}
                </Button>
              </MotionDiv>

              <MotionDiv
                className="flex gap-2 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Link
                  href="https://www.instagram.com/the.fndrs/"
                  target="_blank"
                  aria-label="FNDRS's Instagram"
                  className="w-10 h-10 flex items-center justify-center border border-zinc-300 rounded-full hover:bg-zinc-100 transition-colors"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="https://github.com/FNDRS"
                  target="_blank"
                  aria-label="FNDRS's Github Organization"
                  className="w-10 h-10 flex items-center justify-center border border-zinc-300 rounded-full hover:bg-zinc-100 transition-colors"
                >
                  <Github size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/the-fndrs/"
                  target="_blank"
                  aria-label="FNDRS's LinkedIn Profile"
                  className="w-10 h-10 flex items-center justify-center border border-zinc-300 rounded-full hover:bg-zinc-100 transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
              </MotionDiv>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

export default Navbar;
