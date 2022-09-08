import React from 'react'
import "../css/Drawer.css"
import ham from "../images/ham.png"


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

<ul className="main-nav-ul">
    <li className="main-nav-li category">
            category

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
        city
        </li>

        <li className="main-nav-li">
        about
        </li>

        <li className="main-nav-li">
        signup/Login
        </li>
</ul>

<div className="ham ham-open">
                <img src={ham} alt="ham" onClick={toggleDrawer} />
            </div>



           
            


                 </div>    



           



        </>
    )
}

export default Drawer