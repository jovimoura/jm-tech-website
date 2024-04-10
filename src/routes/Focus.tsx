import { Footer } from "@/components/Footer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { contactlink } from "@/consts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { technologies } from "./Home";

export default function Focus() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper className='mx-auto mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='title-2 uppercase tracking-widest'>
              Áreas de Foco
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Estamos atualizados nas últimas tendências e tecnologias da
              indústria.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto flex flex-col items-center justify-center gap-5 mb-32 mt-24 max-w-5xl sm:mt-32'>
        <img
          src='/images/focus.svg'
          alt=''
          className='max-w-[300px] md:max-w-[500px]'
        />
        <div className='mt-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Desenvolvemos para Web & Mobile (IOS, Android)
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              JMTech tradicionalmente tem se concentrado em aplicativos móveis
              agradáveis e bonitos para os usuários e possui uma forte expertise
              em Engenharia de Software Mobile.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-1 my-2 items-center justify-center'>
          <span className='text-muted-foreground uppercase text-sm font-medium leading-5 tracking-widest'>
            NOSSO FOCO
          </span>
          <p className='max-w-prose text-zinc-700 text-center px-5 md:px-0'>
            React, React Native, Angular, Vue, Swift, Python, Ruby on Rails,
            Node.js, Next.js
          </p>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Tecnologias
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Conheça as nossas especialidades!
            </p>
          </div>
        </div>

        {/* Passos */}
        <ol className='my-8 pt-8 flex-wrap gap-5 flex items-center justify-center md:space-x-8 px-4'>
          {technologies.map(({ src }) => (
            <li key={src} className='flex-1 min-w-20 flex items-start justify-start m-0'>
              <img src={src} className="w-20"/>
            </li>
          ))}
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
