import { Footer } from "@/components/Footer";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Navbar } from "@/components/Navbar";

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      <MaxWidthWrapper className='mx-auto mb-32 mt-14 max-w-5xl sm:mt-24'>
        <div className='flex flex-col text-center items-center gap-3'>
          <h1 className='max-w-4xl text-xl font-semibold md:text-3xl lg:text-4xl leading-10'>
            Esqueça{" "}
            <span className='line-through text-muted-foreground'>Agências</span>
            . <br />
            Esqueça{" "}
            <span className='line-through text-muted-foreground'>
              Freelancers
            </span>
            . <br />
            JM<span className='text-primary'>Tech</span> é <br />
            Sua <span className='text-primary font-bold'> Solução.</span>
          </h1>
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
