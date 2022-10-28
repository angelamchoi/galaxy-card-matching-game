import './App.css';
import './index.css';
import {useState, useEffect} from "react";

//components
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/baby-yoda.webp", matched: false},
  {"src": "/img/among-us.webp", matched: false},
  {"src": "/img/cupcake-cat.jpg", matched: false},
  {"src": "/img/donut-space.jpg", matched: false},
  {"src": "/img/narwhal-gif.gif", matched: false},
  {"src": "/img/nyan-cat-space.png", matched: false},
  {"src": "/img/nyan-pikachu.jpg", matched: false},
  {"src": "/img/pizza-gif.gif", matched: false},
  {"src": "/img/snorlax-space.png", matched: false},
  {"src": "/img/space-cat-burger.jpg", matched: false},
  {"src": "/img/space-cat-pizza-taco.jpg", matched: false},
  {"src": "/img/spacecat-gif.gif", matched: false},
]

function App() {
  // STATES
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages] // creates double cards
    .sort(() => Math.random() - 0.5)
    .map((card) =>({...card, id: Math.random()})) // make a new array for sorted cards & create ID for cards

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // if choiceOne is null then setChoiceOne
    // if choiceOne is true then update setChoiceTwo
  }

  //compare two cards
  useEffect(()=> {
    // do we have a value and if two cards are selected?
    if (choiceOne && choiceTwo) {
      if(choiceOne.src === choiceTwo.src){
        console.log('yay!')
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
          } else {
            return card;
          }
        })
      })
        resetTurn()
      } else {
        console.log('no match :(')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  // reset choice & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div>
      <h1>Space Matching Card Game</h1>
      <button onClick={shuffleCards}> Start Game</button>

    <div className="card-grid">
      {cards.map(card => (
        <SingleCard 
          key={card.id} 
          card={card}
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched} //3 scenarios in which a card should be flipped
        />
      ))}
    </div>
    </div>
  );
}

export default App;
