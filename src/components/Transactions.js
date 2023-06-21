import React from 'react'
import './Transactions.css'

export default function Transactions() {
  return (
    <div className='transactions-container'>
    <div className='transactions-title'>Transactions</div>
    <div className='transactions' id='transactions-list'>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/ticket.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Entry 1 </div>
            <div className='transaction-discription'>Details about entry</div>
        </div>
        <div className='transaction-amount'>Amount</div>
        </div>
    </div>
    </div>
  )
}
