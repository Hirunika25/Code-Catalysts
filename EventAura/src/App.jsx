import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss'

import Home from './Pages/Home/Home';
import AboutUS from './Pages/AboutUS/AboutUS';

import BrowseEvent from './Pages/BrowseEvent/BrowseEvent';
import TBEventDetails from './Pages/BrowseEvent/TBEventDetails';
import BuyTickets from './Pages/BrowseEvent/BuyTickets';
import TBCart from './Pages/BrowseEvent/TBCart';

import EHProfile from './Pages/UserProfile/EH-Profiles/EHProfile';
import TBProfile from './Pages/UserProfile/TB-Profiles/TBProfile';

import HelpCentre from './Pages/HelpCentre/HelpCentre';
import ReviewPg from './Pages/ReviewPg/ReviewPg';

import ForgotPW from './Pages/ResetPW/ForgotPW';
import PWVerfication from './Pages/ResetPW/PWVerfication';
import SetNewPw from './Pages/ResetPW/SetNewPw';

import TBPurchaseHistory from './Pages/UserProfile/TB-Profiles/TBPurchaseHistory';
import TBSignOut from './Pages/UserProfile/TB-Profiles/TBSignOut';
import TBSidebar from './Pages/UserProfile/TB-Profiles/TBSidebar';
import TBChangePW from './Pages/UserProfile/TB-Profiles/TBChangePW';

import EHSidebar from './Pages/UserProfile/EH-Profiles/EHSidebar';
import EHSignOut from './Pages/UserProfile/EH-Profiles/EHSignOut';
import EventHistoryEH from './Pages/UserProfile/EH-Profiles/EventHistoryEH';
import EHChangePW from './Pages/UserProfile/EH-Profiles/EHChangePW';


import TBCreateAccount from './Pages/TB/TBCreateAccount';
import EHLogin from './Pages/EH/EHLogin';
import EHCreateAccount from './Pages/EH/EHCreateAccount';
import TBLogin from './Pages/TB/TBLogin';
import OtherLogin from './Pages/OtherLogin/OtherLogin';
import TBPayment from './Pages/BrowseEvent/TBPayment';










function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<AboutUS/>} />
            {/*<Route path='/contact' element = {<>} />*/}

            <Route path='/browse' element = {<BrowseEvent />} />
            <Route path='/TBEventDetails' element = {<TBEventDetails />} />
            <Route path='/BuyTickets' element = {<BuyTickets />} />
            <Route path='/TBCart' element = {<TBCart />} />
            <Route path='/TBPayment' element = {<TBPayment />} />

            <Route path='/EHaccount' element = {<EHProfile />} />
            <Route path='/TBaccount' element = {<TBProfile />} />
          
            {/*<Route path='/terms' element = {<>} />*/}
            {/*<Route path='/privacy' element = {<>} />*/}
            {/*<Route path='/cookies' element = {<>} />*/}
            {/*<Route path='/status' element = {<>} />*/}

            {/*<Route path='/developers' element = {<>} />*/}
            {/*<Route path='/license' element = {<>} />*/}
            {/*<Route path='/privacy-terms' element = {<>} />*/}


            {/*<Route path='/inquiries' element = {<>} />*/}
            {/*<Route path='/return-policies' element = {<>} />*/}
            {/*<Route path='/HostContact' element = {<>} />*/}

            <Route path='/help' element = {<HelpCentre/>} />
            <Route path='/review' element = {<ReviewPg/>} />

            <Route path='/forgotPW' element = {<ForgotPW />} />
            <Route path='/PWverification' element = {<PWVerfication />} />
            <Route path='/SetNewPW' element = {<SetNewPw />} />

            <Route path='/TBChangePW' element = {<TBChangePW />} />
            <Route path='/TBPurchaseHistory' element = {<TBPurchaseHistory />} />
            <Route path='/TBSignout' element = {<TBSignOut />} />
            <Route path='/TBSidebar' element = {<TBSidebar />} />

            <Route path='/EHChangePW' element = {<EHChangePW />} />
            <Route path='/EH-EventHistory' element = {<EventHistoryEH />} />
            <Route path='/EHSignout' element = {<EHSignOut />} />
            <Route path='/EHSidebar' element = {<EHSidebar />} />

            <Route path='/TBLogin' element = {<TBLogin />} />
            <Route path='/TBCreateAccount' element = {<TBCreateAccount />} />
            <Route path='/EHLogin' element = {<EHLogin />} />
            <Route path='/EHCreateAccount' element = {<EHCreateAccount />} />
            <Route path='/OtherLogin' element = {<OtherLogin />} />

            
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
