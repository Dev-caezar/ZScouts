import React from 'react'
import "../styles/popup.css"

const Popup = ({isopen, onclose, children}) => {
    if(!isopen) return null
  return (
    <div className='Popup-overlay'>
        <div className='pop-up-content'>
            {children}
        </div>
    </div>
  )
}

export default Popup