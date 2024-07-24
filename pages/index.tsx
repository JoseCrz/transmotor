import Head from "next/head";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Transmotor</title>
      </Head>
      <div className={jost.className}>
        <div className={`bg-[#10417D] py-20 md:pt-24 md:pb-40 xl:py-32`}>
          <header>
            <p className="md:text-[32px] text-xl xl:text-[40px] text-center font-semibold text-[#1D76E2]">
              www.
              <span className="text-white">Transmotor</span>
              .com.mx
            </p>
          </header>
          <main className="mt-16 md:mt-32 xl:mt-16">
            <section>
              <div className="pl-4 pr-2.5 md:px-2 xl:px-28">
                <h1 className="text-[140px] uppercase font-semibold text-[#4E7DF5] md:text-[190px] xl:text-[260px] leading-[90%] max-w-full break-all md:text-center">
                  Sitio en <br className="block md:hidden" />
                  <span className="tracking-[5.6px] md:tracking-[7.6px] xl:tracking-[10.4px]">
                    construcción
                  </span>
                </h1>
              </div>
            </section>
          </main>
        </div>

        <footer className="py-20 md:py-24 xl:py-20">
          <p className="uppercase text-[#10417D] font-semibold text-[30px] xl:text-[40px] text-center">
            Pronto regresamos
          </p>
        </footer>
      </div>
    </>
  );
}
