import React from 'react';
import { Link } from 'react-router-dom';
import User01 from '../../images/user-36-01.jpg';
import User02 from '../../images/user-36-02.jpg';
import User03 from '../../images/user-36-03.jpg';
import User04 from '../../images/user-36-04.jpg';

function DashboardAvatars() {
  return (
    <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9 rounded-full" src={User01} width="36" height="36" alt="User 01" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9 rounded-full" src={User02} width="36" height="36" alt="User 02" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9 rounded-full" src={User03} width="36" height="36" alt="User 03" />
        </Link>
      </li>
      <li>
        <Link className="block" to="#0">
          <img className="w-9 h-9 rounded-full" src={User04} width="36" height="36" alt="User 04" />
        </Link>
      </li>
     
    </ul>
  );
}

export default DashboardAvatars;
