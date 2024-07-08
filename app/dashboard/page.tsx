import { Card } from '@/app/ui/dashboard/cards';
import  { ChartMaker } from '@/app/ui/dashboard/Chartjs';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';

import { fetchRevenue, fetchLatestInvoices, fetchCardData } from "@/app/lib/data";
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';
import RevenueChart from '../ui/dashboard/revenueChatjs';
export const experimental_ppr = true;

export default async function Page() {
    const latestInvoices = await fetchLatestInvoices()
    const { totalPaidInvoices,totalPendingInvoices,numberOfCustomers,numberOfInvoices} =await  fetchCardData()
    return (
        <main className='flex  flex-grow flex-col gap-4 md:max-h-svh overflow-hidden'>
            <h1 className={` text-xl md:text-2xl` }>
                Dashboard
            </h1>
        <div className='overflow-hidden    ' >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
                <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
                 <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
                 <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> 
          </div>
            <div className='flex flex-col lg:flex-row pt-4 gap-4 overflow-hidden '> 
                    <div className='flex-grow grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 '>
                    <Suspense fallback={<RevenueChartSkeleton />}>
                     <RevenueChart id="chartjs2" labelKey='month' title='Revenue'   />     
                    </Suspense>
                    <Suspense fallback={<RevenueChartSkeleton />}>
                     <RevenueChart id="chartjs3" labelKey='month' title='Revenue'  />     
                    </Suspense>
                    <Suspense fallback={<RevenueChartSkeleton />}>
                     <RevenueChart id="chartjs4" labelKey='month' title='Revenue' />     
                    </Suspense>
                    <Suspense fallback={<RevenueChartSkeleton />}>
                     <RevenueChart id="chartjs5" labelKey='month' title='Revenue'  />     
                    </Suspense>
                        
                   </div>
                    <div className='overflow-hidden '>

                  <LatestInvoices latestInvoices={latestInvoices} /> 
                    </div>
        
                </div> 
     </div>
    </main>
    )


}