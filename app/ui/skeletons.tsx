// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-700 before:to-transparent';

export function CardSkeleton() {

  return (
    <Shimmer>
      <div className="flex flex-col p-2  gap-5 ">
      <div className="w-full">
        
        <div className=" h-5 w-40 rounded-md bg-gray-900 text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl  px-2 py-2">
        <div className="h-8 w-48 rounded-md bg-gray-900" />
      </div>
      </div>
    
    </Shimmer>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}
export function Shimmer({children}:any) {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-800 p-2 shadow-sm`}
    >
      {children}
    </div>

  )
}

export function RevenueChartSkeleton() {
  return (
    
  <Shimmer>
    <div className="   p-4   bg-gray-800 rounded-lg ">
        <div className="flex  md:flex-row justify-between items-center mb-4">
          <div className=" font-bold roundel-xl bg-gray-900 p-4 w-[10px]">
          </div>
        <div className="flex items-center">
        </div>
      </div>
      <div className="">
         
      </div>
    </div>
  </Shimmer>
  );
}




export function InvoiceSkeleton() {
  return (
    <Shimmer>

       <div className="flex gap-1 flex-row md:flex-col justify-between border-b border-gray-400 ">
        <Shimmer>

        <div className="flex items-center gap-2 ">
        <div className=" h-12 w-12 rounded-full bg-gray-900" />
        <div className=" flex-col gap-2">
          <div className="h-5 w-40 rounded-md bg-gray-900" />
          <div className=" h-4 w-12 rounded-md bg-gray-900" />
        </div>
      </div>
        </Shimmer>
      <div className=" h-6 w-20 rounded-md bg-gray-900" />
    </div>
    </Shimmer>
  );
}

export function LatestInvoicesSkeleton() {
  return (
  <Shimmer>
      <div className="rounded-md bg-gray-800 flex w-full flex-col  lg:col-span-3" />
      <div className=" flex-col justify-between rounded-xl p-2 gap-2">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
       
        <div className="flex items-center pb-2 pt-6">
          <div className="h-5 w-5 rounded-full bg-gray-800" />
          <div className="ml-2 h-4 w-20 rounded-md bg-gray-800" />
        </div>
      </div>
  </Shimmer>
  );
}

export  function DashboardSkeleton() {
  return (
    <>
      
      <div
        className={`${shimmer} relative mb-6 h-10 w-48 overflow-hidden rounded-md bg-gray-800`}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="flex flex-col lg:flex-row pt-4 gap-4">
        <div className=' grid flex-grow gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 '>
        <RevenueChartSkeleton />
          <RevenueChartSkeleton />
        </div>

        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-800"></div>
          <div className="h-6 w-24 rounded bg-gray-800"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-800"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-800"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-800"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-16 rounded bg-gray-800"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-800"></div>
          <div className="h-[38px] w-[38px] rounded bg-gray-800"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-gray-900 p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-800"></div>
          <div className="h-6 w-16 rounded bg-gray-800"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-800"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-800"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-800"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-800"></div>
          <div className="h-10 w-10 rounded bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-900">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
