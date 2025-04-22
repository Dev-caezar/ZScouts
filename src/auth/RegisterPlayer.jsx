import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../styles/register.css"
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Flex, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { setPlayerDetails} from '../global/Player';

const RegisterPlayer = () => {
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handlePassword =()=>{
    setShowPass((prev)=> !prev)
  }
  const handleLogin =()=>{
    navigate("/login_option")
  }
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });
  
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: '',
  });
  
  const [isDisabled, setIsDisabled] = useState(true);
  const passwordRegex = /^[A-Z](?=.*[\W_]).{5,}$/;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleChange = (field, value) => {
    let error = '';
  
    switch (field) {
      case 'fullname':
        if (!value.trim()) error = 'Full name is required';
        break;
      case 'email':
        if (!value.trim()) error = 'Please tenter your email';
        else if (!validateEmail(value)) error = 'please enter a valid email address';
        break;
        case 'password':
  if (!value) {
    error = 'Please enter your password';
  } else if (!/^[A-Z]/.test(value)) {
    error = 'Password must start with an uppercase letter';
  } else if (!/[\W_]/.test(value)) {
    error = 'Password must contain at least one special character';
  } else if (value.length < 6) {
    error = 'Password must be at least 6 characters long';
  }

          break;        
      case 'confirmPassword':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
        break;
      case 'termsAgreed':
        if (!value) error = 'You must agree to continue';
        break;
      default:
        break;
    }
  
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  
    setErrors(prev => ({
      ...prev,
      [field]: error,
    }));
  };
  
  useEffect(() => {
    const allFilled = Object.values(formData).every(val =>
      typeof val === 'boolean' ? val : val.trim() !== ''
    );
    const allValid = Object.values(errors).every(err => err === '');
  
    setIsDisabled(!(allFilled && allValid));
  }, [formData, errors]);
  

   const BASE_URL = "https://zscouts.onrender.com"
   
   const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    const { termsAgreed, ...data} = formData
    try {
      const res = await axios.post(`${BASE_URL}/api/players/register`, data)
      dispatch(setPlayerDetails(res.data.data))
      toast.success('Sign up successful. please check your Email to verify')
      setLoading(false)
      setTimeout(() => {
        navigate('/email_page')
      }, 2000);
      setIsDisabled(false)
      
    } catch (error) {
      console.log(error)

      if (error.response) {
        const message = error.response.data?.message || 'An error occurred during registration.';
        toast.error(message);
      } else if (error.request) {
        toast.error('Oops Network error. Please check your internet connection.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
      
    } finally {
      setLoading(false);
    }
   }

  const loadingIcon = <LoadingOutlined style={{ fontSize: 25, color: "white" }} spin />
  return (
    <div className='player_register_body'>
       <div className="player_register_card">
        <div className="player_form_head">
          <h2>Create An Account</h2>
          <p>Create your profile and connect with scouts worldwide.</p>
        </div>
        <form className='player_form_body' action=""onSubmit={handleSubmit} >
        <div class="p_floating-label">
            <input type="text" id="fullName" placeholder=" " required  className={`player_form_input ${errors.fullName ? 'input-error' : ''}`} value={formData.fullname} onChange={(e) => handleChange('fullname', e.target.value)} />
            <label for="fullName" className='player_formLabel'>Enter Full Name</label>
            {errors.fullname && <small className='error_msg'>{errors.fullname}</small>}
        </div>
        <div class="p_floating-label">
            <input type="email" id="email" placeholder=" " required className={`player_form_input ${errors.email ? 'input-error' : ''}`}  value={formData.email} onChange={(e) => handleChange('email', e.target.value)}/>
            <label for="email" className='player_formLabel'>Email</label>
            {errors.email && <small className='error_msg'>{errors.email}</small>}
        </div>
        <div class="p_floating-label">
            <input type={!showPass? "password" : "text"} id="password" placeholder=" " required className={`player_form_input ${errors.password ? 'input-error' : ''}`} value={formData.password}  onChange={(e) => handleChange('password', e.target.value)} />
            <label for="password" className='player_formLabel'>Password </label>
           {showPass? <FaRegEyeSlash style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/> :
            <FaRegEye style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/>}
            {errors.password && <small className='error_msg'>{errors.password}</small>}
        </div>
        <div class="p_floating-label">
            <input type={!showPass? "password" : "text"} id="comfirmPassword" placeholder=" " required  className={`player_form_input ${errors.confirmPassword ? 'input-error' : ''}`}  value={formData.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} />
            <label for="password" className='player_formLabel'>Confirm Password </label>
           {showPass? <FaRegEyeSlash style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/> :
            <FaRegEye style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/>}
             {errors.confirmPassword && <small className='error_msg'>{errors.confirmPassword}</small>}
            <div className="terms_card">
            <input type="checkbox" name="" id="" className='player_checkbox' checked={formData.termsAgreed} onChange={(e) => handleChange('termsAgreed', e.target.checked)}/>
            <p>I agree to <span>Terms & Conditions</span></p>
          </div>
        </div>
        <button  type="submit" style={{cursor: isDisabled || loading ? 'not-allowed' : 'pointer', backgroundColor: isDisabled ? "#0c8f006e" : "#0C8F00"}}  disabled={isDisabled || loading } className='player_register_button'> {loading ?
        <Flex align="center" justify="center" style={{ height: "100%" }}>
          <Spin indicator={loadingIcon} />
      </Flex>
         : 'Create Account'}</button>
        </form>
        <div className="form_footer">
        <h4>Already have an account? <span onClick={handleLogin}>login here.</span></h4>
        <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
       </div>
    </div>
  )
}

export default RegisterPlayer
