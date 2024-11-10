import React from 'react'
import './TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link } from 'react-router-dom'; 

const TBCreateAccount = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">
              <h2>Create your Account</h2>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Telephone No" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />

                <button type="submit">Continue</button>

                <div className="sign-up">
                  <small> <Link to='/terms' className="custom-link">Terms and Conditions</Link></small>
                </div>

              </form>
              
              <hr className="custom-hr" />
              
              <div className="sign-up">
                <small>Already Have an account ? <Link to='/TBLogin'>Sign in</Link></small>
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

export default TBCreateAccount
