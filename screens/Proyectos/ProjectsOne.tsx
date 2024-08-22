import Image from "next/image";
import { Container, Layout } from "@/components";
import { CTASection } from "@/sections";

import projectOneImage1 from "./images/project-one/project-one-1.jpeg";
import projectOneImage2 from "./images/project-one/project-one-2.jpeg";
import projectOneImage3 from "./images/project-one/project-one-3.jpeg";
import projectOneImage4 from "./images/project-one/project-one-4.jpeg";
import projectOneImage5 from "./images/project-one/project-one-5.jpeg";

export function ProjectsOne() {
  return (
    <Layout footerClassName="bg-[#F6F6F6]">
      <section className="xl:pt-32">
        <Container>
          <div className="rounded-xl bg-[#F6F6F6] xl:px-6 xl:py-10">
            <div className="grid grid-cols-4 grid-rows-[304px,304px] gap-4">
              <Image
                src={projectOneImage1}
                alt="PENDING"
                priority
                placeholder="blur"
                width={624}
                height={624}
                className="col-span-2 row-span-2 h-full w-full rounded-lg object-cover object-center"
              />
              <Image
                src={projectOneImage2}
                priority
                placeholder="blur"
                alt="PENDING"
                width={304}
                height={304}
                className="h-full rounded-lg object-cover object-center"
              />
              <Image
                src={projectOneImage3}
                priority
                placeholder="blur"
                alt="PENDING"
                width={304}
                height={304}
                className="h-full rounded-lg object-cover object-center"
              />
              <Image
                src={projectOneImage4}
                priority
                placeholder="blur"
                alt="PENDING"
                width={304}
                height={304}
                className="h-full rounded-lg object-cover object-center"
              />
              <Image
                src={projectOneImage5}
                priority
                placeholder="blur"
                alt="PENDING"
                width={304}
                height={304}
                className="h-full rounded-lg object-cover object-center"
              />
            </div>
            <h1 className="xl:mt-12 xl:text-5xl">Proyecto 1</h1>
            <div className="mt-8 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CTASection />
    </Layout>
  );
}
