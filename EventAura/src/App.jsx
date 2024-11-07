import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.scss'

import Home from './Pages/Home/Home';
import AboutUS from './Pages/AboutUS/AboutUS';
import CreateEvent from './Pages/CreateEvent/CreateEvent';
import BrowseEvent from './Pages/BrowseEvent/BrowseEvent';

import AdminProfile from './Pages/UserProfile/AdminProfile';
import DeveloperProfile from './Pages/UserProfile/DeveloperProfile';
import EHProfile from './Pages/UserProfile/EH-Profiles/EHProfile';
import ManagerProfile from './Pages/UserProfile/ManagerProfile';
import TBProfile from './Pages/UserProfile/TB-Profiles/TBProfile';

import A_Dashboard from './Pages/Admin/A_Dashboard';
import D_Dasboard from './Pages/Developer/D_Dasboard';
import M_Dashboard from './Pages/Manager/M_Dashboard';

import Ongoing from './Pages/OngoingEvents/Ongoing';
import PendingRequests from './Pages/PendingRequests/PendingRequests';

import HelpCentre from './Pages/HelpCentre/HelpCentre';
import ReviewPg from './Pages/ReviewPg/ReviewPg';
import EventDetails from './Pages/EventDetails/EventDetails';

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



function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<AboutUS/>} />
            <Route path='/browse' element = {<BrowseEvent />} />
            <Route path='/create' element = {<CreateEvent />} />
            {/*<Route path='/contact' element = {<>} />*/}
            
            <Route path='/admin' element = {<AdminProfile />} />
            <Route path='/developer' element = {<DeveloperProfile />} />
            <Route path='/EHaccount' element = {<EHProfile />} />
            <Route path='/manager' element = {<ManagerProfile />} />
            <Route path='/TBaccount' element = {<TBProfile />} />
          
            {/*<Route path='/terms' element = {<>} />*/}
            {/*<Route path='/privacy' element = {<>} />*/}
            {/*<Route path='/cookies' element = {<>} />*/}
            {/*<Route path='/status' element = {<>} />*/}

            {/*<Route path='/developers' element = {<>} />*/}
            {/*<Route path='/license' element = {<>} />*/}
            {/*<Route path='/privacy-terms' element = {<>} />*/}

            <Route path='/AdimnDashboard' element = {<A_Dashboard/>} />
            <Route path='/DeveloperDashboard' element = {<D_Dasboard/>} />
            <Route path='/ManagerDashboard' element = {<M_Dashboard/>} />

            <Route path='/ongoing' element = {<Ongoing/>} />
            <Route path='/pendingRequests' element = {<PendingRequests/>} />
            {/*<Route path='/inquiries' element = {<>} />*/}
            <Route path='/eventDetails' element = {<EventDetails/>} />

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
           

            
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
