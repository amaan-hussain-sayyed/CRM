
import { ChartMaker } from "./Chartjs";
import { fetchRevenue } from "@/app/lib/data";
export default async function RevenueChart({  id, title, labelKey}:{id:string,title:string,labelKey:string,}) {
    // Make component async, remove the props
    const revenue = await fetchRevenue(); // Fetch data inside the component
   

    if (!revenue || revenue.length === 0) {
        return <p className="mt-4 text-gray-400">No data available.</p>;
    }   

    return (
        <ChartMaker data={revenue} id={id} title={title} labelKey={labelKey} dataKeys={["revenue"]} />
  );
}