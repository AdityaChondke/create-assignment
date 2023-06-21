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
            <div className='transaction-title'>Movie Ticket</div>
            <div className='transaction-discription'>6 hours ago</div>
        </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/>  725</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/subscription.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Subscription - Medium</div>
            <div className='transaction-discription'>Yesterday</div>
        </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/>  325</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/credit-card.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Credit card payment</div>
            <div className='transaction-discription'>2 days ago</div>
        </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 14,983</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/delivery.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Food delivery</div>
            <div className='transaction-discription'>Last week</div>
        </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 459</div>
        </div>
        <div className='transaction-entry'>
        <div className='transaction-image' > <img src={`./images/cart.svg`} alt="Ticket" /></div>
        <div className='transaction-details'>
            <div className='transaction-title'>Amazon purchase</div>
            <div className='transaction-discription'>Last week</div>
        </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 12,209</div>
        </div>
        <div className='transaction-entry'>
            <div className='transaction-image'><img src={`./images/delivery.svg`} alt="Ticket" /></div>
         <div className='transaction-details'>
            <div className='transaction-title'>Food delivery </div>
            <div className='transaction-discription'>4th January 2021</div>
         </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 1,245</div>
        </div>
        <div className='transaction-entry'>
            <div className='transaction-image'><img src={`./images/subscription.svg`} alt="Ticket" /></div>
         <div className='transaction-details'>
            <div className='transaction-title'>Subscription - Medium</div>
            <div className='transaction-discription'>28th December 2020</div>
         </div>
        <div className='transaction-amount'><img src="http://i.stack.imgur.com/nGbfO.png" width="10" height="12"/> 325</div>
        </div>
    </div>
    </div>
  )
}
