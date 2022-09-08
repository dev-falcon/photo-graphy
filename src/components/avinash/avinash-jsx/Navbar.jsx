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

function Navbar({ toggleDrawer, isOpen }) {
    return (
        <>
            <Router>

                <div className="Navbar">

                    <div className="logo-Part">
                        <h2>
                            <span className='fst-part'>
                                Shree { }
                            </span>
                            <span className='second-part'>

                                photoGraphy
                            </span>

                        </h2>
                    </div>


                    <div className="main-nav">

                        <ul className="main-nav-ul">
                            <li className="main-nav-li category">
                                <Link to="/category">
                                    category

                                </Link>



                                <ul className="inner-ul">
                                    <li className="inner-li">abc
                                    </li>
                                    <li className="inner-li">abc
                                    </li>
                                    <li className="inner-li">abc
                                    </li>
                                    <li className="inner-li">abc
                                    </li>
                                </ul>
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
                                <Link to="/login">
                                    Login/Signup
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
                    <Route path="/" element={<Photos />}>

                    </Route>
                    <Route path="/category" element={<Wedding />}>

                    </Route>


                    {/* </Route> */}
                </Routes>


            </Router>

        </>
    )
}

export default Navbar