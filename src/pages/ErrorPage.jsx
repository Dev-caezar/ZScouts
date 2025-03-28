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
        <div className='Error-bottom-inner-1'>
          <h1>Oops!</h1>
          <h1>Sorry, the page not found...</h1>
        </div>
        <div className='Error-bottom-Inner-2'>
          <button onClick={()=>nav('/')} className='error-btn-back'>Back To Home</button>
        </div>
       </div>
    </div>
  )
}

export default ErrorPage