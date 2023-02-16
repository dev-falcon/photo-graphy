import React from 'react'

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


import "../css/form_1.css"
import { useState } from "react"
import Form_1 from './Form_1';
import Form_2 from './Form_2';

import Form_3 from './Form_3';
import { Form_4 } from './Form_4';

const Vendor_form = () => {


    
const steps = [
    'Personal Information ',
    'Professional Information ',
    'Profile Information ',
    'Profile Information '
  ];

    const [page, setpage] = useState(0);

    const FormTitle=["Personal Information ","Professional Information", "Profile Information", "Profile Information " ]


    const pageDisplay=()=>{
        if(page==0){
            return <Form_1 page={page} setpage={setpage}/>
        }
        else if(page==1){
            return <Form_2 page={page} setpage={setpage}/>
        }
        else if(page==2){
          return <Form_3 page={page} setpage={setpage}/>

      }
      else if(page==3){
        return <Form_4 page={page} setpage={setpage}/>

    }
    }






  return (
    <>

<div className="Form_1_upper_part">
                






                <Box sx={{ width: '100%' }} my={4}>
      <Stepper activeStep={page} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel style={{fontSize: "22px"}} >{label  }</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>







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