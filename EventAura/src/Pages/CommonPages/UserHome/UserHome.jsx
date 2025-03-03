import React from 'react'

import UserHeader from './../../../Components/Header/UserHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';

import './UserHome.scss';
import { Link } from 'react-router-dom';

import Cover01 from '../../../assets/Tile 1.jpg';
import Cover02 from '../../../assets/Tile 2.jpg';
import Cover03 from '../../../assets/Tile 3.jpg';
import Cover04 from '../../../assets/Tile 4.jpg';
import Cover05 from '../../../assets/Tile 5.jpg';
import Cover06 from '../../../assets/Tile 6.jpg';



const UserHome = () => {
  return (
    <>
        <header>
          <UserHeader />
        </header>

       
        <div className="row pt-5 px-3 gx-5">  
          
              <div className="col-md-4 mb-4 position-relative"> 
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                      <img src={Cover01} alt="Banner1" className="w-100"/>
                      <Link to="/AdminOngoing" className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                    <img src={Cover02} alt="Banner2" className="w-100"/>
                    <Link to="/" className="image-overlay">Pending Requests</Link>
                  </div>
              </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="cards shadow border-0">
                  <div className="cards-img-top">
                      <img src={Cover03} alt="Banner3" className="w-100"/>
                      <Link to="/" className="image-overlay">History</Link>
                  </div>
                </div>
              </div>
          </div>
          
            <div className="row pt-5 px-3 gx-5">  
                <div className="col-md-4 mb-4 position-relative"> 
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            <img src={Cover04} alt="Banner4" className="w-100"/>
                            <Link to="/UserDetails" className="image-overlay">User Details</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                        <img src={Cover05} alt="Banner5" className="w-100"/>
                        <Link to="/" className="image-overlay">Reviews</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mb-4 position-relative">
                    <div className="cards shadow border-0">
                        <div className="cards-img-top">
                            <img src={Cover06} alt="Banner6" className="w-100"/>
                            <Link to="/" className="image-overlay">Inquiries</Link>
                        </div>
                    </div>
                </div>
            </div>


        <footer>
          <AdminFooter />
      </footer>
    </>

      
  )
}

export default UserHome
