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
import EHChangePW from './Pages/UserProfile/EH-Profiles/EHChangePW';

import EHHistory from './Pages/UserProfile/EH-Profiles/EH-EventHistory/EHHistory';
import EHOngoingHistory from './Pages/UserProfile/EH-Profiles/EH-EventHistory/EHOngoingHistory';
import EHPendingPaymentsHistory from './Pages/UserProfile/EH-Profiles/EH-EventHistory/EHPendingPaymentsHistory';
import EHPendingRequests from './Pages/UserProfile/EH-Profiles/EH-EventHistory/EHPendingRequests';
import EHRejectedHistory from './Pages/UserProfile/EH-Profiles/EH-EventHistory/EHRejectedHistory';

import TBLogin from './Pages/TB/TBLogin';
import TBCreateAccount from './Pages/TB/TBCreateAccount';

import EHLogin from './Pages/EH/EHLogin';
import EHCreateAccount from './Pages/EH/EHCreateAccount';
import CreateEvent from './Pages/EH/CreateEvent';
import EHCart from './Pages/EH/EHCart';
import EHHome from './Pages/EH/EHHome';
import OngoingEvents from './Pages/EH/OngoingEvents';
import UpdateEvent from './Pages/EH/UpdateEvent';

import OtherLogin from './Pages/OtherLogin/OtherLogin';
import PaymentGate from './Pages/PaymentGate/PaymentGate';

import UserHome from './Pages/CommonPages/UserHome/UserHome';
import AdminOngoing from './Pages/CommonPages/AdminOngoing';
import UserDetails from './Pages/CommonPages/UserDetails/UserDetails';

import ViewEvent from './Pages/CommonPages/ViewEvent/ViewEvent';
import EHViewEvent from './Pages/CommonPages/ViewEvent/EHViewEvent';
import ManagerViewE from './Pages/CommonPages/ViewEvent/ManagerViewE';

import DeleteEvent from './Pages/CommonPages/DeleteEvent/DeleteEvent';
import EHDeleteEvenet from './Pages/CommonPages/DeleteEvent/EHDeleteEvenet';

import OtherSideBar from './Pages/UserProfile/Other-User-Profiles/OtherSideBar';
import OtherProfile from './Pages/UserProfile/Other-User-Profiles/OtherProfile';
import OtherChangePW from './Pages/UserProfile/Other-User-Profiles/OtherChangePW';
import OtherSignOut from './Pages/UserProfile/Other-User-Profiles/OtherSignOut';

import AddNewMemeber from './Pages/Developer-pages/AddNewMemeber';
import VerificationPg01 from './Pages/Developer-pages/VerificationPg01';
import VerficationPg02 from './Pages/Developer-pages/VerficationPg02';



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
            <Route path='/EHSignout' element = {<EHSignOut />} />
            <Route path='/EHSidebar' element = {<EHSidebar />} />
            
            <Route path='/EHHistory' element = {<EHHistory />} />
            <Route path='/EHOngoing' element = {< EHOngoingHistory/>} />
            <Route path='/EHPendingPayments' element = {<EHPendingPaymentsHistory />} />
            <Route path='/EHPendingRequests' element = {<EHPendingRequests />} />
            <Route path='/EHRejected' element = {< EHRejectedHistory/>} />

            <Route path='/OtherSideBar' element = {<OtherSideBar/>} />
            <Route path='/OtherProfile' element = {<OtherProfile/>} />
            <Route path='/OtherChangePW' element = {<OtherChangePW/>} />
            <Route path='/OtherSignOut' element = {<OtherSignOut/>} />
              

            <Route path='/TBLogin' element = {<TBLogin />} />
            <Route path='/TBCreateAccount' element = {<TBCreateAccount />} />

            <Route path='/EHLogin' element = {<EHLogin />} />
            <Route path='/EHCreateAccount' element = {<EHCreateAccount />} />
            <Route path='/create' element = {<CreateEvent />} />
            <Route path='/EHCart' element = {<EHCart />} />
            <Route path='/EHHome' element = {<EHHome />} />
            <Route path='/OngoingEvents' element = {<OngoingEvents />} />
            <Route path='/UpdateEvent' element = {<UpdateEvent />} />

            <Route path='/OtherLogin' element = {<OtherLogin />} />
            <Route path='/PaymentGate' element = {<PaymentGate />} />

            <Route path='/UserHome' element = {<UserHome />} />
            <Route path='/AdminOngoing' element = {<AdminOngoing />} />
            <Route path='/UserDetails' element = {<UserDetails/>} />

            <Route path='/ViewEvent' element = {<ViewEvent/>} />
            <Route path='/EHViewEvent' element = {<EHViewEvent/>} />
            <Route path='/ManagerViewEvent' element = {<ManagerViewE/>} />

            <Route path='/DeleteEvent' element = {<DeleteEvent/>} />
            <Route path='/EHDeleteEvent' element = {<EHDeleteEvenet/>} />

            <Route path='/AddNewMember' element = {<AddNewMemeber/>} />
            <Route path='/VerificationPg01' element = {<VerificationPg01/>} />
            <Route path='/VerificationPg02' element = {<VerficationPg02/>} />


          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
