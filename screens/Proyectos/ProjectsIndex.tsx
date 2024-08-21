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
      <section className="xl:pb-28 xl:pt-44">
        <Container>
          <h1 className="xl:text-6xl">Proyectos</h1>
          <p className="xl:mt-6 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-20 space-y-12">
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
    <article className="group grid rounded-xl bg-[#F6F6F6] px-6 py-8 md:grid-cols-2 md:items-center xl:gap-20">
      <div className="group-even:order-last">
        <h2 className="xl:text-4xl"></h2>
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
