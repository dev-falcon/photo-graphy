import React from 'react'
import "../css/Drawer.css"
import ham from "../images/ham.png"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Wedding from '../wedding/Wedding';
import Photos from '../../lavisha/lavisha-jsx/Photos';
import Addcom from '../../lavisha/lavisha-jsx/another/Addcom';
import About_us from '../../devina/devina-jsx/About_us';


const Drawer = ({ isOpen, toggleDrawer, drawer, offDrawer }) => {
    return (
        <>

            {
                isOpen && <div className="main-drawer" onClick={toggleDrawer}  >




                </div>

            }


            <div className="drawer-open" style={{
                 transform: `translateX(${(isOpen ? "0" : "-100%")})`
            }}>







<div className="logo-Part">
               <h2>
               <span className='fst-part'>
                Shree { }
            </span>
            <span className='second-part'>

                 PhotoGraphy
            </span>

               </h2>
            </div>

            <Router>


<ul className="main-nav-ul">
    <li className="main-nav-li category">
            <Link to="category">
                Category
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
        <Link to="/signup">
            Login/SignUP
        </Link>
        </li>
</ul>








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


<div className="ham ham-open">
                <img src={ham} alt="ham" onClick={toggleDrawer} />
            </div>



           
            


                 </div>    



           



        </>
    )
}

export default Drawer