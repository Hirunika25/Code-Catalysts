import React from 'react'
import profilelogo from '../../../assets/Profile-logo.png';
import TBHeader from './../../../Components/Header/TBHeader';
import TBSidebar from './TBSidebar';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../profile.scss';
import { Link } from 'react-router-dom';

const TBPurchaseHistory = () => {
  const events = [
    { name: 'Dara 1', Golden: '2', Silver: '2', Bronza: '2' , Payment: '125 346'},
    { name: 'Dara 2',Golden: '2', Silver: '3', Bronza: '2', Payment: '125 346' },
    { name: 'Dara 3', Golden: '2', Silver: '3', Bronza: '2' ,Payment: '125 346'},
  ];

  return (
    <>
      <header>
        <TBHeader />
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
                  <TBSidebar />
                </div>
                <div className="col-md-9">
                  <div className="card shadow border-0">
                    <div className="card-body profile-details">
                        <h5 className="text-center"><b>Purchase History</b></h5>
                        <p className="text-center">@username</p>
                                  
                        {/* Table */}
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Event Name</th>
                              <th>Golden Tickets</th>
                              <th>Silver Tickets</th>
                              <th>Bronza Tickets</th>
                              <th>Payment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {events.map((event, index) => (
                              <tr key={index}>
                                <td>{event.name}</td>
                                <td>{event.Golden}</td>
                                <td>{event.Silver}</td>
                                <td>{event.Bronza}</td>
                                <td>{event.Payment}</td>
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

export default TBPurchaseHistory
