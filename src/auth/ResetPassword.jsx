import React, { useEffect, useState } from 'react'
import "../styles/resetPassword.css"
import { useNavigate } from 'react-router'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const ResetPassword = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const handlePassword = () => {
    setShowPass((prev) => !prev)
  }

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (field, value) => {
    let error = '';

    switch (field) {
      case 'password':
        if (!value) error = 'Please enter your password';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
        break;
      case 'confirmPassword':
        if (!value) error = 'Please confirm your password';
        else if (value !== formData.password) error = 'Passwords do not match';
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
    const allFilled = Object.values(formData).every(val => val.trim() !== '');
    const allValid = Object.values(errors).every(err => err === '');

    setIsDisabled(!(allFilled && allValid));
  }, [formData, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset successful!");
  };
    
  return (
   <div className='reset_password_body'>
     <div className="register_card">
       <div className="form_head">
         <h2>Create a New Password</h2>
         <p>Make it strong & secure. You got this!</p>
       </div>
       <form className='login_form_body' onSubmit={handleSubmit} >
         <div className="floating-label">
           <input 
             type={!showPass ? "password" : "text"} 
             id="password" 
             placeholder=" " 
             required 
             className={`form_input ${errors.password ? 'error-border' : ''}`} 
             value={formData.password} 
             onChange={(e) => handleChange('password', e.target.value)}  
           />
           <label htmlFor="password" className='formLabel'>New Password</label>
           {showPass ? 
             <FaRegEyeSlash style={{ cursor: "pointer" }} className='eye' onClick={handlePassword} /> :
             <FaRegEye style={{ cursor: "pointer" }} className='eye' onClick={handlePassword} />}
           {errors.password && <small className='error_msg'>{errors.password}</small>}
         </div>
         <div className="floating-label">
           <input 
             type={!showPass ? "password" : "text"} 
             id="confirmPassword" 
             placeholder=" " 
             required  
             className={`form_input ${errors.confirmPassword ? 'error-border' : ''}`} 
             value={formData.confirmPassword} 
             onChange={(e) => handleChange('confirmPassword', e.target.value)} 
           />
           <label htmlFor="confirmPassword" className='formLabel'>Confirm Password</label>
           {showPass ? 
             <FaRegEyeSlash style={{ cursor: "pointer" }} className='eye' onClick={handlePassword} /> :
             <FaRegEye style={{ cursor: "pointer" }} className='eye' onClick={handlePassword} />}
           {errors.confirmPassword && <small className='error_msg'>{errors.confirmPassword}</small>}
         </div>
         <button 
           type="submit"  
           style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', backgroundColor: isDisabled ? '#ccc' : '#0C8F00', color: isDisabled ? '#666' : '#fff' }}
           disabled={isDisabled} 
           className='register_button'
         >
           Create Password
         </button>
       </form>
     </div>
   </div>
  )
}

export default ResetPassword
