import { ButtonLink, Container } from "@/components";
import { cn } from "@/utils";

export function CTASection({ className }: { className?: string }) {
  return (
    <section className={cn("py-40 md:py-28", className)}>
      <Container>
        <h2 className="mx-auto text-center text-xl md:max-w-[520px] md:text-2xl xl:max-w-[768px] xl:text-3xl">
          Nos adaptamos a tu proyecto. Déjanos llevarlos al siguiente nivel.
          Estás a una llamada.
        </h2>
        <div className="mt-10 flex justify-center">
          <ButtonLink variant="electric" href="/">
            Escríbenos aquí
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
