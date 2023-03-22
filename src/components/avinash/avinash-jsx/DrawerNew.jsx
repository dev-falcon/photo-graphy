import React, { useEffect } from 'react'
import "../css/Drawer.css"





import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";

import ham from "../images/ham.png"
import Navbar from './Navbar';






const DrawerNew = ({isOpen, toggleDrawer}) => {


    // useEffect(() => {
    //     if(toggleDrawer){
    //        window.location.reload(false)
    //     }
        
         
    //     }, [toggleDrawer])
        
  return (
    <>

{
    isOpen && <div className="backdrop"  onClick={toggleDrawer}>

</div>
}
    

    <div className="SDrawer">

    








                <Router>


                    <ul className="main-nav-ul">
                        <li className="main-nav-li category" onClick={
                            ()=>{
                                window.location.reload();
                            }
                        }>
                            <Link to="/vendors" onClick={ 
                                toggleDrawer
                               
                            
                            
                            
                            } >
                                Vendors
                            </Link>


                        </li>

                        <li className="main-nav-li"
                        onClick={
                            ()=>{
                                window.location.reload();
                            }}
                        >
                            <Link to="/city" onClick={toggleDrawer}>
                                City
                            </Link>
                        </li>

                        <li className="main-nav-li"
                         onClick={
                            ()=>{
                                window.location.reload();
                            }}
                        >
                            <Link to="/about" onClick={toggleDrawer}>
                                About
                            </Link>
                        </li>

                        <li className="main-nav-li"
                         onClick={
                            ()=>{
                                window.location.reload();
                            }}
                        >
                            <Link to="/signup" onClick={toggleDrawer}>
                                Login/SignUP
                            </Link>
                        </li>


                        <li className="main-nav-li"
                         onClick={
                            ()=>{
                                window.location.reload();
                            }}
                        >
                            <Link to="/signup_as_vendor"onClick={toggleDrawer}>
                                Signup as vendor
                            </Link>
                        </li>
                    </ul>









{/* new */}




            </Router>




                   
                   
                


                <div className="ham ham-open">
                    <img src={ham} alt="ham" onClick={toggleDrawer} />
                </div>







            </div>

















   
    


    </>
  )
}

export default DrawerNew