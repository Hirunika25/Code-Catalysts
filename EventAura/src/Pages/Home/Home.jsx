import React from 'react'
import MainHeader from './../../Components/Header/MainHeader';
import MainFooter from './../../Components/Footer/MainFooter';
import './Home.scss'
import { Link } from 'react-router-dom';

import HomeImg1 from '../../assets/Home-1.png';
import HomeImg2 from '../../assets/Home-2.png';
import FBIcon from '../../assets/Logos/fb.png';
import InstargramIcon from '../../assets/Logos/Instargram.png';
import XIcon from '../../assets/Logos/logo X.png';
import LinkedInIcon from '../../assets/Logos/linkedIn.png';
{/*import WhiteCircle from '../../assets/Logos/Eclipse white.svg';
import BlueCircle from '../../assets/Logos/Eclipse blue.svg';*/}
import ReviewIcon from '../../assets/Logos/review.png';

const Home = () => {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      
      <main>

        {/*Section 01 */}
        <section className = 'section-1'>
          <div className = 'topic d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-center'>
                <h1>FIND YOUR NEXT <br />AWESOME EVENT <br />HERE!</h1>
                <p>Let EventAURA help you find the event that's just right for you! <br />Browse our awesome events for fun things to do in your area.</p>
                <Link to='/browse'className='btn btn-primary'>Browse Event</Link>
                <br /><Link to='/TBLogin'> #TB Login pg</Link> {/*Do not remove this. */}
                <br /><Link to='/EHLogin'> #EH Login pg</Link> {/*Do not remove this. */}
                <br /><Link to='/OtherLogin'> #Admin/Developer/Manager Login pg</Link> {/*Do not remove this. */}

              </div>
            </div>
          </div>
        </section>


        {/*Section 02 */}
        <section className = 'section-2'>
        <div className = 'topic d-flex align-items-center'>
          <div className='container-fluid'>
            <div className='text-center'>
              <h1>LOOKING TO PUBLISH YOUR EVENT?</h1>
              <p>PLanning your events and selling tickets has never benn easier with <br />EventAura's super user-friendly platform by your side!</p>
              <Link to='/create' className='btn btn-primary'>Create Event</Link >
            </div>
          </div>
        </div>
        <hr className='centered-line' />
        </section>


        {/*Section 03 */}
        <section className = 'section-3 py-5'>
            <div className= 'container py-5'>

            <div className = 'row'>
                <div className='col-md-6 '>
                  <h3>EASIEST EVENT HANDLING AND TICKETING PLATFORM</h3>
                  <p>Planning your events and selling tickets has never been<br />
                   easier with EventAUra's super user-friendly platform <br />
                   by your side</p>
                  <Link to = '/about' className='btn btn-primary'>ABOUT US</Link >
                </div>
                <div className='col-md-6 '>
                    <img src = {HomeImg2} alt = "Img2" className='Img'/>
                </div>
            </div>    
            

            <div className = 'row'>
                <div className='col-md-6 '>
                    <img src = {HomeImg1} alt = "Img1" className='Img'/>
                </div>
                <div className='col-md-6 '>
                  <h2>NEED HELP</h2>
                  <p>Our user-friendly TicketLeap help center is always <br />
                  buzzing with the latest updates to empower you to plan <br />
                  your next event with confidence! It's also a handy <br />
                  resource to use to answer ticket buyer questions.Trust <br />
                  us to provide the unwavering support you need for <br />
                  a successful event!</p>
                  <Link to = '/help' className='btn btn-primary'>HELP CENTRE</Link >
                </div>
            </div>

            </div>
        </section>


        {/*Section 04 */}
        <section className = 'section-4'>
          <div className = 'topic d-flex align-items-center'>
            <div className='container-fluid'>
              <div className='text-center'>
                <h1>STAY UPDATED</h1>
                <div className='d-flex justify-content-center mt-4'>
                    
                    <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={FBIcon} alt='Facebook' className='social-icon mx-5' /></Link >

                    <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={InstargramIcon} alt='Instagram' className='social-icon mx-5' /></Link >

                    <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={XIcon} alt='X' className='social-icon mx-5' /></Link >

                    <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} alt='LinkedIn' className='social-icon mx-5' /></Link >
                    
                </div>
                <div className ='ReviewLink'>
                    <Link to ='/review' className='Review '>Leave Us a Review</Link >
                    <img src={ReviewIcon} alt='ReviewIcon' className='Review-icon mx-2' />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <MainFooter />
      </footer>
    </>
  )
}

export default Home
