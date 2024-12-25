import React from 'react'
import profilelogo from '../../../assets/Profile-logo.png';
import '../profile.scss';
import AdminFooter from './../../../Components/Footer/AdminFooter';
import OtherSideBar from './OtherSideBar';
import UserHeader from './../../../Components/Header/UserHeader';

const OtherSignOut = () => {
  return (
    <>
    <header>
      <UserHeader />
    </header>

    <main>
      <div className="container my-5">
            <div className="card shadow border-0">
              <div className="card-body text-center">
                  <h1><b>Hi Anura!</b></h1>
                  <h4><b>Welcome to Your Profile</b></h4>
                  <img src= {profilelogo} alt="Avatar"className="profile-avatar" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-3">
                <OtherSideBar />
              </div>
              <div className="col-md-9">
                <div className="card shadow border-0">
                  <div className="card-body profile-details">
                      <h5 className="text-center"><b>Do you want to sign out?</b></h5>
                      <p className="text-center">@username</p><br />
                      <h5 className="text-center">Are you sure ?</h5><br />
                    <div className=" text-end">
                        <button className="btn btn-primary mt-3 me-2">Yes,Sign Out</button>
                        <button className="btn btn-secondary mt-3">Keep,Signed in</button>
                      </div>
                  </div>
                  
                </div>
              </div>
          </div>
      </div>
    </main>

    <footer>
      <AdminFooter />
    </footer>
  </>
  )
}

export default OtherSignOut