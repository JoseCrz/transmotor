import Image from "next/image";
import { Mail, Phone, MapPinned } from "lucide-react";
import { Container } from "@/components";
import { cn } from "@/utils";

import contactImage from "./images/contact.jpeg";

export function ContactSection({ className }: { className?: string }) {
  return (
    <section className={cn("py-28", className)}>
      <Container>
        <h2 className="text-4xl md:text-6xl">Contacto</h2>
        <p className="mt-1 md:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <div className="mt-8 flex flex-col justify-between gap-20 xl:mt-32 xl:flex-row">
          <div className="space-y-10">
            <div>
              <Mail />
              <a
                href="mailto:hello@transmotor.com.mx"
                className="mt-4 block text-sm md:text-base"
              >
                hello@transmotor.com.mx
              </a>
            </div>
            <div>
              <Phone />
              <a
                href="tel:+1555000000"
                className="mt-4 block text-sm md:text-base"
              >
                +1 (555) 000-000
              </a>
            </div>
            <div>
              <MapPinned />
              <a href="PENDING" className="mt-4 block text-sm md:text-base">
                Centro Xalapa, Veracruz
              </a>
            </div>
          </div>
          <div>
            <Image
              src={contactImage}
              alt="PENDING"
              placeholder="blur"
              className="rounded-xl object-cover xl:h-[516px] xl:w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
