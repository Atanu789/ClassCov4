import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Icon from '../../images/icon-01.svg';
import EditMenu from '../../components/DropdownEditMenu';
// import Trophie from "../../../public/gold-cup.png"
// Import utilities
 import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01() {
   const [reward, setReward] = useState("Trophies")
   const [points, setPoints] = useState("0")
   useEffect(()=>{
    if(reward == "Trophies"){
    setPoints("5")
   }else if(reward == "Badges"){
    setPoints("20")
   }else{
    setPoints("Level 1")
   }
   },[reward])
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-[#202020] rounded-lg l:rounded-sm border border-slate-200 dark:border-slate-700" style={{ boxShadow: '2px 2px 4px 1.5px rgba(0, 0, 0, 1)' }}>
      <div className="px-5 pt-5">
        <header className="flex justify-end items-start mb-2">
         
          {/* Menu button */}
          <EditMenu align="left" className="relative inline-flex z-10">
            <li>
              <Link className="font-medium text-sm text-slate-600 dark:text-orange-300 hover:text-orange-800 dark:hover:text-yellow-500 flex py-1 px-3" to="#0"
              onClick={()=>setReward("Trophies")}
              >
                Trophies
              </Link>
            </li>
            <li>
              <button className="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0"
                onClick={()=>setReward("Badges")}
              >
                Badges
              </button>
            </li>
            <li>
              <Link className="font-medium text-sm text-blue-300 hover:text-blue-400 flex py-1 px-3" to="#0"   onClick={()=>setReward("Points")}>
                Level
              </Link>
            </li>
          </EditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">{reward}</h2>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">
           {/* if(reward == "Trophies"){
          <img src=""></img>
           } */}
           Pic of Rewards
        </div>
        <div className="flex items-start ">
          <div className="text-3xl font-bold  text-slate-800 dark:text-slate-100 mr-2">
           {points}
          </div>
          <div className="text-sm font-semibold  text-white px-1.5 bg-emerald-500 rounded-full">Earn 15 more points to react next level</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
       
      </div>
    </div>
  );
}

export default DashboardCard01;
