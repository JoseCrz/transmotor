import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { ChevronRight } from "lucide-react";
import { Container, Layout } from "@/components";
import { CTASection } from "@/sections";

import project1Image from "./images/project-1.jpeg";
import project2Image from "./images/project-2.jpeg";
import project3Image from "./images/project-3.jpeg";

export function ProjectsIndex() {
  return (
    <Layout>
      <section className="pb-16 pt-32 md:pb-28 xl:pb-28 xl:pt-44">
        <Container>
          <h1 className="text-4xl xl:text-6xl">Proyectos</h1>
          <p className="mt-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10 space-y-4 md:mt-11 xl:mt-20 xl:space-y-12">
            <ProjectArticle
              title="Proyecto 1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              href="/proyectos/proyecto-1"
              imageSrc={project1Image}
              imageAlt="PENDING"
            />
            <ProjectArticle
              title="Proyecto 2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              href="/proyectos/proyecto-1"
              imageSrc={project2Image}
              imageAlt="PENDING"
            />
            <ProjectArticle
              title="Proyecto 3"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              href="/proyectos/proyecto-1"
              imageSrc={project3Image}
              imageAlt="PENDING"
            />
          </div>
        </Container>
      </section>
      <CTASection className="bg-[#F6F6F6]" />
    </Layout>
  );
}

type ProjectArticleProps = {
  title: string;
  text: string;
  href: string;
  imageSrc: ImageProps["src"];
  imageAlt: ImageProps["alt"];
};

function ProjectArticle({
  title,
  text,
  href,
  imageSrc,
  imageAlt,
}: ProjectArticleProps) {
  return (
    <article className="group grid grid-cols-1 gap-8 rounded-xl bg-[#F6F6F6] px-6 py-8 md:grid-cols-2 md:items-center md:gap-4 xl:gap-20">
      <div className="md:group-even:order-last">
        <h2 className="text-3xl xl:text-4xl">{title}</h2>
        <p className="mt-2 xl:text-lg">{text}</p>
        <Link
          href="/proyectos/proyecto-1"
          className="mt-8 flex items-center gap-2"
        >
          Ver proyecto
          <ChevronRight />
        </Link>
      </div>
      <div className="">
        <Image
          src={imageSrc}
          alt={imageAlt}
          priority
          placeholder="blur"
          height={384}
          className="h-[384px] w-full rounded-lg object-cover"
        />
      </div>
    </article>
  );
}
