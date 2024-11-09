import React from 'react'
import './EHLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';
import { Link } from 'react-router-dom';

const EHCreateAccount = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main className="login-page d-flex align-items-stretch">
          <div className="image-section"></div>
          
          <div className="login-form-section d-flex justify-content-center align-items-center">
            <div className="login-form">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h2 className="text-center mb-4"> Create Your account</h2>

                  <form>

                    <div className="mb-3">
                      <input type="text" placeholder="Name" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="email" placeholder="Email" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type=" text" placeholder="Telephone No" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="password" placeholder="Password" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <input type="password" placeholder=" Confirm Password" className="form-control" />
                    </div>

                    <button className="btn btn-primary w-100 mb-3">Continue</button>
                    
                    <div className="mb-3 text-center"><small>
                      < Link to= '/terms' >Terms and Conditions</Link>
                    </small></div >

                    <hr />

                    <div className="text-center mt-4">
                      <small>Already have an account? <Link to='/EHLogin'> Sign in</Link></small>
                    </div>

                  </form>

                </div>
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

export default EHCreateAccount
