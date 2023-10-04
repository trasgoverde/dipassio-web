import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";


const LandingPage = () => {
  return (
   
    // <div>
    //   Landing Page (unprotected)
    //   <Link href="/sign-in">
    //     <Button>Login</Button>
    //   </Link>
    //   <Link href="/sign-up">
    //     <Button >Register</Button>
    //   </Link>
    //   <div> </div>
    // </div>
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transistion-all hover:border-gray-300 hover:bg-white/50">
        <p> 
          Dipassio, Digital Passport Through Innovation, Boost your Projects and Save Money 💸!
        </p>
      </div>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Simple, <span className='text-blue-600'>Powerful  </span> Boost for your Projects
        </h1>
        <p className='mt-5 max-wprose text-zinc-700 sm:text-lg'>
          Dipassio is a digital passport through innovation. It allows you to boost your projects by connecting them with the best talents around the world
          </p>
          <Link 
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })} 
          href='/dashboard' 
          target='_blank'>
          Get Started! <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
      </MaxWidthWrapper>

  );
};

export default LandingPage;
