import React from 'react'
import './EHHome.scss';
import { Link } from 'react-router-dom';

import EHHeader from './../../Components/Header/EHHeader';
import SubFooter from './../../Components/Footer/SubFooter';

import Cover01 from '../../assets/coverImage01.png';
import Cover02 from '../../assets/coverImage05.png';
import Cover03 from '../../assets/coverImage02.png';

const EHHome = () => {
  return (
    <>
        <header>
            <EHHeader />
        </header>
       
        <h1 className="text-center my-5">Monitor your work here!</h1>

     
        <div className="row pt-5 px-3 gx-5">  {/* Added padding and gap between columns */}

              <div className="col-md-4 mb-4 position-relative"> {/* Added position-relative */}
                <div className="card shadow border-0">
                  <div className="card-img-top">
                      <img src={Cover01} alt="Banner1" className="w-100"/>
                      <Link to="/OngoingEvents" className="image-overlay">Ongoing Events</Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                    <img src={Cover02} alt="Banner2" className="w-100"/>
                    <Link to="/EHaccount" className="image-overlay">Go to Profile</Link>
                  </div>
              </div>
              </div>

              <div className="col-md-4 mb-4 position-relative">
                <div className="card shadow border-0">
                  <div className="card-img-top">
                      <img src={Cover03} alt="Banner3" className="w-100"/>
                      <Link to="/create" className="image-overlay">Create New Event</Link>
                  </div>
                </div>
              </div>

          </div>


        <footer>
            <SubFooter />
        </footer>
    
    </>
  )
}

export default EHHome
