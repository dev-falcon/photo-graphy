
import './App.css';




// navbar
import Navigation from './components/avinash/avinash-jsx/Navigation';

// for Wedding section
import Wedding from './components/avinash/wedding/Wedding';

// About us
import About_us from './components/devina/devina-jsx/About_us';

// Footer
import Footer from './components/devina/devina-jsx/Footer';
import Addcom from './components/lavisha/lavisha-jsx/another/Addcom';

import Photos from './components/user_profile/jsx/Photos';
import Main_profile from './components/user_profile/jsx/Main_profile';

import Profile_part from './components/user_profile/jsx/Profile_part';

import Profile_imgs from './components/user_profile/jsx/Profile_imgs';
import Form_1 from './components/user_profile/jsx/Form_1';
import Vendor_form from './components/user_profile/jsx/Vendor_form';
import HomePage from './components/Home_page/jsx/HomePage';

import Sumup from './components/Home_page/jsx/Sumup';
import Main_home_page from './components/Home_page/jsx/Main_home_page';
import Auth from './components/avinash/avinash-jsx/All_auth/jsx/Auth';
import { Vendors_page } from './components/vendorPage/jsx/Vendors_page';


import { GoogleOAuthProvider } from '@react-oauth/google';





function App() {
  return (
    <>


<GoogleOAuthProvider clientId="1091938599989-sb5ugo15okjrvfr11nl5n5tihtbo7rtl.apps.googleusercontent.com">
    <Navigation />




     

      



      

      



      {/* <Photos />   */}  {/*this is for profile part Photos only */}
       {/* <Profile_part />  this is for upper profile part */}

    {/* <Main_profile />    this is for lower profile part   */}




      <Footer />


      </GoogleOAuthProvider>;

    </>
  );
}

export default App;
