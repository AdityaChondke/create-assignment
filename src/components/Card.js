import React, { useState } from 'react';
import './Card.css';
import Transactions from './Transactions';
import UserDetails from './UserDetails';

const Card = ({ index , handleClick, cardNumber}) => {
  return (
    <div
      id={`card-${index}`}
      className={`card card-${index}`}
      onClick={() => handleClick(index)}
    >
    <div className="card-icon"><img src={`./images/chip-icon-${index}.svg`}/></div>
      <div className='card-number'>{cardNumber}</div>
      <div className="card-type"><img src={`./images/chip-type-${index}.svg`}/></div>
    </div>
  );
};

const CardStack = () => {   
    const [cardSwiped, setCardSwiped] = useState([false,false,false,false]);
    const [showTransactions, setShowTransactions] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(false);

    const handleClick = (index) => {
        // document.getElementById(`rectangle`).style.transform = 'translateX(200px)';

        



        if(index === 3){
            return;
        }

        if(showTransactions && index === 2){
            setShowUserDetails(true);
            document.getElementById(`transactions`).style.transform = 'translateY(-900px)';
            document.getElementById(`transactions-list`).style.display = 'none';
            document.getElementById(`card-2`).style.transform = 'translateY(250px)';
            document.getElementById(`user-details`).style.transform = 'translateY(420px)';
        }

        if(!showTransactions && index === 2){
            setShowTransactions(true);
            document.getElementById(`transactions`).style.transform = 'translateY(-1200px)';
            document.getElementById(`transactions`).style.zIndex = 10;
            document.getElementById(`button`).style.transform = 'translateY(-200px)';
            document.getElementById(`button`).style.zIndex = 0;
            document.getElementById(`big-title`).style.transform = 'translateX(-200px)';
            document.getElementById(`big-title`).style.zIndex = -1;


            for(let i = index + 1; i < 4; i++){
                document.getElementById(`card-${i}`).style.transform = 'translateY(0px) rotateX(0deg) scale(0) translateZ(-100px)';
                document.getElementById(`card-${i}`).style.zIndex = -4 ;
            }
            for(let i = 0 ; i < index; i++){
                document.getElementById(`card-${i}`).style.transform = 'translateY(0px) rotateX(0deg) scale(0) translateZ(-400px)';
                document.getElementById(`card-${i}`).style.zIndex = -4 ;   
            } 
            
        }

        if(cardSwiped[index]) {

            if(index ===0) {
                document.getElementById(`rectangle-2`).style.transform = 'rotate(0deg) translateX(-50px)';
                document.getElementById(`rectangle-1`).style.transform = 'rotate(0deg)';
                document.getElementById(`polygon-2`).style.transform= 'translateX(100px) rotate(90deg)';
                document.getElementById(`polygon-1`).style.transform= 'translateX(-50px) rotate(-57deg)';
                
            }

            document.getElementById(`card-${index}`).style.transform = 'translateY(0px) rotateX(0deg)';
            document.getElementById(`card-${index}`).style.zIndex = -index ;
            setCardSwiped((prev) => {
                return prev.map((item, i) => {
                    if(i === index){
                        return false;
                    }else{
                        return item;
                    }
                })
            });
            for(let i = index + 1; i < 4; i++){
                const updatedTrasformZValue = (index - i) * 100;
                document.getElementById(`card-${i}`).style.transform = `translateZ(${updatedTrasformZValue}px)`;  
            }
            for(let i = 0 ; i < index; i++){
                const updatedTrasformZValue = (i - index) * 50;
                document.getElementById(`card-${i}`).style.transform = `translateY(300px) rotateX(45deg) translateZ(${updatedTrasformZValue}px)`;  
            }
        }else{
            if(index !== 2) {
            setCardSwiped((prev) => {
            return prev.map((item, i) => {
                if(i === index){
                    return true;
                }else{
                    return item;
                }
            })
        });
    
        if(index === 0) {
            document.getElementById(`rectangle-2`).style.transform = 'rotate(46deg) translateX(100px)';
            document.getElementById(`rectangle-1`).style.transform = 'rotate(-33deg)';
            
            document.getElementById(`polygon-2`).style.transform= 'translateX(230px) rotate(0deg)';
            
            document.getElementById(`polygon-1`).style.transform= 'translateX(10px)';
            

        }

        document.getElementById(`card-${index}`).style.transform = 'translateY(300px) rotateX(45deg)';

        for(let i = index + 1; i < 4; i++){
            const updatedTrasformZValue = (index + 1 - i) * 100;
            document.getElementById(`card-${i}`).style.transform = `translateZ(${updatedTrasformZValue}px)`;  
        }
        for(let i = 0 ; i < index; i++){
            const updatedTrasformZValue = (i - index) * 50;
            document.getElementById(`card-${i}`).style.transform = `translateY(300px) rotateX(45deg) translateZ(${updatedTrasformZValue}px)`;  
            document.getElementById(`card-${index}`).style.zIndex = index ;
        }
    }
} 
};

const showCards = () => {
    setShowTransactions(false);
    setShowUserDetails(false);
    document.getElementById(`card-3`).style.transform = `translateZ(-100px)`;  
    document.getElementById(`card-2`).style.transform = `translateY(0px) translateZ(0px)`;  
    document.getElementById(`transactions`).style.transform = 'translateY(-700px)';
    document.getElementById(`transactions`).style.zIndex = 0;
    document.getElementById(`card-0`).style.transform = `translateY(300px) rotateX(45deg) translateZ(-50px)`;  
    document.getElementById(`card-1`).style.transform = `translateY(300px) rotateX(45deg) translateZ(0px)`;  
    document.getElementById(`card-0`).style.zIndex = 0 ;
    document.getElementById(`card-1`).style.zIndex = 1 ;
    
};

const cardNumbers=['8123 6872 4193 1337','1952 7458 9151 5734','8714 1782 4237 1786','5183 1851 5913 0145']

  const cards = Array.from({ length: 4 }, (_, index) => <Card key={index} index={index} cardNumber={cardNumbers[index]}  handleClick={handleClick} />);
  return <>
 <div className='shapes'>
  <div className='shapes rectangle' id='rectangle-1' ><img src={`./images/rectangle-1.svg`}  style={{transform: 'skew(10deg, 10deg)'}}/></div>
  <div className='shapes rectangle-2' id='rectangle-2' ><img src={`./images/rectangle-2.svg`} style={{transform: 'skew(10deg, 10deg)'}}/></div>
  <div className='shapes polygon-2' id='polygon-2' ><img src={`./images/polygon-2.svg`} style={{width: '200px', height:'200px'}}/></div>
  <div className='shapes polygon-1' id='polygon-1' ><img src={`./images/polygon-1.svg`} style={{width: '260px', height:'260px'}}/></div>
  </div>
  <div className="button-container">
     <div className="button" id='button' onClick={showCards}><img src={`./images/arrow-left.svg`}/></div> 
    <div className='big-title' id='big-title'> Your Cards</div>
    <div className="button-text">VR</div>
  </div>
  <div style={{height:'700px'}}>
  
  <div className='user-details-root' id='user-details' >{showUserDetails &&  <UserDetails />}</div>
  <div className='card-stack'>{cards.reverse()}</div>
  <div className='transactions-root' id="transactions">{showTransactions &&  <Transactions />}</div>
  </div>
   
  </>;
};

export default CardStack;
