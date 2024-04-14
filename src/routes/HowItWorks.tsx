import { Footer } from "@/components/Footer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper className='mx-auto mb-32 mt-14 max-w-5xl sm:mt-24'>
        <div className='flex flex-col text-center items-center gap-3'>
          <div className='flex flex-col gap-5 max-w-4xl font-semibold text-4xl'>
            <span>
              Esqueça{" "}
              <span className='line-through text-muted-foreground'>
                Agências
              </span>
              .
            </span>

            <span>
              Esqueça{" "}
              <span className='line-through text-muted-foreground'>
                Freelancers
              </span>
              .
            </span>

            <span>
              <span className='font-bold'>
                JM<span className='text-primary'>Tech</span>
              </span>{" "}
              é <br />
              Sua <span className='text-primary font-bold'> Solução.</span>
            </span>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto mb-32 mt-14 max-w-5xl sm:mt-24'>
        <div className='w-full flex items-center justify-center md:justify-start'>
          <div className='flex flex-col max-w-md w-full'>
            <div className='flex items-center justify-start gap-2 w-full'>
              <h1 className='text-7xl font-black leading-none text-primary'>01</h1>
              <span className='text-xl md:text-3xl font-bold uppercase leading-10 tracking-widest'>
                Tudo começa com planejamento!
              </span>
            </div>
            <p className='text-xl'>
              Estudamos seu projeto e te passamos alguns feedbacks para melhor desenvolvimento de seu projeto!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto mb-32 mt-14 max-w-5xl sm:mt-24'>
        <div className='w-full flex items-center justify-center md:justify-end'>
          <div className='flex flex-col max-w-md w-full'>
            <div className='flex items-center justify-start gap-2 w-full'>
              <h1 className='text-7xl font-black leading-none text-primary'>02</h1>
              <span className='text-xl md:text-3xl font-bold uppercase leading-10 tracking-widest'>
                Desenvolvimento
              </span>
            </div>
            <p className='text-xl'>
              Ao finalizar o planejamento começamos a desenvolver sua ideia enquanto te damos feedback&quot;s semanais
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className='mx-auto mb-32 mt-14 max-w-5xl sm:mt-24'>
        <div className='w-full flex items-center justify-center md:justify-start'>
          <div className='flex flex-col max-w-md w-full'>
            <div className='flex items-center justify-start gap-2 w-full'>
              <h1 className='text-7xl font-black leading-none text-primary'>03</h1>
              <span className='text-xl md:text-3xl font-bold uppercase leading-10 tracking-widest'>
                Semana de lançamento!
              </span>
            </div>
            <p className='text-xl'>
              Após desenvolvermos seu projeto fazemos uma série de testes interno e juntos com você para que você finalmente tenha seu projeto na nuvem!
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
