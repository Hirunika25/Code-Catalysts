import React from 'react'
import './BuyTickets.scss';
import { Link } from 'react-router-dom';

import TBHeader from './../../Components/Header/TBHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import SearchBar from './../../Components/SearchBar';

const BuyTickets = () => {
  return (
    <>
       <header>
        <TBHeader />
      </header>

      {/*Search Bar */}
      <div className="search-bar-section">
        <SearchBar />
      </div>

      {/* Banner Section */}
      <div className="banner">
        <h1>SKY HEROES</h1>
      </div>

      {/* Event Details Section */}
      <section className="event-details">
        <h2>View Event Details</h2>
        <div className="ticket-categories">
          <h3>Ticket Categories</h3>
          <div className="ticket-option">
            <span>Golden Ticket</span>
            <span>15,000 LKR per ticket</span>
          </div>
          <div className="ticket-option">
            <span>Silver Ticket</span>
            <span>10,000 LKR per ticket</span>
          </div>
          <div className="ticket-option">
            <span>Bronze Ticket</span>
            <span>5,000 LKR per ticket</span>
          </div>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>

      {/* Cart Details */}
      <section className="cart-details">
        <h3>Cart Details</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Per Ticket</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Golden Ticket</td>
              <td>15,000 LKR</td>
              <td>2</td>
              <td>30,000 LKR</td>
            </tr>
            <tr>
              <td>Silver Ticket</td>
              <td>10,000 LKR</td>
              <td>3</td>
              <td>30,000 LKR</td>
            </tr>
            <tr>
              <td>Bronze Ticket</td>
              <td>5,000 LKR</td>
              <td>4</td>
              <td>20,000 LKR</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Total Amount</td>
              <td>80,000 LKR</td>
            </tr>
          </tfoot>
        </table>
        <div className="cart-actions">
          <button className="return-policies">Return Policies</button>
          <button className="continue">Continue</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-host">
        <h4>Get in touch with the host</h4>
        <p>We’re here to provide you the chance to connect with event organizers.</p>
      </section>

      <footer>
        <SubFooter />
      </footer>
    </>
  )
}

export default BuyTickets
