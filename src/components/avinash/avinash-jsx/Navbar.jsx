import React from 'react'
import "../css/Navbar.css"
import ham from "../images/ham.png"

function Navbar({toggleDrawer, isOpen}) {
  return (
    <>
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
            </div>

            <div className="ham">
                <img src={ham} alt=" ham" onClick={toggleDrawer} />
            </div>


           
        </div>
    </>
  )
}

export default Navbar