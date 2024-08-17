import type { PropsWithChildren } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqsAccordion({
  defaultValue,
  children,
}: Omit<Accordion.AccordionMultipleProps, "type">) {
  return (
    <Accordion.Root
      type="multiple"
      defaultValue={defaultValue}
      className="mx-auto rounded-lg bg-white p-6 shadow-lg xl:max-w-[768px]"
    >
      {children}
    </Accordion.Root>
  );
}

export function FaqsAccordionItem({
  value,
  children,
}: Accordion.AccordionItemProps) {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-dashed border-[#AFBDCB] py-5 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0"
    >
      {children}
    </Accordion.Item>
  );
}

export function FaqsAccordionTrigger({ children }: PropsWithChildren) {
  return (
    <Accordion.Header className="flex w-full">
      <Accordion.Trigger className="group flex w-full items-center justify-between text-xl">
        {children}
        <ChevronDown
          aria-hidden
          className="transition-transform group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

export function FaqsAccordionContent({ children }: PropsWithChildren) {
  return (
    <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="py-6">{children}</div>
    </Accordion.Content>
  );
}
