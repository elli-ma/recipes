"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Контакты" },
];

export default function Contacts() {
  useEffect(() => {
    document.title = "Контакты - Family Cook";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Свяжитесь с нами. Есть вопросы или предложения? Мы будем рады услышать от вас!');
    }
    
    // Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', 'Контакты - Family Cook');
    if (ogDescription) ogDescription.setAttribute('content', 'Свяжитесь с нами. Есть вопросы или предложения?');
    if (ogImage) ogImage.setAttribute('content', '/og-contacts.jpg');
    if (ogUrl) ogUrl.setAttribute('content', 'https://family-cook.ru/contacts');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="py-6 md:py-8 px-4 md:px-0">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div>
        <h1 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-green-900 uppercase">Свяжитесь с нами</h1>
        <p className="text-gray-600 mb-8 md:mb-12 text-sm md:text-base">
          Есть вопросы или предложения? Мы будем рады услышать от вас!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="uppercase text-lg md:text-xl">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <Label htmlFor="name" className="uppercase text-xs font-semibold">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" required className="text-sm md:text-base" />
                </div>
                <div>
                  <Label htmlFor="email" className="uppercase text-xs font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="text-sm md:text-base" />
                </div>
                <div>
                  <Label htmlFor="subject" className="uppercase text-xs font-semibold">Тема</Label>
                  <Input id="subject" placeholder="Тема сообщения" required className="text-sm md:text-base" />
                </div>
                <div>
                  <Label htmlFor="message" className="uppercase text-xs font-semibold">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..." 
                    rows={5}
                    required
                    className="text-sm md:text-base" 
                  />
                </div>
                <Button type="submit" className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold uppercase text-sm md:text-base">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="uppercase text-lg md:text-xl">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-xs md:text-sm">Email</h3>
                    <p className="text-gray-600 text-sm md:text-base">info@howtocook.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-xs md:text-sm">Телефон</h3>
                    <p className="text-gray-600 text-sm md:text-base">+7 (123) 456-78-90</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-xs md:text-sm">Адрес</h3>
                    <p className="text-gray-600 text-sm md:text-base">Москва, Россия</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-100">
              <CardContent className="pt-4 md:pt-6">
                <h3 className="font-semibold mb-2 uppercase text-sm md:text-base">Часы работы</h3>
                <p className="text-gray-700 text-sm md:text-base">Понедельник - Пятница: 9:00 - 18:00</p>
                <p className="text-gray-700 text-sm md:text-base">Суббота - Воскресенье: Выходной</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}