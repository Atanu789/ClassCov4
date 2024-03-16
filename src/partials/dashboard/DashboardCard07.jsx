import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-[#202020] shadow-lg rounded-lg l:rounded-sm border border-slate-200 dark:border-slate-700" style={{ boxShadow: '2px 2px 4px 1.5px rgba(0, 0, 0, 1)' }}>
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Pending Assignments</h2>
      </header>
      <div className="p-3 ">
        {/* Table */}
        <div className="overflow-x-auto rounded-xl  ">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Subject</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Teacher</div>
                </th>
                
                <th className="p-2">
                  <div className="font-semibold text-center">No. of Assignments</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                   
                    <div className="text-slate-800 dark:text-slate-100">Computer</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mrs Raima Basak</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">1</div>
                </td>
              
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    
                    <div className="text-slate-800 dark:text-slate-100">Biology</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mrs Anjali Saha</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">4</div>
                </td>
              
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                   
                    <div className="text-slate-800 dark:text-slate-100">Mathematics</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mrs Jayita Bera</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">1</div>
                </td>
               
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                   
                    <div className="text-slate-800 dark:text-slate-100">Science</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Mrs Sonamoni Sardar</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">1</div>
                </td>
               
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                   
                    <div className="text-slate-800 dark:text-slate-100">History</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Tony Stark</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">2</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
