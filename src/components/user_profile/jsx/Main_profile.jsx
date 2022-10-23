import React from 'react'
import "../css/Main_profile.css"
import Profile_imgs from "./Profile_imgs"
import profile_img from "../Images/gm/Ellipse 15.png"
// import 'font-awesome/css/font-awesome.min.css';

const Main_profile = () => {
  return (
    <>

        <div className="profile_container">
            <div className="profile_container_left">

            <div className="left_heading">
                <h4>
                    I will do beautiful wedding photography professionally
                </h4>
            </div>

            <div className="left_title">
                <img src={profile_img} alt="profile_img" />
                <h4>Best Seller</h4>
               <div className="stars">
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <span>(4.5)</span>
                <span>20 Reviews</span>
               </div>

               

            </div>

            <div className="slider_imgs">

            {/* <Profile_imgs /> */}
            </div>



            </div>
            
            <div className="profile_container_right">

            <div className="pricing">
                <div className="pricing_top">
                    <div className="pricing_top_heading head_one active_head">
                        Basic
                    </div>
                    <div className="pricing_top_heading head_two">Standard</div>
                    <div className="pricing_top_heading head_three">Premium</div>
                </div>

                <div className="main_part_pricing">
                   <div className="price">

                   <span >Basic</span>
                   <span>Rs 2,515</span>

                   </div>
                   <div className="price_text">
                    <p>
                        1-80 photos will edit using Adobe tools
                    </p>
                   </div>

                   <div className="price_delivery">
                   <span >2 days delivery</span>
                   <span>1 Revison</span>

                   </div>

                   <ul className="checkLists">
                    <li className="checks">Traditional Photo</li>
                    <li className="checks">Traditional Video</li>
                    <li className="checks">Candid Photography</li>
                    <li className="checks">Wedding Video Invitation</li>
                    <li className="checks">Full HD Complete</li>
                   </ul>

                   <div className="next_btns">
                    <button className='Send_Message'>
                            Send Message
                    </button>

                    <button className='View_Contact'>
                            View Contact
                    </button>
                   </div>
                </div>
            </div>

            </div>



        </div>



    </>
  )
}

export default Main_profile