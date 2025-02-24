import React from 'react'
import { Link } from 'react-router-dom';
import './ViewEvent.scss';
import EHHeader from './../../../Components/Header/EHHeader';
import SubFooter from './../../../Components/Footer/SubFooter';

const EHViewEvent = () => {
  return (
    <>

        <header>
          <EHHeader />
        </header>


          {/* Main Event Details Section */}
      <section className="event-details">
        {/* Banner Section */}
        <div className="banner">
          <h1 className="banner-title"><b>SKY HEROES</b></h1>
        </div>

        {/* Event Information Section */}
        <div className="info-section">
          <div className="info-grid">
            <div><b>Date:</b> <span>2025-04-01</span></div>
            <div><b>Time:</b> <span>6:30 PM</span></div>
            <div><b>Location:</b> <span>National Youth Council Auditorium</span></div>
            <div><b>Event Status:</b> <span>Active</span></div>
          </div>
        </div>

        {/* Attendee Count Section */}
        <div className="attendee-section">
          <b>Attendee Count:</b> <span>55</span>
          <a href="/path/to/list.pdf" download className="download-btnn">Download Attendee List</a> 
        </div>

        {/* Ticket Availability Section */}
        <div className="ticket-section">
          <b>Available Ticket Count</b>
          <div className="ticket-grid">
            <div>Golden <span className="ticket-count">05</span></div>
            <div>Silver <span className="ticket-count">10</span></div>
            <div>Bronze <span className="ticket-count">35</span></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Link to="/UpdateEvent" className="update-btnn">Update Event</Link>
          <Link to="/EHDeleteEvent" className="delete-btnn">Delete Event</Link>
        </div>
      </section>

        <footer>
          <SubFooter />
        </footer>
    </>
  )
}

export default EHViewEvent