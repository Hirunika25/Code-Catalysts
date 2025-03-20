import React from 'react'
import { Link } from 'react-router-dom';
import '../../Pages/EventHistory/TablePages.scss';


const EventHistoryHeadBar = () => {
  return (
    <main>
    <div className="border-0 shadow card headbar">

        <div className="head-bar row">
            <div className="p-0 text-center col">
                <Link href='/ended' className={location.pathname === '/ended' ? 'active-link' : ''}>Ended</Link>
                <Link to='/ended' className={location.pathname === '/ended' ? 'active-link' : ''}>Ended</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/pendingPayment' className={location.pathname === '/pendingPayment' ? 'active-link' : ''}>Pending Payment</Link>
            </div>
            <div className="p-0 text-center col">
                <Link href='/rejected' className={location.pathname === '/rejected' ? 'active-link' : ''}>Rejected</Link>
            </div>
        </div>


    </div>

</main>

  )
}

export default EventHistoryHeadBar