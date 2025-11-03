"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-900 shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-black text-white mb-2 uppercase">Мы используем файлы cookie</h3>
          <p className="text-sm text-white">
            Мы используем файлы cookie для улучшения работы сайта и анализа трафика. 
            Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
            <Link href="/privacy" className="text-white underline font-semibold">
              Политикой конфиденциальности
            </Link>.
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={acceptCookies}
            className="bg-white text-green-900 hover:bg-gray-100 uppercase font-semibold"
          >
            Принять
          </Button>
        </div>
      </div>
    </div>
  );
}
