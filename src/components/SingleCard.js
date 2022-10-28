import './SingleCard.css';


const SingleCard=({card, handleChoice, flipped})=> {

  const handleClick = () => {
     //update state
     handleChoice(card)
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/baby-yoda.webp" onClick={handleClick} alt="baby yoda" />
      </div>
    </div>
  )
}



export default SingleCard;


// apply flipped class 
// ---> 1. create div class 
// ---> 2. style css