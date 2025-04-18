import React, { useEffect, useState } from 'react'
import "../styles/login.css"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { setPlayer } from '../global/Player'
import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'


const LoginPlayer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const player = useSelector((state) => state.player.player)
  console.log(player)
  const [showPass, setShowPass] = useState(false)
   const [loading, setLoading] = useState(false);
        const handlePassword =()=>{
          setShowPass((prev)=> !prev)
        }

  const handleFrgotPass =()=>{
        navigate("/forgot_password")
  }
  const handleSignup =()=>{
    navigate("/signup_option")
}

const handleGoogle = () => {
  console.log("Google sign-in clicked");

  navigate("/email_notify")
}

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailErr, setEmailErr] = useState('')
const [passwordErr, setPasswordErr] = useState('')
const [isDisabled, setIsDisabled] = useState(true)

const validateEmail = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(input)
}

const handleChangeEmail = (e) => {
  const value = e.target.value
  setEmail(value)
  if (!value) {
    setEmailErr('Please enter your email address')
  } else if (!validateEmail(value)) {
    setEmailErr('Please enter a valid email address')
  } else {
    setEmailErr('')
  }
}

const handleChangePassword = (e) => {
  const value = e.target.value
  setPassword(value)
  if (!value) {
    setPasswordErr('Please enter your password')
  } else {
    setPasswordErr('')
  }
}

useEffect(() => {
  if (email && password && !emailErr && !passwordErr) {
    setIsDisabled(false)
  } else {
    setIsDisabled(true)
  }
}, [email, password, emailErr, passwordErr])


 const BASE_URL = "https://zscouts.onrender.com"

 const loginPlayer = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const res = await axios.post(`${BASE_URL}/api/players/login`, { email, password });
    dispatch(setPlayer(res.data))
    console.log(res);
    toast.success('Login successful');
    setLoading(false)
    setTimeout(() => {
      navigate(`/player_profile/${res.data.data.id}`);
      setIsDisabled(false)
    }, 2000);
  } catch (error) {
    console.log(error);
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || "Login failed";
  
      if (status === 401 || status === 400) {
        toast.error("Invalid email or password");
      } else {
        toast.error(message);
      }
    } else {
      toast.error("Oops! Network error. Please try again.");
    }
    setIsDisabled(false)
    setLoading(false)
  }
  }
  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />

  return (
     <div className='player_login_body'>
            <div className="player_login_card">
                    <div className="player_login_head">
                      <h2>Welcome Back</h2>
                      <p>We are so delighted to have you back.</p>
                    </div>
                    <form className='login_form_body' action=""onSubmit={loginPlayer}  >
                      <div class="playerlogin_floating-label">
                        <input type="email" id="email" placeholder=" " required  className='plogin_input'  value={email} onChange={handleChangeEmail} style={{ borderColor: emailErr ? 'red' : 'gray' }}/>
                        <label for="email" className='plogin_Label'>Email</label>
                        <small style={{ paddingInline: 10, color: 'red' }}>{emailErr}</small>
                    </div>
                    <div class="playerlogin_floating-label">
                        <input type={showPass? "password" : "text"} id="password" placeholder=" " required  className='plogin_input' value={password} onChange={handleChangePassword} style={{ borderColor: passwordErr ? 'red' : 'gray' }}/>
                        <label for="password" className='plogin_Label'>Password </label>
                       {!showPass? <FaRegEyeSlash className='eye' onClick={handlePassword}/> :
                        <FaRegEye className='eye' onClick={handlePassword}/>}
                    <div className="player_forgot_password">
                      <p onClick={handleFrgotPass}>Forgot password?</p>
                    </div>
                    <small style={{ color: 'red' }}>{passwordErr}</small>
                    </div>
                    <button type="submit" disabled={isDisabled} style={{cursor: isDisabled || loading ?  'not-allowed' : 'pointer', backgroundColor: isDisabled ? "#0c8f006e" : "#0C8F00"   }} className='player_login_button'>{loading ? 
                    <Flex align="center" justify="center" style={{ height: "100%" }}>
                    <Spin indicator={loadingIcon} />
                  </Flex>
                     : "Login"}</button>
                    </form>
                    <div className="second_option">
                      <div className="line"></div>
                      <h4>OR</h4>
                      <div className="line"></div>
                    </div>
                    <button className='google_button'>
                      <FcGoogle/>
                      <p>Sign up with Google</p>
                    </button>
                    <div className="form_footer">
                    <h4>Dont have an account? <span onClick={handleSignup}>signup here.</span></h4>
                    <h4>© 2025 ZScouts. All rights reserved</h4>
                    </div>
                   </div>
          </div>
  )
}

export default LoginPlayer
