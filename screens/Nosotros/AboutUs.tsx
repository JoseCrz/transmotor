import type { ComponentType } from "react";
import Image from "next/image";
import { Milestone, DoorOpen, Star, type LucideProps } from "lucide-react";
import { Container, Layout } from "@/components";
import { ContactSection } from "@/sections";

import heroImage from "./images/hero.jpeg";
import teamImage from "./images/team.jpeg";

export function AboutUs() {
  return (
    <Layout headerVariant="transparent">
      <section className="relative md:pb-40 md:pt-40 xl:pb-36 xl:pt-52">
        <Image
          src={heroImage}
          alt=""
          placeholder="blur"
          priority
          fill
          className="absolute inset-0 object-cover object-top"
        />
        <Container>
          <div className="relative">
            <h1 className="mx-auto text-center md:text-5xl xl:max-w-[948px] xl:text-6xl">
              Más de 30 años en la industria hablan por nosotros.
            </h1>
            <p className="mt-6 text-center md:text-xl">
              Nos especializamos en la comiercialización de maquinaria.
            </p>
          </div>
        </Container>
      </section>
      <section className="md:py-28">
        <Container>
          <p className="xl:text-center">Te contamos</p>
          <h2 className="mt-4 md:text-5xl xl:text-center">Nuestra historia</h2>
          <div className="mx-auto rounded-lg bg-[#F6F6F6] px-6 py-8 md:mt-20 xl:w-[1000px]">
            <div className="mx-auto xl:max-w-[510px]">
              <ol className="space-y-4">
                <TimelineItem
                  Icon={DoorOpen}
                  title="Abrimos operaciones"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique."
                  dateTime="1984"
                  date="1984"
                />
                <TimelineItem
                  title="Nos especializamos"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique."
                  dateTime="1985"
                  date="1985"
                />
                <TimelineItem
                  title="Empezamos nuevos proyectos"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique."
                  dateTime="1989"
                  date="1989"
                />
                <TimelineItem
                  Icon={Star}
                  title="Más de 30 años en el mercado"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique."
                  dateTime={new Date().getFullYear().toString()}
                  date="Hoy"
                />
              </ol>
            </div>
          </div>
        </Container>
      </section>
      <section className="md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-20 xl:grid-cols-2">
            <div>
              <p>Conócenos</p>
              <h2 className="md:mt-4 md:text-5xl">Acerca de nosotros</h2>
            </div>
            <div>
              <p>
                Transmotor de Oriente ofrece soluciones a sus necesidades,
                contamos con ingenieros altamente capacitados; nos
                especializamos en el diseño y realización con la más alta
                calidad en el mercado.
              </p>
              <br />
              <p>
                A su vez, ofrecemos un servicio excepcional acorde con la
                demanda de la industria.
              </p>
            </div>
          </div>
          <div className="relative md:mt-20 md:h-[700px]">
            <Image
              src={teamImage}
              alt="PENDING"
              fill
              placeholder="blur"
              className="rounded-lg object-cover object-center"
            />
          </div>
        </Container>
      </section>
      <ContactSection className="bg-[#F6F6F6]" />
    </Layout>
  );
}

type TimelineItemProps = {
  title: string;
  Icon?: ComponentType<LucideProps>;
  description: string;
  dateTime: string;
  date: string;
};

function TimelineItem({
  Icon = Milestone,
  title,
  description,
  dateTime,
  date,
}: TimelineItemProps) {
  return (
    <li className="group flex items-start gap-10">
      <div>
        <Icon size={48} aria-hidden />
        <div className="mx-auto mt-4 h-[100px] w-0.5 bg-black group-last-of-type:hidden" />
      </div>
      <div>
        <time dateTime={dateTime}>{date}</time>
        <h3 className="mt-2.5 md:text-3xl">{title}</h3>
        <p className="mt-2.5">{description}</p>
      </div>
    </li>
  );
}
