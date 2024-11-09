import React from 'react'
import './TBLogin.scss';
import MainHeader from './../../Components/Header/MainHeader';
import SubFooter from './../../Components/Footer/SubFooter';

const TBLogin = () => {
  return (
    <>
        <header>
          <MainHeader/> 
        </header>

        <main>
          <div className = 'container my-5 d-flex justify-content-center'>
            <div className = 'login-form my-5'>
              <div className = 'card  border-0 shadow'>
                <div className = 'card-body p-4'>
                  <form>
                    <h4 className = 'mb-3'>Login Here</h4>
                    <div className = 'mb-3'>
                      <label htmlFor ="" className = 'form-label'>Email</label>
                      <input type = "text" placeholder = 'Email' className = 'form-control' />
                    </div>

                    <div className = 'mb-3'>
                      <label htmlFor ="" className = 'form-label'>Email</label>
                      <input type = "text" placeholder = 'Email' className = 'form-control' />
                    </div>

                    <button className ='btn btn-primary'>Login</button>
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

export default TBLogin
