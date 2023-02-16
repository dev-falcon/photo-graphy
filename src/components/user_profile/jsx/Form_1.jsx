import React from 'react'
import "../css/form_1.css"

import bride_img from "../Images/gm/Rectangle 141.png"

const Form_1 = ({page, setpage}) => {
  return (
    <>

        <div className="Form_1">
           
        




        



        {/* coding the main Form part */}



        <div className="personal_form">
            <div className="personal_form_left">
                <img src={bride_img} alt="" srcset="" />


            </div>

            <div className="personal_form_right">
                <p className="form_heading">

                    Grow your business with SHRI Photography 
                </p>

                <p className="form_heading_2nd">
                    Sign In access your Dashboard

                </p>


                <form action="#" className='main_personal_form'>

                    <input type="text" placeholder='Business Name' />


                    <input type="number" required placeholder='Phone no.' />

                    <input type="email"  required placeholder='Email Address' />

                    <input type="password" required placeholder='Password' />

                    <input type="text" required placeholder='Category' />

                    <input type="text" required placeholder='City' />

                    <div className="check_box_part">

                    

                    <input type="checkbox" name="" id=""  className='chkbx'/> <span>
                        Send me email with tips on how to find target that fits the needs <br />
                    </span>

                    <input type="checkbox" name="" id="" className='chkbx' /> <span>
                        Send me email with tips on how to find target that fits the needs
                    </span>

                    </div>

                    <div className="changing_btns">

                    

                    {/* <input type="submit"  onClick={()=>{setpage((currPage)=>currPage-1)}} value="Previous" className='Submit_form_button' /> */}

                    <input type="submit"  onClick={()=>{setpage((currPage)=>currPage+1)}} value="Continue"  className='Submit_form_button continue' />

                    </div>




                </form>
            </div>
        </div>







        </div>


    </>
  )
}

export default Form_1