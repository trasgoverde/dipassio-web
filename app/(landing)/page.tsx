import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navbar } from '@/components/Navbar';
import { UserButton } from "@clerk/nextjs";
import MobileNav from '@/components/MobileNav'

const LandingPage = () => {
  return (
    <>
      <div className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
      <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link
              href='/'
              className='flex z-40 font-semibold'>
              <span>Dipassio | Digital Developments</span>
            </Link>
        </div>    

        </MaxWidthWrapper>
        </div>
      <div className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
          <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
            <Link
              href='/'
              className='flex z-40 font-semibold'>
              <span>Dipassio | Digital Developments</span>
            </Link>

            <MobileNav />

            <div className='hidden items-center space-x-4 sm:flex'>
              <Link
                href='/pricing'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Pricing
              </Link>
              <Link
                href='/signin' // Provide the href attribute here
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Sign in
              </Link>

              <Link
                href='/get-started' // Provide the href attribute here
                className={buttonVariants({
                  size: 'sm',
                })}>
                Get started{' '}
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>

              <Link
                href='/dashboard'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Dashboard
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Top Section */}
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p>
            Dipassio, Digital Passport Through Innovation, Boost your Projects
            and Save Money 💸!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl mt-5">
          Professional Solutions{" "}
          <span className="text-blue-600"> & Powerful Applications </span>{" "}
          Tailored to your Business needs
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Dipassio is a digital product agency that focuses on strategy and
          design.
        </p>
        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/dashboard"
          target="_blank">
          Get Started! <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Value Proposition Section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Content in this section */}
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="Dashboard Preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start your Journey with us in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We specialize in designing highly functional, visually stunning
              websites that are aligned with your brand and business goals
              through a tailored, unique experience for your intended users.
              Developing your Projects has never been easier than with Dipassio
              Agency.
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-9 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                If you have a project in mind and want to explore the
                possibility of working with us.
              </span>
              <span className="mt-2 text-zinc-700">
                Either you need a renovation or a complete new project, choose
                the right{" "}
                <Link
                  href="/sign-up"
                  className="text-blue-700 underline underline-offset-2">
                  Pro Plan
                </Link>{" "}
                for you.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your Assets, Logos, Texts, Domain, Calendar, and
                Specifications
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll process all your information and make it ready for a
                Videocall to discuss your tailored Specifications.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start Developing for you
              </span>
              <span className="mt-2 text-zinc-700">
                We&apos;ll start developing for you immediately. It's that simple!
                Try out Dipassio today - it really takes a few steps to have
                your Digital Project deployed.
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>

    </>
  );
};

export default LandingPage;

