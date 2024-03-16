import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard11() {

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: 'Quiz Score',
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Active Participation',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Overall Attendance',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Assignment Score',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Vocab Challenge',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-[#202020]  shadow-lg rounded-lg l:rounded-sm border border-slate-200 dark:border-slate-700 " style={{ boxShadow: '2px 2px 4px 1.5px rgba(0, 0, 0, 1)' }}>
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Overall Performance</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">70%</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">+22%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard11;
