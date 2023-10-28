import React, {useState} from 'react'
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

  export default function Signup() {
    const [data,setdata]=useState({})

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setdata({...data,[name]:value})
    }
    console.log(data);

  return (
    <form className='cntr'>
            
          <p style={{textAlign:'center'}}>Sign up with:</p>
            <div className='icon'>
            <MDBNavbarLink active aria-current='page' href='https://www.facebook.com/' style={{color:'blue'}}><FaFacebook className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.google.com/' style={{color:"red"}}><FaGoogle className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.twitter.com/' style={{color:'dodgerblue'}} ><FaTwitter className='size'/></MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='https://www.github.com/' style={{color:'black'}}><FaGithub className='size'/></MDBNavbarLink>
            </div>
            

            <p className='text-center'>or:</p>


            <MDBInput className='mb-3' id='form8Example1'  label='Name'/><br />
            <MDBInput className='mb-3' id='form8Example2' label='Username'
             name='username' value={data.username} onChange={handleChange}/><br />
            <MDBInput className='mb-3' type='email' id='form8Example3'  
            label='Email address' name='email' value={data.email} onChange={handleChange}/><br />
            <MDBInput className='mb-3' type='password' id='form8Example4' label='Password'/><br />
            <MDBInput className='mb-3' type='password' id='form8Example5' label='Repeat Password' />

            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form8Example6'
              label='I have read and agree to the terms'
              defaultChecked
            />

            <MDBBtn type='submit' className='mb-4' block>
              Sign up
            </MDBBtn>
          </form>
  )
}
 
