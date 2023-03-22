import { useGoogleLogin } from '@react-oauth/google';
import React from 'react'

import "../css/Auth.css";
import { FaUserFriends } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { useFormik } from "formik";
// import { signUpSchema } from "./Schemas/Index";
import * as Yup from "yup";
import { Link } from 'react-router-dom';


import GoogleIcon from '@mui/icons-material/Google';



import axios from 'axios';






const initialValues = {
 
  email: "",
  password: "",
 
};

const signUpSchema = Yup.object({
 
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your passwod"),
  
});

const Login = () => {


   

    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })

                console.log(res.data)
            } catch (err) {
                console.log(err)

            }

        }
    });  




    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "  file:Signup.jsx ~ line 24 ~ Signup ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log("  file:Signup.jsx ~ line 30 ~ Signup ~ errors", errors);
 
  return (
    <>


<div className="form_container">
      <div className="left"></div>
      <div className="login_container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          

        

          <div className="input-block">
            <div className="envelope">
              <BsEnvelope
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="EMAIL"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input><br/>
              <div>
              
            </div>
            </div>
            {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
          </div>
          <div className="input-block">
            <div className="envelope">
              <AiFillLock
                style={{
                  display: "flex",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="PASSWORD"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input><br/>
              <div>
             
            </div>
            </div>
            {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
          </div>
            
          
          <button type="submit" className="login_btn">
            SIGN UP{" "}
            <AiOutlineArrowRight
              style={{
                marginLeft: "20px",
                justifyContent: "right",
                alignItems: "right",
              }}
            />
          </button>
        </form>
        <p className="signin_info">
          Don't have an account? <Link to='/signup'>SignUp</Link>
        </p>
      </div>



      <div className="login-with-google">


              <p>
                Or login with 
              </p>

   

     
<button onClick={() => login()}>

<GoogleIcon style={{
    color:'#a61d46de' ,marginRight:'5px'
}} />
  Sign in with Google 
</button>


      </div>
      </div>

      
    





    </>
  )
}

export default Login