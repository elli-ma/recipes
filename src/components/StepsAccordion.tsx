"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  { title: "Завтрак за 10 минут", content: "Сделать омлет, нарезать овощи, подать с тостами." },
  { title: "Ужин за 30 минут", content: "Приготовить пасту с соусом, обжарить курицу, подать с салатом." },
];

export function StepsAccordion() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-black mb-6 text-center uppercase text-green-900">Быстрые рецепты</h2>
      <Accordion type="single" collapsible>
        {steps.map((step, idx) => (
          <AccordionItem key={idx} value={`step-${idx}`}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
