
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
// import Payment from './components/lavisha/lavisha-jsx/Payment';
import Photos from './components/user_profile/jsx/Photos';
import Main_profile from './components/user_profile/jsx/Main_profile';

import Profile_part from './components/user_profile/jsx/Profile_part';

import Profile_imgs from './components/user_profile/jsx/Profile_imgs';
import Form_1 from './components/user_profile/jsx/Form_1';
import Vendor_form from './components/user_profile/jsx/Vendor_form';





function App() {
  return (
    <>



      {/* <Navigation /> */}
      {/* <Wedding /> */}
      {/* <About_us /> */}

      {/* <Photos /> */}


      <Profile_part />
      <Main_profile />


      {/* <Vendor_form  />  */}

      {/* <Profile_imgs /> */}

      <Footer />

    </>
  );
}

export default App;
