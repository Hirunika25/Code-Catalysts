import React from 'react'
import './OtherLogin.scss';
import { Link } from 'react-router-dom';
import MainHeader from '../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const OtherLogin = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

       
        <main>
          <div className="OL-LoginForm-container ">
            <div className="OL-Login-overlay">
              <h2><b>Login</b></h2>

              <br />

              <form>
                <input type="text" placeholder="Email / Username" required /><br />
                <input type="password" placeholder="Password" required />
                <div className="forgot-password">
                  <small><Link to="/ForgotPW">Forgot Password?</Link></small>
                </div>
                <button type="submit" >Sign In</button>
              </form>

            </div>
          </div>
        </main>
      
        <footer>
          <SubFooter />
        </footer>
    </>
  )
}

export default OtherLogin
