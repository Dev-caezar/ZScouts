import React from 'react'
import "../styles/deactivatepopup.css"

const DeactivatePopup = ({isopen, onclose, children}) => {
    if(!isopen) return null
  return (
    <div className='Popup-overlay-deactivate'>
        <div className='pop-up-content-deactivate'>
            {children}
        </div>
    </div>
  )
}

export default DeactivatePopup