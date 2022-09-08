
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
import Photos from './components/lavisha/lavisha-jsx/Photos';




function App() {
  return (
    <>



      <Navigation />
      {/* <Wedding /> */}
      {/* <About_us /> */}

      {/* <Photos /> */}
      <Addcom />
      <Footer />

    </>
  );
}

export default App;
