import React, { useState,useEffect } from 'react';

function WelcomeBanner() {
  var today = new Date()
var currentHour = today.getHours()
const[day, setDay] = useState("Morning")
    useEffect(() => {
    if (currentHour < 12&&currentHour>6) {
      setDay("Morning");
    } else if (currentHour < 16&&currentHour>12) {
      setDay("Afternoon");
    }else if(currentHour>16&&currentHour<18){
      setDay("Evening")
    } 
    else {
      setDay("Night");
    }
  }, []);
  return (
    <div className="relative bg-indigo-200 dark:bg-[#202020] p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good {day}, Raima 🖐</h1>
        <p className="dark:text-indigo-200">Welcome to ClassConnect :</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
