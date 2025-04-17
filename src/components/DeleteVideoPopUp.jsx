import React from 'react'
import "../styles/delevideopopup.css"

const DeleteVideoPopup = ({isopen, onclose, children}) => {
    if(!isopen) return null
  return (
    <div className='Popup-overlay-delete'>
        <div className='pop-up-content-delete'>
            {children}
        </div>
    </div>
  )
}

export default DeleteVideoPopup