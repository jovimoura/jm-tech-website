import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { contactlink } from "@/consts";

export function Navbar() {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Logo />

          <MobileNav />

          <div className='hidden items-center space-x-4 sm:flex'>
            <Link
              to='/'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Início
            </Link>
            <Link
              to='/about'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sobre nós
            </Link>
            <Link
              to='/how-it-works'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Como funciona?
            </Link>
            <Link
              to='/focus'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Área de Foco
            </Link>
            <Link
              to='/pricing'
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Preços
            </Link>
          </div>
          <Link
            className={cn(
              buttonVariants({
                size: "sm",
              }),
              "hidden sm:flex"
            )}
            to={contactlink}
            target="_blank"
          >
            Comece agora <ArrowRight className='ml-1.5 h-5 w-5' />
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
