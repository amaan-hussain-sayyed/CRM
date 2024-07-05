import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue ,fetchLatestInvoices,fetchCardData} from "@/app/lib/data";

export default async function Page() {
    const revenue = await fetchRevenue()
    const latestInvoices = await fetchLatestInvoices()
    const { totalPaidInvoices,totalPendingInvoices,numberOfCustomers,numberOfInvoices} =await  fetchCardData()
    return (
        <main className='flex  flex-grow flex-col gap-4 overflow-hidden'>
            <h1 className={` text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className='overflow-hidden m-2 ' >
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
                <div className='flex flex-col md:flex-row'> 
                    <div className='flex-grow grid  gap-4 gitgrid-cols-1 md:grid-cols-2'>
              <RevenueChart data={[
                { revenue: 4567, month: "jan", income: 6888 },
                { revenue: 567, month: "feb", income: 688 },
                { revenue: 457, month: "mar", income: 88 },
                { revenue: 47, month: "apr", income: 680 },
                { revenue: 455, month: "may", income: 680 },
                { revenue: 455, month: "jun", income: 680 },
                { revenue: 4575, month: "jul", income: 680 },
                { revenue: 4575, month: "aug", income: 60 },
                { revenue: 4555, month: "sep", income: 6860 },
                { revenue: 4556, month: "oct", income: 6806 },
                { revenue: 4565, month: "nov", income: 680 },
                { revenue: 45555, month: "dec", income: 68660 },

                     ]} id="chartjs1" labelKey='month' title='Revenue' dataKeys={["revenue","income"]}    />     
                     <RevenueChart data={revenue} id="chartjs2" labelKey='month' title='Revenue' dataKeys={["revenue", "income"]}  />     
                     <RevenueChart data={revenue} id="chartjs3" labelKey='month' title='Revenue' dataKeys={["revenue", "income"]}  />     
                     <RevenueChart data={revenue} id="chartjs4" labelKey='month' title='Revenue' dataKeys={["revenue", "income"]}  />     
                        
                   </div>
                    <div>

                  <LatestInvoices latestInvoices={latestInvoices} /> 
                    </div>
        
                </div> 
     </div>
    </main>
    )


}