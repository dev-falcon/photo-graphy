import React from 'react'
import "../css/Main_profile.css"

const Offers_standard = () => {
  return (
   <>


<div className="main_part_pricing">
                   <div className="price">

                   <span >Standard</span>
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





   </>
  )
}

export default Offers_standard