import React from 'react'
import "../css/form_1.css"
import { useState } from "react"
import Form_1 from './Form_1';
import Form_2 from './Form_2';

const Vendor_form = () => {

    const [page, setpage] = useState(0);

    const FormTitle=["Personal Information ","Professional Information", "Profile Information", "Profile Information " ]


    const pageDisplay=()=>{
        if(page==0){
            return <Form_1 page={page} setpage={setpage}/>
        }
        else if(page==1){
            return <Form_2 page={page} setpage={setpage}/>
        }
    }






  return (
    <>

<div className="Form_1_upper_part">
                <ul className="upper_part_ul">
                    <li className="upper_part_li">
                        <span>1</span> Personal Information 
                    </li>
                    <li className="upper_part_li">
                    <span>2</span> Professional Information 
                    </li>
                    <li className="upper_part_li">
                    <span>3</span> Profile Information 
                    </li>
                    <li className="upper_part_li">
                    <span>4</span> Profile Information 
                    </li>
                </ul>
            </div>






            <div className="Form_1_mid">
            <p className="mid_p">
                {FormTitle[page]}
            </p>

            <p className="mid_desc">
                Tell us about yourself we'll provide you a platform where you can shine and show your skills
            </p>
        </div>




        {pageDisplay()}



       

    </>
  )
}

export default Vendor_form