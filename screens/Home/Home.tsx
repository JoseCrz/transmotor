import type { PropsWithChildren, ReactNode } from "react";
import Image, { ImageProps } from "next/image";

import { cn } from "@/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ButtonLink,
  Container,
  Layout,
  ServiceArticle,
} from "@/components";

import { CTASection, ContactSection } from "@/sections";

import {
  ProjectsAccordion,
  ProjectsAccordionItem,
  ProjectsAccordionTrigger,
  ProjectsAccordionContent,
} from "./components/ProjectsAccordion";

import {
  FaqsAccordion,
  FaqsAccordionItem,
  FaqsAccordionTrigger,
  FaqsAccordionContent,
} from "./components/FaqsAccordion";

import backgroundImage from "./images/background.jpeg";

import article1 from "./images/article-1.jpeg";
import article2 from "./images/article-2.jpeg";
import article3 from "./images/article-3.jpeg";

import carousel1 from "./images/carousel-1.svg";
import carousel2 from "./images/carousel-2.svg";

import accordion1 from "./images/accordion-1.jpeg";

import gridLogo from "./images/grid-logo.svg";

import combBackground from "./images/comb-background.svg";

export function Home() {
  return (
    <Layout headerVariant="transparent" footerClassName="bg-[#F6F6F6]">
      <section className="relative py-36 md:pb-64 xl:pb-32 xl:pt-52">
        <Image
          src={backgroundImage}
          alt=""
          placeholder="blur"
          priority
          fill
          className="absolute inset-0 object-cover"
        />
        <Container>
          <div className="relative">
            <h1 className="mx-auto text-center text-4xl uppercase text-white md:max-w-[600px] md:text-6xl xl:text-7xl">
              Revolucionando la industria
            </h1>
            <p className="mx-auto mt-3 text-center text-sm text-white md:mt-6 md:max-w-[540px] md:text-lg xl:max-w-[787px] xl:text-lg">
              Transmotor es una empresa líder en la comercialización de
              maquinaria, motores eléctricos y de combustión interna, equipos de
              bombeo y material eléctrico y de control.
            </p>
            <div className="mt-64 md:mt-80 xl:mt-64">
              <div className="flex flex-col justify-center gap-4 md:flex-row">
                <ButtonLink href="/">Contáctanos</ButtonLink>
                <ButtonLink variant="crystal" href="/proyectos">
                  Conoce nuestros proyectos
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-20 md:pb-20 xl:pb-28">
        <Container>
          <h2 className="text-4xl md:text-6xl">Servicios</h2>
          <div className="block md:flex md:items-center md:justify-between">
            <p className="mt-6 md:text-lg xl:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ButtonLink
              variant="electric"
              href="/servicios"
              className="max-md:mt-6"
            >
              Ver todos
            </ButtonLink>
          </div>
          <div className="mt-12 flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-4 xl:flex-row xl:gap-12">
            <ServiceArticle
              href="/PENDING"
              imageSrc={article1}
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <ServiceArticle
              href="/PENDING"
              imageSrc={article2}
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
            <ServiceArticle
              href="/PENDING"
              imageSrc={article3}
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
          </div>
        </Container>
      </section>
      <section className="bg-gradient-to-b from-white to-[#F6F9FC] py-20">
        <Container>
          <h3 className="text-center text-xl uppercase text-[#425466]">
            Empoderando empresas en toda la región
          </h3>
          <div className="mt-12 grid grid-cols-2 md:-mx-16 md:flex md:justify-center md:gap-6 md:overflow-auto xl:mt-11">
            <Image src={carousel1} alt="logo" height={56} />
            <Image src={carousel2} alt="logo" height={56} />
            <Image src={carousel1} alt="logo" height={56} />
            <Image src={carousel2} alt="logo" height={56} />
            <Image src={carousel1} alt="logo" height={56} />
            <Image src={carousel2} alt="logo" height={56} />
          </div>
          <p className="mx-auto mt-12 text-center text-[#425466] md:max-w-[520px] md:text-lg xl:max-w-[492px]">
            Nuestra misión es empoderar las empresas con las que trabajamos.
            Buscamos llevar tus proyectos al siguiente nivel.
          </p>
        </Container>
      </section>
      <section className="bg-[#F6F9FC] py-16 md:py-28">
        <Container>
          <h2 className="text-center text-4xl text-[#0A2540] md:mt-28 md:text-6xl xl:mt-0">
            Proyectos
          </h2>
          <div className="hidden md:mt-20 md:block">
            <Accordion
              type="single"
              orientation="horizontal"
              defaultValue="item-1"
              className="mx-auto w-fit rounded-xl shadow-[0px_143px_40px_0px_rgba(0,0,0,0.00),0px_91px_37px_0px_rgba(0,0,0,0.01),0px_51px_31px_0px_rgba(0,0,0,0.05),0px_23px_23px_0px_rgba(0,0,0,0.09),0px_6px_13px_0px_rgba(0,0,0,0.10)] data-[orientation=horizontal]:flex"
            >
              <LocalProjectsAccordionItem value="item-1">
                <LocalProjectsAccordionTrigger itemNumber="01">
                  Instalaciones
                </LocalProjectsAccordionTrigger>
                <LocalProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a
                        vitae hac eget arcu sit amet iaculis hac. Ac dolor
                        malesuada in turpis faucibus ultricies hac. In lectus ut
                        non molestie sit id quisque platea laoreet. Laoreet quam
                        egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="SOME ALT"
                />
              </LocalProjectsAccordionItem>
              <LocalProjectsAccordionItem value="item-2">
                <LocalProjectsAccordionTrigger itemNumber="02">
                  Trámites
                </LocalProjectsAccordionTrigger>
                <LocalProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a
                        vitae hac eget arcu sit amet iaculis hac. Ac dolor
                        malesuada in turpis faucibus ultricies hac. In lectus ut
                        non molestie sit id quisque platea laoreet. Laoreet quam
                        egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="SOME ALT"
                />
              </LocalProjectsAccordionItem>
              <LocalProjectsAccordionItem value="item-3">
                <LocalProjectsAccordionTrigger itemNumber="03">
                  Servicio de grua
                </LocalProjectsAccordionTrigger>
                <LocalProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a
                        vitae hac eget arcu sit amet iaculis hac. Ac dolor
                        malesuada in turpis faucibus ultricies hac. In lectus ut
                        non molestie sit id quisque platea laoreet. Laoreet quam
                        egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="SOME ALT"
                />
              </LocalProjectsAccordionItem>
              <LocalProjectsAccordionItem value="item-4">
                <LocalProjectsAccordionTrigger itemNumber="04">
                  Instalaciones
                </LocalProjectsAccordionTrigger>
                <LocalProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a
                        vitae hac eget arcu sit amet iaculis hac. Ac dolor
                        malesuada in turpis faucibus ultricies hac. In lectus ut
                        non molestie sit id quisque platea laoreet. Laoreet quam
                        egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="SOME ALT"
                />
              </LocalProjectsAccordionItem>
            </Accordion>
          </div>

          <div className="mt-8 md:hidden">
            <ProjectsAccordion
              defaultValue={["item-1"]}
              className="rounded-2xl border py-6 shadow-lg"
            >
              <ProjectsAccordionItem value="item-1">
                <ProjectsAccordionTrigger itemNumber="01">
                  Instalaciones
                </ProjectsAccordionTrigger>
                <ProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae hac eget arcu sit amet iaculis hac. Ac dolor malesuada in turpis faucibus ultricies hac. In lectus ut non molestie sit id quisque platea laoreet. Laoreet quam egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="PENDING"
                />
              </ProjectsAccordionItem>
              <ProjectsAccordionItem value="item-2">
                <ProjectsAccordionTrigger itemNumber="02">
                  Trámites
                </ProjectsAccordionTrigger>
                <ProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae hac eget arcu sit amet iaculis hac. Ac dolor malesuada in turpis faucibus ultricies hac. In lectus ut non molestie sit id quisque platea laoreet. Laoreet quam egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="PENDING"
                />
              </ProjectsAccordionItem>
              <ProjectsAccordionItem value="item-3">
                <ProjectsAccordionTrigger itemNumber="03">
                  Servicio de grua
                </ProjectsAccordionTrigger>
                <ProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae hac eget arcu sit amet iaculis hac. Ac dolor malesuada in turpis faucibus ultricies hac. In lectus ut non molestie sit id quisque platea laoreet. Laoreet quam egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="PENDING"
                />
              </ProjectsAccordionItem>
              <ProjectsAccordionItem value="item-4">
                <ProjectsAccordionTrigger itemNumber="04">
                  Instalaciones
                </ProjectsAccordionTrigger>
                <ProjectsAccordionContent
                  title="Instalaciones de baja, media y alta tensión."
                  description="Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae hac eget arcu sit amet iaculis hac. Ac dolor malesuada in turpis faucibus ultricies hac. In lectus ut non molestie sit id quisque platea laoreet. Laoreet quam egestas lorem nisi nec nullam."
                  imageSrc={accordion1}
                  imageAlt="PENDING"
                />
              </ProjectsAccordionItem>
            </ProjectsAccordion>
          </div>
        </Container>
      </section>
      <section className="bg-[#FAFAFA] py-16 md:py-28 xl:py-36">
        <Container>
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4">
            <GridCell className="border-b-0 max-xl:border-b-0 max-md:rounded-t-2xl md:border-r-0">
              <h2 className="mx-auto text-2xl xl:max-w-[248px]">
                Trabajando juntos desde 1984.
              </h2>
            </GridCell>
            <GridCell className="border-b-0 xl:border-r-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="border-b-0 md:border-r-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="border-b-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="max-xl:border-b-0 max-md:border-b-0 md:border-r-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="max-xl:border-b-0 max-md:border-b-0 xl:border-r-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="max-md:border-b-0 md:border-r-0">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
            <GridCell className="max-md:rounded-b-2xl">
              <GridCellBackground>
                <Image src={gridLogo} alt="PENDING" height={56} />
              </GridCellBackground>
            </GridCell>
          </div>
        </Container>
      </section>
      <section
        style={{
          backgroundImage: `url("${combBackground.src}")`,
        }}
        className="py-20 xl:pb-40 xl:pt-36"
      >
        <Container>
          <h2 className="text-center text-3xl xl:text-6xl">
            Preguntas frecuentes
          </h2>
          <p className="mx-auto mt-6 text-center text-lg md:max-w-[400px] xl:max-w-[526px] xl:text-xl">
            Tratamos de resolver algunas preguntas comunes que nos hacen
            nuestros clientes. Esperamos te sirvan.
          </p>
          <div className="mt-12 xl:mt-16">
            <FaqsAccordion defaultValue={["item-1"]}>
              <FaqsAccordionItem value="item-1">
                <FaqsAccordionTrigger>Pregunta número 1</FaqsAccordionTrigger>
                <FaqsAccordionContent>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                  </div>
                </FaqsAccordionContent>
              </FaqsAccordionItem>
              <FaqsAccordionItem value="item-2">
                <FaqsAccordionTrigger>Pregunta número 2</FaqsAccordionTrigger>
                <FaqsAccordionContent>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                  </div>
                </FaqsAccordionContent>
              </FaqsAccordionItem>
              <FaqsAccordionItem value="item-3">
                <FaqsAccordionTrigger>Pregunta número 3</FaqsAccordionTrigger>
                <FaqsAccordionContent>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                  </div>
                </FaqsAccordionContent>
              </FaqsAccordionItem>
              <FaqsAccordionItem value="item-4">
                <FaqsAccordionTrigger>Pregunta número 4</FaqsAccordionTrigger>
                <FaqsAccordionContent>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                  </div>
                </FaqsAccordionContent>
              </FaqsAccordionItem>
              <FaqsAccordionItem value="item-5">
                <FaqsAccordionTrigger>Pregunta número 5</FaqsAccordionTrigger>
                <FaqsAccordionContent>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                    <p className="mt-6">
                      Lorem ipsum dolor sit amet consectetur. Hendrerit a vitae
                      hac eget arcu sit amet iaculis hac. Ac dolor malesuada in
                      turpis faucibus ultricies hac. In lectus ut non molestie
                      sit id quisque platea laoreet. Laoreet quam egestas lorem
                      nisi nec nullam.
                    </p>
                  </div>
                </FaqsAccordionContent>
              </FaqsAccordionItem>
            </FaqsAccordion>
          </div>
          <h3 className="mt-12 text-center text-xl xl:mt-20 xl:text-3xl">
            ¿Tienes más dudas?
          </h3>
          <p className="mt-4 text-center text-sm xl:text-base">
            Contáctanos para que podamos respondértelas. Lo haremos con gusto.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink variant="electric" href="/">
              Contáctanos aquí
            </ButtonLink>
          </div>
        </Container>
      </section>
      <CTASection className="bg-[#F6F6F6]" />
      <ContactSection />
    </Layout>
  );
}

function LocalProjectsAccordionItem({
  value,
  children,
}: PropsWithChildren<{ value: string }>) {
  return (
    <AccordionItem
      value={value}
      className="border-[#697684] last-of-type:border-none data-[orientation=horizontal]:flex data-[orientation=horizontal]:border-r"
    >
      {children}
    </AccordionItem>
  );
}

function LocalProjectsAccordionTrigger({
  itemNumber,
  children,
}: {
  children: ReactNode;
  itemNumber: string;
}) {
  return (
    <AccordionTrigger className="data-[orientation=horizontal]:-rotate-180 data-[orientation=horizontal]:[writing-mode:vertical-lr]">
      <span>{children}</span>
      <span className="rotate-90 text-[#697684]">{itemNumber}</span>
    </AccordionTrigger>
  );
}

type ProjectsAccordionContentProps = {
  title: string;
  description: string;
  imageSrc: ImageProps["src"];
  imageAlt: ImageProps["alt"];
};

function LocalProjectsAccordionContent({
  title,
  description,
  imageSrc,
  imageAlt,
}: ProjectsAccordionContentProps) {
  return (
    <AccordionContent className="overflow-hidden px-12 py-16 transition-all data-[orientation=horizontal]:data-[state=closed]:animate-accordion-close data-[orientation=horizontal]:data-[state=open]:animate-accordion-open">
      <div className="md:w-[272px] xl:w-[512px]">
        <p className="text-3xl text-[#0A2540]">{title}</p>
        <p className="mt-6 text-sm text-[#0A2540] md:text-base">
          {description}
        </p>
      </div>
      <div className="relative mt-12 md:h-[310px] md:w-[272px] xl:h-[347px] xl:w-[909px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          placeholder="blur"
          className="object-cover object-center"
        />
      </div>
      <ButtonLink variant="electric" href="/proyectos" className="mt-6">
        Ver más proyectos
      </ButtonLink>
    </AccordionContent>
  );
}

function GridCell({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "content-center border border-dashed border-[#D4D4D4] px-3.5 py-4 md:min-h-[180px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function GridCellBackground({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center rounded-lg bg-[#F4F4F4] py-3.5">
      {children}
    </div>
  );
}
