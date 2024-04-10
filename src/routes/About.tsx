import { Footer } from "@/components/Footer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { contactlink } from "@/consts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper className='mx-auto mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='title-2 uppercase tracking-widest'>
              Sobre nós
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Por mais de quatro anos, ajudamos startups e pequenas empresas a
              lançarem plataformas disruptivas!
            </p>
          </div>
        </div>

        {/* Passos */}
        <ol className='my-8 space-y-4 pt-8 px-4 md:flex md:space-x-8 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>4+</span>
              <span className='mt-2 text-zinc-700'>
                Anos de existência e em plena atividade 🚴‍♀️🚴‍♀️🚴‍♀️
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>4.8</span>
              <span className='mt-2 text-zinc-700'>
                Média de experiência dos desenvolvedores na indústria (em anos)
                🤓
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4 items-center justify-center text-center text-base'>
              <span className='text-7xl text-primary font-bold'>+10</span>
              <span className='mt-2 text-zinc-700'>
                Projetos Entregues por todo país 🇧🇷
              </span>
            </div>
          </li>
        </ol>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl mb-5 md:mb-16'>
              Lançamos sua aplicação em poucos meses!🚀
            </h2>
            <Link
              className={buttonVariants({ size: "lg", className: "mt-5" })}
              to={contactlink}
              target='_blank'
            >
              Vamos fazer acontecer <ArrowRight className='ml-2 h-5 w-5' />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
