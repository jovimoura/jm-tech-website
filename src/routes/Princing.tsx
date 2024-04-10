import { Footer } from "@/components/Footer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";
import { buttonVariants } from "@/components/ui/button";
import { contactlink } from "@/consts";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Princing() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper className='mx-auto mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='title-2 uppercase tracking-widest'>preços</h2>
            <p className='mt-4 text-lg text-gray-600'>
              Sua equipe de desenvolvimento por uma única baixa taxa mensal
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto flex flex-col items-center justify-center gap-5 mb-32 mt-24 max-w-5xl sm:mt-32'>
        <div className='flex items-center justify-center gap-10 w-full'>
          <div className='hidden md:flex flex-col items-center justify-center gap-4'>
            <span className='text-[80px] rounded-full border bg-muted relative text-card-foreground shadow-sm py-3 px-8'>
              🤑
            </span>

            <span className='text-muted-foreground uppercase text-xl font-semibold leading-5 tracking-widest'>
              ❌ AGÊNCIAS
            </span>
            <div className='flex flex-col'>
              <p className='max-w-prose text-base text-zinc-700 text-center px-5 md:px-0'>
                50k - 200k
              </p>
              <p className='max-w-prose text-xs italic text-zinc-700 text-center px-5 md:px-0'>
                Serviços blackbox com altas taxas. Baseado em projetos,
                frequentemente terceirizando o trabalho eles mesmos.
              </p>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <span className='text-[120px] rounded-full border bg-card text-card-foreground shadow-sm py-3 px-10'>
              🤩
            </span>

            <h2 className='title-2 uppercase tracking-widest mt-6'>JMTECH</h2>
            <div className='mt-4 font-medium text-lg text-black'>
              <p className='max-w-prose text-base text-black text-center px-5 md:px-0'>
                40%-50% menos do que agências;
              </p>
              <p className='max-w-prose text-base text-center px-5 md:px-0'>
               Aumento de equipe ou internamente; <br />
                Todos os serviços complementares incluídos. <br />
                <span className='text-primary font-bold'>
                  Nós ganhamos quando você tem sucesso!
                </span>
              </p>
            </div>
          </div>

          <div className='hidden md:flex flex-col items-center justify-center gap-4'>
            <span className='text-[80px] rounded-full border bg-muted relative text-card-foreground shadow-sm py-3 px-8'>
              🫠
            </span>

            <span className='text-muted-foreground uppercase text-xl font-semibold leading-5 tracking-widest'>
              ❌ Freelancers
            </span>
            <div className='flex flex-col'>
              <p className='max-w-prose text-base text-zinc-700 text-center px-5 md:px-0'>
                12k - 24k / mês
              </p>
              <p className='max-w-prose text-xs italic text-zinc-700 text-center px-5 md:px-0'>
                Única habilidade/valor. Recrutamento necessário, difícil de
                reter, difícil de escalar.
              </p>
            </div>
          </div>
        </div>
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
