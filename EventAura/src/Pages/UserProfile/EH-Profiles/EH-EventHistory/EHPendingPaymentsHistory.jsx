import React from 'react'
import '../../profile.scss';
import profilelogo from '../../../../assets/Profile-logo.png';
import EHHeader from './../../../../Components/Header/EHHeader';
import EHSidebar from './../EHSidebar';
import SubFooter from './../../../../Components/Footer/SubFooter';
import { Link } from 'react-router-dom';

const EHPendingPaymentsHistory = () => {
  const events = [
    { name: 'Dara 1', amount: 'Rs 135 987' },
    { name: 'Dara 2', amount: 'Rs 126 785' },
    { name: 'Dara 3', amount: 'Rs 137 234' },
  ];

  return (
    <>
      <header>
        <EHHeader />
      </header>

      <main>
        <div className="container my-5">
              <div className="card shadow border-0">
                <div className="card-body text-center">
                    <h1><b>Hi Anura!</b></h1>
                    <h4><b>Welcome to Your Profile</b></h4>
                    <img src= {profilelogo} alt="Avatar"className="profile-avatar" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <EHSidebar />
                </div>

                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                        <h5 className="text-center"><b>Event History</b></h5>
                        <p className="text-center">@username</p>
                        
                         {/* Tabs */}
                        <div className="d-flex justify-content-around my-3">
                          <div className="btn-group">
                            <Link to="/EHOngoing"className={`btn ${location.pathname === '/EHOngoing' ? 'btn-primary active' : 'btn-outline-primary'}`} > On going</Link>
                            <Link to="/EHPendingPayments" className={`btn ${location.pathname === '/EHPendingPayments' ? 'btn-primary active' : 'btn-outline-primary'}`} > Pending payments</Link>
                            <Link to="/EHPendingRequests" className={`btn ${location.pathname === 'EHPendingRequests' ? 'btn-primary active' : 'btn-outline-primary'}`} >Pending Requests </Link>
                            <Link to="/EHRejected" className={`btn ${location.pathname === '/EHRejected' ? 'btn-primary active' : 'btn-outline-primary'}`} > Rejected</Link>
                            <Link to="/EHHistory"className={`btn ${location.pathname === '/EHHistory' ? 'btn-primary active' : 'btn-outline-primary'}`}>History</Link>
                          </div>
                        </div>
                       

                        {/* Table */}
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Event Name</th>
                              <th>Amount to be paid</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {events.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.amount}</td>
                                <td> <Link to = '/PaymentGate' className='btn btn-info btn-sm text-black'>Make Payments</Link ></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                    </div>
                  </div>
                </div>
            </div>
        </div>
      </main>

      <footer>
        <SubFooter />
      </footer>
    </>
    
  )
}

export default EHPendingPaymentsHistory