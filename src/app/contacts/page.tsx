"use client";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Контакты" },
];

export default function Contacts() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div>
        <h1 className="text-4xl font-bold mb-6 text-green-900 uppercase">Свяжитесь с нами</h1>
        <p className="text-gray-600 mb-12">
          Есть вопросы или предложения? Мы будем рады услышать от вас!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="uppercase">Отправить сообщение</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="uppercase text-xs font-semibold">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" required />
                </div>
                <div>
                  <Label htmlFor="email" className="uppercase text-xs font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="subject" className="uppercase text-xs font-semibold">Тема</Label>
                  <Input id="subject" placeholder="Тема сообщения" required />
                </div>
                <div>
                  <Label htmlFor="message" className="uppercase text-xs font-semibold">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..." 
                    rows={5}
                    required 
                  />
                </div>
                <Button type="submit" className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold uppercase">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="uppercase">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-sm">Email</h3>
                    <p className="text-gray-600">info@howtocook.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-sm">Телефон</h3>
                    <p className="text-gray-600">+7 (123) 456-78-90</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-900 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold uppercase text-sm">Адрес</h3>
                    <p className="text-gray-600">Москва, Россия</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-100">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 uppercase">Часы работы</h3>
                <p className="text-gray-700">Понедельник - Пятница: 9:00 - 18:00</p>
                <p className="text-gray-700">Суббота - Воскресенье: Выходной</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}