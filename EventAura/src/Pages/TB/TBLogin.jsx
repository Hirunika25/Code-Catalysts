import React from 'react'
import './TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link } from 'react-router-dom';

const TBLogin = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className="TB-Loginform-container">
            <div className="TB-Login-overlay">
              <h2>Sign in to EventAURA</h2>
              <p>or continue as Guest</p>

              <form>
                <input type="text" placeholder="Email / Username" required />
                <input type="password" placeholder="Password" required />
                <div className="forgot-password">
                  <small><Link to="/ForgotPW">Forgot Password?</Link></small>
                </div>
                <button type="submit">Sign In</button>
              </form>

              <div className="divider"><span>or login with</span></div>
              
              <div className="social-login">
                <Link to="https://www.google.com" className="btn-google">
                  Google
                </Link>
                <Link to="https://www.facebook.com" className="btn-facebook">
                  Facebook
                </Link>
                <Link to="https://www.apple.com" className="btn-apple">
                  Apple
                </Link>
              </div>
              <div className="sign-up">
                <small>Don’t have an account? <Link to='/TBCreateAccount'>Create an account</Link></small>
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

export default TBLogin
