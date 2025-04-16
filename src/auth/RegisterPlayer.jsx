import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "../styles/register.css"
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const RegisterPlayer = () => {
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate();
  const handlePassword =()=>{
    setShowPass((prev)=> !prev)
  }
  const handleLogin =()=>{
    navigate("/login_option")
  }
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false,
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAgreed: '',
  });
  
  const [isDisabled, setIsDisabled] = useState(true);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleChange = (field, value) => {
    let error = '';
  
    switch (field) {
      case 'fullName':
        if (!value.trim()) error = 'Full name is required';
        break;
      case 'email':
        if (!value.trim()) error = 'Please tenter your email';
        else if (!validateEmail(value)) error = 'please enter a valid email address';
        break;
      case 'password':
        if (!value) error = 'Please enter your password';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created! You can now send this data to your backend.");
  };
  return (
    <div className='player_register_body'>
       <div className="player_register_card">
        <div className="player_form_head">
          <h2>Create An Account</h2>
          <p>Create your profile and connect with scouts worldwide.</p>
        </div>
        <form className='player_form_body' action=""onSubmit={handleSubmit} >
        <div class="p_floating-label">
            <input type="text" id="fullName" placeholder=" " required  className={`player_form_input ${errors.fullName ? 'input-error' : ''}`} value={formData.fullName} onChange={(e) => handleChange('fullName', e.target.value)} />
            <label for="fullName" className='player_formLabel'>Enter Full Name</label>
            {errors.fullName && <small className='error_msg'>{errors.fullName}</small>}
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
            <input type={!showPass? "password" : "text"} id="password" placeholder=" " required  className={`player_form_input ${errors.confirmPassword ? 'input-error' : ''}`}  value={formData.confirmPassword} onChange={(e) => handleChange('confirmPassword', e.target.value)} />
            <label for="password" className='player_formLabel'>Confirm Password </label>
           {showPass? <FaRegEyeSlash style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/> :
            <FaRegEye style={{cursor: "pointer"}} className='eye' onClick={handlePassword}/>}
             {errors.confirmPassword && <small className='error_msg'>{errors.confirmPassword}</small>}
            <div className="terms_card">
            <input type="checkbox" name="" id="" className='player_checkbox' checked={formData.termsAgreed} onChange={(e) => handleChange('termsAgreed', e.target.checked)}/>
            <p>I agree to <span>Terms & Conditions</span></p>
          </div>
        </div>
        <button  type="submit" style={{cursor: isDisabled ? 'not-allowed' : 'pointer',backgroundColor: isDisabled ? '#ccc' : '#0C8F00',color: isDisabled ? '#666' : '#fff'}}  disabled={isDisabled} className='player_register_button'>Create Account</button>
        </form>
        <div className="second_option">
          <div className="line"></div>
          <h4>OR</h4>
          <div className="line"></div>
        </div>
        <button style={{cursor: "pointer"}} className='google_button'>
          <FcGoogle/>
          <p>Sign up with Google</p>
        </button>
        <div className="form_footer">
        <h4>Already have an account? <span onClick={handleLogin}>login here.</span></h4>
        <h4>© 2025 ZScouts. All rights reserved</h4>
        </div>
       </div>
    </div>
  )
}

export default RegisterPlayer
