import { useState, useEffect, type PropsWithChildren } from "react";
import Image, { type ImageProps } from "next/image";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  Container,
  Layout,
} from "@/components";
import { CTASection } from "@/sections";

import carouselImage1 from "./images/crane/carousel-1.jpeg";
import carouselImage2 from "./images/crane/carousel-2.jpeg";
import carouselImage3 from "./images/crane/carousel-3.jpeg";
import { cn } from "@/utils";

export function ServicesCrane() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Layout footerClassName="bg-[#F6F6F6]">
      <section className="pb-14 pt-24 md:pb-12 xl:py-28">
        <Container>
          <div className="rounded-xl bg-[#FCFBFB] px-2 py-4 md:px-8 md:py-10">
            <div className="grid grid-cols-1 gap-8 md:gap-12 xl:grid-cols-2 xl:gap-12">
              <div>
                <h1 className="block text-3xl md:text-4xl xl:hidden">
                  Servicio de Grua
                </h1>
                <div className="mt-4 overflow-hidden rounded-lg md:mt-6 xl:mt-0">
                  <Carousel setApi={setApi}>
                    <CarouselContent>
                      <CarouselItem>
                        <CarouselImage src={carouselImage1} alt="PENDING" />
                      </CarouselItem>
                      <CarouselItem>
                        <CarouselImage src={carouselImage2} alt="PENDING" />
                      </CarouselItem>
                      <CarouselItem>
                        <CarouselImage src={carouselImage3} alt="PENDING" />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                    <div className="absolute bottom-4 flex w-full justify-center gap-2">
                      {Array.from({ length: count }).map((_, index) => {
                        const isActive = current === index;
                        return (
                          <div
                            key={index}
                            className={cn(
                              "size-2 rounded-full transition-colors",
                              isActive ? "bg-white" : "bg-[#8D8D8D]",
                            )}
                          />
                        );
                      })}
                    </div>
                  </Carousel>
                </div>
              </div>
              <div>
                <h1 className="hidden text-4xl xl:block">Servicio de Grua</h1>
                <p className="xl:mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
                <Accordion.Root type="multiple" className="mt-8">
                  <ServiceAccordionItem value="item-1">
                    <ServiceAccordionTrigger>Details</ServiceAccordionTrigger>
                    <ServiceAccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </ServiceAccordionContent>
                  </ServiceAccordionItem>
                  <ServiceAccordionItem value="item-2">
                    <ServiceAccordionTrigger>Shipping</ServiceAccordionTrigger>
                    <ServiceAccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </ServiceAccordionContent>
                  </ServiceAccordionItem>
                  <ServiceAccordionItem value="item-3">
                    <ServiceAccordionTrigger>Returns</ServiceAccordionTrigger>
                    <ServiceAccordionContent>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat. Aenean faucibus nibh et
                      justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                      risus tristique posuere.
                    </ServiceAccordionContent>
                  </ServiceAccordionItem>
                </Accordion.Root>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </Layout>
  );
}

function ServiceAccordionItem({
  value,
  children,
}: Accordion.AccordionItemProps) {
  return (
    <Accordion.Item value={value} className="border-t border-black">
      {children}
    </Accordion.Item>
  );
}

function ServiceAccordionTrigger({ children }: PropsWithChildren) {
  return (
    <Accordion.Header>
      <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-xl">
        {children}
        <ChevronDown
          aria-hidden
          className="transition-transform group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function ServiceAccordionContent({ children }: PropsWithChildren) {
  return (
    <Accordion.Content className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
      <div className="pb-6">{children}</div>
    </Accordion.Content>
  );
}

function CarouselImage({ src, alt, ...rest }: ImageProps) {
  return (
    <div className="relative h-[475px] md:h-[600px] xl:h-[700px]">
      <Image
        src={src}
        alt={alt}
        priority
        placeholder="blur"
        fill
        className="rounded-lg object-cover"
        {...rest}
      />
    </div>
  );
}
