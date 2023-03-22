import React from 'react'
import "../css/Drawer.css"
import ham from "../images/ham.png"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import Addcom from '../../lavisha/lavisha-jsx/another/Addcom';
import About_us from '../../devina/devina-jsx/About_us';
import { Vendors_page } from '../../vendorPage/jsx/Vendors_page';
import Vendor_form from '../../user_profile/jsx/Vendor_form';
import Main_home_page from '../../Home_page/jsx/Main_home_page';


const Drawer = ({ isOpen, toggleDrawer, drawer, offDrawer }) => {
    return (
        <>
{/* 
            {
                isOpen && <div className="main-drawer" onClick={toggleDrawer}  >




                </div>

            } */}


            <div className="drawer-open">







                <div className="logo-Part">
                    <h2>
                        <span className='fst-part'>

                            



                                Shri { }
                            

                        </span>
                        <span className='second-part'>

                            


                                PhotoGraphy
                            
                        </span>

                    </h2>
                </div>

                <Router>


                    <ul className="main-nav-ul">
                        <li className="main-nav-li category">
                            <Link to="/vendors">
                                Vendors
                            </Link>


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
                                Login/SignUP
                            </Link>
                        </li>


                        <li className="main-nav-li">
                            <Link to="/signup_as_vendor">
                                Signup as vendor
                            </Link>
                        </li>
                    </ul>








                    <Routes>
                        <Route path="/about" element={<About_us />}>
                            
                        </Route>
                        <Route path="/city" element={<Addcom />}>

                        </Route>
                        <Route path="/" element={<Main_home_page />}>

                        </Route>
                        <Route path="/Vendors" element={<Vendors_page />}>

                        </Route>

                        <Route path="/signup_as_vendor" element={<Vendor_form />}>

                        </Route>



                        
                    </Routes>

                </Router>


                <div className="ham ham-open">
                    <img src={ham} alt="ham" onClick={toggleDrawer} />
                </div>







            </div>







        </>
    )
}

export default Drawer