import React from 'react'
import SubFooter from './../../Components/Footer/SubFooter';
import EHHeader from './../../Components/Header/EHHeader';
import './CreateEvent.scss';
const CreateEvent = () => {
  return (
    <>
         <header>
            <EHHeader />
        </header>
       
       {/*form */}
        <main className="create-event">

          <h1><b>Create Event</b></h1>

          <form className="event-form">
            <section className="event-details">
              <div className="header-container">
                <h2>1. Event Details</h2>
               
              </div>
              <label>Event Title*</label>
              <input type="text" placeholder="Enter event title" />
              
              {/*<label>Date*</label>
              <input type="date" />
              
              
              {/*<label>Time*</label>
              <div className="time-inputs">
                <input type="time" placeholder="Start" />
                <input type="time" placeholder="End" />
              </div>
              
              <label>City*</label>
              <input type="text" placeholder="Enter city" />*/}

              <label>Date*</label>
              <div className="horizontal-group">
                  <input type="date" />
                  <div className="time-inputs">
                      <input type="time" placeholder="Start" />
                      <input type="time" placeholder="End" />
                  </div>
              </div>

              <label>City*</label>
              <div className="horizontal-group">
                  <input type="text" placeholder="Enter city" />
                  <input type="text" placeholder="Enter venue" />
              </div>
              
              <label>Venue*</label>
              <input type="text" placeholder="Enter venue" />
              
              <label>Location*</label>
              <input type="text" placeholder="Enter location" />
              
              <label>Agenda*</label>
              <input type="text" placeholder="Enter agenda" />
              
              <label>Event Banner*</label>
              <input type="file" />
              
              <label>Event Video</label>
              <input type="file" />
              
              <label>Event Description*</label>
              <textarea placeholder="Enter event description"></textarea>
              
              <label>Event Organizer*</label>
              <input type="text" placeholder="Enter organizer's name" />
              
              <label>Artists*</label>
              <input type="text" placeholder="Enter artists" />
              <button type="button">Add Artist</button>
              <button type="button">Remove Artist</button>
            </section>

            <section className="ticket-categories">

              <div className="header-container">
                <h2>2. Tickets Categories</h2>
              </div>

              <p>Fill ticket count:</p>
              <div className="ticket-types">
                <div>
                  <label>Golden Tickets</label>
                  <input type="number" placeholder="Count" />
                  <input type="number" placeholder="Price" />
                </div>
                <div>
                  <label>Silver Tickets</label>
                  <input type="number" placeholder="Count" />
                  <input type="number" placeholder="Price" />
                </div>
                <div>
                  <label>Bronze Tickets</label>
                  <input type="number" placeholder="Count" />
                  <input type="number" placeholder="Price" />
                </div>
              </div>
              <button type="button">Add Tickets</button>
            </section>

            <button type="submit" className="submit-btn">Submit event creation request</button>
          </form>
      </main>

        <footer>
            <SubFooter />
        </footer>
    </>

  )
}

export default CreateEvent
