import './SingleCard.css';


const SingleCard=({card, handleChoice})=> {

  const handleClick = () => {
     //update state
     handleChoice(card)
  }
  return (
    <div className="card">
          <div>
            <img className="front" src={card.src} alt="card front" />
            <img 
              className="back" 
              src="/img/baby-yoda.webp" 
              alt="baby yoda" 
              onClick={handleClick}
              />
          </div>
        </div>
  )
}

export default SingleCard;
