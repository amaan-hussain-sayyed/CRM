import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col  lg:col-span-3 md:bg-gray-950 rounded-lg p-4">
      <h2 className={` text-xl font-semibold`}>
        Latest Invoices
      </h2>
      <div className="flex grow  flex-col justify-between rounded-xl ">
        {/* NOTE: Uncomment this code in Chapter 9 */}

         <div className=" px-2">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'flex flex-col gap-2 justify-between py-2',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex ">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold ">
                      {invoice.name}
                    </p>
                    <p className="hidden text-sm text-gray-200 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={` truncate text-base  font-medium `}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div> 
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-200" />
          <h3 className="ml-2 text-sm text-gray-200 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
