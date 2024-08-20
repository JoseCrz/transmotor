import type { PropsWithChildren, ComponentType, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CarFront,
  Dam,
  FileStack,
  FireExtinguisher,
  Menu,
  PlugZap,
  X,
} from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

import { manrope } from "@/styles/fonts";

import { Container } from "../Container";
import { ButtonLink } from "../ButtonLink";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuLinkTrigger,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../NavigationMenu";

import logo from "./images/logo.svg";
import logoBlack from "./images/logo-black.svg";
import { cn } from "@/utils";

type LayoutProps = {
  children: ReactNode;
  footerClassName?: string;
};

export function Layout({ footerClassName, children }: LayoutProps) {
  return (
    <>
      <header className="fixed top-0 z-10 w-full py-4">
        <Container>
          <div className="flex justify-between lg:hidden">
            <Image src={logo} alt="Transmotor Logo" height={27} priority />

            <Dialog.Root>
              <Dialog.Trigger className="flex rounded bg-white p-1 shadow">
                <Menu />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay />
                <Dialog.Content
                  className={`fixed left-[50%] top-[50%] z-50 h-dvh w-full translate-x-[-50%] translate-y-[-50%] bg-white px-6 py-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${manrope.className} font-sans`}
                >
                  <Dialog.Title className="sr-only">Menu</Dialog.Title>
                  <div className="flex justify-end">
                    <Dialog.Close className="rounded bg-black p-1 text-white">
                      <X />
                    </Dialog.Close>
                  </div>
                  <div className="mt-24">
                    <nav>
                      <ul className="space-y-8">
                        <MobileMenuItem href="/PENDING" Icon={PlugZap}>
                          Instalaciones de baja, media y alta tensión
                        </MobileMenuItem>
                        <MobileMenuItem href="/" Icon={Dam}>
                          Instalaciones hidráulicas
                        </MobileMenuItem>
                        <MobileMenuItem href="/" Icon={FireExtinguisher}>
                          Instalaciones contra incendio
                        </MobileMenuItem>
                        <MobileMenuItem href="/" Icon={FileStack}>
                          Trámites CFE, SENER, UVIE
                        </MobileMenuItem>
                        <MobileMenuItem href="/" Icon={CarFront}>
                          Servicio de grua
                        </MobileMenuItem>
                      </ul>
                    </nav>
                    <div className="mt-52 flex justify-center">
                      <ButtonLink variant="electric" href="PENDING">
                        Contáctanos
                      </ButtonLink>
                    </div>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          <div className="hidden lg:flex lg:items-center">
            <div className="flex flex-1 justify-start">
              <Image src={logo} alt="Transmotor Logo" height={27} priority />
            </div>
            <NavigationMenu className="rounded-md bg-white px-6 py-2 shadow-lg">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLinkTrigger href="/">
                    Home
                  </NavigationMenuLinkTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[374px] border bg-white px-4 py-6">
                    <ul className="space-y-4">
                      <ListItemLink href="/" Icon={PlugZap}>
                        Instalaciones de baja, media y alta tensión
                      </ListItemLink>
                      <ListItemLink href="/" Icon={Dam}>
                        Instalaciones hidráulicas
                      </ListItemLink>
                      <ListItemLink href="/" Icon={FireExtinguisher}>
                        Instalaciones contra incendio
                      </ListItemLink>
                      <ListItemLink href="/" Icon={FileStack}>
                        Trámites CFE, SENER, UVIE
                      </ListItemLink>
                      <ListItemLink href="/" Icon={CarFront}>
                        Servicio de grua
                      </ListItemLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLinkTrigger href="/proyectos">
                    Proyectos
                  </NavigationMenuLinkTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLinkTrigger href="/nosotros">
                    Acerca de nosotros
                  </NavigationMenuLinkTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex flex-1 justify-end">
              <ButtonLink variant="crystal" href="/">
                Contacto
              </ButtonLink>
            </div>
          </div>
        </Container>
      </header>
      <main>{children}</main>
      <footer className={cn("py-20", footerClassName)}>
        <Container>
          <div className="flex flex-col-reverse max-md:items-center max-md:gap-16 max-md:text-center md:flex-row md:justify-between">
            <div className="max-md:text-sm">
              <Image
                src={logoBlack}
                alt="Logo de Transmotor"
                width={63}
                height={27}
                className="max-md:mx-auto"
              />
              <p className="mt-8">Dirección</p>
              <a href="PENDING" className="mt-1 block">
                Xalapa, Veracruz
              </a>
              <p className="mt-6">Contacto:</p>
              <a href="tel:18001234567" className="mt-1 block">
                1 800 123 4567
              </a>
              <a href="mailto:info@transmotor.com.mx" className="mt-1 block">
                info@transmotor.com.mx
              </a>
              <div className="mt-6 flex gap-3 max-md:justify-center">
                <Link href="https://facebook.com">
                  <SiFacebook size={24} />
                </Link>
                <Link href="https://instagram.com">
                  <SiInstagram size={24} />
                </Link>
              </div>
            </div>
            <div>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/servicios">Servicios</Link>
                  </li>
                  <li>
                    <Link href="/proyectos">Proyectos</Link>
                  </li>
                  <li>
                    <Link href="/nosotros">About Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <hr className="mt-20 h-0.5 bg-black" />
          <p className="mt-8 text-sm">
            © {new Date().getFullYear()} Transmotor. Todos los derechos
            reservados
          </p>
        </Container>
      </footer>
    </>
  );
}

// ================ Local Components ================

type MobileMenuItemProps = {
  href: string;
  Icon: ComponentType;
  children: ReactNode;
};

function MobileMenuItem({ href, Icon, children }: MobileMenuItemProps) {
  return (
    <li>
      <Link href={href} className="flex items-center gap-4">
        <div className="p-3">
          <Icon aria-hidden />
        </div>
        <div className="text-lg">{children}</div>
      </Link>
    </li>
  );
}

type ListItemLinkProps = {
  href: string;
  Icon: ComponentType;
  children: ReactNode;
};

function ListItemLink({ href, Icon, children }: ListItemLinkProps) {
  return (
    <li>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="flex items-center gap-4 rounded px-2 py-1 hover:bg-black/[0.12]">
          <div className="p-3">
            <Icon aria-hidden />
          </div>
          <div>{children}</div>
        </NavigationMenuLink>
      </Link>
    </li>
  );
}
