import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {

  const customers = [
    {
      id: '0',
      image: Image01,
      name: 'Mr Deepak Chakraborty',
      email: 'English',
     
      spent: '17.03.2024',
    },
    {
      id: '1',
      image: Image02,
      name: 'Mrs Shilpa Rao',
      email: 'Economics',
      
      spent: '18.03.2024',
    },
    {
      id: '2',
      image: Image03,
      name: 'Mr Sujay Roy',
      email: 'Science',
     
      spent: '19.03.2024',
    },
    {
      id: '3',
      image: Image04,
      name: 'Mr Aman Gupta',
      email: 'Mathematics',
     
      spent: '20.03.2024',
    },
    {
      id: '4',
      image: Image05,
      name: 'Mrs Sakhshi Mallick',
      email: 'Biology',
   
      spent: '21.03.2024',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white  dark:bg-[#202020] shadow-lg rounded-lg l:rounded-sm border-slate-200 dark:border-slate-700" style={{ boxShadow: '2px 2px 4px 1.5px rgba(0, 0, 0, 1)' }}>
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Upcoming Classes</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Subjects</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Time</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                customers.map(customer => {
                  return (
                    <tr key={customer.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={customer.image} width="40" height="40" alt={customer.name} />
                          </div>
                          <div className="font-medium text-slate-800 dark:text-slate-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.spent}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{customer.location}</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
