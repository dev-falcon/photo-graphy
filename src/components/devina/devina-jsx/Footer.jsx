import React from 'react'
import '../css/Footer.css'
const Footer = () => {
    return (
        <>
        <div className='footer-photo'>
            <div className='footer-devi'>
                <div className='now-book'>
                    NOW ACCEPTING BOOKING !
                </div>
                <div className='devi-category'>
                    <ul className='category-footer'>
                        <h1 className='heading-category'>Category</h1>
                        <li className='category'>Cinematography</li>
                        <li className='category'>Pre-Wedding Shots</li>
                        <li className='category'>Candid Photography</li>
                        <li className='category'>Wedding Photography</li>
                    </ul>
                    <ul className='devi-home'>
                        <h1 className='heading-home'>Home</h1>
                        <li className='home'>City</li>
                        <li className='home'>About</li>
                        <li className='home'>Category</li>
                        <li className='home'>Signup/Login</li>
                    </ul>
                    <ul className='devi-support'>
                        <h1 className='heading-supoort'>Support</h1>
                        <li className='support'>Contact us</li>
                        <li className='support'>Support request</li>
                    </ul>
                    <ul className='devi-social'>
                        <h1 className='heading-social'>Social</h1>
                        <li className='social'>Twitter</li>
                        <li className='social'>Facebook</li>
                        <li className='social'>Instagram</li>
                        <li className='social'>Whatsapp
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='shri-photo-terms'>
                    <div className='shri-photo'>
                        2023 SHRI photography
                    </div>
                    <div className='shri-terms'>
                        Terms & Conditions | Policy
                    </div>
                </div>
            <div className='footer-image'>
              <pic1/>
            </div>
        </>
    )

}

export default Footer