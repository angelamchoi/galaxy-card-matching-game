import './App.css';
import './index.css';
import {useState} from "react";

//components
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/baby-yoda.webp"},
  {"src": "/img/among-us.webp"},
  {"src": "/img/cupcake-cat.jpg"},
  {"src": "/img/donut-space.jpg"},
  {"src": "/img/narwhal-gif.gif"},
  {"src": "/img/nyan-cat-space.png"},
  {"src": "/img/nyan-pikachu.jpg"},
  {"src": "/img/pizza-gif.gif"},
  {"src": "/img/snorlax-space.png"},
  {"src": "/img/space-cat-burger.jpg"},
  {"src": "/img/space-cat-pizza-taco.jpg"},
  {"src": "/img/spacecat-gif.gif"},
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
  // console.log(cards,turns)

  //handle choice
  const handleChoice = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // if choiceOne is null then setChoiceOne
    // if choiceOne is true then update setChoiceTwo
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
        />
      ))}
    </div>
    </div>
  );
}

export default App;
