import { ArrowRight, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function MobileNav () {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (isOpen) toggleOpen();
      // @ts-ignore
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-5 w-5 text-zinc-700'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-5 md:px-10 pt-10 md:pt-20 pb-5 md:pb-8'>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/sign-up")}
                    className='flex items-center w-full font-semibold text-green-600'
                    to='/sign-up'
                  >
                    Comece já
                    <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-gray-300' />
                <li className='my-3 h-px w-full bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/pricing")}
                    className='flex items-center w-full font-semibold'
                    to='/pricing'
                  >
                    Preços
                  </Link>
                </li>

          </ul>
        </div>
      ) : null}
    </div>
  );
};
