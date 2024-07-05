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

const ChartMaker: React.FC<ChartMakerProps> = ({ data, id, title, labelKey, dataKeys }) => {
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

    const dataConfig = {
      labels,
      datasets,
    };

    const optionConfig: ChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: title,
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Value",
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, {
      type: chartType,
      data: dataConfig,
      options: optionConfig,
    });
  };

  useEffect(updateChart, [data, chartType, title, labelKey, dataKeys]);

  if (!data || data.length === 0) {
    return <p>Data not found</p>;
  }

  return (
    <div className="w-full md:w-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
        <h2 className="text-lg font-bold mb-2 md:mb-0">{title}</h2>
        <div className="flex items-center">
         
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value as ChartType)}
            className="border border-gray-300 rounded-md px-2 py-1   "
          >
            {types.map((type) => (
              <option key={type} value={type} className="">
                {type.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full md:w-auto">
        <canvas id={id} ></canvas>
      </div>
    </div>
  );
};

export default ChartMaker;