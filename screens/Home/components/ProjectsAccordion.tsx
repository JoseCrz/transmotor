import type { PropsWithChildren } from "react";
import Image, { type ImageProps } from "next/image";
import * as Accordion from "@radix-ui/react-accordion";

import { ButtonLink } from "@/components";

export function ProjectsAccordion({
  defaultValue,
  children,
}: Omit<Accordion.AccordionMultipleProps, "type">) {
  return (
    <Accordion.Root
      type="multiple"
      defaultValue={defaultValue}
      className="rounded-2xl border py-6 shadow-lg"
    >
      {children}
    </Accordion.Root>
  );
}

export function ProjectsAccordionItem({
  value,
  children,
}: Accordion.AccordionItemProps) {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-[#697684] px-8 py-6 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0"
    >
      {children}
    </Accordion.Item>
  );
}

export function ProjectsAccordionTrigger({
  itemNumber,
  children,
}: PropsWithChildren<{ itemNumber: string }>) {
  return (
    <Accordion.Header>
      <Accordion.Trigger className="flex w-full justify-between text-2xl">
        {children}
        <span className="rotate-90 text-2xl text-[#697684]">{itemNumber}</span>
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

type ProjectsAccordionContent = {
  title: string;
  description: string;
  imageSrc: ImageProps["src"];
  imageAlt: ImageProps["alt"];
};

export function ProjectsAccordionContent({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectsAccordionContent) {
  return (
    <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="px-4 py-6">
        <h4 className="text-2xl text-[#0A2540]">{title}</h4>
        <p className="mt-6 text-sm">{description}</p>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={265}
          placeholder="blur"
          className="mt-6 size-64 object-cover object-center"
        />
        <ButtonLink variant="electric" href="/PENDING" className="mt-6">
          Contáctanos
        </ButtonLink>
      </div>
    </Accordion.Content>
  );
}
