import React from 'react'
import "../css/form_1.css"

import bride_img from "../Images/gm/Rectangle 141.png"

const Form_2 = ({page, setpage}) => {
  return (
    <>

        <div className="Form_1">
           
        

        {/* coding the mid part */}



        



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
                   Category Photography

                </p>


                <form action="#" className='main_personal_form'>

                    <input type="text" placeholder='Sub Categories-1' />


                    <input type="number" placeholder='Categories-2' />

                    <input type="email" placeholder='Categories-3' />

                    <textarea name="" id="text_area" cols="30" rows="5" placeholder='Description...'></textarea>

                   
                   

                    <div className="check_box_part">

                    

                    </div>

                    <div className="changing_btns">

                    

                    <input type="submit" onClick={()=>{setpage((currPage)=>currPage-1)}} value="Previous" className='Submit_form_button' />

                    <input type="submit" onClick={()=>{setpage((currPage)=>currPage+1)}} value="Continue"  className='Submit_form_button continue' />

                    </div>




                </form>
            </div>
        </div>







        </div>


    </>
  )
}

export default Form_2