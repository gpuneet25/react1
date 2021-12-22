import React, {useState, useEffect} from 'react'
import './Signup.css'
import { Link, useHistory } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material'


const Signup = (props) => {

    const [email, setEmail] = useState()
    const history = useHistory()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [dob, setDob] = useState()
    const [contact, setContact] = useState()
    const [confirmPassword, setConfrimPassword] = useState()

    const handleFirstNameChange =(e) => {
        setFirstName(e.target.value)

    }
    localStorage.setItem("firstName", firstName)

    const handleLastNameChange =(e) => {
        setLastName(e.target.value)

    }

    const handleDobChange =(e) => {
        setDob(e.target.value)

    }

    const handleContactChange =(e) => {
        setContact(e.target.value)

    }

    const handleConfirmPasswordChange =(e) => {
        setConfrimPassword(e.target.value)

    }

    const handleEmailChange =(e) => {
        setEmail(e.target.value)

    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const [password, setPassword] = useState()
    const handlePasswordChange = (e)=> {
        setPassword(e.target.value)
    }
    
    const handleClick = () => {
        if (!email || !password || !firstName || !lastName || !dob || !contact || !confirmPassword) {
            return console.log("Please provide email and password")
        }

        if (password !== confirmPassword) {
            return console.log('password must be same')
        }

        if (!validateEmail(email)) {
            return console.log("Please provide correct email")
        }

        history.push("/signedup")
    }
    
    return (
        <>
        <div className="signuppage">
            <div className="signuppage-card">
                <div className="signuppage-card-left">
                     <h5><Link to="/"> Go Back! </Link></h5>
                    <img src="https://i.pinimg.com/originals/25/42/34/254234eecf48094f093fc9bd6ef20b2a.png" id="img3" />
                </div>
                <div className="signuppage-card-right">
                        <div className="signuppage-card-right-box">
                            <div className="signuppage-card-right-box-text">
                            <div className="signuppage-card-right-box-text-header">
                                   <h2> Register Here! </h2>
                            </div>
                            <div className="signuppage-card-right-box-text-element">
                            <Stack spacing={2} direction="row">
                                <h4>Already User?</h4>
                                <Link to="/Signin" ><Button variant="text" >Login here</Button> </Link>
                            </Stack>
                            </div>
                            </div>
                            
                            <div className="signuppage-card-right-box-input">
                                <div className="signuppage-card-right-box-input-data">
                                    <div className='flex'>
                                        <TextField id="outlined-basic" onChange={handleFirstNameChange} className="input-text" label="First Name" variant="outlined" />
                                        <TextField id="outlined-basic"  onChange={handleLastNameChange} className="input-text" label="Last Name" variant="outlined" />
                                    </div>
                                    <div className="signuppage-card-right-box-input-data2">
                                        <TextField required type="number" id="outlined-basic" onChange={handleDobChange} className="input-text"  label="DOB" variant="outlined" />
                                        <TextField id="outlined-basic" onChange={handleEmailChange} className="input-text" type="email"  label="Email" variant="outlined" />
                                        <TextField type="number" id="outlined-basic" onChange={handleContactChange} className="input-text"  label="Contact No" variant="outlined" />
                                        <TextField type="password" id="outlined-basic" onChange={handlePasswordChange} className="input-text"  label="Password" variant="outlined" />
                                        <TextField required type="password" id="outlined-basic" onChange={handleConfirmPasswordChange} className="input-text"  label="Confirm Password" variant="outlined" />
                                    </div>                                
                                </div>
                            </div>
                            <div className="btn1"> 
                            <Stack spacing={2} direction="row">
                            <Button onClick={handleClick} variant="contained">Register</Button>
                            </Stack>
                            </div>
                        </div>
                </div>
            </div>   
        </div>
        </>
    )
}

export default Signup
