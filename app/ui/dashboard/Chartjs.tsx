"use client";
import React, { useEffect, useRef, useState } from "react";
import Chart, { ChartType, ChartOptions } from "chart.js/auto";

interface ChartMakerProps {
  data: any[];
  id: string;
  title: string;
  labelKey: string;
  dataKeys: string[];
}

export const ChartMaker: React.FC<ChartMakerProps> = ({ data, id, title, labelKey, dataKeys }) => {
  const types: ChartType[] = ["bar", "line", "pie", "bubble", "scatter","radar","polarArea","doughnut"]; // Removed polarArea and radar due to compatibility issues
  const [chartType, setChartType] = useState<ChartType>(types[0]);
  const chartRef = useRef<Chart | null>(null);

  const updateChart = () => {
    if (!data || data.length === 0) {
      return;
    }

    const ctx = document.getElementById(id) as HTMLCanvasElement;
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const labels = data.map((d) => d[labelKey]);

    const datasets = dataKeys.map((key, index) => ({
      label: key,
      data: data.map((d) => d[key]),
    
    }));
    let lbEmu :string[]= ["line" ,"bar"]
    let rpdpEmu:string[] = ["pie" , "polarArea" ,"radar" , "doughnut"]
    let sbEmu:string[] = ["bubbel" , "scatter"]

    const dataConfig = {
      labels,
      datasets,
    };

    const optionforLineBar: ChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        }
      }
    }

    const optionforPie: ChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        },
      
      },
    }
    
    const optionforBubbles: ChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        },
        title: {
          display: true,
          text: title,
        },
      },
    }

    chartRef.current = new Chart(ctx, {
      type: chartType,
      data: dataConfig,
      options: lbEmu.includes(chartType)?optionforLineBar:rpdpEmu.includes(chartType)?optionforPie:sbEmu.includes(chartType)?optionforBubbles:optionforLineBar,
    });
  };

  useEffect(updateChart, [data, chartType, title, labelKey, dataKeys]);

  if (!data || data.length === 0) {
    return <p>Data not found</p>;
  }

  return (
    <div className="w-full md:w-auto  md:bg-gray-950 p-4 rounded-lg drop-shadow-md shadow-slate-400">
      <div className="flex  md:flex-row justify-between items-center mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center">
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value as ChartType)}
            className="border-2 drop-shadow-md border-white bg-gray-900 rounded-md px-2 py-1   "
          >
            {types.map((type) => (
              <option key={type} value={type} className=" pt-2 ">
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <canvas height={1} id={id} ></canvas>
      </div>
    </div>
  );
};
