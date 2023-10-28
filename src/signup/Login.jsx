import React from 'react'
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBNavbarLink
} from 'mdb-react-ui-kit';
  import { FaFacebook,FaGoogle,FaGithub,FaTwitter } from "react-icons/fa";
  import './Icons.css'
import { Link } from 'react-router-dom';
 
function Login() {
  return (
    <div>
        <form className='cntr'>
        <p style={{textAlign:'center'}}>Login with:</p>
            <div className='icon'>
            <MDBNavbarLink active aria-current='page' href='https://www.facebook.com/' style={{color:'blue'}}><FaFacebook className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.google.com/' style={{color:"red"}}><FaGoogle className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.twitter.com/' style={{color:'dodgerblue'}} ><FaTwitter className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.github.com/' style={{color:'black'}}><FaGithub className='size'/></MDBNavbarLink>
            </div>
            

            <p className='text-center'>or:</p>

            <MDBInput className='mb-3' type='email' id='form7Example1' label='Email address' /><br />
            <MDBInput className='mb-3' type='password' id='form7Example2' label='Password' /><br/>

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form7Example3' label='Remember me'  />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>

            <div className='text-center'>
              <p>
                Not a member? <a href='#!'><Link to='/signup'>Register</Link></a>
              </p>
            </div>
          </form>
    </div>
  )
}

export default Login