import React from 'react'
import "../css/Navbar.css"
import ham from "../images/ham.png"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import About_us from '../../devina/devina-jsx/About_us';
import Addcom from '../../lavisha/lavisha-jsx/another/Addcom';
import Photos from '../../lavisha/lavisha-jsx/Photos';
import Wedding from '../wedding/Wedding';
import Auth from './Auth';
import Main_home_page from '../../Home_page/jsx/Main_home_page';
import Vendor_form from '../../user_profile/jsx/Vendor_form';
import { Vendors_page } from '../../vendorPage/jsx/Vendors_page';

function Navbar({ toggleDrawer, isOpen }) {
    return (
        <>
            <Router>

                <div className="Navbar">

                    <div className="logo-Part">
                        <h2>
                            <span className='fst-part'>
                                <Link to='/'>

                                    Shree { }
                                </Link>
                            </span>
                            <span className='second-part'>

                                <Link to='/'>

                                    photoGraphy
                                </Link>
                            </span>

                        </h2>
                    </div>


                    <div className="main-nav">

                        <ul className="main-nav-ul">
                            <li className="main-nav-li category">
                                <Link to="/vendors">
                                    Vendors

                                </Link>



                                {/* <ul className="inner-ul">
                                    <li className="inner-li">Wedding
                                    </li>
                                    <li className="inner-li">Pre- Wedding
                                    </li>
                                    <li className="inner-li">Enagement
                                    </li>
                                    <li className="inner-li">Maternity
                                    </li>
                                    <li className="inner-li">Birthday Shoot
                                    </li>

                                    <li className="inner-li">Baby Shoot
                                    </li>
                                </ul> */}
                            </li>

                            <li className="main-nav-li">
                                <Link to="/city">
                                    City
                                </Link>
                            </li>

                            <li className="main-nav-li">
                                <Link to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="main-nav-li">
                                <Link to="/signup">
                                    Login/Signup
                                </Link>
                            </li>


                            <li className="main-nav-li">
                                <Link to="/signup_as_vendor">
                                    Signup as Vendor
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="ham">
                        <img src={ham} alt=" ham" onClick={toggleDrawer} />
                    </div>





                </div>


                <Routes>
                    <Route path="/about" element={<About_us />}>
                        {/* <About_us /> */}
                    </Route>
                    <Route path="/city" element={<Addcom />}>

                    </Route>
                    <Route path="/" element={<Main_home_page />}>

                    </Route>
                    <Route path="/vendors" element={<Vendors_page />}>

                    </Route>

                    <Route path="/signup" element={<Auth />}>



                    </Route>

                    <Route path="/signup_as_vendor" element={<Vendor_form />}>



                    </Route>


                    
                </Routes>


            </Router>

        </>
    )
}

export default Navbar