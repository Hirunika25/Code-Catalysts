import React from 'react'
import './OngoingEvents.scss';
import { Link } from 'react-router-dom';

import EHHeader from './../../Components/Header/EHHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import Banner from '../../assets/banner.png';

const OngoingEvents = () => {
  return (
    <>

      <header>
          <EHHeader />
      </header>

       {/*Body Content */}
       <section className = 'section-2 bg-light py-5'>
        <div className = 'container'>

          {/*1st Row*/}
          <div className = 'row pt-3'>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                  <div className='event-details'>
                    <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                    <p className='event-location'>National Youth Council</p>
                  </div>
                  <div className='event-title'>
                    <h2><b>Sky Heroes</b></h2>
                  </div>
                  <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                      <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                      <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                  <div className='event-details'>
                     <p className='event-date-time' >1st of April 2024 | 06.30 PM</p>
                     <p className='event-location'>National Youth Council</p>
                  </div>
                <div className='event-title'>
                    <h2><b>Sky Heroes</b></h2>
                </div>
                <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                    <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                    <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                </div>
              </div>
             </div>
            </div>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                    <div className='event-details'>
                      <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                      <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                      <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/*2nd Row*/}
          <div className = 'row pt-3'>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                    <div className='event-details'>
                        <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                        <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                        <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          
                    </div>
                </div>
              </div>
            </div>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                  <div className='event-details'>
                      <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                      <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                      <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          <span className="remaining-tickets-link">Remaining Tickets</span>
                    </div>
                </div>
              </div>
            </div>
            <div className = 'col-md-4'>
              <div className = 'card shadow border-0'>
                <div className = 'card-img-top'>
                    <img src = {Banner} alt="Banner1" className = 'w-100'/>
                </div>
                <div className = 'card-body p-4'>
                   <div className='event-details'>
                      <p className='event-date-time' > 1st of April 2024 | 06.30 PM</p>
                      <p className='event-location'>National Youth Council</p>
                    </div>
                    <div className='event-title'>
                      <h2><b>Sky Heroes</b></h2>
                    </div>
                    <div className = 'event-footer d-flex justify-content-between align-items-center mt-3'>
                          <p className='event-price'>2,000 LKR <span className="price-subtext"><br/>upwards</span></p>
                          <Link to = '/TBEventDetails' className='btn btn-primary'>Book Now</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <footer>
          <SubFooter />
        </footer>
    </>
  )
}

export default OngoingEvents
