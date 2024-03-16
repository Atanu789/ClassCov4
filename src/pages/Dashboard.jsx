import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';

import DashboardCard07 from '../partials/dashboard/DashboardCard07';

import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';



function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#171717] h-screen overflow-hidden">

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <WelcomeBanner />

            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              <DashboardAvatars />

              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
 
                <Datepicker/>
                              
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

            
              <DashboardCard01 />
          
              <DashboardCard07 />
            
              <DashboardCard10 />
             
              <DashboardCard11 />
              
             
            </div>

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;