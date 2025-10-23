import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты - How to Cook",
  description: "Свяжитесь с нами! Есть вопросы или предложения? Мы будем рады услышать от вас. Контактная информация How to Cook.",
  keywords: "контакты, связаться, how to cook, обратная связь",
};

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
