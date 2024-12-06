import React from 'react'
import { Link } from 'react-router-dom';

import './ViewEvent.scss';
import UserHeader from './../../../Components/Header/UserHeader';
import AdminFooter from './../../../Components/Footer/AdminFooter';
const ViewEvent = () => {
  return (
    <>

        <header>
          <UserHeader />
        </header>

        <section className="event-Details">
            <div className="banner">
            <h1 className="banner-title"><b>SKY HEROES</b></h1>
            </div>

            <div className="event-info">
          <div className="event-meta">
            <div className="meta-item">
              <span>Date:</span> <strong>December 10, 2024</strong>
            </div>
            <div className="meta-item">
              <span>Time:</span> <strong>6:00 PM</strong>
            </div>
            <div className="meta-item">
              <span>Location:</span> <strong>Grand Arena</strong>
            </div>
            <div className="meta-item">
              <span>Event Status:</span> <strong>Active</strong>
            </div>
            <div className="attendee-count">
              <span>Attendee Count: </span> <strong>55</strong>
              <button className="download-btn">Download Attendee List</button>
            </div>
          </div>

          <div className="ticket-info">
            <h3>Available Ticket Count</h3>
            <div className="ticket-types">
              <div className="ticket-type">Golden: <span>05</span></div>
              <div className="ticket-type">Silver: <span>15</span></div>
              <div className="ticket-type">Bronze: <span>35</span></div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="update-btn">Update Event</button>
            <button className="delete-btn">Delete Event</button>
          </div>
        </div>
        </section>

        <footer>
          <AdminFooter />
        </footer>
    </>
  )
}

export default ViewEvent