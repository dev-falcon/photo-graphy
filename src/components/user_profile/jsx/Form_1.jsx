import React, { useState } from 'react'

import "../css/form_1.css"


import { useFormik} from 'formik'
import * as Yup from 'yup';







import bride_img from "../Images/gm/Rectangle 141.png"





// for category


const Form_1 = ({ page, setpage }) => {


    const signUpSchema = Yup.object({

        businessName: Yup.string().min(2).max(30).required("Please enter your Business Name"),

        number:Yup.number().min(10).required("please enter correct number"),


        email: Yup.string().email().required("Please enter your email"),

        password: Yup.string().min(6).required("Please enter your password"),

        cnfmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
      });

    const initialValues = {
        businessName: "",
        number:"",
        email: "",
        password: "",
        cnfmPassword: "",
      };

   const {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues,
        validationSchema: signUpSchema,
       
        onSubmit:(values, Action)=>{
            console.log(" Form- 1 values" + values);
            Action.resetForm();
        }
    });

 
   
    
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


                        <form onSubmit={handleSubmit}
                       
                          className='main_personal_form'>

                            <input type="text" placeholder='Business Name' name='businessName' autoCorrect='off'

                            value={values.businessName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            />

                            {touched.businessName && errors.businessName? 
                            (
                                <p className='form-error'>
                                    {errors.businessName}
                                </p>
                            ):null
                            }


                            <input type="number" required placeholder='Phone no' name='number'   autoComplete='off'
                            
                            onChange={handleChange}
                            values={values.number}
                            onBlur={handleBlur}
                            />

                            {
                                errors.number && touched.number?(
                                    <p className='form-error'>
                                    {errors.number}

                                    </p>
                                ) :null
                            }

                             

                            <input type="email" required autoComplete='off' name='email' placeholder='Email' 
                             onChange={handleChange}
                            values={values.email}
                            onBlur={handleBlur}
                            />

                            {
                                errors.email && touched.email?(
                                    <p className='form-error'>
                                    {errors.email}

                                    </p>
                                ) :null
                            }

                           
                             

                
               

                            <input type="password" required autoComplete='off' name='password'  placeholder='Password'
                              onChange={handleChange}
                            values={values.password}
                            onBlur={handleBlur}
                            />

                            {
                                errors.password && touched.password?(
                                    <p className='form-error'>
                                    {errors.password}

                                    </p>
                                ) :null
                            }

                           

                            <input type="password" required autoComplete='off' name='cnfmPassword' placeholder='Confirm Password'
                           
                           onChange={handleChange}
                            values={values.cnfmPassword}
                            onBlur={handleBlur}
                            />

                            {
                                errors.cnfmPassword && touched.cnfmPassword?(
                                    <p className='form-error'>
                                    {errors.cnfmPassword}

                                    </p>
                                ) :null
                            }

                           




                            {/* category section */}











                           











                          

                            

                            <div className="check_box_part">



                                <input type="checkbox" name="" id="" className='chkbx' /> <span>
                                    Send me email with tips on how to find target that fits the needs <br />
                                </span>

                              

                            </div>

                            <div className="changing_btns">



                                

                                <input type="submit"
                                onClick={()=>{ setpage((currPage)=>currPage+1)}}
                                 value="Continue" className='Submit_form_button continue' />

                            </div>




                        </form>
                    </div>
                </div>







            </div>


        </>
    )
}

export default Form_1