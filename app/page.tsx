import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2  ">
      
      <div className=" flex w-full items-center  md:w-3/5 p-2 rounded-full bg-primary  bg-opacity-15 drop-shadow ">
        <AcmeLogo  /> 
      </div>
      <div className="mt-4 flex-grow flex flex-col gap-4 md:flex-row">
        <div className="flex flex-grow flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Inosa.</strong> This is the example for the{'CMR Product '}
           Magnage your Customers and your and the Invoices
      
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>

        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={100}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
