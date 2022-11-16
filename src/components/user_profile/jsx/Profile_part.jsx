import React from 'react'
import "../css/Profile_part.css"
import profile_img from "../Images/gm/Ellipse 15.png"

const Profile_part = () => {
    return (
        <>


            <div className="main_profile">

                <div className="profile_left">


                    <div className="profile_text">
                        <h3 className='profile_heading'>Photographer</h3>




                        <div className="profile_catg">
                            <ul className='profile_ul'>
                                <li>Candid Photography</li>
                                <li>Wedding Photography</li>
                                <li>Pre- Wedding Photography</li>
                            </ul>
                        </div>

                    </div>


                    <div className="profile_rating">
                        <h4>Robert kiosaki</h4>
                    </div>




                </div>





                <div className="profile_right">
                    <div className="profile_picture" >

                        <img src={profile_img} alt="profile_img" />

                    </div>
                </div>

            </div>


            <div className="down_banner">
                <ul className='ul_banner'>
                <li className="li_banner">location</li>
                <li className="li_banner">contact</li>
                <li className="li_banner">123 photos</li>
                <li className="li_banner">booklist</li>
                <li className="li_banner">Share</li>

                </ul>
            </div>





        </>
    )
}

export default Profile_part