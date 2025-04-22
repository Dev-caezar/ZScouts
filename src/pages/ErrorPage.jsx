import React from 'react'
import "../styles/errorpage.css"
import { useNavigate } from 'react-router'

const ErrorPage = () => {

  const nav = useNavigate()

  return (
    <div className='ErrorPage-overlay'>
       <div className='Error-div-top'>
        <h1>404</h1>
       </div>
       <div className='Error-div-bottom'>
        <div className='Error-bottom-inner-1'><h1>Page not found</h1>
        <p>The link may be broken or the page has been moved.</p>
        <p>Let’s get you back where you belong.</p></div>
        <div className='Error-bottom-Inner-2'>
          <button onClick={()=>nav('/')} className='error-btn-back'>Go to Home</button>
        </div>
       </div>
    </div>
  )
}

export default ErrorPage