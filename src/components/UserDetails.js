import React from 'react'
import './UserDetails.css'

export default function UserDetails() {
  return (
    <div className='user-container'>
        <div className='user-details'>
            <div className='user-entry'>
                <div className='title'>Balance</div>
                <div className='data-value'> <img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 24,950</div>
            </div>
            <div className='user-entry'>
                <div className='title'>Expiry Date</div>
                <div className='data-value'>01/24</div>
            </div>
            <div className='user-entry'>
                <div className='title'>Cardholder</div>
                <div className='data-value'>Vinod Reddy</div>
            </div>
            <div className='user-entry'>
                <div className='title'>CVV</div>
                <div className='data-value'>984</div>
            </div>
        </div>
        <div className="line"></div>
        <div className='manage-card-container'>
            <div className='manage-card-text'> Manage Card</div>
            <div className='manage-card-button'> <img src={`./images/arrow-right.svg`} alt="Ticket" /></div>
        </div>
    </div>
  )
}
