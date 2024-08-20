import Image from "next/image";
import { Layout, ButtonLink, Container, ServiceArticle } from "@/components";

import heroImage from "./images/hero.jpeg";

import articleImage1 from "./images/article-1.jpeg";
import articleImage2 from "./images/article-2.jpeg";
import articleImage3 from "./images/article-3.jpeg";
import articleImage4 from "./images/article-4.jpeg";
import articleImage5 from "./images/article-5.jpeg";
import articleImage6 from "./images/article-6.jpeg";
import { CTASection } from "@/sections";

export function Services() {
  return (
    <Layout>
      <section className="pt-24 md:pb-24 md:pt-32 xl:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:gap-14 xl:grid-cols-2 xl:items-center xl:gap-20">
            <div>
              <h1 className="text-4xl md:text-6xl">Servicios</h1>
              <p className="mt-6 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <ButtonLink href="/" variant="electric" className="mt-10">
                Conoce más
              </ButtonLink>
            </div>
            <div>
              <Image
                src={heroImage}
                alt="PENDING"
                priority
                placeholder="blur"
                className="h-[640px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-10 md:py-20 xl:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-12">
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage1}
              href="/PENDING"
            />
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage2}
              href="/PENDING"
            />
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage3}
              href="/PENDING"
            />
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage4}
              href="/PENDING"
            />
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage5}
              href="/PENDING"
            />
            <ServiceArticle
              title="Instalaciones de baja, media y alta tensión."
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
              imageSrc={articleImage6}
              href="/PENDING"
            />
          </div>
        </Container>
      </section>
      <CTASection className="bg-[#F6F6F6]" />
    </Layout>
  );
}
