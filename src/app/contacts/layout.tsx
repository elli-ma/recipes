import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты - Family Cook",
  description: "Свяжитесь с нами! Есть вопросы или предложения? Мы будем рады услышать от вас. Контактная информация Family Cook.",
  keywords: "контакты, связаться, family cook, обратная связь",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
