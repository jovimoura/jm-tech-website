import { cn } from "@/lib/utils";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer () {
  const today = new Date();
  return (
    <>
      <footer className='footer px-4 py-5 md:p-10 pt-12 text-black'>
        <div className='flex flex-col items-start justify-start gap-4'>
          <Logo />
          <span className='max-w-[180px]'>
            Tornamos sua vida mais produtiva e mais rápida.
          </span>
          <div className='flex items-center justify-center gap-3'>
            <Link to='https://www.instagram.com/jmtech.rj/' target='_blank'>
              <Instagram className='cursor-pointer w-6 h-6' />
            </Link>
            <Link
              to='https://www.linkedin.com/in/jovimoura10/'
              target='_blank'
            >
              <Linkedin size={24} className='cursor-pointer' />
            </Link>
          </div>
        </div>
        <div>
          <span
            className={cn(
              "footer-title text-sm font-light text-primary uppercase leading-5 tracking-widest opacity-100"
            )}
          >
            Empresa
          </span>
          <a href='/#about' className='link link-hover'>
            Sobre
          </a>
          <a href='/#product' className='link link-hover'>
            Produto
          </a>
        </div>
        <div>
          <span
            className={cn(
              "footer-title text-sm font-light text-primary uppercase leading-5 tracking-widest opacity-100"
            )}
          >
            Produto
          </span>
          <Link to='/pricing' className='link link-hover'>
            Planos
          </Link>
        </div>
        {/* <div>
          <span
            className={cn(
              "footer-title text-sm font-light text-primary uppercase leading-5 tracking-widest opacity-100"
            )}
          >
            Legal
          </span>
          <Link to='/terms' className='link link-hover'>
            Termos de Uso
          </Link>
          <Link to='/privacy' className='link link-hover'>
            Política de Privacidade
          </Link>
        </div> */}
      </footer>
      <footer className='px-5 md:px-10 py-4 border-t border-black/10'>
        <span className='flex md:hidden text-xs flex-col items-center text-center justify-center w-full'>
          © {today.getFullYear()} JMTech • Todos direitos reservados{" "}
          <Link
            to='https://jovimoura.vercel.app/'
            target='_blank'
            className='hover:underline text-center'
          >
            Desenvolvido por <span className='text-sm'>John Moura</span>
          </Link>
        </span>
        <span className='hidden md:flex items-center justify-center w-full'>
          © {today.getFullYear()} JMTech • Todos direitos reservados •
          Desenvolvido por
          <Link
            to='https://jovimoura.vercel.app/'
            target='_blank'
            className='hover:underline'
          >
            John Moura
          </Link>
        </span>
      </footer>
    </>
  );
};
