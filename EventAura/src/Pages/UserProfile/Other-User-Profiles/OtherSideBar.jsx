import React from 'react'
import '../profile.scss';
import { Link, useLocation } from 'react-router-dom';

const OtherSideBar = () => {
  return (
    <main>
     <div className="card shadow border-0 sidebar">
        <div className="card-body p-4">
                <ul className="sidebar-menu">
                    <li><Link to='/OtherProfile' className={location.pathname === '/OtherProfil' ? 'active-link' : ''}>Profile Details</Link></li>
                    <li><Link to='/OtherChangePW' className={location.pathname === '/OtherChangePW' ? 'active-link' : ''}>Change Password</Link></li>
                    <li><Link to='/OtherSignOut' className={location.pathname === '/OtherSignO' ? 'active-link' : ''}>Sign Out</Link></li>
                </ul>
         </div>
      </div>
    
  </main>
  )
}

export default OtherSideBar